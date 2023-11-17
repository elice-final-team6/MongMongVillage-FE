import React, { useState, useEffect, useRef } from 'react';
import { Footer, Header } from '../../components';
import { useParams, useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import {
  Container,
  CategorySelector,
  Input,
  TextArea,
  ImageUploadContainer,
  ImageUploadText,
  NewPostContainer,
  PostBTN,
} from './NewPostPage.styles';

const NewPostPage = () => {
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
    {
      id: 2,
      category: 'free',
      title: '애견카페 방문',
      content: '예쁜 애견카페를 방문했어요',
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
      like: 6,
      time: '2023-11-12 16:23:30',
      mainImg: './imges/img1.png',
    },
    {
      id: 3,
      category: 'question',
      title: '강아지 미용실 추천해주실 수 있나요?',
      content: '미용 잘 하는 곳 추천해주세요.',
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
      like: 12,
      time: '2023-11-13 16:23:30',
      mainImg: './imges/img2.png',
    },
    {
      id: 4,
      category: 'question',
      title: '안양천 강아지 놀이터 어디가 좋은가요?',
      content:
        '서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요?',
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
      like: 15,
      time: '2023-11-14 16:23:30',
      mainImg: './imges/img1.png',
    },
    {
      id: 5,
      category: 'info',
      title: '목동 강아지 놀이터 정보 공유',
      content:
        '목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.',
      user: '이은혜',
      userImg: '👮‍♀️',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          userImg: '👮‍♀️',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '박은혜',
          userImg: '👮‍♀️',
          text: '여기 아주 마음에 드는 강아지 놀이터네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 0,
      time: '2023-11-15 16:23:30',
      mainImg: './imges/img2.png',
    },
  ]);

  const [newPost, setNewPost] = useState({});
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    // 이미지 업로드 로직 추가
    const image = acceptedFiles[0];
    setUploadedImage(image);
  };

  // img dropzone 사용
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // // 제목 state 셋
  // // 카테고리 state 셋
  // const handleCategoryClick = () => {
  //   const categoryValue = categorySelectRef.current.value;
  //   setCategory(categoryValue);
  // };

  // // 제목 state 셋
  // const handleTitleInput = () => {
  //   const titleValue = titleInputRef.current.value;
  //   setTitle(titleValue);
  // };

  // // 내용 state 셋
  // const handleContentInput = () => {
  //   const contentValue = contentInputRef.current.value;
  //   setContent(contentValue);
  // };

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
    if (category === '') {
      alert('카테고리를 선택해주세요.');
      categorySelectRef.current.focus();
    } else if (title === '') {
      alert('글 제목을 입력해주세요');
      titleInputRef.current.focus();
    } else if (content === '') {
      alert('글 내용을 입력해주세요.');
      contentInputRef.current.focus();
    } else {
      // !! 새 작성글을 list 에 추가하는 부분 변경 필요
      setNewPost({
        id: 6,
        category: category,
        title: title,
        content: content,
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
      <Header />
      <NewPostContainer>
        <h4>카테고리 선택</h4>
        <CategorySelector
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          ref={categorySelectRef} // ref 설정
        >
          <option value="">카테고리 선택</option>
          <option value="info">정보글</option>
          <option value="free">자유글</option>
          <option value="question">질문글</option>
        </CategorySelector>

        <h3>게시글 작성</h3>
        <Input
          type="text"
          placeholder="제목을 입력해주세요..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={titleInputRef}
        />

        <TextArea
          placeholder="내용을 입력해주세요..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          ref={contentInputRef} // ref 설정
        />

        <h4>사진 업로드</h4>
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
      </NewPostContainer>
      <Footer />
    </Container>
  );
};

export default NewPostPage;
