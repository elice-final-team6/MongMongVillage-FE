import { useNavigate } from 'react-router-dom';
import { useGetCafe } from '../../hooks/getCafe';
import { Container, Title, Content, DateText, Rating } from './styles';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { ROUTE } from '../../routes/Routes';

const MyReviewItem = ({ review }) => {
  const navigate = useNavigate();
  const { data: cafeData, isLoading } = useGetCafe(review?.cafe_id);

  return isLoading ? (
    <Container>로딩중</Container>
  ) : (
    <Container
      onClick={() => navigate(ROUTE.REVIEW_DETAIL_PAGE.link + `/${review._id}`)}
    >
      <Title>
        <FaMapMarkerAlt />
        {cafeData.cafe.name}
      </Title>
      <Content>{review.content.replace(/<br>/g, '\n')}</Content>
      <Rating>
        {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
      </Rating>
      <DateText>{new Date(review.updatedAt).toLocaleString()} 작성</DateText>
    </Container>
  );
};

export default MyReviewItem;
