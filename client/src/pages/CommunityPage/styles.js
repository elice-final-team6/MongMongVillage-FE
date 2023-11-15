import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  font-family: 'GmarketSansMedium', sans-serif;
`;

export const CommunityNav = styled.div`
  display: flex;
  margin-top: 100px;
  border-bottom: 2px solid black;
  padding-bottom: 24px;

  div {
    margin-right: 200px;
    cursor: pointer;
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
  width: 769px;
  height: 1080px;

  .ListItem {
    border-bottom: 2px solid lightgray;

    .ContentAndImg {
      display: flex;

      div {
        flex: 4;
      }

      img {
        margin-top: 20px;
        flex: 1;
        width: 150px;
        height: 150px;
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
    max-width: 600px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  height: 40px;
  border: 2px solid var(--main-yellow-color);
  border-radius: 40px;
  margin-bottom: 50px;
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
  width: 400px;
  margin-right: 20px;
`;

export const SelectSort = styled.div`
  display: flex;
  margin-top: 30px;
  font-size: 15px;
  margin-right: 650px;

  label {
    display: flex;
    margin-right: 10px;
    text-align: center;
    font-size: 12px;
  }
  input {
    margin-top: 0px; /* 라벨과 라디오 버튼 간격 조절 */
  }
`;
