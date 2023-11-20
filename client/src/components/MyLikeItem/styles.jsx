import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  margin: 15px 0;
  border-bottom: 1px gray solid;
  cursor: pointer;
`;

export const Title = styled.p`
  font-weight: bold;
  svg {
    width: 10px;
  }
`;

export const Content = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  white-space: break-spaces;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
  div {
    display: flex;
    align-items: center;
  }
`;

export const DateText = styled.span`
  font-size: 10px;
`;

export const Writer = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
    margin: 0 5px;
  }

  img {
    border-radius: 70%;
    overflow: hidden;
    width: 25px;
    height: 25px;
  }
`;
