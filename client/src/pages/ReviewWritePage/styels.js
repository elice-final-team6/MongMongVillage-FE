import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
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

export const StarRaiting = styled.div`
  gap: 3px;
  align-items: center;
  display: flex;
  font-size: 22px;
`;

export const TitleInputContainer = styled.div`
  padding-bottom: 30px;
`;

export const ReviewTitleInput = styled.input`
  padding: 0 10px;
  width: 100%;
  height: 55px;
  border: 1px solid #e4e4e6;
  font-size: 16px;
  border-radius: 10px;
  box-sizing  : border-box;
`;

export const Text = styled.p`
  font-size: 22px;
  font-weight: 600;

  &.cafeName {
    color:#635f51;
  }
`;

export const InputImg = styled.div`
  width: 100%;
  height: 112px;
  background-color: #fff5ce;
  border-radius: 30px;
  border: 1px dashed #868688;
`;

export const ReviewText = styled.textarea`
width: 100%;
height: 300px;
padding: 20px 10px;
box-sizing  : border-box;
border: 1px solid #e4e4e6;
  font-size: 16px;
  border-radius: 10px;
  font-weight: 500;
  resize: none;
`;

export const InputImgButton= styled.button`
  width: 108px;
  height: 36px;
  background-color: #f6f6f9;
  border-radius: 30px;
  border: none;
  font-size: 15px;
  cursor: pointer;
`;

export const SubmitButton= styled.button`
  width: 300px;
  height: 60px;
  background-color: #e4e4e6;
  border-radius: 23px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  margin: 0 auto;
`;