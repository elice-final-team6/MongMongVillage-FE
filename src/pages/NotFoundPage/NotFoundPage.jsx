import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { ROUTE } from '../../routes/Routes';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <img
        src={`${process.env.PUBLIC_URL}/imges/notfound.png`}
        alt="notfound"
      />
      <h1>페이지를 찾을 수 없습니다.</h1>
      <button onClick={() => navigate(ROUTE.MAIN_PAGE.link)}>
        메인페이지로 이동
      </button>
    </Container>
  );
};

export default NotFoundPage;
