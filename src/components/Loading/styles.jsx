import styled from 'styled-components';

export const Container = styled.div`
  @keyframes fadeInOut {
    0%,
    100% {
      opacity: 0;
    }
    25%,
    75% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;

  .paw {
    width: 50px;
    height: 50px;
    animation: fadeInOut 2s infinite;
    margin: 2%;
    fill: var(--main-yellow-color);
  }

  .paw:nth-child(2) {
    animation-delay: 0.5s;
  }

  .paw:nth-child(3) {
    animation-delay: 1s;
  }
`;
