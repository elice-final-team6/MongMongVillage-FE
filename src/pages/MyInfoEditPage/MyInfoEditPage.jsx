import { MyPageProfile } from '../../components';
import { Container } from './styles';

const MyInfoEditPage = () => {
  return (
    <Container>
      <MyPageProfile edit={true} />
    </Container>
  );
};

export default MyInfoEditPage;
