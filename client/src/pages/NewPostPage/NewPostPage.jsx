import { Footer, Header, NewPost } from '../../components';
import { Container } from './NewPostPage.styles';

const NewPostPage = () => {
  return (
    <Container>
      <Header />
      <NewPost />
      <Footer />
    </Container>
  );
};

export default NewPostPage;
