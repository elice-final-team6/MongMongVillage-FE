import styled from 'styled-components';

export const Container = styled.main`
  height: 1150px;
  width: 90%;
`;

export const Content = styled.h5`
  font-size: 33px;
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
  padding: 86px;
  padding-bottom: 124px;
  margin: 0 auto;
`;

export const DogCafeListItem = styled.section`
  height: 300px;
  background-color: none;
  cursor: pointer;
`;

export const DogCafeListItemImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  object-fit: cover;

  &:hover {
    transition: all 0.2s linear;
    transform: scale(1.05);
  }
`;

export const DogCafeInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

export const DogCafeListItemTitle = styled.span`
  padding: 20px 0 8px 8px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

export const DogCafeListItemRating = styled.span`
  font-size: 18px;
  span {
    padding: 0 5px;
    margin-right: 30px;
    color: var(--main-yellow-color);
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
