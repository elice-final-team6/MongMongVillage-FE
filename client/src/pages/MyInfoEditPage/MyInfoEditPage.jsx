import { Footer, Header, MyPageProfile } from '../../components';
import { Container } from './styles';

const MyInfoEditPage = () => {
  return (
    <>
      <Header />
      <Container>
        <MyPageProfile edit={true} />
      </Container>
      <Footer />
    </>
  );
};

export default MyInfoEditPage;
