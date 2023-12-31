import {
  Container,
  Content,
  DogCafeList,
  ErrorContainer,
} from './BestContents.styles';
import { useGetBestContents } from '../../hooks/getBestContents';
import { GiCurlyWing } from 'react-icons/gi';
import { BestContentItem } from '../BestContentItem';
import { Loading } from '../Loading';

const BestContents = () => {
  const { data: bestContents, isLoading, error } = useGetBestContents();

  return isLoading ? (
    <Loading />
  ) : error ? (
    <Container>
      <Content>
        <GiCurlyWing size={'43px'} color="rgba(136, 200, 247, 0.94)" />
        &nbsp;인기글&nbsp;
        <GiCurlyWing
          size={'43px'}
          color="rgba(136, 200, 247, 0.94)"
          style={{ transform: 'scaleX(-1)' }}
        />
      </Content>
      <ErrorContainer>인기글을 불러오는 도중 에러가 생겼습니다.</ErrorContainer>
    </Container>
  ) : (
    <Container>
      <Content>
        <GiCurlyWing size={'43px'} color="rgba(136, 200, 247, 0.94)" />
        &nbsp;인기글&nbsp;
        <GiCurlyWing
          size={'43px'}
          color="rgba(136, 200, 247, 0.94)"
          style={{ transform: 'scaleX(-1)' }}
        />
      </Content>
      <DogCafeList>
        {bestContents &&
          bestContents.map((item, index) => (
            <BestContentItem item={item} key={index} />
          ))}
      </DogCafeList>
    </Container>
  );
};

export default BestContents;
