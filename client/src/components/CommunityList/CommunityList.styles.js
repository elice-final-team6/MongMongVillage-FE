import styled from 'styled-components';

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
