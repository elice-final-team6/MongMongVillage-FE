import { useNavigate } from 'react-router-dom';
import { Footer, Header, MyActivity, MyPageProfile } from '../../components';
import { Container, InfoUpdateButton, LogoutButton } from './styles';
import { ROUTE } from '../../routes/Routes';

const MyPage = () => {
  const navigate = useNavigate();

  const gotoEditPage = () => {
    console.log('이이이');
    navigate(ROUTE.MY_INFO_EDIT_PAGE.link);
  };

  const logout = () => {
    alert('로그아웃 되었습니다.');
    navigate(ROUTE.MAIN_PAGE.link);
  };

  return (
    <>
      <Header />
      <Container>
        <MyPageProfile />
        <MyActivity />
        <InfoUpdateButton onClick={gotoEditPage}>
          회원 정보 수정
        </InfoUpdateButton>
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
      </Container>
      <Footer />
    </>
  );
};

export default MyPage;
