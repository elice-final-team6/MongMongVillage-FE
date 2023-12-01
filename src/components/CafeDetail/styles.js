import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 50px auto;
  border-radius: 50px;
  background-color: rgba(255, 232, 148, 0.3);
  padding: 20px 0 50px 0;
`;

export const CafeDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CafeImg = styled.img`
  width: 80%;
  height: 500px;
  border-radius: 50px;
  box-shadow: 0px 0px 15px -6px;
  object-fit: cover;
  margin-bottom: 50px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 85%;
  padding: 10px;
  .title {
    font-weight: bold;
    font-size: 28px;
  }
  .update {
    color: gray;
  }
`;

export const CafeInfoContainer = styled.article`
  justify-self: center;
  width: 90%;
  .menu {
    line-height: 100%;
  }
`;

export const CafeInfo = styled.p`
  font-size: 20px;
  padding: 15px;
`;

export const WriteReviewBtn = styled.button`
  display: flex;
  margin: 0 10px;
  padding: 10px 15px;
  font-size: 18px;
  background-color: var(--main-yellow-color);
  border-radius: 16px;
  transition: 0.5s;
  align-items: center;

  &:hover {
    background-color: #ffe794;
  }
  svg {
    margin-left: 5px;
  }
`;

export const StarRating = styled.div`
  display: inline;
  font-size: 20px;
`;

export const ReviewNum = styled.h2``;

export const CafeMiniTitle = styled.h3`
  font-size: 20px;
  padding: 5px;
`;

export const InfoMiniContainer = styled.article`
  box-shadow: 0px 0px 10px -6px;
  padding: 20px;
  margin: 20px 0;
  background-color: #fef9ea;
  border-radius: 16px;
  white-space: pre-wrap;
  line-height: 200%;

  .reviewContainer {
    padding: 10px;
  }

  .noReview {
    padding: 50px;
    text-align: center;
    font-weight: bold;
    font-size: large;
  }
`;

export const ReviewStarRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 20px 10px;
  border-bottom: 1px solid lightgrey;
`;
