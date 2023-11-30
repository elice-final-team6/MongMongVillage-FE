import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainImg = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;

  display: flex;
  justify-content: center;

  img {
    margin-top: 8px;
    margin-bottom: 8px;
    min-width: 500px;
    border-radius: 4px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  display: flex;
  border-bottom: 2px solid lightgray;
  padding-bottom: 30px;
  margin-top: 0px;

  p {
    padding-top: 6px;
  }

  .Title {
    margin-top: 4px;
  }
`;

export const Category = styled.span`
  background-color: var(--main-yellow-color);
  padding: 10px;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 500;

  p {
    margin-top: 0px;
  }
`;

export const Content = styled.div`
  margin: 12px 0;
  font-size: 18px;
  line-height: 1.5;
`;
