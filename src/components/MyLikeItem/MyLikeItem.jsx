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

import { FaExternalLinkAlt } from 'react-icons/fa';

const MyLikeItem = ({ post }) => {
  const navigate = useNavigate();

  return (
    post && (
      <Container
        onClick={() => {
          navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${post?._id}`);
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        <TopContainer>
          <div>
            <Title>
              {post?.title}
              <FaExternalLinkAlt color="gray" />
            </Title>
            <Content>{post?.content.replace(/<br>/g, '\n')}</Content>
          </div>
        </TopContainer>
        <BottomContainer>
          <DateText>
            {new Date(post?.createdAt).toLocaleString() + ' 작성'}
          </DateText>
          <FaHeart color="red" size={'20px'} />
        </BottomContainer>
      </Container>
    )
  );
};

export default MyLikeItem;
