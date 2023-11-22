import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainImg = styled.div`
  margin-top: 40px;
`;

export const Title = styled.h2`
  font-size: 24px;
  border-bottom: 2px solid lightgray;
  padding-bottom: 30px;
  margin-top: 0px;
`;

export const Category = styled.span`
  background-color: var(--main-yellow-color);
  padding: 10px;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 500;
`;

export const Content = styled.div`
  margin: 50px 0;
  font-size: 18px;
  line-height: 1.5;
`;
