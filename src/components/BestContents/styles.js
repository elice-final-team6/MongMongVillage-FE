import styled from 'styled-components';

export const Container = styled.main`
  padding-top: 54px;
  width: 90%;
  height: 1150px;
`;

export const Content = styled.h5`
  font-size: 33px;
  margin: 35px 0 35px 17px;
  width: 206px;
  background: linear-gradient(
    to top,
    var(--main-yellow-color) 35%,
    transparent 30%
  );
`;

export const DogCafeList = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  grid-row-gap: 120px;
  border-radius: 50px;
  background: #ffe7bd;
  padding: 86px;
  padding-bottom: 124px;
`;

export const DogCafeListItem = styled.section`
  height: 300px;
  background-color: none;
`;

export const DogCafeListItemImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s linear;
    transform: scale(1.05);
  }
`;

export const DogCafeItemInfo = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
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

export const ErrorContainer = styled.div`
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;
