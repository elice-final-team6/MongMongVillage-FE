import styled from 'styled-components';

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  width: 100%;
  & > p {
    padding: 0 10px;
    span {
      font-weight: bold;
    }
  }
  button:hover {
    opacity: 0.5;
  }
`;

export const CommentInputContainer = styled.div`
  display: flex;
  padding: 20px;
`;

export const CommentInput = styled.input`
  width: 95%;
  height: 20px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  &:focus-within {
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--main-yellow-color);
  width: 5%;
  padding: 10px;
  border-radius: 8px;
`;

export const PostCommentsContainer = styled.div`
  display: flex;
  flex-direction: column !important;
  border-bottom: 5px solid lightgrey;
  margin-bottom: 60px;
`;
