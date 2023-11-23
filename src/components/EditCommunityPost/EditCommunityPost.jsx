import React, { useRef, useState, useEffect } from 'react';
import { ROUTE } from '../../routes/Routes';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();
  const titleInputRef = useRef();
  const contentInputRef = useRef();
  const categorySelectRef = useRef();

  // 해당 게시글의 id
  const { id } = useParams();
  const { state } = location;
  const post = state ? state.post : {};

  const [selectedPost, setSelectedPost] = useState(post.board);
  // console.log(post);

  // selectedPost로 editPost 초기 state 저장
  const [editPost, setEditPost] = useState(post.board);

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
        animal_type: post.board.animal_type,
        // 카테고리, 타이을, 콘텐츠만 바꿔줌ㅡㅡㅡ
        category: categorySelectRef.current.value,
        title: titleInputRef.current.value,
        content: contentInputRef.current.value,
        // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
        user_id: post.board.user_id,
        comment_id: post.board.comment_id,
        like_count: post.board.like_count,
        createdAt: post.board.createdAt,
        images: post.board.images,
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
        value={post.board.category}
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
        defaultValue={post.board.title}
        onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
        ref={titleInputRef}
      />

      <TextArea
        placeholder="내용을 입력해주세요..."
        defaultValue={post.board.content}
        onChange={(e) => setEditPost({ ...editPost, content: e.target.value })}
        ref={contentInputRef}
      />

      <PostBTN onClick={handleEditPost}>수정하기</PostBTN>
    </Container>
  );
};

export default EditCommunityPost;
