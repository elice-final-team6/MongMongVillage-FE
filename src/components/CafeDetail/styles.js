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

export const CafeImgContainer = styled.div`
  width: 80%;
  height: 500px;
  border-radius: 50px;
  margin-bottom: 50px;
`;

export const CafeImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  box-shadow: 0px 0px 15px -6px;
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
`;

export const CafeInfo = styled.article`
  font-size: 20px;
  padding: 15px;
  line-height: 130%;
`;

export const WriteReviewBtn = styled.button`
  display: flex;
  margin-right: 10px;
  padding: 10px 15px;
  font-size: 18px;
  background-color: var(--main-yellow-color);
  border-radius: 16px;

  &:hover {
    background-color: #ffe794;
    transition: 0.5s;
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
  margin: 10px 0;
  background-color: #fef9ea;
  border-radius: 16px;

  .reviewContainer {
    padding: 10px;
  }
`;

export const ReviewStarRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 20px 10px;
  border-bottom: 1px solid lightgrey;
`;
