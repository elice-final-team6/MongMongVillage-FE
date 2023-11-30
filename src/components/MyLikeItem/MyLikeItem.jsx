import {
  Container,
  TopContainer,
  BottomContainer,
  Content,
  Title,
  DateText,
} from './styles';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';

const MyLikeItem = ({ post }) => {
  const navigate = useNavigate();

  console.log(post);
  return (
    <Container
      onClick={() =>
        navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${post?._id}`)
      }
    >
      <TopContainer>
        <div>
          <Title>{post?.title}</Title>
          <Content>{post?.content}</Content>
        </div>
      </TopContainer>
      <BottomContainer>
        <DateText>
          {new Date(post?.createdAt).toLocaleString() + ' 작성'}
        </DateText>
        <FaHeart color="red" size={'20px'} />
      </BottomContainer>
    </Container>
  );
};

export default MyLikeItem;
