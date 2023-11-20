import {
  Container,
  Content,
  DogCafeList,
  DogCafeListItem,
  DogCafeListItemImg,
  DogCafeListItemTitle,
  DogCafeListItemWriter,
  DogCafeListItemDate,
  DogCafeItemInfo,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';

const bestContentsData = [
  {
    title: '포메 털 빠짐 문제',
    photo:
      'https://mblogthumb-phinf.pstatic.net/MjAxODA3MTFfMjI5/MDAxNTMxMzE4NDI5NjEw.BDwIz8QRL2qgFii1SSLAdbQX33ciQIVXn7lB33N-kEIg.liqiIYBs1ON7UygZZtyoT5Arco_5gG75uKhaICaJK14g.JPEG.aechdu/2018-06-22-22-02-09.jpg?type=w800',
    writer: '홍길동',
    isMine: false,
    writerProfileImg:
      'https://m.flotshop.com/web/product/big/202103/b7725b727acd64d50a94a584034d23da.jpg',
    date: new Date().toLocaleString(),
  },
  {
    title: '포메 털 빠짐 문제1',
    photo:
      'https://mblogthumb-phinf.pstatic.net/MjAxODA3MTFfMjI5/MDAxNTMxMzE4NDI5NjEw.BDwIz8QRL2qgFii1SSLAdbQX33ciQIVXn7lB33N-kEIg.liqiIYBs1ON7UygZZtyoT5Arco_5gG75uKhaICaJK14g.JPEG.aechdu/2018-06-22-22-02-09.jpg?type=w800',
    writer: '홍길동1',
    isMine: false,
    writerProfileImg:
      'https://m.flotshop.com/web/product/big/202103/b7725b727acd64d50a94a584034d23da.jpg',
    date: new Date().toLocaleString(),
  },
  {
    title: '포메 털 빠짐 문제2',
    photo:
      'https://mblogthumb-phinf.pstatic.net/MjAxODA3MTFfMjI5/MDAxNTMxMzE4NDI5NjEw.BDwIz8QRL2qgFii1SSLAdbQX33ciQIVXn7lB33N-kEIg.liqiIYBs1ON7UygZZtyoT5Arco_5gG75uKhaICaJK14g.JPEG.aechdu/2018-06-22-22-02-09.jpg?type=w800',
    writer: '홍길동2',
    isMine: false,
    writerProfileImg:
      'https://m.flotshop.com/web/product/big/202103/b7725b727acd64d50a94a584034d23da.jpg',
    date: new Date().toLocaleString(),
  },
  {
    title: '포메 털 빠짐 문제3',
    photo:
      'https://mblogthumb-phinf.pstatic.net/MjAxODA3MTFfMjI5/MDAxNTMxMzE4NDI5NjEw.BDwIz8QRL2qgFii1SSLAdbQX33ciQIVXn7lB33N-kEIg.liqiIYBs1ON7UygZZtyoT5Arco_5gG75uKhaICaJK14g.JPEG.aechdu/2018-06-22-22-02-09.jpg?type=w800',
    writer: '홍길동3',
    isMine: false,
    writerProfileImg:
      'https://m.flotshop.com/web/product/big/202103/b7725b727acd64d50a94a584034d23da.jpg',
    date: new Date().toLocaleString(),
  },
];

const BestContents = () => {
  const navigate = useNavigate();

  const linkToCommunity = () => {
    navigate(ROUTE.COMMUNITY_DETAIL_PAGE.link);
  };
  const linkToUser = () => {
    navigate(ROUTE.MY_PAGE.link);
  };

  return (
    <Container>
      <Content>인기글</Content>
      <DogCafeList>
        {bestContentsData.map((content, index) => (
          <DogCafeListItem key={index}>
            <DogCafeListItemImg
              src={content.photo}
              alt={`Content ${index}`}
              onClick={linkToCommunity}
            />
            <DogCafeItemInfo>
              <DogCafeListItemTitle onClick={linkToCommunity}>
                {content.title}
              </DogCafeListItemTitle>
              <DogCafeListItemWriter onClick={linkToUser}>
                {content.writer}
              </DogCafeListItemWriter>
              <DogCafeListItemDate>{content.date}</DogCafeListItemDate>
            </DogCafeItemInfo>
          </DogCafeListItem>
        ))}
      </DogCafeList>
    </Container>
  );
};

export default BestContents;
