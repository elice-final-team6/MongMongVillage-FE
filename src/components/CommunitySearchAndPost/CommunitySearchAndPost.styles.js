import styled from 'styled-components';

export const SearchAndPostContainer = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex: 24;
  align-items: center;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
`;

export const SearchInputBox = styled.div`
  display: flex;
  height: 45px;
  border: 3px solid var(--main-yellow-color);
  border-radius: 40px;
  align-items: center;
  width: 600px;
  margin-left: 60px;
  overflow: hidden;
`;

export const PostBTN = styled.button`
  display: flex;
  border: 1px solid lightgrey;
  background-color: var(--main-yellow-color);
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  svg {
    margin-left: 5px;
  }
`;

export const SearchButton = styled.button`
  background-color: var(--main-yellow-color);
  align-items: center;
  justify-content: center;
  padding-right: 17px;
  svg {
    margin: 0 auto;
    padding: 10px;
    color: white;
    margin-top: 4px;
    margin-left: 10px;
  }
`;

export const SearchInput = styled.input`
  padding: 10px 10px 10px 16px;
  border: none;
  height: 24px;
  width: 500px;
`;
