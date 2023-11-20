import { useState } from 'react';
import { Container } from './styles';
import { MyCommentItem } from '../MyCommentItem';

const MyComment = () => {
  const [comments] = useState([
    {
      content: '정말 귀엽네요',
      original: '원본 글 제목 ',
      date: new Date().toLocaleString(),
    },
    {
      content: '저희 집 강아지도 그래요\n돌돌이 필수',
      original: '포메 털빠짐 문제 ',
      date: new Date().toLocaleString(),
    },
  ]);
  return (
    <Container>
      {comments.map((item, idx) => {
        return <MyCommentItem comment={item} key={idx} />;
      })}
    </Container>
  );
};

export default MyComment;
