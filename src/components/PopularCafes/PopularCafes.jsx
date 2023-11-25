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

import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';
import { GiPartyPopper } from 'react-icons/gi';

const popularCafes = [
  {
    cafe: '0000 애견카페',
    photo:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201612/27/htm_2016122716183896136.jpg',
    rating: 3,
  },
  {
    cafe: '0000 애견카페',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKvhmjE3ic-JmgviTo5GRFs6u3k9FiS3pOw&usqp=CAU',
    rating: 3,
  },
  {
    cafe: '0000 애견카페',
    photo:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201612/27/htm_2016122716183896136.jpg',
    rating: 3,
  },
  {
    cafe: '0000 애견카페',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKvhmjE3ic-JmgviTo5GRFs6u3k9FiS3pOw&usqp=CAU',
    rating: 3,
  },
];

const PopularCafes = () => {
  const navigate = useNavigate();

  const linkToCafe = () => {
    navigate(ROUTE.CAFE_DETAIL_PAGE.link);
  };

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
        {popularCafes.map((cafe, index) => (
          <DogCafeListItem key={index}>
            <DogCafeListItemImg
              src={cafe.photo}
              alt={`카페사진 ${index}`}
              onClick={linkToCafe}
            />
            <DogCafeInfoContainer>
              <DogCafeListItemTitle onClick={linkToCafe}>
                {cafe.cafe}
              </DogCafeListItemTitle>
              <DogCafeListItemRating>
                <span style={{ color: 'black', display: 'inline' }}>
                  평균 별점:
                </span>
                {'★'.repeat(cafe.rating) + '☆'.repeat(5 - cafe.rating)}
              </DogCafeListItemRating>
            </DogCafeInfoContainer>
          </DogCafeListItem>
        ))}
      </DogCafeList>
    </Container>
  );
};

export default PopularCafes;
