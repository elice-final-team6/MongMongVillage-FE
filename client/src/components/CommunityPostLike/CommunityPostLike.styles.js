import styled from 'styled-components';

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 중앙 정렬을 추가합니다. */
  margin-left: auto;
  margin-right: auto;
  justify-content: center !important;
  border: 2px solid lightgray;
  border-radius: 40px;
  background-color: ${(props) => (props.likeCount > 0 ? 'lavender' : 'white')};
  width: 80px;
  height: 80px;

  div {
    padding-top: 10px;
  }
`;
