import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainImg = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 20px;

  img {
    height: 300px;
    margin: 10px;
  }

  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid lightgray;
  padding-bottom: 20px;
`;

export const Category = styled.span`
  background-color: var(--main-yellow-color);
  align-self: center;
  padding: 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  margin-right: 20px;
`;

export const Content = styled.div`
  margin: 12px 0;
  font-size: 18px;
  line-height: 1.5;
`;
