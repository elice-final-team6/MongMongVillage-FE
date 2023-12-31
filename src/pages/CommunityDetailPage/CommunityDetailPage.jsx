import React, { useState, useEffect } from 'react';
import { useGetBoards } from '../../hooks/getBoards';
import { useGetBoard } from '../../hooks/getBoard.js';
import { useDeleteBoard } from '../../hooks/deleteBoard';
import {
  CommunityList,
  CommunityPost,
  CommunityPostLike,
  CommunityUnderContent,
  CommunityComments,
  CommunityPagination,
  Loading,
} from '../../components';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from './CommunityDetailPage.styles';
import { ROUTE } from '../../routes/Routes.js';

const CommunityDetailPage = () => {
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 10;

  const { id } = useParams();
  // 현재 페이지의 전체 게시글
  const [list, setList] = useState([]);
  // 디테일 페이지의 해당 게시글
  const [post, setPost] = useState();
  const [totalBoards, setTotalBoards] = useState(0);
  const [selectedPost, setSelectedPost] = useState({});
  const [likeCount, setLikeCount] = useState();

  const [filteredCategory, setFilteredCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  // 새 댓글이 작성되었는지
  const [newCommentState, setNewCommentState] = useState(false);

  // 서버로부터 해당 작성글 받아오도록 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  const { data: postData, isLoading } = useGetBoard(id);

  useEffect(() => {
    if (postData) {
      setPost(postData);
      setFilteredCategory(postData.board.category);
      setSelectedPost(postData);
      setLikeCount(postData.board.like_count);
      setNewCommentState(false);
    }
  }, [postData, id, newCommentState]);

  // 서버로부터 list 받아옴
  const { data: boardsData } = useGetBoards(currentPage, filteredCategory);

  // 하단 리스트
  useEffect(() => {
    if (boardsData && boardsData.boards) {
      setList(boardsData.boards);
      setTotalBoards(boardsData.total_number_of_boards);
    }
  }, [boardsData, currentPage, filteredCategory]);

  // 페이지네이션 관련 기능 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  // 현재 페이지에 표시될 아이템들
  const totalPages = Math.ceil(totalBoards / ITEMS_PER_PAGE);
  // 현재 페이지에 표시될 아이템들
  const currentPageItems = list;
  // 전체 페이지 수 계산

  // 이전 페이지로 이동하는 함수
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  // 해당 페이지로 설정 함수
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // 게시글 수정 함수
  const handleEdit = (post) => {
    if (post && post.board && post.board._id) {
      navigate(`${ROUTE.EDIT_POST_PAGE.link}/${post.board._id}`, {
        state: { post: post },
      });
      window.scrollTo(0, 0);
    } else {
      console.error('Invalid post object:', post);
    }
  };

  const { mutate: mutateDeleteBoard } = useDeleteBoard(id);
  // 게시글 삭제 함수
  const handleDelete = () => {
    mutateDeleteBoard();
  };

  // 수정, 삭제 버튼은 토큰값의 아이디와 게시글의 아이디가 일치하는 사람에게만 보여주도록 해야함
  return isLoading ? (
    <Loading />
  ) : (
    selectedPost && (
      <Container>
        <CommunityPost post={post} selectedPost={selectedPost} />
        <CommunityPostLike
          likeCount={likeCount}
          setLikeCount={setLikeCount}
          boardId={selectedPost?.board?._id}
        ></CommunityPostLike>
        <CommunityUnderContent
          post={post}
          onEdit={handleEdit}
          onDelete={handleDelete}
        ></CommunityUnderContent>
        <CommunityComments
          selectedPost={selectedPost}
          post={post}
          id={id}
          onCommentPosted={() => setNewCommentState(true)}
        ></CommunityComments>

        <CommunityList currentPageItems={currentPageItems}></CommunityList>

        <CommunityPagination
          currentPage={currentPage}
          goToPrevPage={goToPrevPage}
          goToNextPage={goToNextPage}
          totalPages={totalPages}
          goToPage={goToPage}
        ></CommunityPagination>
      </Container>
    )
  );
};

export default CommunityDetailPage;
