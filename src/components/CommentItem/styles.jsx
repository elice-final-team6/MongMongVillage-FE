import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid lightgrey;

  @media screen and (max-width: 767px) {
    padding: 15px;
    font-size: 12px;
  }
`;

export const CommentTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
  }

  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    font-size: 14px;
    margin-left: 10px;
  }

  .user {
    font-weight: bold;
  }

  .time {
    color: gray;
    font-size: 12px;
  }
`;

export const EditInput = styled.input`
  width: 88%;
  height: 20px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  &:focus-within {
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 767px) {
    width: 75%;
    font-size: 12px;
    margin: 0;
    padding: 5px;
  }
`;

export const CommentBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 10px 0;
  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: var(--main-yellow-color);
    padding: 5px 10px;
    margin-left: 5px;
    border-radius: 5px;
  }

  .cancel {
    background-color: lightgray;
  }

  @media screen and (max-width: 767px) {
    button {
      font-size: 12px;
      padding: 5px;
    }
  }
`;
