import {
  Header,
  Footer,
  Banner,
  PopularCafes,
  SearchBar,
  BestContents,
} from '../../components';
import { Container } from './styels';

const MainPage = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <SearchBar />
      <PopularCafes />
      <BestContents />
      <Footer />
    </Container>
  );
};

export default MainPage;
