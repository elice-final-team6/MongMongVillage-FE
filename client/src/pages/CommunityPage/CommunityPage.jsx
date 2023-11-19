import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer, Header } from '../../components';
import {
  Container,
  CommunityNav,
  ListContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  SelectSort,
  PostBTN,
  SearchAndPost,
  SearchInputBox,
} from './CommunityPage.styles';

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
    navigate(`/community/${postId}`);
  };

  const handleNewPostClick = () => {
    navigate('/community/newpost');
    window.scrollTo(0, 0);
  };

  // 게시글 리스트 render
  const renderList = () => {
    const searchTermLowerCase = searchTerm.toLowerCase();

    // 검색어가 비어있지 않을 때만 필터링 수행
    // 비어있을땐 filteredList 그대로 넣어줌
    const filteredListBySearch = searchTerm
      ? filteredList.filter((item) =>
          item.title.toLowerCase().includes(searchTermLowerCase),
        )
      : filteredList;

    // filteredList 로 뿌려줌
    return filteredListBySearch.map((item) => (
      <div className="ListItem" key={item.id}>
        <div
          className="ContentAndImg"
          key={item.id}
          onClick={() => {
            handlePostClick(item.id);
          }}
          style={{ cursor: 'pointer' }}
        >
          <div>
            <h3>[ {item.category} ]</h3>
            <h4>{item.title}</h4>
            <p className="ellipsis">{item.content}</p>
          </div>
          <img
            src={item.mainImg}
            alt="메인이미지"
            style={{ maxWidth: '100%' }}
          />
        </div>
        <p>
          {item.userImg} {item.user} / 댓글 : {item.comment.length} / 좋아요 :{' '}
          {item.like} / 작성시간 : {item.time}
        </p>
      </div>
    ));
  };

  return (
    <Container>
      <Header />

      <CommunityNav filteredCategory={filteredCategory}>
        <div className="all" onClick={() => handleNavClick(CATEGORY_DIC.all)}>
          전체
        </div>
        <div className="free" onClick={() => handleNavClick(CATEGORY_DIC.free)}>
          자유글
        </div>
        <div className="info" onClick={() => handleNavClick(CATEGORY_DIC.info)}>
          정보글
        </div>
        <div
          className="question"
          onClick={() => handleNavClick(CATEGORY_DIC.question)}
        >
          질문글
        </div>
      </CommunityNav>

      <SelectSort>
        <label htmlFor="sort">
          <input
            type="radio"
            id="latest"
            name="sort"
            value="latest"
            checked={sortOption === 'latest'}
            onChange={handleSortChange}
          />
          <p>최신순</p>
        </label>
        <label htmlFor="sort">
          <input
            type="radio"
            id="popular"
            name="sort"
            value="popular"
            checked={sortOption === 'popular'}
            onChange={handleSortChange}
          />
          <p>인기순</p>
        </label>
      </SelectSort>

      <ListContainer>{renderList()}</ListContainer>

      <SearchAndPost>
        <SearchContainer>
          <SearchInputBox>
            <SearchButton>🔍</SearchButton>
            <SearchInput
              type="text"
              placeholder="커뮤니티 게시글 검색"
              onChange={handleSearchInputChange}
            />
          </SearchInputBox>
        </SearchContainer>
        <PostBTN onClick={handleNewPostClick}>글작성</PostBTN>
      </SearchAndPost>

      <div style={{ marginBottom: '60px' }}>[ 페이지네이션 들어갈 공간 ]</div>

      <Footer />
    </Container>
  );
};

export default CommunityPage;
