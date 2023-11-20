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
} from './styels';

const ReviewListPage = () => {
  return (
    <Container>
      <Header />

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
      <Footer />
    </Container>
  );
};

const Review = () => {
  const rating = 4;

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
        <ReviewDate>{new Date().toLocaleString()}</ReviewDate>
        <StarRating>
          {`(${rating})`}
          <span>{'★'.repeat(rating) + '☆'.repeat(5 - rating)}</span>
        </StarRating>
      </ReviewSub>
    </ReviewContainer>
  );
};

export default ReviewListPage;
