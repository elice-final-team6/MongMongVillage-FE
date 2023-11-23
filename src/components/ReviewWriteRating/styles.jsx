import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const StarContainer = styled.fieldset`
  direction: rtl;

  input[type='radio'] {
    display: none;
  }

  .filled {
    text-shadow: 0 0 0 var(--main-yellow-color);
  }

  .empty {
    text-shadow: 0 0 0 #f0f0f0;
  }

  label {
    cursor: pointer;
    margin: 0 2px;

    color: transparent; /* 기존 이모지 컬러 제거 */
    text-shadow: 0 0 0 #f0f0f0;

    font-size: 1.5rem;
  }

  label:hover,
  label:hover ~ label {
    text-shadow: 0 0 0 var(--main-yellow-color);
  }
`;

export const StarValue = styled.span`
  margin: 0 10px;
  font-size: 20px;
`;
