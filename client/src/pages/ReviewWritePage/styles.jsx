import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

export const ReviewWriteContainer = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: column;
  padding: 0 50px 50px 50px;

  .inputImgButtonCnt {
    padding: 20px 0;
  }
`;

export const StarRatingContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const StarRating = styled.div`
  span {
    margin: 0 5px;
    color: var(--main-yellow-color);
  }
`;

export const TitleInputContainer = styled.div`
  padding-bottom: 30px;
  display: flex;
  align-items: center;
`;

export const ReviewTitleInput = styled.input`
  padding: 0 10px;
  width: 90%;
  height: 55px;
  border: 1px solid #e4e4e6;
  font-size: 16px;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding: 10px;
  &.cafeName {
    color: #635f51;
  }
`;

export const InputImg = styled.div`
  width: 100%;
  margin: 10px 0;
  height: 110px;
  background-color: #fff5ce;
  border-radius: 30px;
  border: 1px dashed #868688;
`;

export const ReviewText = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 20px 10px;
  box-sizing: border-box;
  border: 1px solid #e4e4e6;
  font-size: 16px;
  border-radius: 10px;
  font-weight: 500;
  resize: none;
`;

export const InputImgButton = styled.button`
  background-color: #f6f6f9;
  border-radius: 30px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  svg {
    margin: 0 5px;
  }
`;

export const SubmitButton = styled.button`
  width: 300px;
  height: 60px;
  background-color: #e4e4e6;
  border-radius: 23px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  margin: 0 auto;
`;
