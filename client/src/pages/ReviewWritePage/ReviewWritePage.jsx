import { Header, Footer } from '../../components';
import {
  Container,
  ReviewWriteContainer,
  StarRaiting,
  Text,
  InputImg,
  ReviewTitleInput,
  TitleInputContainer,
  ReviewText,
  InputImgButton,
  SubmitButton,
} from './styels';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewWritePage = () => {
  return (
    <Container>
      <Header />
      <ReviewWriteContainer>
        <div>
          <Text className='cafeName'>몽몽 애견 카페</Text>
          <StarRaiting>
            <span>⭐️</span>
            <span>⭐️</span>
            <span>⭐️</span>
            <span>⭐️</span>
            <span>⭐️</span>
          </StarRaiting>
        </div>
        <TitleInputContainer>
          <Text>제목입력</Text>
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
        <Text>사진등록</Text>
        <InputImg></InputImg>
        <div className="inputImgButtonCnt">
          <InputImgButton>
            <span>사진첨부</span>
            <FontAwesomeIcon
              icon={faCamera}
              style={{ color: '#1e1e25' }}
              size="lg"
            />
          </InputImgButton>
        </div>
        <SubmitButton>리뷰 올리기</SubmitButton>
      </ReviewWriteContainer>
      <Footer />
    </Container>
  );
};

export default ReviewWritePage;
