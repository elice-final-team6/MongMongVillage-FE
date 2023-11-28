import {
  ReviewDetailContainer,
  ReviewTitleContainer,
  ReviewMainSection,
  ReviewTitle,
  TitleStarRaiting,
  StarRaiting,
  ProfileContainer,
  ProfileImg,
  Username,
  ReviewDate,
  ReviewImg,
  MainText,
  ReviewImgContainer,
  CafeName,
  MapContainer,
  Button,
  ButtonContainer,
  AnotherReviewsContainer,
} from './styels';
import { useGetReview } from '../../hooks/getReview';
import { useNavigate, useParams } from 'react-router-dom';
import { Kakao, ReviewItem } from '../../components';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { Title } from '../../commonStyles';
import { ROUTE } from '../../routes/Routes';
import { useDeleteReview } from '../../hooks/deleteReview';

const ReviewDetailPage = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const { id } = useParams();

  const { isLoading: reviewLoading, data: review } = useGetReview(id);

  const linkToReviewEditPage = () => {
    navigate(`${ROUTE.REVIEW_WRITE_PAGE.link}/${review?.cafe_id?._id}`, {
      state: { prevReview: review },
    });
  };

  const { mutate } = useDeleteReview(id); // 리뷰 삭제

  const deleteReview = () => {
    mutate();
  };

  return !reviewLoading && review ? (
    <>
      <ReviewDetailContainer>
        <ReviewTitleContainer>
          <TitleStarRaiting>
            <ReviewTitle>{review.title}</ReviewTitle>
            <StarRaiting>
              <span>
                {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
              </span>
              {`(${review.rating})`}
              <ReviewDate>
                {new Date(review.createdAt).toLocaleString()} 작성
              </ReviewDate>
            </StarRaiting>
          </TitleStarRaiting>
          <ProfileContainer>
            <ProfileImg
              src={
                review?.user_id?.profilePicture ??
                `${`${process.env.PUBLIC_URL}/imges/user.png`}`
              }
            ></ProfileImg>
            <Username>{review?.user_id?.nickname ?? ''}</Username>
          </ProfileContainer>
        </ReviewTitleContainer>
        <MapContainer>
          <CafeName>
            <FaMapMarkerAlt size={'24px'} />
            {review?.cafe_id?.name}
          </CafeName>
          지도 불러올 자리
        </MapContainer>
        <ReviewMainSection>
          <ReviewImgContainer>
            {review.images.length > 0 &&
              review.images.map((item) => (
                <ReviewImg src={item} alt="" key={item} />
              ))}
          </ReviewImgContainer>
          <MainText>{review.content}</MainText>
        </ReviewMainSection>
        {review?.user_id?._id === userId && (
          <ButtonContainer>
            <Button onClick={linkToReviewEditPage}>수정</Button>
            <Button onClick={deleteReview}>삭제</Button>
          </ButtonContainer>
        )}
      </ReviewDetailContainer>
      <AnotherReviewsContainer>
        <Title>"{review?.cafe_id?.name}"의 리뷰 리스트</Title>
        {/* <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem /> */}
      </AnotherReviewsContainer>
    </>
  ) : (
    <ReviewDetailContainer>로딩 중 ...</ReviewDetailContainer>
  );
};

export default ReviewDetailPage;
