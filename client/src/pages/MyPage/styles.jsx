import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 130px 0;
  button {
    border-radius: 5px;
    border: none;
  }
`;

export const Title = styled.h1`
  color: white;
  background-color: var(--main-yellow-color);
  font-size: 26px;
  text-align: center;
`;

export const InfoUpdateButton = styled.button`
  width: 200px;
  background-color: var(--main-yellow-color);
  box-shadow: 2px 1px 1px lightgray;
  margin: 20px;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
`;

export const LogoutButton = styled.button`
  width: 150px;
  background-color: lightgray;
  box-shadow: 1px 1px 1px grey;
  font-size: 14px;
  padding: 5px;
`;
