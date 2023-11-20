import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 200px;
  font-family: 'GmarketSansMedium', sans-serif;

  max-width: 1280px; /* 추가 */
  width: 100%; /* 추가 */
  margin-left: auto; /* 추가 */
  margin-right: auto; /* 추가 */
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainImg = styled.div`
  margin-top: 40px;
`;

export const Title = styled.h2`
  border-bottom: 2px solid lightgray;
  padding-bottom: 30px;
  margin-top: 0px;
`;
export const Category = styled.p`
  text-align: center;

  background-color: var(--main-yellow-color);
  width: 90px;
  border-radius: 16px;
  padding-top: 4px;
  margin-bottom: 40px;
`;

export const Content = styled.div`
  margin-top: 40px;
  margin-bottom: 50px;
  line-height: 24px;
`;

export const Like = styled.div`
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

export const UnderContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 30px;
  border-bottom: 5px solid lightgray;
  padding-bottom: 30px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  width: 90%;

  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    margin-left: 10px;
  }

  p {
    margin: 0;
    margin-left: 20px;
    font-size: 12px;
  }
`;
export const ContentButton = styled.div`
  display: flex;
  width: 10%;
`;

export const Comments = styled.div`
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

  .Category {
    margin-top: 24px !important;
    font-size: 24px !important;
    font-weight: bold;
  }

  .Title {
    margin-top: 40px;
    margin-bottom: 28px;
    font-size: 16px !important;
  }

  .ellipsis {
    margin-top: 20px;
    font-size: 12px !important;
    white-space: pre-line; /* 여러 줄 보여주도록 */
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px; /* 라인 간격 */
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 두 줄까지 표시하도록 설정 */
    -webkit-box-orient: vertical; /* 세로 방향으로 설정 */
    max-width: 1050px;
  }

  p {
    margin-top: 24px;
    font-size: 12px;
  }
`;

export const PostComments = styled.div`
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
