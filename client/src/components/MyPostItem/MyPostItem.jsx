import { MyEditAndRemoveButtons } from '../MyEditAndRemoveButtons';
import {
  Container,
  Title,
  Content,
  BottomContainer,
  Count,
  DateText,
  TopContainer,
} from './styles';

const MyPostItem = ({ post }) => {
  return (
    <Container>
      <TopContainer>
        <div>
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
        </div>
        <MyEditAndRemoveButtons />
      </TopContainer>
      <BottomContainer>
        <div>
          <Count>댓글 : {post.commentCount}</Count>
          <Count>좋아요 : {post.likeCount}</Count>
        </div>
        <DateText>{post.date}</DateText>
      </BottomContainer>
    </Container>
  );
};

export default MyPostItem;
