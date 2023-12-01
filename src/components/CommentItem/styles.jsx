import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid lightgrey;
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
`;

export const CommentBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 10px 0;
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
`;
