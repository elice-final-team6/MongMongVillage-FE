import React, { useRef, useState, useEffect } from 'react';
import { FaCamera, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { usePostBoard } from '../../hooks/postBoard';
import {
  Container,
  CategorySelector,
  Input,
  TextArea,
  Title,
  PostBTN,
  InputImg,
  InputImgButton,
} from './NewPost.styles';

const NewPost = () => {
  const titleInputRef = useRef();
  const contentInputRef = useRef();
  const categorySelectRef = useRef();
  const imageInputRef = useRef();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [photos, setPhotos] = useState([]);
  const [images, setImages] = useState([]);

  // review WRITE 페이지에 맞게 수정

  const { mutate: postBoard } = usePostBoard(category, title, content, images);

  // 사진 추가
  const addPhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      const newPhotoUrl = URL.createObjectURL(file);

      setImages((prevImages) => [...prevImages, file]); // 실제 파일도 상태에 저장
      setPhotos((prevPhotos) => [...prevPhotos, newPhotoUrl]); // 사용자에게 보여줄 사진
    }
  };

  // 추가한 사진 삭제
  const deletePhoto = (indexToRemove) => {
    setPhotos((prevPhotos) =>
      prevPhotos.filter((_, index) => index !== indexToRemove),
    );
  };

  // 글 등록 함수
  const handleNewPost = (e) => {
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
      setTitle(titleInputRef.current.value);
      setContent(contentInputRef.current.value);
    }
  };

  useEffect(() => {
    // 상태 업데이트가 완료된 후에 postBoard를 호출
    if (category && title && content) {
      // 여기까지 잘 나옴
      // console.log(category, title, content, images);
      postBoard();
    }
  }, [category, title, content, postBoard, images]);

  return (
    <form encType="multipart/form-data" onSubmit={handleNewPost}>
      <Container>
        <Title>카테고리 선택</Title>
        <CategorySelector ref={categorySelectRef}>
          <option value="">카테고리 선택</option>
          <option value="info">정보글</option>
          <option value="general">자유글</option>
          <option value="question">질문글</option>
        </CategorySelector>

        <Title>게시글 작성</Title>
        <Input
          type="text"
          placeholder="제목을 입력해주세요...(50자 이내)"
          ref={titleInputRef}
        />

        <TextArea
          placeholder="내용을 입력해주세요...(1000자 이내)"
          ref={contentInputRef}
        />

        <Title>사진 업로드</Title>
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

        <PostBTN type="submit">글 등록</PostBTN>
      </Container>
    </form>
  );
};

export default NewPost;
