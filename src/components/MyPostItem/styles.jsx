import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  margin: 15px 0;
  border-bottom: 1px gray solid;
  cursor: pointer;
`;

export const Title = styled.p`
  font-weight: bold;
  padding: 10px 0;
`;

export const Content = styled.p`
  color: gray;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
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
  margin-top: 30px;
  font-size: 14px;
`;

export const Count = styled.span`
  margin-right: 15px;
`;

export const DateText = styled.span`
  font-size: 12px;
`;
