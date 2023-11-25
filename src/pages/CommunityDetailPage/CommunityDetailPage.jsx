import React, { useState, useEffect } from 'react';
import { useGetBoards, useGetDetailBoard, useDeleteBoard } from '../../hooks';
import {
  CommunityList,
  CommunityPost,
  CommunityPostLike,
  CommunityUnderContent,
  CommunityComments,
  CommunityPagination,
} from '../../components/index.js';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Container } from './CommunityDetailPage.styles.js';
import { ROUTE } from '../../routes/Routes.js';

const CommunityDetailPage = () => {
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 4;

  const { id } = useParams();
  // 현재 페이지의 전체 게시글
  const [list, setList] = useState([]);
  // 디테일 페이지의 해당 게시글
  const [post, setPost] = useState();
  const [totalBoards, setTotalBoards] = useState(0);
  const [selectedPost, setSelectedPost] = useState({});
  const [like, setLike] = useState(0);

  // 카테고리 filtered state
  const [filteredCategory, setFilteredCategory] = useState('all');
  // const getPage = state ? state.currentPage : 1;
  const [currentPage, setCurrentPage] = useState(1);

  // 서버로부터 해당 작성글 받아오도록 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  const { mutate: mutatePost, data: postData } = useGetDetailBoard(id);
  console.log('postData:', postData);
  console.log('mutatePost: ', mutatePost);

  useEffect(() => {
    // 페이지가 처음 로딩될 때는 mutatePost를 호출하지 않습니다.
    if (id) {
      mutatePost();
    }
  }, [id, mutatePost]);

  useEffect(() => {
    if (postData) {
      console.log('post', postData);
      setPost(postData);
      setFilteredCategory(postData.board.category);
      setSelectedPost(postData);
      setLike(postData.board.like_count);
    }
  }, [postData, id]);

  // useEffect(() => {
  //   if (mutatePost.isSuccess) {
  //     // 성공적으로 작성되면 캐시 무효화
  //     mutatePost();
  //   }
  // }, [mutatePost.isSuccess, mutatePost]);

  // 서버로부터 list 받아옴 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  const { mutate: mutateBoards, data: boardsData } = useGetBoards(
    currentPage,
    filteredCategory,
  );

  useEffect(() => {
    mutateBoards();
  }, [currentPage, filteredCategory, mutateBoards]);

  useEffect(() => {
    if (boardsData && boardsData.boards) {
      setList(boardsData.boards);
      setTotalBoards(boardsData.total_number_of_boards);
    }
  }, [boardsData, currentPage, filteredCategory]);

  // 해당 게시글 정보 저장 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  // const [selectedPost, setSelectedPost] = useState(
  //   list.find((post) => post._id === id),
  // );

  // id 값을 params로 넘겨줄 함수 - detail 페이지로 정보 넘겨주기
  const handlePostClick = (id) => {
    setSelectedPost(list.find((post) => post._id === id));
    navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${id}`);
    // navigate(`/community/${id}`);
    window.scrollTo(0, 0);
  };

  // ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

  // 좋아요 눌렸는지 확인 state
  const [likeclick, setlikeclick] = useState(false);
  // 좋아요 눌렀을 때 실행되는 함수
  const handleLikeclick = (id) => {
    const updatePost = selectedPost;

    if (likeclick === false) {
      // 해당 게시글의 좋아요 + 1
      updatePost.like_count = selectedPost.like_count + 1;
      setlikeclick(true);
      // 여기서 api 를 통해 내가 누른 좋아요 목록에 글을 추가해줘야 함
    } else {
      // 해당 게시글의 좋아요 - 1
      updatePost.like_count = selectedPost.like_count - 1;
      setlikeclick(false);
    }

    setSelectedPost(updatePost);
  };

  // 페이지네이션 관련 기능 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  // 현재 페이지에 표시될 아이템들
  const totalPages = Math.ceil(totalBoards / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
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
  return (
    <Container>
      {selectedPost && (
        <>
          <CommunityPost post={post} selectedPost={selectedPost} />
          <CommunityPostLike
            like={like}
            likeclick={likeclick}
            onClick={handleLikeclick}
          ></CommunityPostLike>
          <CommunityUnderContent
            /* 수정, 삭제 함수 만들어 props로 넘겨주고 기능 구현 필요*/
            selectedPost={selectedPost}
            post={post}
            onEdit={handleEdit}
            onDelete={handleDelete}
          ></CommunityUnderContent>
          <CommunityComments
            selectedPost={selectedPost}
            post={post}
            id={id}
            // handleCommentPost={handleCommentPost}
          ></CommunityComments>
        </>
      )}
      <CommunityList
        currentPageItems={currentPageItems}
        handlePostClick={handlePostClick}
      ></CommunityList>

      <CommunityPagination
        currentPage={currentPage}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        currentPageItems={currentPageItems}
        totalPages={totalPages}
        startIndex={startIndex}
        endIndex={endIndex}
        goToPage={goToPage}
      ></CommunityPagination>
    </Container>
  );
};

export default CommunityDetailPage;
