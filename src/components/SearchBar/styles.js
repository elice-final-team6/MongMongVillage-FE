import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background-color: white;
`;

export const StyledForm = styled.form`
  display: flex;
  text-align: center;
  width: 55%;
  height: 50px;
  border: 3px solid var(--main-yellow-color);
  border-radius: 50px;
  overflow: hidden;
  max-width: 964px;
  display: flex;
  justify-content: space-between;

  &:focus-within {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const SearchInput = styled.input`
  width: 90%;
  padding: 10px;
  padding-left: 30px;
  border: none;
  outline: none;
  font-size: 20px;
`;

export const SearchButton = styled.button`
  background-color: var(--main-yellow-color);
  color: #fff;
  border: none;
  padding: 0 35px;
  cursor: pointer;
`;
