import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const Img = styled.img`
  width: 200px;
  margin: 0;
`;

export const SNSButton = styled.button`
  width: 100%;
  border-radius: 20px;
  display: flex;
  padding: 10px;
  margin: 5px;
  box-shadow: 2px 1px 1px lightgray;
  justify-content: space-around;
  font-size: 16px;
  &.google-login-button {
    background-color: white;
    border: 1px solid lightgray;
  }
  &.naver-login-button {
    background-color: #2db400;
    color: white;
  }
`;

export const SNSButtonContainer = styled.div`
  width: 100%;
  margin: 20px 0;
`;

export const AuthInput = styled.input`
  width: 90%;
  border: none;
  border-bottom: 1px solid lightgray;
  margin: 10px;
  font-size: 14px;
  padding: 10px;
`;

export const TextButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0 20px 0;
  justify-content: center;
  button {
    width: 40%;
    background: none;
    text-align: center;
    &:hover {
      color: var(--main-yellow-color);
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--main-yellow-color);
  border-radius: 30px;
  font-size: 1.2rem;
  padding: 10px;
  width: 100%;
  margin-top: 30px;
`;
