import styled from 'styled-components';

export const SelectSortContainer = styled.div`
  display: flex;
  margin: 30px 20px;
  font-size: 16px;

  label {
    display: flex;
    margin-right: 15px;
    text-align: center;
    align-items: center;

    p {
      margin-top: 4px;
      margin-left: 1px;
    }
  }

  input[type='radio'] {
    margin: 0 5px;
    appearance: none;
    width: 12px;
    height: 12px;
    border: 2px solid var(--main-yellow-color);
    border-radius: 50%;
    cursor: pointer;
  }
  input[type='radio']:checked {
    background-color: var(--main-yellow-color);
  }
`;
