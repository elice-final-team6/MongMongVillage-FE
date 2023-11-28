import styled from 'styled-components';

export const Container = styled.main`
  width: 1280px;
  height: 1150px;
  position: relative;
`;

export const Content = styled.h5`
  font-size: 33px;
  text-align: left;
  margin: 80px 0 35px 17px;
  width: 290px;
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
  position: absolute;
  padding: 86px;
  padding-bottom: 124px;
  width: 1300px;
  left: -100px;
`;

export const DogCafeListItem = styled.section`
  height: 300px;
  background-color: none;
`;

export const DogCafeListItemImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    transition: all 0.2s linear;
    transform: scale(1.1);
  }
`;

export const DogCafeInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
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
