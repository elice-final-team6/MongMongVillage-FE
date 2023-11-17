import styled from 'styled-components';

export const Container = styled.main`
  width: 1280px;
  height: 800px;
`;

export const Content = styled.p`
  font-size: 33px;
  text-align: left;
  margin: 35px 0 35px 17px;
`;

export const DogCafeList = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;

export const DogCafeListItem = styled.section`
  height: 300px;
  background-color: gray;
`;

export const DogCafeListItemImg = styled.img``;

export const DogCafeListItemTitle = styled.p``;

export const DogCafeListItemWriter = styled.p``;
