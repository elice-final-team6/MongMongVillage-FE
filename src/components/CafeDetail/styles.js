import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const CafeDetailContainer = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 890px;
`;

export const CafeName = styled.h2`
  margin: 69px 30px 26px 26px;
  margin-left: auto;
  margin-right: auto;
  font-size: 55px;
`;

export const CafeImgContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 50px;
`;

export const CafeImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  box-shadow: 0px 0px 17px -6px;
`;

export const CafeInfoContainer = styled.article`
  justify-self: center;
  width: 90%;
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

export const StarRatingBox = styled.div`
  gap: 3px;
  align-items: center;
  display: flex;
  font-size: 13px;
  font-size: 20px;
  padding-top: 15px;
`;

export const StarRating = styled.div`
  color: black;
  display: inline;
  padding-right: 3px;
`;
export const ReviewNum = styled.h2``;

export const CafeMiniTitle = styled.h3`
  font-size: 20px;
`;

export const InfoMiniContainer = styled.article`
  box-shadow: 0px 0px 17px -6px;
  padding: 20px;
  margin-top: 15px;
  background: #fef9ea;
  border-radius: 16px;
`;

export const ReviewContainer = styled.article`
  margin-bottom: 50px;
`;

export const ReviewStarRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0px 13px 11px;
  border-bottom: 1px solid lightgrey;
`;
