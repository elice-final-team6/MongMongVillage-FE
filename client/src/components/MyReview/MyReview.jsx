import { Container } from './styles';
import { MyReviewItem } from '../MyReviewItem';

const MyReview = () => {
  const reviews = [
    {
      cafe: '0000 애견카페',
      content: '카페가 예쁩니다.\n사장님도 친절하셔요\n주차공간이 부족해요',
      rating: 3,
      date: new Date().toLocaleString(),
    },
    {
      cafe: '***** 애견카페',
      content: '카페가 예쁘고 주차장도 넓어요\n사장님도 친절하셔요',
      rating: 5,
      date: new Date().toLocaleString(),
    },
  ];

  return (
    <Container>
      {reviews.map((item, idx) => {
        return <MyReviewItem review={item} key={idx} />;
      })}
    </Container>
  );
};

export default MyReview;
