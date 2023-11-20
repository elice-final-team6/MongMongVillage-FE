import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 40px auto;
`;

export const Title = styled.button`
  cursor: pointer;
  background-color: transparent;
  font-size: 18px;
  margin: 10px;
  font-weight: bold;
`;

export const Line = styled.div`
  width: 40%;
  margin: 5px auto;
  border-bottom: 2px gray solid;
`;

export const CountContainer = styled.div`
  display: flex;
  margin: 15px auto;
  width: 40%;
`;

export const CountItem = styled.div`
  width: 25%;
  & > p:first-child {
    color: gray;
  }
`;
