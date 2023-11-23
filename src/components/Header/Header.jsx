import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Container, Navbar, Navitem, Space } from './styles';
import Logo from '../Logo/Logo';
import { ROUTE } from '../../routes/Routes';

const Header = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  const location = useLocation();

  const [activeHeader, setActiveHeader] = useState(location.pathname);

  const handleClick = (route) => {
    setActiveHeader(route);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    navigate(route);
  };

  return (
    <Container>
      <Navbar>
        <Logo
          onClick={() => {
            handleClick(ROUTE.MAIN_PAGE.link);
          }}
        />
        <Navitem
          id="home"
          className={activeHeader === ROUTE.MAIN_PAGE.link ? 'active' : ''}
          onClick={() => {
            handleClick(ROUTE.MAIN_PAGE.link);
          }}
        >
          홈
        </Navitem>
        <Navitem
          id="community"
          className={
            activeHeader === ROUTE.COMMUNITY_DETAIL_PAGE.link ? 'active' : ''
          }
          onClick={() => {
            handleClick(ROUTE.COMMUNITY_DETAIL_PAGE.link);
          }}
        >
          커뮤니티
        </Navitem>
        <Navitem
          id="review"
          className={
            activeHeader === ROUTE.REVIEW_LIST_PAGE.link ? 'active' : ''
          }
          onClick={() => {
            handleClick(ROUTE.REVIEW_LIST_PAGE.link);
          }}
        >
          리뷰
        </Navitem>
        <Navitem
          id="information"
          className={activeHeader === ROUTE.CAFE_MAP_PAGE.link ? 'active' : ''}
          onClick={() => {
            handleClick(ROUTE.CAFE_MAP_PAGE.link);
          }}
        >
          카페 찾기
        </Navitem>

        {token ? (
          <>
            <Space style={{ width: '32%' }} />
            <Navitem
              id="mypage"
              className={activeHeader === ROUTE.MY_PAGE.link ? 'active' : ''}
              onClick={() => {
                handleClick(ROUTE.MY_PAGE.link);
              }}
            >
              마이페이지
            </Navitem>
          </>
        ) : (
          <>
            <Space style={{ width: '25%' }} />
            <Navitem
              id="login"
              className={activeHeader === ROUTE.LOGIN_PAGE.link ? 'active' : ''}
              onClick={() => {
                handleClick(ROUTE.LOGIN_PAGE.link);
              }}
            >
              로그인
            </Navitem>
            <Navitem
              id="signup"
              className={
                activeHeader === ROUTE.SIGNUP_PAGE.link ? 'active' : ''
              }
              onClick={() => {
                handleClick(ROUTE.SIGNUP_PAGE.link);
              }}
            >
              회원가입
            </Navitem>
          </>
        )}
      </Navbar>
    </Container>
  );
};

export default Header;
