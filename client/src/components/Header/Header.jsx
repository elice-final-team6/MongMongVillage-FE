import { useNavigate } from 'react-router-dom';
import { Container, Content, Nav } from './styles';
import { ROUTE } from '../../routes/Routes';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>헤더입니다.</Content>
      <Nav onClick={() => navigate(ROUTE.LOGIN_PAGE.link)}>로그인</Nav>
      <Nav onClick={() => navigate(ROUTE.MAIN_PAGE.link)}>메인 페이지</Nav>
      <Nav onClick={() => navigate(ROUTE.COMMUNITY_PAGE.link)}>커뮤니티 </Nav>
    </Container>
  );
};

export default Header;
