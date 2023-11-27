import {
  Container,
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
} from './styles';
import { BsPencilSquare } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CafeDetail = () => {
  const { id } = useParams();

  const [cafeDetailInfo, setCafeDetailInfo] = useState({
    info: null,
    totalReviews: 0,
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

          <CafeImgContainer>
            <CafeImg
              style={{
                backgroundImage: `url('${
                  // cafeDetailInfo.info.images.length > 0
                  //   ? cafeDetailInfo.info.images[0]
                  //   :
                  '/imges/defaultCafeDetail.png'
                }')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            ></CafeImg>
          </CafeImgContainer>
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
                  .split('\n')
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '50px',
              }}
            >
              <StarRating>
                <p
                  style={{
                    color: 'black',
                    display: 'inline',
                    paddingRight: '3px',
                  }}
                >
                  평균 별점:{' '}
                </p>
                {'★'.repeat(cafeDetailInfo.info.rating) +
                  '☆'.repeat(5 - cafeDetailInfo.info.rating)}
                <p
                  style={{
                    color: 'black',
                    display: 'inline',
                    paddingRight: '3px',
                  }}
                >
                  ({cafeDetailInfo.totalReviews})
                </p>
              </StarRating>
              <WriteReviewBtn>
                <p style={{ paddingRight: '5px' }}> 리뷰 작성하러가기 </p>
                <BsPencilSquare size={'18px'} />
              </WriteReviewBtn>
            </div>
          </CafeInfoContainer>
        </CafeDetailContainer>
        <div
          style={{
            width: '1000px',
            height: '1000px',
            border: '1px solid black',
            margin: '100px auto',
          }}
        >
          여기에는 리뷰 컴포넌트 가져올 예정
        </div>
      </div>
    </Container>
  );
};

export default CafeDetail;
