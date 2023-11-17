import { Header, Footer } from '../../components';
import {
  Container,
  ReviewListContainer,
  ReviewContainer,
  ReviewTitle,
  TitlePreviewContainer,
  Preview,
  PreviewImg,
  ReviewMain,
  ReviewSub,
  ProfileContainer,
  ProfileImg,
  Username,
  ReviewDate,
  StarRating,
  RadioButtonContainer,
  PageButtonContainer,
  CafeDetailContainer,
  CafeName,
  CafeImgContainer,
  CafeImg,
  CafeInfoContainer,
  CafeInfo,
  WriteReviewBtn,
} from './styles';

const CafeDetailPage = () => {
  return (
    <Container>
      <Header />
      <div
        style={{
          backgroundColor: 'rgba(255, 232, 148, 0.3)',
          borderRadius: '50px',
          marginBottom: '80px',
          marginLeft: '80px',
          marginRight: '80px',
        }}
      >
        <CafeDetailContainer>
          <CafeName>멍멍 애견카페</CafeName>
          <CafeImgContainer>
            <CafeImg></CafeImg>
          </CafeImgContainer>
          <CafeInfoContainer>
            <CafeInfo>주소: 서울시 강동구</CafeInfo>
            <CafeInfo>영업시간: 24시</CafeInfo>
            <CafeInfo>번호: 000-000-000</CafeInfo>
            <StarRating>
              <p style={{ fontSize: '18px' }}>평균별점</p>
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
            </StarRating>
          </CafeInfoContainer>
          <WriteReviewBtn>리뷰 작성하러가기</WriteReviewBtn>
        </CafeDetailContainer>

        <ReviewListContainer>
          <RadioButtonContainer>
            <label>
              <input type="radio" name="contact" value="Latest" checked />
              <span>최신순</span>
            </label>
            <label>
              <input type="radio" name="contact" value="popularity" />
              <span>인기순</span>
            </label>
          </RadioButtonContainer>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </ReviewListContainer>
        <PageButtonContainer>
          <button>﹤</button>
          <span>...</span>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <span>...</span>
          <button>﹥</button>
        </PageButtonContainer>
      </div>
      <Footer />
    </Container>
  );
};

const Review = () => {
  return (
    <ReviewContainer>
      <ReviewMain>
        <TitlePreviewContainer>
          <ReviewTitle>애견카페 너무 좋아용!!</ReviewTitle>
          <Preview>
            애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
            시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
            시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
            시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
            시간이었어요~!!애견카페갔었는데 아이들과 뛰어놀고 너무 좋은
            시간이었어요~!!
          </Preview>
        </TitlePreviewContainer>
        <PreviewImg src="https://api.cdn.visitjeju.net/photomng/imgpath/202212/15/0924394d-c64a-4542-9b30-c101eb5c8551.jpg"></PreviewImg>
      </ReviewMain>
      <ReviewSub>
        <ProfileContainer>
          <ProfileImg src="https://bff-images.bemypet.kr/media/medias/profile_image/760-profileImage.png"></ProfileImg>
          <Username>username</Username>
        </ProfileContainer>
        <ReviewDate>2023/11/13</ReviewDate>
        <StarRating>
          <p>(5)</p>
          <span>⭐️</span>
          <span>⭐️</span>
          <span>⭐️</span>
          <span>⭐️</span>
          <span>⭐️</span>
        </StarRating>
      </ReviewSub>
    </ReviewContainer>
  );
};

export default CafeDetailPage;
