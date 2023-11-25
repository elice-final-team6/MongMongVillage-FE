import styled from 'styled-components';

export const UnderContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 30px;
  border-bottom: 5px solid lightgray;
  padding-bottom: 30px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  width: 90%;

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    margin-left: 10px;
  }

  p {
    margin: 0;
    margin-left: 10px;
    font-size: 12px;
  }

  .nickname {
    margin-bottom: 8px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const ContentButton = styled.div`
  display: flex;
  width: 10%;
`;

export const BTN = styled.button`
  background-color: var(--main-yellow-color);
  width: 60px;
  height: 30px;
  border-radius: 8px;
  border: 0.5px solid lightgrey;

  + button {
    margin-left: 10px;
  }

  p {
    margin-top: 4px;
  }
`;
