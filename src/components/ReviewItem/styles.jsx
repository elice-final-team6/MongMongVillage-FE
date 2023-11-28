import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 10px;
  border-bottom: solid 1px lightgrey;
  cursor: pointer;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  height: 130px;
  justify-content: space-between;
`;

export const ReviewTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  padding: 10px 0;
`;

export const CafeName = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: gray;
  cursor: pointer;
  display: flex;
  padding: 5px 0;
  align-items: center;
  &:hover {
    opacity: 0.5;
  }
  svg {
    margin-right: 5px;
  }
`;

export const Content = styled.p`
  padding: 10px 0;
  font-size: 16px;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  white-space: normal;

  max-height: 2.4em;
  line-height: 1.2em;
`;

export const PreviewImgContainer = styled.div`
  height: 130px;
  display: flex;
`;

export const PreviewImg = styled.img`
  width: 130px;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  border-radius: 15px;
  margin: 0 5px;
`;

export const BottomContainer = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  gap: 20px;
`;

export const Writer = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: bold;
    margin: 0 5px;
  }

  img {
    border-radius: 70%;
    overflow: hidden;
    width: 25px;
    height: 25px;
  }
`;

export const ReviewDate = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: #868688;
`;

export const StarRating = styled.div`
  gap: 3px;
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 900;
  .ratingStar {
    color: var(--main-yellow-color);
  }
  .ratingValue {
    color: gray;
    font-size: 14px;
  }
`;
