import { useNavigate } from 'react-router-dom';
import { Container, Content, DateText } from './styles';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ROUTE } from '../../routes/Routes';

const MyCommentItem = ({ comment }) => {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate(`${ROUTE.COMMUNITY_DETAIL_PAGE.link}/${comment.board_id}`);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
    >
      <Content>
        <FaExternalLinkAlt />
        {comment.content}
      </Content>
      <DateText>{new Date(comment.updatedAt).toLocaleString()} 작성</DateText>
    </Container>
  );
};

export default MyCommentItem;
