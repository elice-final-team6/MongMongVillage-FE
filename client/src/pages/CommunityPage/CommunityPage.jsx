import React, { useState, useEffect } from 'react';
import { Footer, Header, Pagination } from '../../components';
import {
  Container,
  CommunityNav,
  ListContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  SelectSort,
} from './styles';

const CommunityPage = () => {
  // 목 데이터
  const [list, setList] = useState([
    {
      id: 1,
      category: 'free',
      title: '강아지 훈련',
      content: '강아지 훈련을 위해 훈련소를 방문했어요',
      user: '이은혜',
      comment: 5,
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
      comment: 5,
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
      comment: 5,
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
      comment: 5,
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
      comment: 5,
      like: 1,
      time: '2023-11-15 16:23:30',
      mainImg: './imges/img2.png',
    },
    // {
    //   id: 6,
    //   category: 'info',
    //   title: '서울 주차 편한 애견카페 아시나요???',
    //   content:
    //     '서울에 주차 여러대 가능한 큰 애견카페 아시면 추천 부탁드립니다. 서울에 주차 여러대 가능한 큰 애견카페 아시면 추천 부탁드립니다. 서울에 주차 여러대 가능한 큰 애견카페 아시면 추천 부탁드립니다. 서울에 주차 여러대 가능한 큰 애견카페 아시면 추천 부탁드립니다.',
    //   user: '이은혜',
    //   comment: 5,
    //   like: 1,
    //   time: '2023-11-16 16:23:30',
    //    mainImg: 'https://kr.freepik.com/free-photo/front-view-dog-making-funny-faces_6146900.htm#query=%EA%B0%95%EC%95%84%EC%A7%80&position=10&from_view=keyword&track=sph&uuid=c3a9fe0e-647c-4084-928f-45a4e27b0975',
    // },
  ]);

  // 정렬을 위해 list 복사한 state
  const [filteredList, setFilteredList] = useState(list);

  // 최신순, 인기순 정렬 옵션 state
  const [sortOption, setSortOption] = useState('latest');

  // 카테고리 filtered state
  const [filteredCategory, setFilteredCategory] = useState('all');

  // 현재 페이지를 나타내는 state
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지 변경 시 호출될 함수
  const handlePageChange = ({ selected }) => {
    // 선택된 페이지로 리스트 업데이트
    const newPage = selected + 1;
    setCurrentPage(newPage);

    // 페이지에 따라 필터된 리스트 업데이트
    const startIndex = (newPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newFilteredList = list.slice(startIndex, endIndex);
    setFilteredList(newFilteredList);
  };

  // 카테고리 선택 onChange
  const handleNavClick = (category) => {
    setFilteredCategory(category);
  };

  // 정렬 onChange
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // 정렬 함수
  const sortedList = () => {
    // 받아온 글 목록 list 복제
    let filteredListCopy = [...list];

    // 카테고리 먼저 정렬
    if (filteredCategory === 'all') {
      filteredListCopy = list;
    } else if (filteredCategory === 'free') {
      filteredListCopy = filteredListCopy.filter(
        (item) => item.category === filteredCategory,
      );
    } else if (filteredCategory === 'info') {
      filteredListCopy = filteredListCopy.filter(
        (item) => item.category === filteredCategory,
      );
    } else if (filteredCategory === 'question') {
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

  // 컴포넌트가 마운트될 때와 sortOption, filteredCategory 변경될 때마다 정렬 수행
  useEffect(() => {
    sortedList();
  }, [sortOption, filteredCategory, currentPage]);

  // 게시글 리스트 render
  const renderList = () => {
    console.log(filteredList);

    // filteredList 로 뿌려줌
    return filteredList.map((item) => (
      <div className="ListItem" key={item.id}>
        <div className="ContentAndImg">
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
          👮‍♀️ {item.user} | 댓글 : {item.comment} | 좋아요 : {item.like} |
          작성시간 : {item.time}
        </p>
      </div>
    ));
  };

  return (
    <Container>
      <Header />

      <CommunityNav>
        <div onClick={() => handleNavClick('all')}>전체</div>
        <div onClick={() => handleNavClick('free')}>자유글</div>
        <div onClick={() => handleNavClick('info')}>정보글</div>
        <div onClick={() => handleNavClick('question')}>질문글</div>
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

      <SearchContainer>
        <SearchButton>🔍</SearchButton>
        <SearchInput type="text" placeholder="커뮤니티 게시글 검색" />
      </SearchContainer>

      <div style={{ marginBottom: '60px' }}>[ 페이지네이션 들어갈 공간 ]</div>

      <Footer />
    </Container>
  );
};

export default CommunityPage;
