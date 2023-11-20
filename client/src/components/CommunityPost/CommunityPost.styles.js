import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainImg = styled.div`
  margin-top: 40px;
`;

export const Title = styled.h2`
  border-bottom: 2px solid lightgray;
  padding-bottom: 30px;
  margin-top: 0px;
`;
export const Category = styled.p`
  text-align: center;

  background-color: var(--main-yellow-color);
  width: 90px;
  border-radius: 16px;
  padding-top: 4px;
  margin-bottom: 40px;
`;

export const Content = styled.div`
  margin-top: 40px;
  margin-bottom: 50px;
`;
