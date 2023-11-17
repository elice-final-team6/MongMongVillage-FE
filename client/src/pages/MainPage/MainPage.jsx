import {
  Header,
  Footer,
  Banner,
  PopularContents,
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
      <PopularContents />
      <BestContents />
      <Footer />
    </Container>
  );
};

export default MainPage;
