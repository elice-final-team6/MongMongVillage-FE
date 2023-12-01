import {
  Container,
  Content,
  DogCafeList,
  DogCafeListItem,
  DogCafeListItemImg,
  DogCafeListItemTitle,
  DogCafeListItemRating,
  DogCafeInfoContainer,
} from './styles';
import { useGetPolularCafes } from '../../hooks/getPopularCafes';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';
import { GiPartyPopper } from 'react-icons/gi';
import { Loading } from '../Loading';

const PopularCafes = () => {
  const navigate = useNavigate();

  const linkToCafe = (id) => {
    navigate(`${ROUTE.CAFE_DETAIL_PAGE.link}/${id}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const { data, isLoading } = useGetPolularCafes();

  return isLoading ? (
    <Loading />
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
                  <span>{content.rating}</span>점
                </DogCafeListItemRating>
              </DogCafeInfoContainer>
            </DogCafeListItem>
          ))}
      </DogCafeList>
    </Container>
  );
};

export default PopularCafes;
