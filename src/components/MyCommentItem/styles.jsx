import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 15px 0;
  border-bottom: 1px gray solid;
  cursor: pointer;
`;

export const Content = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  white-space: break-spaces;

  svg {
    width: 10px;
    margin-right: 5px;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const DateText = styled.p`
  margin: 10px 0;
  font-size: 12px;
  color: gray;
`;
