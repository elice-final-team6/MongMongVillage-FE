import { useState, useEffect } from 'react';
import { Container, ReviewListContainer } from './styels';
import { Title } from '../../commonStyles';
import { ReviewItem, ReviewListSort, ReviewPagintaion } from '../../components';
import { useGetReviews } from '../../hooks/getReviews';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';

const ReviewListPage = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  /* 리뷰페이지 url로부터 params 값 가져오기 */
  const location = useLocation();
  const sort = new URLSearchParams(location.search).get('sort') || 'latest'; // 정렬기준
  const page = new URLSearchParams(location.search).get('page') || 1; // 페이지

  /* 정렬기준, 페이지에따라 리뷰 리스트 불러오기 */
  const { data: reviews, isLoading } = useGetReviews(sort, page);

  useEffect(() => {
    if (reviews) {
      setList(reviews.reviews);
    }
  }, [reviews]);

  /* 페이지 변경 */
  const handlePage = (newPage) => {
    navigate(ROUTE.REVIEW_LIST_PAGE.link + `?sort=${sort}&page=${newPage}`);

    window.scroll({ top: 0, behavior: 'smooth' });
  };

  /* 정렬기준 변경 */
  const handleSorting = (sortType) => {
    navigate(ROUTE.REVIEW_LIST_PAGE.link + `?sort=${sortType}&page=${page}`);

    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <Title>리뷰 모아보기</Title>
      <ReviewListContainer>
        <ReviewListSort handleSorting={handleSorting} />
        {isLoading || !list ? (
          <div>로딩중</div>
        ) : (
          list.map((item) => <ReviewItem key={item._id} id={item._id} />)
        )}
      </ReviewListContainer>
      <ReviewPagintaion
        page={page}
        navigatePage={handlePage}
        totalNum={reviews?.totalReviews}
      />
    </Container>
  );
};

export default ReviewListPage;
