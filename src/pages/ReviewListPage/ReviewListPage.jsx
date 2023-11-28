import React, { useState, useEffect } from 'react';
import { Container, ReviewListContainer } from './styels';
import { Title } from '../../commonStyles';
import { ReviewItem, ReviewListSort, ReviewPagintaion } from '../../components';
import { useGetReviews } from '../../hooks/getReviews';

const ReviewListPage = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState('latest');

  const { data: reviews, isLoading } = useGetReviews();

  useEffect(() => {
    if (reviews) setList(reviews);
  }, [reviews]);

  useEffect(() => {
    // 정렬기준에 따른 데이터 불러오기
  }, [sortType]);

  useEffect(() => {
    // 페이지 값에 따른 데이터 불러오기
  }, [page]);

  const handleSorting = (sortType) => {
    if (sortType === 'latest') {
      setSortType('latest');
    } else if (sortType === 'popular') {
      setSortType('popular');
    }
  };

  return (
    <Container>
      <Title>리뷰 모아보기</Title>
      <ReviewListContainer>
        <ReviewListSort handleSorting={handleSorting} />
        {isLoading ? (
          <div>로딩중</div>
        ) : (
          list.map((item) => <ReviewItem key={item._id} id={item._id} />)
        )}
      </ReviewListContainer>
      <ReviewPagintaion page={page} setPage={setPage} />
    </Container>
  );
};

export default ReviewListPage;
