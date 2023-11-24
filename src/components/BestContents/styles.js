import styled from 'styled-components';

export const Container = styled.main`
  padding-top: 54px;
  width: 1280px;
  height: 1062px;
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

export const DogCafeItemInfo = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const DogCafeListItemTitle = styled.p`
  padding: 20px 0 8px 8px;
  font-size: 23px;
  cursor: pointer;
`;

export const DogCafeListItemWriter = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  font-size: 20px;
  cursor: pointer;
  padding-right: 20px;

  img {
    border-radius: 70%;
    overflow: hidden;
    width: 25px;
    height: 25px;
    padding-right: 7px;
  }
`;

export const LoadingContainer = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

export const ErrorContainer = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;
