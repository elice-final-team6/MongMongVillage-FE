import React, { useRef, useState, useEffect, useCallback } from 'react';
import { usePatchBoard } from '../../hooks';
import { ROUTE } from '../../routes/Routes';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import {
  Container,
  CategorySelector,
  Input,
  TextArea,
  ImageUploadContainer,
  ImageUploadText,
  Title,
  PostBTN,
  InputImgButton,
  Text,
  InputImg,
} from './EditCommunityPost.styles';

const EditCommunityPost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const titleInputRef = useRef();
  const contentInputRef = useRef();
  const categorySelectRef = useRef();
  const imageInputRef = useRef();

  // 해당 게시글의 id
  const { id } = useParams();
  const { state } = location;
  const post = state ? state.post : {};

  const [selectedPost, setSelectedPost] = useState(post.board);
  console.log('선택 게시글 : ', selectedPost);

  // selectedPost로 editPost 초기 state 저장
  // const [editPost, setEditPost] = useState(post.board);
  const [prevBoard, setPrevBoard] = useState();
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [boardId, setBoardId] = useState('');
  const [images, setImages] = useState(selectedPost.images);
  const [photos, setPhotos] = useState(selectedPost.images);

  const [editStatus, setEditStatus] = useState(false);

  useEffect(() => {
    setCategory(selectedPost.category);
    setContent(selectedPost.content);
    setTitle(selectedPost.title);
    setBoardId(selectedPost._id);
    setPrevBoard(selectedPost);
    setImages(selectedPost.images);
  }, [selectedPost]);

  // usePatchBoard 훅을 사용
  const { mutate: patchBoard } = usePatchBoard(
    category,
    content,
    title,
    boardId,
    images,
  );

  const addPhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      const newPhotoUrl = URL.createObjectURL(file);

      setImages((prevImages) => [...prevImages, file]); // 실제 파일도 상태에 저장
      setPhotos((prevPhotos) => [...prevPhotos, newPhotoUrl]); // 사용자에게 보여줄 사진
    }
  };

  const deletePhoto = (indexToRemove) => {
    setPhotos((prevPhotos) =>
      prevPhotos.filter((_, index) => index !== indexToRemove),
    );
  };

  // 글 수정 함수
  const handleEditPost = (e) => {
    e.preventDefault();

    if (categorySelectRef.current.value === null) {
      alert('카테고리를 선택해주세요.');
      categorySelectRef.current.focus();
    } else if (titleInputRef.current.value === '') {
      alert('글 제목을 입력해주세요');
      titleInputRef.current.focus();
    } else if (contentInputRef.current.value === '') {
      alert('글 내용을 입력해주세요.');
      contentInputRef.current.focus();
    } else {
      setCategory(categorySelectRef.current.value);
      setContent(contentInputRef.current.value);
      setTitle(titleInputRef.current.value);
      setBoardId(selectedPost._id);
      setEditStatus(true);
    }
  };

  useEffect(() => {
    // 상태 업데이트가 완료된 후에 postBoard를 호출
    if (editStatus && category && title && content) {
      patchBoard();
    }
  }, [editStatus]); // 이 부분에서 의존성 배열을 수정합니다.

  return (
    <form encType="multipart/form-data" onSubmit={handleEditPost}>
      <Container>
        <Title>카테고리 선택</Title>
        <CategorySelector
          ref={categorySelectRef}
          defaultValue={selectedPost?.category}
          // onChange={(e) => setEditPost({ ...editPost, category: e.target.value })}
        >
          <option value="">카테고리 선택</option>
          <option value="info">정보글</option>
          <option value="general">자유글</option>
          <option value="question">질문글</option>
        </CategorySelector>

        <Title>게시글 작성</Title>
        <Input
          type="text"
          placeholder="제목을 입력해주세요..."
          defaultValue={selectedPost?.title}
          // onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
          ref={titleInputRef}
        />

        <TextArea
          placeholder="내용을 입력해주세요..."
          defaultValue={selectedPost?.content}
          // onChange={(e) => setEditPost({ ...editPost, content: e.target.value })}
          ref={contentInputRef}
        />

        <Text>사진</Text>
        <InputImg>
          {photos.map((photoUrl, index) => (
            <div key={`post${index}`}>
              <img key={`post${index}`} src={photoUrl} alt={`${index}`} />
              <FaXmark
                size={'20px'}
                color="red"
                onClick={() => deletePhoto(index)}
              />
            </div>
          ))}
        </InputImg>
        <div>
          <InputImgButton className="input-file-button" htmlFor="input-file">
            <span>사진첨부</span>
            <FaCamera size={'20px'} />
          </InputImgButton>
          <input
            type="file"
            id="input-file"
            name="images"
            onChange={addPhoto}
            style={{ display: 'none' }}
            ref={imageInputRef}
            multiple
          />
        </div>

        <PostBTN type="submit">수정하기</PostBTN>
      </Container>
    </form>
  );
};

export default EditCommunityPost;
