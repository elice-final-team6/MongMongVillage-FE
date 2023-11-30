import { Container, NoDataText } from './styles';
import { MyReviewItem } from '../MyReviewItem';
import { useGetMyReviews } from '../../hooks/getMyReviews';

const MyReview = () => {
  const { data: reviews } = useGetMyReviews();

  return reviews?.length > 0 ? (
    <Container>
      {reviews.map((item, idx) => {
        return <MyReviewItem review={item} key={idx} />;
      })}
    </Container>
  ) : (
    <Container>
      <NoDataText>작성한 리뷰가 없습니다.</NoDataText>
    </Container>
  );
};

export default MyReview;
