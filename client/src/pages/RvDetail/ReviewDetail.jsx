import { Header, Footer } from '../../components';
import {
  Container,
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
} from './styels';

const ReviewDetail = () => {
  return (
    <Container>
      <Header />
      <ReviewDetailContainer>
        <ReviewTitleContainer>
          <TitleStarRaiting>
            <ReviewTitle>0000 애견카페 너무 좋아요~!!</ReviewTitle>
            <StarRaiting>
              <p>(5)</p>
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
              <span>⭐️</span>
              <ReviewDate>2023/11/13</ReviewDate>
            </StarRaiting>
          </TitleStarRaiting>
          <ProfileContainer>
            <ProfileImg src="https://bff-images.bemypet.kr/media/medias/profile_image/760-profileImage.png"></ProfileImg>
            <Username>username</Username>
          </ProfileContainer>
        </ReviewTitleContainer>
        <ReviewMainSection>
          <ReviewImg
            src="https://d12zq4w4guyljn.cloudfront.net/20221125161429_photo1_23cd8635f3fc.jpg"
            alt=""
          />
          <MainText>
            강남에서 1박 할 일이 있었는데 강아지 데리고 갈만한 곳을 찾다가 애견
            카페가 있다고 해서 방문했습니다. 금요일 저녁이었는데 강아지가 너무
            많아서 놀랐어요. 손님은 그닥 많지 않았는데 강아지가 진짜 너무너무
            많더라구요. 호텔링도 하시는 것 같던데 같이 그냥
            풀어놓으시는듯..6개월 된 저희 강아지가 놀기에는 너무 정신없고 힘들어
            보였습니다. 아무리 강아지 입장료 포함이지만.. 아메리카노 13,000원인
            것 보고 깜짝 놀랐습니다 ^^;; 가격이 많이 비싼 느낌이었어요. 짖궂은
            강아지들이 많아서 저희 강아지는 놀랐는지 자꾸 구석에 숨고 도망다녀서
            얼른 나왔습니다. ㅠㅠ
          </MainText>
        </ReviewMainSection>
      </ReviewDetailContainer>
      <Footer />
    </Container>
  );
};

export default ReviewDetail;
