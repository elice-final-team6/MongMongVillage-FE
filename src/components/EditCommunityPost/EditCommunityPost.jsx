import React, { useRef, useState, useEffect } from 'react';
import { usePatchBoard } from '../../hooks/patchBoard';
import { useLocation } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import {
  Container,
  CategorySelector,
  Input,
  TextArea,
  Title,
  PostBTN,
  InputImgButton,
  InputImg,
} from './EditCommunityPost.styles';

const EditCommunityPost = () => {
  const location = useLocation();
  const titleInputRef = useRef();
  const contentInputRef = useRef();
  const categorySelectRef = useRef();
  const imageInputRef = useRef();

  // 해당 게시글의 id
  const { state } = location;
  const post = state ? state.post : {};

  const selectedPost = post.board;

  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [boardId, setBoardId] = useState('');
  const [images, setImages] = useState(selectedPost.images);
  const [photos, setPhotos] = useState(selectedPost.images);

  const [editStatus, setEditStatus] = useState(false);

  useEffect(() => {
    setCategory(selectedPost.category);
    setContent(selectedPost.content.replace(/<br>/g, '\n'));
    setTitle(selectedPost.title);
    setBoardId(selectedPost._id);
    setImages(selectedPost.images);
    setPhotos(selectedPost.images);
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

    if (categorySelectRef.current.value === '') {
      alert('카테고리를 선택해주세요.');
      categorySelectRef.current.focus();
    } else if (titleInputRef.current.value === '') {
      alert('글 제목을 입력해주세요');
      titleInputRef.current.focus();
    } else if (titleInputRef.current.value.length > 50) {
      alert('글 제목은 50자 이하로 작성해주세요.');
      titleInputRef.current.focus();
    } else if (contentInputRef.current.value === '') {
      alert('글 내용을 입력해주세요.');
      contentInputRef.current.focus();
    } else if (contentInputRef.current.value.length > 1000) {
      alert('글 내용은 500자 이하로 작성해주세요.');
      contentInputRef.current.focus();
    } else {
      setCategory(categorySelectRef.current.value);
      setContent(contentInputRef.current.value.replace(/\n/g, '<br>'));
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
  }, [category, content, editStatus, patchBoard, title]); // 이 부분에서 의존성 배열을 수정합니다.

  return (
    <form encType="multipart/form-data" onSubmit={handleEditPost}>
      <Container>
        <Title>카테고리 선택</Title>
        <CategorySelector
          ref={categorySelectRef}
          defaultValue={selectedPost?.category}
        >
          <option value="">카테고리 선택</option>
          <option value="info">정보글</option>
          <option value="general">자유글</option>
          <option value="question">질문글</option>
        </CategorySelector>

        <Title>게시글 작성</Title>
        <Input
          type="text"
          placeholder="제목을 입력해주세요...(50자 이내)"
          defaultValue={selectedPost?.title}
          ref={titleInputRef}
        />

        <TextArea
          placeholder="내용을 입력해주세요...(1000자 이내)"
          defaultValue={selectedPost?.content.replace(/<br>/g, '\n')}
          ref={contentInputRef}
        />

        <Title>사진</Title>
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
