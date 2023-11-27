import { useEffect, useState } from 'react';
import { Container, NoDataText } from './styles';
import { MyCommentItem } from '../MyCommentItem';
import { useGetMyComments } from '../../hooks/getMyComments';

const MyComment = () => {
  const [comments, setComments] = useState([]);

  const { data: myComments } = useGetMyComments();

  useEffect(() => {
    if (myComments) {
      setComments(myComments);
    }
  }, [myComments]);

  return comments.length > 0 ? (
    <Container>
      {comments.map((item, idx) => {
        return <MyCommentItem comment={item} key={idx} />;
      })}
    </Container>
  ) : (
    <Container>
      <NoDataText>작성한 댓글이 없습니다.</NoDataText>
    </Container>
  );
};

export default MyComment;
