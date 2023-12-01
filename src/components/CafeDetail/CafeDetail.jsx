import {
  Container,
  StarRating,
  CafeDetailContainer,
  CafeImg,
  CafeInfoContainer,
  CafeInfo,
  WriteReviewBtn,
  CafeMiniTitle,
  InfoMiniContainer,
  ReviewStarRatingContainer,
  TopContainer,
} from './styles';
import { BsPencilSquare } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading, ReviewItem } from '../../components';
import { ROUTE } from '../../routes/Routes';
import { Title } from '../../commonStyles';
import { showAlert } from '../../util/showAlert';

const CafeDetail = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const [cafeDetailInfo, setCafeDetailInfo] = useState({
    info: null,
    totalReviews: 0,
    reviews: null,
  });

  const linkToWriteReview = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    navigate(`${ROUTE.REVIEW_WRITE_PAGE.link}/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_DB_API_ENDPOINT}/cafes/${id}`,
        );
        if (!response.ok) {
          showAlert('', '존재하지 않는 데이터입니다.', 'error', () => {
            window.history.back();
          });
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
    setIsLoading(false);
    fetchData();
  }, [id]);

  console.log(cafeDetailInfo);
  return isLoading ? (
    <Loading />
  ) : (
    cafeDetailInfo.info && cafeDetailInfo.reviews && (
      <Container>
        <CafeDetailContainer>
          <Title fontSize="40px">{cafeDetailInfo.info.name}</Title>

          {cafeDetailInfo.info.image.length > 0 ? (
            <CafeImg src={cafeDetailInfo.info.image}></CafeImg>
          ) : (
            <></>
          )}
          <TopContainer>
            <span className="title">상세정보</span>
            <span className="update">{`최근 업데이트 | ${
              cafeDetailInfo.info.updatedAt.split('T')[0]
            }`}</span>
          </TopContainer>
          <CafeInfoContainer>
            <InfoMiniContainer>
              <CafeMiniTitle>주소</CafeMiniTitle>
              {cafeDetailInfo.info.road_addr ? (
                <CafeInfo>{cafeDetailInfo.info.road_addr}</CafeInfo>
              ) : (
                <CafeInfo>장소 정보가 없습니다.</CafeInfo>
              )}
              <CafeMiniTitle className="bottomTitle">영업시간</CafeMiniTitle>
              {cafeDetailInfo.info.operating_time ? (
                cafeDetailInfo.info.operating_time
                  .split('/')
                  .map((item, index) => <CafeInfo key={index}>{item}</CafeInfo>)
              ) : (
                <CafeInfo>영업시간 정보가 없습니다.</CafeInfo>
              )}
            </InfoMiniContainer>

            <InfoMiniContainer>
              <CafeMiniTitle>메뉴</CafeMiniTitle>
              {cafeDetailInfo.info.menu ? (
                cafeDetailInfo.info.menu.split('/').map((item, index) => (
                  <CafeInfo className="menu" key={index}>
                    - {item}
                  </CafeInfo>
                ))
              ) : (
                <CafeInfo>메뉴 정보가 없습니다.</CafeInfo>
              )}
            </InfoMiniContainer>
            <InfoMiniContainer>
              <CafeMiniTitle>소개</CafeMiniTitle>
              {cafeDetailInfo.info.intro ? (
                <CafeInfo>
                  {cafeDetailInfo.info.intro.replace(/[.]/gim, '.\n')}
                </CafeInfo>
              ) : (
                <CafeInfo>소개 정보가 없습니다.</CafeInfo>
              )}
            </InfoMiniContainer>

            <InfoMiniContainer>
              <CafeMiniTitle>
                전체 리뷰 ( {cafeDetailInfo.reviews.length} )
              </CafeMiniTitle>
              <ReviewStarRatingContainer>
                <StarRating>
                  평균 별점 | {cafeDetailInfo.info.averageRating}점
                </StarRating>
                <WriteReviewBtn onClick={linkToWriteReview}>
                  리뷰 작성하러가기
                  <BsPencilSquare size={'18px'} />
                </WriteReviewBtn>
              </ReviewStarRatingContainer>
              {cafeDetailInfo?.reviews.length > 0 ? (
                <div className="reviewContainer">
                  {cafeDetailInfo.reviews.map((review) => (
                    <ReviewItem key={review._id} id={review._id} />
                  ))}
                </div>
              ) : (
                <div className="noReview">작성된 리뷰가 없습니다.</div>
              )}
            </InfoMiniContainer>
          </CafeInfoContainer>
        </CafeDetailContainer>
      </Container>
    )
  );
};

export default CafeDetail;
