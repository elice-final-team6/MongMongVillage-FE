import styled from 'styled-components';

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  border: 2px solid lightgray;
  border-radius: 40px;
  background-color: ${(props) =>
    props.islikeclick === 'true' ? 'var(--main-yellow-color)' : 'white'};
  width: 80px;
  height: 80px;
  cursor: pointer;
  svg {
    margin-top: 10px;
  }
`;
