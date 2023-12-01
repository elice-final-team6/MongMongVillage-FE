import { useNavigate } from 'react-router-dom';
import { MyActivity, MyPageProfile } from '../../components';
import { Container, InfoUpdateButton, LogoutButton } from './styles';
import { ROUTE } from '../../routes/Routes';

const MyPage = () => {
  const navigate = useNavigate();

  const gotoEditPage = () => {
    navigate(ROUTE.MY_INFO_EDIT_PAGE.link);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const logout = () => {
    alert('로그아웃 되었습니다.');
    localStorage.clear();
    navigate(ROUTE.MAIN_PAGE.link);
  };

  return (
    <Container>
      <MyPageProfile />
      <MyActivity />
      <InfoUpdateButton onClick={gotoEditPage}>회원 정보 수정</InfoUpdateButton>
      <LogoutButton onClick={logout}>로그아웃</LogoutButton>
    </Container>
  );
};

export default MyPage;
