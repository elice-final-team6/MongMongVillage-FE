import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  margin: 15px 0;
  border-bottom: 1px gray solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const LeftContainer = styled.div`
  display: flex;
`;

export const Title = styled.p`
  font-weight: bold;
  width: 200px;
  text-align: center;
`;

export const Content = styled.p`
  color: gray;
  width: 500px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  white-space: break-spaces;
`;

export const Rating = styled.span`
  color: var(--main-yellow-color);
`;

export const DateText = styled.span`
  font-size: 12px;
`;
