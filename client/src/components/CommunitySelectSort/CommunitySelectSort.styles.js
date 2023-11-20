import styled from 'styled-components';

export const SelectSortContainer = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 15px;
  margin-right: 90%;

  label {
    display: flex;
    margin-right: 10px;
    text-align: center;
    align-items: center;
    font-size: 12px;
    width: 50px;
  }

  input[type='radio'] {
    margin-top: 0px;
    margin-left: 0px;
    appearance: none;
    width: 10px;
    height: 10px;
    border: 2px solid var(--main-yellow-color);
    border-radius: 50%;
    margin-right: 5px;
    outline: none;
    cursor: pointer;
  }
  input[type='radio']:checked {
    background-color: var(--main-yellow-color);
  }
`;
