import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  button {
    border: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
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

export const ImgEditButton = styled.button`
  background-color: var(--main-yellow-color);
  margin: 10px;
  svg {
    margin: 0 3px;
  }
`;

export const MyInfoContainer = styled.div`
  width: 100%;
  text-align: center;
  p {
    margin: 10px;
  }
`;

export const MyName = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const MyDescription = styled.p`
  font-size: 16px;
`;

export const MyEmail = styled.p`
  color: gray;
`;

export const MyInfoEditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const MyInfoEditItemContainer = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  label {
    margin-right: 10px;
    width: 70px;
  }
  input,
  textarea {
    border: none;
    border-bottom: 1px lightgray solid;
    padding: 10px;
  }
  textarea {
    height: 70px;
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
