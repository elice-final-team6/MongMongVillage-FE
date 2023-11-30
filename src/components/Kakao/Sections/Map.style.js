import styled from 'styled-components';

export const MapContainer = styled.div`
  h2 {
    margin-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
  }
`;

export const CafeList = styled.div`
  height: 600px !important;
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }

    .cafename {
      font-size: 18px;
      font-weight: bold;
    }

    p {
      margin: 5px 0;
      font-size: 14px;
      color: #555;
    }
  }
`;
