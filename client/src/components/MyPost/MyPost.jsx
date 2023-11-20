import { useState } from 'react';
import { Container } from './styles';
import { MyPostItem } from '../MyPostItem';

const MyPost = () => {
  const [posts] = useState([
    {
      title: '포메 털 빠짐 문제',
      content:
        '세 줄까지만 보이도록 했습니다.\n세줄이 넘어가면 ...으로 표시됩니다\n세줄 테스트 ',
      commentCount: 1,
      likeCount: 2,
      isMine: true,
      date: new Date().toLocaleString(),
    },
    {
      title: '포메 털 빠짐 문제',
      content:
        '포메라니안 키우는데 털이 엄청 빠지네요\n다들 털빠짐 문제 다들 어떻게 해결하시나요',
      commentCount: 10,
      likeCount: 2,
      isMine: true,
      date: new Date().toLocaleString(),
    },
  ]);
  return (
    <Container>
      {posts.map((item, idx) => {
        return <MyPostItem post={item} key={idx} />;
      })}
    </Container>
  );
};

export default MyPost;
