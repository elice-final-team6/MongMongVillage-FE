import styled from 'styled-components';

export const BTN = styled.button`
  background-color: var(--main-yellow-color);
  width: 60px;
  height: 30px;
  border-radius: 8px;
  border: 0.5px solid lightgrey;

  + button {
    margin-left: 10px;
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  margin-bottom: 80px;
  width: 100%;

  p {
    margin: 0;
    font-size: 18px;
    margin-bottom: 16px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;

    input {
      width: 100%;
      height: 40px;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 30px;
      border-radius: 4px;
      border: 1px solid lightgrey;
      margin-right: 10px;
    }

    button {
      height: 40px;
    }
  }
`;

export const PostCommentsContainer = styled.div`
  display: flex;
  flex-direction: column !important;
  border-bottom: 5px solid lightgrey;
  margin-bottom: 60px;

  div {
    border-top: 1px solid lightgrey;
    padding-top: 10px;
    flex-direction: column;
    font-size: 12px;

    .CommentUser {
      border: none !important;
      display: flex !important;
      flex-direction: row !important;
    }
  }

  .ComTitle {
    font-size: 18px;
  }
  .ComText {
    font-size: 14px;
  }
  .ComTime {
    font-size: 12px;
  }
`;
