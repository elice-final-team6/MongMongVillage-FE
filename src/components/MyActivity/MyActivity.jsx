import { useState } from 'react';
import { Container, CountContainer, CountItem, Line, Title } from './styles';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';
import { useGetMyBoards } from '../../hooks/getMyBoards';
import { useGetMyLike } from '../../hooks/getMyLike';
import { useGetMyComments } from '../../hooks/getMyComments';

const MyActivity = () => {
  const navigate = useNavigate();

  const [myactivityCount] = useState({
    post: 10,
    comment: 20,
    like: 30,
    review: 0,
  });

  const gotoActivityPage = () => {
    navigate(ROUTE.MY_ACTIVITY_PAGE.link);
  };

  const { data: myposts } = useGetMyBoards();
  const { data: myLikes } = useGetMyLike();
  const { data: myComments } = useGetMyComments();

  return (
    <Container>
      <Title onClick={gotoActivityPage}>내 활동 {'>'}</Title>
      <Line />
      <CountContainer>
        <CountItem>
          <p>작성글</p>
          <p>{myposts ? myposts.length : 0}개</p>
        </CountItem>
        <CountItem>
          <p>작성댓글</p>
          <p>{myComments ? myComments.length : 0}개</p>
        </CountItem>
        <CountItem>
          <p>좋아요</p>
          <p>{myLikes ? myLikes.length : 0}개</p>
        </CountItem>
        <CountItem>
          <p>작성리뷰</p>
          <p>{myactivityCount.review}개</p>
        </CountItem>
      </CountContainer>
    </Container>
  );
};

export default MyActivity;
