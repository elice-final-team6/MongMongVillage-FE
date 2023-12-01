import { Container } from './styles';
import { FaDog } from 'react-icons/fa';

const Loading = () => {
  return (
    <Container className="dog-paw-loading">
      <FaDog className="paw" />
      <FaDog className="paw" />
      <FaDog className="paw" />
    </Container>
  );
};

export default Loading;
