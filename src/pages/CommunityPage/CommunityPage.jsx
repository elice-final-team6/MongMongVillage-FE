import { useGetBoards, useGetCommunitySearch } from '../../hooks';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommunityNav,
  CommunitySelectSort,
  CommunitySearchAndPost,
  CommunityList,
  CommunityPagination,
} from '../../components';
import { ROUTE } from '../../routes/Routes';
import { Container } from './CommunityPage.styles';
import { CommunityCategory } from '../../libs';
import { Title } from '../../commonStyles';

// 카테고리 객체
const CATEGORY_DIC = CommunityCategory;
// 페이지네이션 페이지 당 아이템 수
const ITEMS_PER_PAGE = 4;

const CommunityPage = () => {
  // navigate 객체 생성
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  // 총 게시글 수
  const [totalBoards, setTotalBoards] = useState(0);

  // 최신순, 인기순 정렬 옵션 state
  const [sortOption, setSortOption] = useState('latest');
  const [sortBy, setSortBy] = useState('');

  // 카테고리 filtered state
  const [filteredCategory, setFilteredCategory] = useState(CATEGORY_DIC.all);

  // 검색 기능을 위한 state
  const [searchTerm, setSearchTerm] = useState('');

  // 페이지네이션 관련 기능 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
  // 현재 페이지 상태
  const [currentPage, setCurrentPage] = useState(1);
  // 시작 인덱스와 끝 인덱스 계산
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // 서버로부터 list 받아옴
  const { mutate, data } = useGetBoards(currentPage, filteredCategory, sortBy);
  // search 결과 서버로부터 받아옴
  const { mutate: mutateSearch, data: searchData } = useGetCommunitySearch(
    searchTerm,
    currentPage,
  );

  useEffect(() => {
    if (searchTerm) {
      mutateSearch(currentPage);
    } else {
      // 검색어가 없을 경우 전체 게시글 가져오도록 수정
      mutate(currentPage, filteredCategory, sortBy);
    }
  }, [currentPage, filteredCategory, mutate, searchTerm, mutateSearch, sortBy]);

  useEffect(() => {
    if (data && data.boards) {
      setList(data.boards);
      setTotalBoards(data.total_number_of_boards);
    }
  }, [data, currentPage, filteredCategory, sortBy]);
  useEffect(() => {
    if (searchData && searchData.boards) {
      setList(searchData.boards);
      setTotalBoards(searchData.total_number_of_boards);
    }
  }, [searchData, searchTerm, currentPage, sortBy]);

  // 검색창 input을 입력받는 onChange 핸들러
  const handleSearchInputChange = (searchValue) => {
    if (searchValue) {
      setCurrentPage(1);
      setSearchTerm(searchValue);
    }
  };
  // 카테고리 선택 onChange 핸들러
  const handleNavClick = (category) => {
    setFilteredCategory(category);
    setSearchTerm(''); // 카테고리 변경 시 검색어를 비웁니다.
    // 카테고리 변경 시 1페이지로 전환해줌
    setCurrentPage(1);
  };

  // 정렬 onChange 핸들러
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    sortOptionChange(e.target.value);
  };

  // 정렬 sortBy set 함수
  const sortOptionChange = (option) => {
    let sort;
    if (option === 'latest') {
      sort = '';
    } else {
      sort = 'likes';
    }

    setSortBy(sort);

    // 정상출력 - '' 이거나 'likes' 이거나
    // console.log(sortBy);
  };

  // id 값을 params로 넘겨줄 함수 - detail 페이지로 정보 넘겨주기
  // 글작성 클릭시 실행 함수
  const handleNewPostClick = () => {
    navigate(ROUTE.NEW_POST_PAGE.link);
    window.scrollTo(0, 0);
  };
  // 전체 페이지 수 계산
  const totalPages = Math.ceil(totalBoards / ITEMS_PER_PAGE);

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
    if (searchTerm) {
      mutateSearch(page);
    } else {
      // 검색어가 없을 경우 전체 게시글 가져오도록 수정
      mutate(page);
    }
    // !!! 서버로부터 현재 CurrentPage 와 일치하는 페이지 요청해서 받아오도록 해야함
  };

  // 각 게시글 클릭시 실행 함수
  const handlePostClick = (postId) => {
    navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${postId}`);
    window.scrollTo(0, 0);
  };

  // 현재 페이지에 표시될 아이템들
  const currentPageItems = list;

  // 리스트의 작성자 사진을 누르면 해당 유저의 페이지로 이동
  // const handleUserClick = (userId) => {
  //   navigate(`${ROUTE.ㅡㅡㅡㅡ.link}/${userId}`);
  // }

  return (
    <Container>
      <Title>커뮤니티</Title>
      <CommunityNav
        category={filteredCategory}
        handleNavClick={handleNavClick}
      ></CommunityNav>

      <CommunitySelectSort
        sortOption={sortOption}
        handleSortChange={handleSortChange}
      ></CommunitySelectSort>

      <CommunityList
        currentPageItems={currentPageItems}
        handlePostClick={handlePostClick}
        // handleUserClick={handleUserClick}
        totalPages={totalPages}
      ></CommunityList>

      <CommunitySearchAndPost
        handleSearchInputChange={handleSearchInputChange}
        handleNewPostClick={handleNewPostClick}
      ></CommunitySearchAndPost>

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

export default CommunityPage;
