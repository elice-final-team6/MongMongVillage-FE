import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 110px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fefef1;
  * {
    margin: 0 auto;
  }
  img {
    width: 20%;
  }
  h1 {
    margin: 20px auto;
    font-size: 26px;
  }
  button {
    padding: 15px;
    font-size: 18px;
    border-radius: 20px;
    background-color: var(--main-yellow-color);
    transition: 0.5s;
    &:hover {
      opacity: 0.5;
    }
  }
  @media screen and (max-width: 768px) {
    img {
      width: 40%;
    }
    h1 {
      font-size: 20px;
    }
    button {
      font-size: 16px;
    }
  }
`;
