import styled from 'styled-components';

export const ReviewDetailContainer = styled.div`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 30px;
  padding: 20px;
  border-bottom: 1px solid gray;
`;

export const ReviewTitleContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: solid lightgrey;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const ReviewMainSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 100px 0 100px 0;
  align-items: center;
`;

export const TitleStarRaiting = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const StarRaiting = styled.div`
  align-items: center;
  display: flex;

  span {
    margin: 0 5px;
    color: var(--main-yellow-color);
  }
`;

export const ReviewTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin: 10px 0;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  padding: 20px;
  margin: 0 20px;
`;

export const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Username = styled.p`
  padding-left: 5px;
  font-weight: bold;
  font-size: 18px;
`;

export const ReviewDate = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: #868688;
  padding-left: 30px;
`;

export const CafeName = styled.p`
  display: flex;
  padding: 10px;
  align-items: center;
  font-size: 26px;
  font-weight: bold;
  svg {
    margin: 0 5px;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const ReviewImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
`;

export const ReviewImg = styled.img`
  height: 300px;
`;

export const MainText = styled.p`
  font-size: 18px;
  line-height: 170%;
  word-spacing: 2px;
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-items: end;
  justify-content: end;
  gap: 10px;
`;

export const Button = styled.button`
  width: 70px;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  background-color: var(--main-yellow-color);
`;

export const AnotherReviewsContainer = styled.div`
  display: flex;
  width: 1280px;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 20px;
`;
