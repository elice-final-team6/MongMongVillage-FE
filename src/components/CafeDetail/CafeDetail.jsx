import {
  Container,
  StarRatingBox,
  StarRating,
  CafeDetailContainer,
  CafeName,
  CafeImgContainer,
  CafeImg,
  CafeInfoContainer,
  CafeInfo,
  WriteReviewBtn,
  CafeMiniTitle,
  InfoMiniContainer,
  ReviewStarRatingContainer,
} from './styles';
import { BsPencilSquare } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReviewItem } from '../../components';
import { ROUTE } from '../../routes/Routes';

const CafeDetail = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    navigate(route);
  };

  const { id } = useParams();

  const [cafeDetailInfo, setCafeDetailInfo] = useState({
    info: null,
    totalReviews: 0,
    reviews: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_DB_API_ENDPOINT}/cafes/${id}`,
        );
        if (!response.ok) {
          throw new Error('데이터를 불러오지 못했습니다.');
        }

        const data = await response.json();
        setCafeDetailInfo({
          info: data.cafe,
          totalReviews: data.total_number_of_reviews,
          reviews: data.reviews,
        });
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchData();
  }, [id]);

  if (cafeDetailInfo.info === null) {
    return <div>Loading...</div>;
  }
  if (cafeDetailInfo.reviews === null) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div
        style={{
          backgroundColor: 'rgba(255, 232, 148, 0.3)',
          borderRadius: '50px',
          marginLeft: '80px',
          marginRight: '80px',
        }}
      >
        <CafeDetailContainer>
          <CafeName>{cafeDetailInfo.info.name}</CafeName>

          {cafeDetailInfo.info.image.length > 0 ? (
            <CafeImgContainer>
              <CafeImg
                style={{
                  backgroundImage: `url('${cafeDetailInfo.info.image}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              ></CafeImg>
            </CafeImgContainer>
          ) : (
            <></>
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              justifySelf: 'center',
              width: '90%',
              paddingTop: '25px',
            }}
          >
            <CafeInfo style={{ fontWeight: 'bold', fontSize: '33px' }}>
              상세정보
            </CafeInfo>
            <CafeInfo
              style={{ paddingTop: '25px', color: 'gray' }}
            >{`업데이트: ${
              cafeDetailInfo.info.updatedAt.split('T')[0]
            }`}</CafeInfo>
          </div>
          <CafeInfoContainer>
            <InfoMiniContainer>
              <CafeMiniTitle
                style={{ paddingTop: '0px' }}
              >{`주소`}</CafeMiniTitle>
              {cafeDetailInfo.info.road_addr ? (
                <CafeInfo>{cafeDetailInfo.info.road_addr}</CafeInfo>
              ) : (
                <CafeInfo>장소 정보가 없습니다.</CafeInfo>
              )}
              <CafeMiniTitle
                style={{ paddingTop: '35px' }}
              >{`영업시간`}</CafeMiniTitle>
              {cafeDetailInfo.info.operating_time ? (
                cafeDetailInfo.info.operating_time
                  .split('\n')
                  .map((item, index) => <CafeInfo key={index}>{item}</CafeInfo>)
              ) : (
                <CafeInfo>영업시간 정보가 없습니다.</CafeInfo>
              )}
            </InfoMiniContainer>
            <InfoMiniContainer>
              <CafeMiniTitle>{`메뉴`}</CafeMiniTitle>
              {cafeDetailInfo.info.menu ? (
                cafeDetailInfo.info.menu
                  .split('/')
                  .map((item, index) => (
                    <CafeInfo key={index}>- {item}</CafeInfo>
                  ))
              ) : (
                <CafeInfo>메뉴 정보가 없습니다.</CafeInfo>
              )}
            </InfoMiniContainer>
            <InfoMiniContainer>
              <CafeMiniTitle>{`가게 소개`}</CafeMiniTitle>
              {cafeDetailInfo.info.intro ? (
                <CafeInfo>{cafeDetailInfo.info.intro}</CafeInfo>
              ) : (
                <CafeInfo>가게 소개 정보가 없습니다.</CafeInfo>
              )}
            </InfoMiniContainer>

            <InfoMiniContainer style={{ marginBottom: '103px' }}>
              <CafeMiniTitle>
                전체 리뷰 ( {cafeDetailInfo.totalReviews} )
              </CafeMiniTitle>
              <ReviewStarRatingContainer>
                <StarRatingBox>
                  <StarRating>평균 별점: </StarRating>
                  {cafeDetailInfo.info.rating}점
                </StarRatingBox>
                <WriteReviewBtn
                  onClick={() => {
                    handleClick(ROUTE.REVIEW_WRITE_PAGE.link);
                  }}
                >
                  <p style={{ paddingRight: '5px' }}> 리뷰 작성하러가기 </p>
                  <BsPencilSquare size={'18px'} />
                </WriteReviewBtn>
              </ReviewStarRatingContainer>
              <div style={{ marginRight: '20px' }}>
                {cafeDetailInfo.reviews.map((review) => (
                  <ReviewItem key={review._id} item={review} />
                ))}
              </div>
            </InfoMiniContainer>
          </CafeInfoContainer>
        </CafeDetailContainer>
      </div>
    </Container>
  );
};

export default CafeDetail;
