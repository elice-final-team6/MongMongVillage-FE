import { Route, useNavigate } from 'react-router-dom';
import {
  Container,
  Navbar,
  Navitem,
  LoginSignupMypage,
  Login,
  Signup,
  Mypage,
} from './styles';
import Logo from '../Logo/Logo';
import { ROUTE } from '../../routes/Routes';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo onClick={() => navigate(ROUTE.MAIN_PAGE.link)} />
      <Navbar>
        <Navitem id="home" onClick={() => navigate(ROUTE.MAIN_PAGE.link)}>
          홈
        </Navitem>
        <Navitem id="community" onClick={() => navigate(ROUTE.MAIN_PAGE.link)}>
          커뮤니티
        </Navitem>
        <Navitem id="review" onClick={() => navigate(ROUTE.MAIN_PAGE.link)}>
          리뷰
        </Navitem>
        <Navitem
          id="information"
          onClick={() => navigate(ROUTE.CAFE_MAP_PAGE.link)}
        >
          카페정보
        </Navitem>
      </Navbar>
      <LoginSignupMypage>
        <Login id="login" onClick={() => navigate(ROUTE.LOGIN_PAGE.link)}>
          로그인
        </Login>
        <Signup id="signup" onClick={() => navigate(ROUTE.MAIN_PAGE.link)}>
          회원가입
        </Signup>
        <Mypage id="mypage" onClick={() => navigate(ROUTE.MAIN_PAGE.link)}>
          마이페이지
        </Mypage>
      </LoginSignupMypage>
    </Container>
  );
};

export default Header;
