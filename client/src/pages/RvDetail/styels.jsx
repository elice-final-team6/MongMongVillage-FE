import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  align-items: center;
`;

export const ReviewDetailContainer = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  padding: 0 50px 0 50px;
`;

export const ReviewTitleContainer = styled.div`
  display: flex;
  border-bottom: solid lightgrey;
  justify-content: space-between;
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
`;

export const ProfileImg = styled.img`
  width: 36px;
  border-radius: 50%;
`;

export const Username = styled.p`
  padding-left: 5px;
  font-weight: 400;
  font-size: 16px;
`;

export const ReviewDate = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: #868688;
  padding-left: 30px;
`;

export const ReviewImg = styled.img`
  height: 700px;
`;

export const MainText = styled.p`
  font-size: 18px;
  padding-top: 50px;
  line-height: 170%;
  word-spacing: 2px;
`;
