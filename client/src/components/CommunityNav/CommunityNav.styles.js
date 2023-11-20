import styled from 'styled-components';

export const CommunityNavContainer = styled.div`
  display: flex;
  margin-top: 100px;
  border-bottom: 2px solid black;
  padding-bottom: 24px;

  max-width: 1280px;
  width: 100%;

  div {
    width: 25%;
    text-align: center;
    cursor: pointer;
  }

  .all {
    color: ${(props) =>
      props.filteredCategory === 'all' ? 'var(--main-yellow-color)' : 'black'};
  }

  .free {
    color: ${(props) =>
      props.filteredCategory === 'free' ? 'var(--main-yellow-color)' : 'black'};
  }

  .info {
    color: ${(props) =>
      props.filteredCategory === 'info' ? 'var(--main-yellow-color)' : 'black'};
  }

  .question {
    color: ${(props) =>
      props.filteredCategory === 'question'
        ? 'var(--main-yellow-color)'
        : 'black'};
  }

  div:last-child {
    margin-right: 0;
  }
`;
