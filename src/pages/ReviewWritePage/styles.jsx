import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const ReviewWriteContainer = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: column;
  padding: 0 50px 50px 50px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const ReviewTitleInput = styled.input`
  padding: 10px;
  border: 1px solid #e4e4e6;
  font-size: 16px;
  border-radius: 10px;
  width: 100%;
`;

export const CafeName = styled.p`
  color: #635f51;
  font-weight: bold;
  display: flex;
  padding: 10px 0;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  width: 5%;
`;

export const InputImg = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  height: 150px;
  background-color: #fff5ce;
  border-radius: 30px;
  border: 1px dashed #868688;
  display: flex;
  img {
    height: 130px;
  }
  svg {
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const ReviewText = styled.textarea`
  width: 96%;
  height: 300px;
  padding: 20px 2%;
  margin: 10px 0;
  border: 1px solid #e4e4e6;
  font-size: 16px;
  border-radius: 10px;
  resize: none;
`;

export const InputImgButton = styled.label`
  cursor: pointer;
  width: 15%;
  background-color: #e4e4e6;
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
  padding: 15px;
  background-color: var(--main-yellow-color);
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  margin: 50px auto;
`;
