import {
  Container,
  Content,
  DogCafeList,
  DogCafeListItem,
  DogCafeListItemImg,
  DogCafeListItemTitle,
  DogCafeListItemRating,
  DogCafeInfoContainer,
  LoadingContainer,
  ErrorContainer,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';
import { instance } from '../../hooks';
import { useQuery } from 'react-query';
import { GiPartyPopper } from 'react-icons/gi';

const PopularCafes = () => {
  const navigate = useNavigate();

  const linkToCafe = (id) => {
    navigate(`${ROUTE.CAFE_DETAIL_PAGE.link}/${id}`);
  };

  const scollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const getPopularCafes = async () => {
    try {
      const response = await instance.get(`/cafes/rating`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch best contents: ${error.message}`);
    }
  };

  function useGetPolularCafes() {
    return useQuery('popularCafes', getPopularCafes, {
      onSuccess: (data) => {
        console.log('Best contents fetched successfully:', data);
      },
      onError: (error) => {
        console.error('Failed to fetch best contents:', error.message);
      },
    });
  }

  const { data, isLoading, error } = useGetPolularCafes();

  if (isLoading) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }

  if (error) {
    return (
      <ErrorContainer>인기글을 불러오는 도중 에러가 생겼습니다.</ErrorContainer>
    );
  }

  return (
    <Container>
      <Content>
        {' '}
        <GiPartyPopper size={'43px'} color="rgba(255, 77, 77, 0.94)" />
        인기 애견까페
        <GiPartyPopper
          size={'43px'}
          color="rgba(255, 77, 77, 0.94)"
          style={{ transform: 'scaleX(-1)' }}
        />
      </Content>
      <DogCafeList>
        {data &&
          data.cafes.map((content, index) => (
            <DogCafeListItem key={index}>
              <DogCafeListItemImg
                style={{
                  backgroundImage: `url('${
                    // content.images.length > 0
                    //   ? content.images[0]
                    //   :
                    '/imges/default.png'
                  }')`,
                }}
                alt={`카페사진 ${index}`}
                onClick={() => {
                  linkToCafe(content._id);
                  scollTop();
                }}
              />
              <DogCafeInfoContainer>
                <DogCafeListItemTitle
                  onClick={() => {
                    linkToCafe(content._id);
                    scollTop();
                  }}
                >
                  {content.name}
                </DogCafeListItemTitle>
                <DogCafeListItemRating>
                  <span style={{ color: 'black', display: 'inline' }}>
                    평균 별점:
                  </span>
                  {'★'.repeat(content.rating) + '☆'.repeat(5 - content.rating)}
                </DogCafeListItemRating>
              </DogCafeInfoContainer>
            </DogCafeListItem>
          ))}
      </DogCafeList>
    </Container>
  );
};

export default PopularCafes;
