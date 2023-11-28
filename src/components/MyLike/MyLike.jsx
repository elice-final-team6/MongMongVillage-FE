import { Container, NoDataText } from './styles';
import { MyLikeItem } from '../index';
import { useGetMyLike } from '../../hooks/getMyLike';

const MyLike = () => {
  const { data: myLikePosts } = useGetMyLike();

  return myLikePosts ? (
    <Container>
      {myLikePosts.map((item, idx) => {
        return <MyLikeItem post={item} key={idx} />;
      })}
    </Container>
  ) : (
    <Container>
      <NoDataText>좋아요 한 글이 없습니다.</NoDataText>
    </Container>
  );
};

export default MyLike;
