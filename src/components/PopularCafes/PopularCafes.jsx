import {
  Container,
  Content,
  DogCafeList,
  DogCafeListItem,
  DogCafeListItemImg,
  DogCafeListItemTitle,
  DogCafeListItemRating,
  DogCafeInfoContainer,
  ErrorContainer,
} from './styles';
import { useGetPolularCafes } from '../../hooks/getPopularCafes';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';
import { GiPartyPopper } from 'react-icons/gi';

const PopularCafes = () => {
  const navigate = useNavigate();

  const linkToCafe = (id) => {
    navigate(`${ROUTE.CAFE_DETAIL_PAGE.link}/${id}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const { data, isLoading, error } = useGetPolularCafes();

  return isLoading ? (
    <ErrorContainer>Loading...</ErrorContainer>
  ) : error ? (
    <ErrorContainer>인기글을 불러오는 도중 에러가 생겼습니다.</ErrorContainer>
  ) : (
    <Container>
      <Content>
        <GiPartyPopper size={'43px'} color="rgba(255, 77, 77, 0.94)" />
        인기 애견카페
        <GiPartyPopper
          size={'43px'}
          color="rgba(255, 77, 77, 0.94)"
          style={{ transform: 'scaleX(-1)' }}
        />
      </Content>
      <DogCafeList>
        {data &&
          data.cafes.map((content, index) => (
            <DogCafeListItem
              key={index}
              onClick={() => {
                linkToCafe(content._id);
              }}
            >
              <DogCafeListItemImg
                src={
                  content.image.length > 0
                    ? content.image
                    : '/imges/default.png'
                }
                alt={`cafe ${index}`}
              />
              <DogCafeInfoContainer>
                <DogCafeListItemTitle>{content.name}</DogCafeListItemTitle>
                <DogCafeListItemRating>
                  평균 별점
                  <span>
                    {'★'.repeat(content.rating) +
                      '☆'.repeat(5 - content.rating)}
                  </span>
                </DogCafeListItemRating>
              </DogCafeInfoContainer>
            </DogCafeListItem>
          ))}
      </DogCafeList>
    </Container>
  );
};

export default PopularCafes;
