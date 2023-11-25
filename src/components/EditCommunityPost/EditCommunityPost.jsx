import React, { useRef, useState, useEffect, useCallback } from 'react';
import { usePatchBoard } from '../../hooks';
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
  console.log('선택 게시글 : ', selectedPost);

  // selectedPost로 editPost 초기 state 저장
  // const [editPost, setEditPost] = useState(post.board);
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [boardId, setBoardId] = useState('');

  const [editStatus, setEditStatus] = useState(false);

  useEffect(() => {
    setCategory(selectedPost.category);
    setContent(selectedPost.content);
    setTitle(selectedPost.title);
    setBoardId(selectedPost._id);
  }, [selectedPost]);

  // console.log(
  //   `아이디 : ${boardId}, 타이틀 : ${title}, 콘텐츠 : ${content}, 카테고리 : ${category}`,
  // );

  // usePatchBoard 훅을 사용
  const { mutate: patchBoard } = usePatchBoard(
    category,
    content,
    title,
    boardId,
  );
  // 글 수정 함수
  const handleEditPost = () => {
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
      setCategory(selectedPost.category);
      setContent(selectedPost.content);
      setTitle(selectedPost.title);
      setBoardId(selectedPost._id);
      setEditStatus(true);

      patchBoard();
    }
  };

  // const memoizedPatchBoard = useCallback(patchBoard, [patchBoard]);

  // useEffect(() => {
  //   if (editStatus) {
  //     memoizedPatchBoard();
  //   }
  // }, [editStatus, memoizedPatchBoard]);

  return (
    <Container>
      <Title>카테고리 선택</Title>
      <CategorySelector
        ref={categorySelectRef}
        defaultValue={post.board.category}
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
        defaultValue={post.board.title}
        // onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
        ref={titleInputRef}
      />

      <TextArea
        placeholder="내용을 입력해주세요..."
        defaultValue={post.board.content}
        // onChange={(e) => setEditPost({ ...editPost, content: e.target.value })}
        ref={contentInputRef}
      />

      <PostBTN onClick={handleEditPost}>수정하기</PostBTN>
    </Container>
  );
};

export default EditCommunityPost;
