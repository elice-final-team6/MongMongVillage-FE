import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  margin-top: 100px;
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
`;

export const Img = styled.img`
  width: 300px;
  margin: 0;
`;

export const SNSButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 20px;
  display: flex;
  padding: 10px;
  margin: 5px;
  box-shadow: 2px 1px 1px lightgray;
  justify-content: space-around;
  font-size: 16px;
  cursor: pointer;
  &.google-login-button {
    background-color: white;
    border: 1px solid lightgray;
  }
  &.naver-login-button {
    background-color: #2db400;
    color: white;
  }
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
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  margin: 20px;
`;

export const TextButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;
