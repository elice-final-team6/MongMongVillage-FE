import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 500px 200px 200px;
  padding: 20px;
  margin: 15px 0;
  border-bottom: 1px gray solid;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.p`
  display: flex;
  width: 200px;
  font-weight: bold;
  text-align: center;

  svg {
    margin: 0 10px;
  }
`;

export const Content = styled.p`
  line-height: 1.5;
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
