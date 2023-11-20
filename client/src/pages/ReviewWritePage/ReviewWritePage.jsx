import { Header, Footer } from '../../components';
import {
  Container,
  ReviewWriteContainer,
  StarRating,
  Text,
  InputImg,
  ReviewTitleInput,
  TitleInputContainer,
  ReviewText,
  InputImgButton,
  SubmitButton,
  StarRatingContainer,
} from './styles';
import { FaCamera } from 'react-icons/fa';

const ReviewWritePage = () => {
  const rating = 4;

  return (
    <Container>
      <Header />
      <ReviewWriteContainer>
        <Text className="cafeName">몽몽 애견 카페</Text>
        <StarRatingContainer>
          <Text>별점</Text>
          <StarRating>
            <span>{'★'.repeat(rating) + '☆'.repeat(5 - rating)}</span>
            {`(${rating})`}
          </StarRating>
        </StarRatingContainer>
        <TitleInputContainer>
          <Text>제목</Text>
          <ReviewTitleInput type="text" placeholder="제목을 입력해주세요" />
        </TitleInputContainer>
        <div>
          <ReviewText
            name="writeReview"
            cols="30"
            rows="10"
            placeholder="5자 이상의 글 내용을 입력해주세요"
          />
        </div>
        <Text>사진</Text>
        <InputImg></InputImg>
        <div className="inputImgButtonCnt">
          <InputImgButton>
            <span>사진첨부</span>
            <FaCamera color="#1e1e25" size={'20px'} />
          </InputImgButton>
        </div>
        <SubmitButton>리뷰 등록</SubmitButton>
      </ReviewWriteContainer>
      <Footer />
    </Container>
  );
};

export default ReviewWritePage;
