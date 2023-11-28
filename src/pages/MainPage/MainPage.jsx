import {
  Banner,
  PopularCafes,
  SearchBar,
  BestContents,
} from '../../components';
import { Container } from './styels';

const MainPage = () => {
  return (
    <Container>
      <Banner />
      <SearchBar />
      <PopularCafes />
      <BestContents />
    </Container>
  );
};

export default MainPage;
