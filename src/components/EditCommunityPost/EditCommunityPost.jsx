import React, { useRef, useState, useEffect } from 'react';
import { ROUTE } from '../../routes/Routes';
import { useNavigate, useParams } from 'react-router-dom';
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
} from './EditCommunityPost.styles';

const EditCommunityPost = () => {
  const [list, setList] = useState([
    {
      id: 1,
      category: 'free',
      title: '강아지 훈련',
      content: '강아지 훈련을 위해 훈련소를 방문했어요',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
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
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 2,
      category: 'free',
      title: '애견카페 방문',
      content: '예쁜 애견카페를 방문했어요',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
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
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 3,
      category: 'question',
      title: '강아지 미용실 추천해주실 수 있나요?',
      content: '미용 잘 하는 곳 추천해주세요.',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
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
      time: '2023-11-17 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 4,
      category: 'info',
      title: '안양천 강아지 놀이터 어디가 좋은가요?',
      content:
        '서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요? 서울 양천구 근처에 좋은 강아지 놀이터가 있나요?',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
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
          time: '2023-11-10 12:20:30',
        },
      ],
      like: 15,
      time: '2023-11-14 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
    {
      id: 5,
      category: 'info',
      title: '목동 강아지 놀이터 정보 공유',
      content:
        '목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요. 목동 안양천에 넓고 예쁜 강아지 놀이터가 있어요 모두 가보세요.',
      user: '이은혜',
      userImg:
        'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
      comment: [
        {
          id: 1,
          writer: '김은혜',
          userImg:
            'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
          text: '여기 정말 좋네요.',
          time: '2023-11-11 12:20:30',
        },
        {
          id: 2,
          writer: '박은혜',
          userImg:
            'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
          text: '여기 아주 마음에 드는 강아지 놀이터네요.',
          time: '2023-11-11 12:20:30',
        },
      ],
      like: 0,
      time: '2023-11-15 16:23:30',
      mainImg:
        'https://i.pinimg.com/564x/9d/b6/47/9db647b8e500c0bab2ac6d3b3f210cb6.jpg',
    },
  ]);

  // 해당 게시글의 id
  const { id } = useParams();

  const [selectedPost, setSelectedPost] = useState(
    list.find((post) => post.id === parseInt(id, 10)),
  );

  const navigate = useNavigate();
  const titleInputRef = useRef();
  const contentInputRef = useRef();
  const categorySelectRef = useRef();

  // selectedPost로 editPost 초기 state 저장
  const [editPost, setEditPost] = useState(selectedPost);

  // 글 수정 함수
  const handleEditPost = () => {
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
      setEditPost({
        id: selectedPost.id,
        // 카테고리, 타이을, 콘텐츠만 바꿔줌ㅡㅡㅡ
        category: categorySelectRef.current.value,
        title: titleInputRef.current.value,
        content: contentInputRef.current.value,
        // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        user: selectedPost.user,
        userImg: selectedPost.userImg,
        comment: selectedPost.comment,
        like: selectedPost.like,
        time: selectedPost.formattedTime,
        mainImg: selectedPost.uploadedImage,
      });

      // 서버 요청을 통해 게시글 아이디에 맞는 게시글 update 필요 !!!
      alert('수정이 완료되었습니다.');
      navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${id}`);
    }
  };

  return (
    <Container>
      <Title>카테고리 선택</Title>
      <CategorySelector
        ref={categorySelectRef}
        value={editPost.category}
        onChange={(e) => setEditPost({ ...editPost, category: e.target.value })}
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
        defaultValue={selectedPost.title}
        onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
        ref={titleInputRef}
      />

      <TextArea
        placeholder="내용을 입력해주세요..."
        defaultValue={selectedPost.content}
        onChange={(e) => setEditPost({ ...editPost, content: e.target.value })}
        ref={contentInputRef}
      />

      <PostBTN onClick={handleEditPost}>수정하기</PostBTN>
    </Container>
  );
};

export default EditCommunityPost;
