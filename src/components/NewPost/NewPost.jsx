import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import {
  Container,
  CategorySelector,
  Input,
  TextArea,
  ImageUploadContainer,
  ImageUploadText,
  Title,
  PostBTN,
} from './NewPost.styles';

const NewPost = () => {
  const navigate = useNavigate();
  const titleInputRef = useRef();
  const contentInputRef = useRef();
  const categorySelectRef = useRef();

  const [list, setList] = useState([
    {
      id: 1,
      category: 'free',
      title: '강아지 훈련',
      content: '강아지 훈련을 위해 훈련소를 방문했어요',
      user: '이은혜',
      userImg: '👮‍♀️',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '김은혜',
          text: '여기 최고네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 10,
      time: '2023-11-11 16:23:30',
      mainImg: './imges/img2.png',
    },
  ]);

  const [newPost, setNewPost] = useState({});
  const [uploadedImage, setUploadedImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    // 이미지 업로드 로직 추가
    const image = acceptedFiles[0];
    setUploadedImage(image);
  };

  // img dropzone 사용
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // 시간 혀여식 맞춰줌
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  useEffect(() => {
    // newPost가 업데이트될 때마다 이펙트가 실행됨
    console.log('newPost:', newPost);
    if (newPost.id) {
      setList((prevList) => [...prevList, newPost]);

      // !!! 해당 작성글로 이동하도록 수정 필요
      navigate(`/community/${newPost.id}`);
      window.scrollTo(0, 0);
    }
  }, [newPost, navigate]);

  // 글 등록 함수
  const handleNewPost = () => {
    if (categorySelectRef.current.value === '') {
      alert('카테고리를 선택해주세요.');
      categorySelectRef.current.focus();
    } else if (titleInputRef.current.value === '') {
      alert('글 제목을 입력해주세요');
      titleInputRef.current.focus();
    } else if (contentInputRef.current.value === '') {
      alert('글 내용을 입력해주세요.');
      contentInputRef.current.focus();
    } else {
      // !! 새 작성글을 list 에 추가하는 부분 변경 필요
      setNewPost({
        id: 2,
        category: categorySelectRef.current.value,
        title: titleInputRef.current.value,
        content: contentInputRef.current.value,
        user: '최은혜',
        userImg: '👮‍♀️',
        comment: [],
        like: 0,
        time: formattedTime,
        mainImg: uploadedImage,
      });
    }
  };

  return (
    <Container>
      <Title>카테고리 선택</Title>
      <CategorySelector
        ref={categorySelectRef} // ref 설정
      >
        <option value="">카테고리 선택</option>
        <option value="info">정보글</option>
        <option value="free">자유글</option>
        <option value="question">질문글</option>
      </CategorySelector>

      <Title>게시글 작성</Title>
      <Input
        type="text"
        placeholder="제목을 입력해주세요..."
        ref={titleInputRef}
      />

      <TextArea
        placeholder="내용을 입력해주세요..."
        ref={contentInputRef} // ref 설정
      />

      <Title>사진 업로드</Title>
      <ImageUploadContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <ImageUploadText>사진을 첨부하세요.</ImageUploadText>
      </ImageUploadContainer>

      {uploadedImage && (
        <div>
          <p>등록 이미지 미리보기</p>
          <img
            src={URL.createObjectURL(uploadedImage)}
            alt="Uploaded"
            style={{ maxWidth: '100%' }}
          />
        </div>
      )}

      <PostBTN onClick={handleNewPost}>글 등록</PostBTN>
    </Container>
  );
};

export default NewPost;
