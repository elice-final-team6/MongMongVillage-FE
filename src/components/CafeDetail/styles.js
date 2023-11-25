import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const CafeDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1000px;
  height: 880px;
`;

export const CafeName = styled.p`
  margin: 69px 30px 26px 26px;
  font-size: 32px;
`;

export const CafeImgContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: gray;
  border-radius: 50px;
`;

export const CafeImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

export const CafeInfoContainer = styled.article`
  margin-top: 27px;
  margin-left: 26px;
  border-left: 2px solid black;
  padding-left: 22px;
  width: 100%;
`;

export const CafeInfo = styled.article`
  font-size: 20px;
  padding-top: 15px;
`;

export const WriteReviewBtn = styled.button`
  height: 40px;
  margin-right: 50px;
  padding: 10px 15px;
  font-size: 17px;
  line-height: 1.5;
  background-color: var(--main-yellow-color);
  border-radius: 16px;
  display: flex;

  &:hover {
    background-color: #ffe794;
    transition: 0.5s;
  }
`;

export const StarRating = styled.div`
  gap: 3px;
  align-items: center;
  display: flex;
  font-size: 13px;
  color: var(--main-yellow-color);
  font-size: 20px;
  padding-top: 15px;
`;
