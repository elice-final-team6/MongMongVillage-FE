import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Navbar, Navitem, Space } from './styles';
import Logo from '../Logo/Logo';
import { ROUTE } from '../../routes/Routes';

const Header = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('role') === 'ADMIN';

  const location = useLocation();

  const [activeHeader, setActiveHeader] = useState(location.pathname);

  const handleClick = (route) => {
    setActiveHeader(route);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    alert('로그아웃되었습니다.');
  };

  const checkTokenValid = async (token) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DB_API_ENDPOINT}/users/token-check`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error(
          `토큰 검증에 실패했습니다.  응답 코드: ${response.status}`,
        );
      }

      const data = await response.json();

      return data.status === 200; // 유효성 여부를 반환
    } catch (error) {
      console.error('토큰 검증 중 오류 발생:', error.message);
      return false; // 오류가 발생하면 유효하지 않은 것으로 처리
    }
  };

  useEffect(() => {
    const checkAndHandleLogout = async () => {
      if (token) {
        const isValid = await checkTokenValid(token);

        if (!isValid) {
          alert('토큰이 유효하지 않습니다. 재로그인이 필요합니다.');
          navigate(ROUTE.LOGIN_PAGE.link);
          handleLogout();
        }
      }
    };

    checkAndHandleLogout();
  }, [navigate, token]);

  useEffect(() => {
    setActiveHeader(`/${location.pathname.split('/')[1]}`);
  }, [location.pathname]);

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
          id="information"
          className={
            activeHeader === ROUTE.CAFE_MAP_PAGE.link ||
            activeHeader === ROUTE.CAFE_DETAIL_PAGE.link
              ? 'active'
              : ''
          }
          onClick={() => {
            handleClick(ROUTE.CAFE_MAP_PAGE.link);
          }}
        >
          애견카페찾기
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
        {token ? (
          <>
            <Space style={{ width: isAdmin ? '13%' : '25%' }} />
            {isAdmin && <span className="admin">관리자님, 반갑습니다.</span>}
            <Navitem
              id="mypage"
              className={activeHeader === ROUTE.MY_PAGE.link ? 'active' : ''}
              onClick={() => {
                handleClick(ROUTE.MY_PAGE.link);
              }}
            >
              마이페이지
            </Navitem>
            <Navitem
              id="logout"
              onClick={() => {
                handleLogout();
              }}
            >
              로그아웃
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
