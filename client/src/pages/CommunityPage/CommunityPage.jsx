import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Footer,
  Header,
  CommunityNav,
  CommunitySelectSort,
  CommunitySearchAndPost,
  CommunityList,
} from '../../components';
import { ROUTE } from '../../routes/Routes';
import { Container } from './CommunityPage.styles';

const CATEGORY_DIC = {
  all: 'all',
  free: 'free',
  info: 'info',
  question: 'question',
};

const CommunityPage = () => {
  // navigate 객체 생성
  const navigate = useNavigate();
  // 목 데이터
  const [list] = useState([
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

  // 정렬을 위해 list 복사한 state
  const [filteredList, setFilteredList] = useState(list);

  // 최신순, 인기순 정렬 옵션 state
  const [sortOption, setSortOption] = useState('latest');

  // 카테고리 filtered state
  const [filteredCategory, setFilteredCategory] = useState(CATEGORY_DIC.all);

  // 검색 기능을 위한 state
  const [searchTerm, setSearchTerm] = useState('');

  // 검색창 input을 입력받는 onChange 핸들러
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 카테고리 선택 onChange 핸들러
  const handleNavClick = (category) => {
    setFilteredCategory(category);
  };

  // 정렬 onChange 핸들러
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // 정렬 함수
  const sortedList = () => {
    // 받아온 글 목록 list 복제
    let filteredListCopy = [...list];

    // 카테고리 먼저 정렬
    if (filteredCategory === CATEGORY_DIC.all) {
      filteredListCopy = list;
    } else if (filteredCategory === CATEGORY_DIC.free) {
      filteredListCopy = filteredListCopy.filter(
        (item) => item.category === filteredCategory,
      );
    } else if (filteredCategory === CATEGORY_DIC.info) {
      filteredListCopy = filteredListCopy.filter(
        (item) => item.category === filteredCategory,
      );
    } else if (filteredCategory === CATEGORY_DIC.question) {
      filteredListCopy = filteredListCopy.filter(
        (item) => item.category === filteredCategory,
      );
    }

    // 인기순, 최신순 정렬
    if (sortOption === 'popular') {
      setFilteredList([...filteredListCopy].sort((a, b) => b.like - a.like));
    } else {
      setFilteredList(
        [...filteredListCopy].sort(
          (a, b) => new Date(b.time) - new Date(a.time),
        ),
      );
    }
  };

  // 컴포넌트가 마운트될 때와 sortOption, filteredCategory, searchTerm 변경될 때마다 정렬 수행
  useEffect(() => {
    sortedList();
  }, [sortOption, filteredCategory, searchTerm]);

  // id 값을 params로 넘겨줄 함수 - detail 페이지로 정보 넘겨주기
  const handlePostClick = (postId) => {
    navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${postId}`);
    // navigate(`/community/${postId}`);
  };

  // 각 게시글 클릭시 실행 함수
  const handleNewPostClick = () => {
    navigate(ROUTE.NEW_POST_PAGE.link);
    // navigate('/community/newpost');
    window.scrollTo(0, 0);
  };

  // 검색어 관련 기능
  const searchTermLowerCase = searchTerm.toLowerCase();
  const filteredListBySearch = searchTerm
    ? filteredList.filter((item) =>
        item.title.toLowerCase().includes(searchTermLowerCase),
      )
    : filteredList;

  return (
    <Container>
      <Header />

      <CommunityNav
        filteredCategory={filteredCategory}
        handleNavClick={handleNavClick}
      ></CommunityNav>

      <CommunitySelectSort
        sortOption={sortOption}
        handleSortChange={handleSortChange}
      ></CommunitySelectSort>

      <CommunityList
        filteredListBySearch={filteredListBySearch}
        handlePostClick={handlePostClick}
      ></CommunityList>

      <CommunitySearchAndPost
        handleSearchInputChange={handleSearchInputChange}
        handleNewPostClick={handleNewPostClick}
      ></CommunitySearchAndPost>

      <div style={{ marginBottom: '60px' }}>[ 페이지네이션 들어갈 공간 ]</div>

      <Footer />
    </Container>
  );
};

export default CommunityPage;
