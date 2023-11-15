import { useNavigate } from 'react-router-dom';
import { Container, Content, Nav } from './styles';
const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>헤더입니다.</Content>
      <Nav onClick={() => navigate('/login')}>로그인</Nav>
    </Container>
  );
};

export default Header;
