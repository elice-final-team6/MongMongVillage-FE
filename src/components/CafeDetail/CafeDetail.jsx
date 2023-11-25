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
} from './styles';
import { BsPencilSquare } from 'react-icons/bs';

const CafeDetail = () => {
  const cafeDetailInfo = [
    {
      cafe: '멍멍 애견카페',
      photo:
        'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201612/27/htm_2016122716183896136.jpg',
      rating: 3,
      address: '서울시 강동구',
      time: '24시간',
      phoneNumber: '000-0000-0000',
    },
  ];

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
          <CafeName>{cafeDetailInfo[0].cafe}</CafeName>
          <CafeImgContainer>
            <CafeImg src={cafeDetailInfo[0].photo}></CafeImg>
          </CafeImgContainer>
          <CafeInfoContainer>
            <CafeInfo>{`주소: ${cafeDetailInfo[0].address}`}</CafeInfo>
            <CafeInfo>{`영업시간: ${cafeDetailInfo[0].time}`}</CafeInfo>
            <CafeInfo>{`번호: ${cafeDetailInfo[0].phoneNumber}`}</CafeInfo>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
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
                {'★'.repeat(cafeDetailInfo[0].rating) +
                  '☆'.repeat(5 - cafeDetailInfo[0].rating)}
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
