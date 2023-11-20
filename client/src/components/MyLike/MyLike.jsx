import { useState } from 'react';
import { Container } from './styles';
import { MyLikeItem } from '../index';
const MyLike = () => {
  const [posts] = useState([
    {
      title: '포메 털 빠짐 문제',
      content:
        '세 줄까지만 보이도록 했습니다.\n세줄이 넘어가면 ...으로 표시됩니다\n세줄 테스트 ',
      isMine: false,
      writer: '홍길동',
      writerProfileImg:
        'https://m.flotshop.com/web/product/big/202103/b7725b727acd64d50a94a584034d23da.jpg',
      date: new Date().toLocaleString(),
    },
    {
      title: '포메 털 빠짐 문제',
      content: '좋아요 한 글이 본인 글 일때만 수정 삭제 버튼 보이게 하기 ',
      isMine: true,
      writer: '엘리스',
      date: new Date().toLocaleString(),
    },
  ]);
  return (
    <Container>
      {posts.map((item, idx) => {
        return <MyLikeItem post={item} key={idx} />;
      })}
    </Container>
  );
};

export default MyLike;
