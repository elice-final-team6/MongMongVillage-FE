import { Container, NoDataText } from './styles';
import { MyPostItem } from '../MyPostItem';
import { useGetMyBoards } from '../../hooks/getMyBoards';

const MyPost = () => {
  const { data: posts } = useGetMyBoards();

  return posts ? (
    <Container>
      {posts.map((item, idx) => {
        return <MyPostItem post={item} key={idx} />;
      })}
    </Container>
  ) : (
    <Container>
      <NoDataText>작성한 게시물이 없습니다.</NoDataText>
    </Container>
  );
};

export default MyPost;
