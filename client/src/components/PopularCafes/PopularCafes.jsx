import {
  Container,
  Content,
  DogCafeList,
  DogCafeListItem,
  DogCafeListItemImg,
  DogCafeListItemTitle,
  DogCafeListItemRating,
} from './styles';

import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';

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
      <Content>인기 애견카페</Content>
      <DogCafeList>
        {popularCafes.map((cafe, index) => (
          <DogCafeListItem key={index}>
            <DogCafeListItemImg
              src={cafe.photo}
              alt={`카페사진 ${index}`}
              onClick={linkToCafe}
            />
            <DogCafeListItemTitle onClick={linkToCafe}>
              {cafe.cafe}
            </DogCafeListItemTitle>
            <DogCafeListItemRating>
              {' '}
              평균 별점: {cafe.rating}점
            </DogCafeListItemRating>
          </DogCafeListItem>
        ))}
      </DogCafeList>
    </Container>
  );
};

export default PopularCafes;
