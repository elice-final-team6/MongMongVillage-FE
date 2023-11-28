import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  button {
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  .photo {
    border: none;
  }
`;

export const ProfileImgContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 70%;
  overflow: hidden;
`;

export const ProfileImgItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImgEditButton = styled.label`
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--main-yellow-color);
  margin: 20px 0;
  svg {
    margin: 0 3px;
  }
`;

export const MyInfoContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 10px;
  p {
    margin: 10px;
  }
`;

export const MyName = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const MyIntroduction = styled.p`
  font-size: 16px;
  &.no-introduction {
    color: lightgray;
  }
`;

export const MyEmail = styled.p`
  color: gray;
  padding: 10px 0;
`;

export const MyInfoEditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const MyInfoEditItemContainer = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
  label {
    margin-right: 10px;
    width: 80px;
    text-align: center;
  }
  input {
    width: 50%;
  }
  input,
  textarea {
    border: none;
    border-bottom: 1px lightgray solid;
    padding: 15px;
  }
  textarea {
    height: 150px;
    width: 75%;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--main-yellow-color);
  font-size: 18px;
  margin: 30px;
`;

export const WithdrawalButton = styled.button`
  width: 100%;
`;

export const WithdrawText = styled.p`
  color: gray;
  font-size: 12px;
  margin: 5px;
`;

export const CheckButton = styled.button`
  background-color: lightgray;
  border-radius: 20px;
  margin-left: 10px;
  width: 20%;
  padding: 10px;

  &:disabled {
    cursor: not-allowed;
  }
`;
