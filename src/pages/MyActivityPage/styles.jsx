import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 200px auto;
  width: 80%;
`;

export const NameContainer = styled.div`
  margin: 10px;
  width: 20%;
  text-align: center;
  background-color: lightgray;
  border-radius: 10px;
  padding: 15px;
  span {
    font-weight: bold;
    margin-right: 5px;
  }
`;
