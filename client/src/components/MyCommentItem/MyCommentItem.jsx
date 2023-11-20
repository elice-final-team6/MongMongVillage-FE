import { MyEditAndRemoveButtons } from '../MyEditAndRemoveButtons';
import {
  Container,
  TopContainer,
  BottomContainer,
  Content,
  Title,
  DateText,
} from './styles';
import { FaExternalLinkAlt } from 'react-icons/fa';

const MyCommentItem = ({ comment }) => {
  return (
    <Container>
      <TopContainer>
        <div>
          <Content>{comment.content}</Content>
          <Title>
            {comment.original}
            <FaExternalLinkAlt />
          </Title>
        </div>
        <MyEditAndRemoveButtons />
      </TopContainer>
      <BottomContainer>
        <DateText>{comment.date}</DateText>
      </BottomContainer>
    </Container>
  );
};

export default MyCommentItem;
