import { useNavigate } from 'react-router-dom';
import {
  Container,
  RightContainer,
  ReviewTitle,
  PreviewImg,
  ReviewDate,
  StarRating,
  CafeName,
  PreviewImgContainer,
  Content,
  Writer,
  BottomContainer,
  MainContainer,
} from './styles';
import { ROUTE } from '../../routes/Routes';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useGetReview } from '../../hooks/getReview';

const ReviewItem = ({ id }) => {
  const navigate = useNavigate();

  const linkToDetailPage = () => {
    navigate(ROUTE.REVIEW_DETAIL_PAGE.link + `/${id}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const { data: review, isLoading } = useGetReview(id);

  return isLoading ? (
    <Container>로딩 중 </Container>
  ) : (
    review && (
      <Container>
        <CafeName
          onClick={() =>
            navigate(`${ROUTE.CAFE_DETAIL_PAGE.link}/${review?.cafe_id?._id}`)
          }
        >
          <FaMapMarkerAlt size={'18px'} />
          {review?.cafe_id?.name}
        </CafeName>
        <MainContainer onClick={linkToDetailPage}>
          <RightContainer>
            <ReviewTitle>{review.title}</ReviewTitle>
            <Content>{review.content.replace(/<br>/g, '\n')}</Content>
            <BottomContainer>
              <Writer>
                <img
                  src={
                    review?.user_id?.profilePicture ??
                    `${`${process.env.PUBLIC_URL}/imges/user.png`}`
                  }
                  alt="user_img"
                />

                <span>{review?.user_id?.nickname ?? ''}</span>
              </Writer>
              <ReviewDate>
                {new Date(review.createdAt).toLocaleString() + ' 작성'}
              </ReviewDate>
              <StarRating>
                <span className="ratingStar">
                  {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
                </span>
                <span className="ratingValue">{`(${review.rating})`}</span>
              </StarRating>
            </BottomContainer>
          </RightContainer>
          <PreviewImgContainer>
            {review.images.length > 0 &&
              review.images
                .slice(0, 3)
                .map((img, idx) => (
                  <PreviewImg src={img} key={review._id + 'img' + idx} />
                ))}
          </PreviewImgContainer>
        </MainContainer>
      </Container>
    )
  );
};

export default ReviewItem;
