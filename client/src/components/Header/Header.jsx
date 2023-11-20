import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Navitem, Space } from './styles';
import Logo from '../Logo/Logo';
import { ROUTE } from '../../routes/Routes';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Navbar>
        <Logo onClick={() => navigate(ROUTE.MAIN_PAGE.link)} />
        <Navitem id="home" onClick={() => navigate(ROUTE.MAIN_PAGE.link)}>
          홈
        </Navitem>
        <Navitem
          id="community"
          onClick={() => navigate(ROUTE.COMMUNITY_PAGE.link)}
        >
          커뮤니티
        </Navitem>
        <Navitem
          id="review"
          onClick={() => navigate(ROUTE.REVIEW_LIST_PAGE.link)}
        >
          리뷰
        </Navitem>
        <Navitem
          id="information"
          onClick={() => navigate(ROUTE.CAFE_MAP_PAGE.link)}
        >
          카페정보
        </Navitem>
        <Space />
        <Navitem id="login" onClick={() => navigate(ROUTE.LOGIN_PAGE.link)}>
          로그인
        </Navitem>
        <Navitem id="signup" onClick={() => navigate(ROUTE.SIGNUP_PAGE.link)}>
          회원가입
        </Navitem>
        <Navitem id="mypage" onClick={() => navigate(ROUTE.MY_PAGE.link)}>
          마이페이지
        </Navitem>
      </Navbar>
    </Container>
  );
};

export default Header;
