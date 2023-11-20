import { MyEditAndRemoveButtons } from '../MyEditAndRemoveButtons';
import {
  Container,
  Title,
  Content,
  DateText,
  Rating,
  LeftContainer,
} from './styles';

const MyPostItem = ({ review }) => {
  return (
    <Container>
      <LeftContainer>
        <Title>{review.cafe}</Title>
        <Content>{review.content}</Content>
      </LeftContainer>
      <Rating>
        {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
      </Rating>
      <DateText>{review.date}</DateText>
      <MyEditAndRemoveButtons />
    </Container>
  );
};

export default MyPostItem;
