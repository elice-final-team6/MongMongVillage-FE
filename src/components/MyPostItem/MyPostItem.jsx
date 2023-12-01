import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  Content,
  BottomContainer,
  Count,
  DateText,
  TopContainer,
} from './styles';
import { ROUTE } from '../../routes/Routes';

const MyPostItem = ({ post }) => {
  const navigate = useNavigate();

  return post ? (
    <Container
      onClick={() => {
        navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${post._id}`);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
    >
      <TopContainer>
        <div>
          <Title>{post.title}</Title>
          <Content>{post.content.replace(/<br>/g, '\n')}</Content>
        </div>
      </TopContainer>
      <BottomContainer>
        <div>
          <Count>댓글 : {post.comment_id.length}</Count>
          <Count>좋아요 : {post.like_count}</Count>
        </div>
        <DateText>
          {new Date(post.updatedAt).toLocaleString() + ' 작성'}
        </DateText>
      </BottomContainer>
    </Container>
  ) : (
    <Container>로딩중 . . .</Container>
  );
};

export default MyPostItem;
