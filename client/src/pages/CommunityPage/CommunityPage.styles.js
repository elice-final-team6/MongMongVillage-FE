import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  margin-top: 100px;
  font-family: 'GmarketSansMedium', sans-serif;

  max-width: 1280px; /* 추가 */
  width: 100%; /* 추가 */
  margin-left: auto; /* 추가 */
  margin-right: auto; /* 추가 */
`;

export const CommunityNav = styled.div`
  display: flex;
  margin-top: 100px;
  border-bottom: 2px solid black;
  padding-bottom: 24px;

  max-width: 1280px; /* 추가 */
  width: 100%; /* 추가 */

  div {
    margin-right: 370px;
    cursor: pointer;
  }

  .all {
    ${(props) =>
      props.filteredCategory === 'all' &&
      `
      background-color: var(--main-yellow-color);
      border-radius: 4px;

      `};
  }

  .free {
    ${(props) =>
      props.filteredCategory === 'free' &&
      `
      background-color: var(--main-yellow-color);
      border-radius: 4px;
      `};
  }

  .info {
    ${(props) =>
      props.filteredCategory === 'info' &&
      `
      background-color: var(--main-yellow-color);
      border-radius: 4px;
      `};
  }

  .question {
    ${(props) =>
      props.filteredCategory === 'question' &&
      `
      background-color: var(--main-yellow-color);
      border-radius: 4px;
      `};
  }

  div:last-child {
    margin-right: 0;
  }
`;

// 글 목록
export const ListContainer = styled.div`
  borderr-top: 2px solid lightgray;
  margin-bottom: 30px;
  border-bottom: 2px solid black;
  height: 1260px;

  max-width: 1280px; /* 추가 */
  width: 100%; /* 추가 */
  margin-left: auto; /* 추가 */
  margin-right: auto; /* 추가 */

  .ListItem {
    border-bottom: 2px solid lightgray;
    height: 250px;

    .ContentAndImg {
      display: flex;

      div {
        flex: 5;
      }

      img {
        margin-top: 20px;
        flex: 1;
        width: 180px;
        height: 180px;
        border-radius: 16px;
      }

      p {
        font-size: 12px;
      }
    }
  }

  h3 {
    font-weight: bold;
  }

  p {
    font-size: 12px;
  }

  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 1050px;
  }
`;

export const SearchAndPost = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex: 24;
  align-items: center;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;

export const SearchInputBox = styled.div`
  height: 40px;
  border: 2px solid var(--main-yellow-color);
  border-radius: 40px;
  align-items: center;
  width: 600px;
  margin-left: 60px;
`;
export const PostBTN = styled.button`
  height: 44px;
  cursor: pointer;
  flex: 1;
  border: 1px solid lightgrey;
  background-color: var(--main-yellow-color);
  border-radius: 8px;
`;

export const SearchButton = styled.button`
  margin-left: 20px;
  cursor: pointer;
  border: none;
  background: none;
`;

export const SearchInput = styled.input`
  padding: 8px;
  border: none;
  margin-right: 20px;
  height: 24px;
  width: 500px;
`;

export const SelectSort = styled.div`
  display: flex;
  margin-top: 30px;
  font-size: 15px;
  margin-right: 90%;

  label {
    display: flex;
    margin-right: 10px;
    text-align: center;
    align-items: center;
    font-size: 12px;
    width: 50px;
  }

  input[type='radio'] {
    margin-top: 0px;
    margin-left: 0px;
    appearance: none;
    width: 10px;
    height: 10px;
    border: 2px solid var(--main-yellow-color);
    border-radius: 50%;
    margin-right: 5px;
    outline: none;
    cursor: pointer;
  }
  input[type='radio']:checked {
    background-color: var(--main-yellow-color);
  }
`;
