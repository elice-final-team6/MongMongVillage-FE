import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  margin: 5px;
  border-radius: 5px;
  width: 50px;
  padding: 5px;
  &:hover {
    background-color: var(--main-yellow-color);
  }
`;
