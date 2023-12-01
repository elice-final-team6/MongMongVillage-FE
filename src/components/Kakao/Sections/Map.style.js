import styled from 'styled-components';

export const MapContainer = styled.div`
  h2 {
    text-align: center;
    margin-top: 10px;
    padding-bottom: 10px;
    font-size: 24px;
  }

  .noResult {
    text-align: center;
    svg {
      margin: 50px 0 20px 0;
    }

    p {
      padding: 10px;
    }
  }

  .searchResult {
    display: flex;
    padding: 10px;
    margin: 10px 0;
    span {
      font-weight: bold;
      margin: 0 5px;
    }
  }
`;

export const CafeList = styled.div`
  height: 600px !important;
  width: 25%;
  float: left;
  padding: 20px;
  border: 1px solid #eee;
  overflow-y: auto;
  max-height: 600px;
`;

export const CafeListItem = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #fef9ea;
  }

  .cafename {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    display: flex;
    margin: 10px 0;
    font-size: 14px;
    color: #555;
    word-break: keep-all;

    svg {
      margin-right: 5px;
      fill: lightgray;
    }
  }
`;
