import { EditCommunityPost } from '../../components';
import { Container } from './EditPostPage.styles';

const EditPostPage = (post) => {
  return (
    <Container>
      <EditCommunityPost post={post} />
    </Container>
  );
};

export default EditPostPage;
