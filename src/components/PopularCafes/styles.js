import styled from 'styled-components';

export const Container = styled.main`
  width: 1280px;
  height: 934px;
`;

export const Content = styled.p`
  font-size: 33px;
  text-align: left;
  margin: 62px 0 35px 17px;
`;

export const DogCafeList = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  grid-row-gap: 120px;
`;

export const DogCafeListItem = styled.section`
  height: 300px;
  background-color: none;
`;

export const DogCafeListItemImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s linear;
    transform: scale(1.1);
  }
`;

export const DogCafeInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DogCafeListItemTitle = styled.p`
  padding: 20px 0 8px 8px;
  font-size: 23px;
  cursor: pointer;
`;

export const DogCafeListItemRating = styled.p`
  padding: 3px 25px 0 8px;
  font-size: 18px;
  color: var(--main-yellow-color);
`;
