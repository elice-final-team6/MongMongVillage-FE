import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

export const ReviewListContainer = styled.div`
  width: 1280px !important;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  background-color: ;
  padding-top: 20px;
  border-top: solid 3px var(--main-yellow-color);
`;

export const ReviewContainer = styled.div`
    width: 1280px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding: 20px 20px 8px 0;
  border-bottom: solid 1px lightgrey;
`;

export const TitlePreviewContainer = styled.div`
  padding-right: 30px;
`;

export const ReviewTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

export const Preview = styled.p`
  font-weight: 400;
  color: #868688;
  font-size: 13px;
`;

export const PreviewImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ReviewSub = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
`;

export const ReviewMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 20px;
  border-radius: 50%;
`;

export const Username = styled.p`
  padding-left: 5px;
  font-weight: 400;
  font-size: 13px;
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
  font-size: 13px;
`;

export const RadioButtonContainer = styled.div`
    display: flex;
    padding: 20px 0 40px 0;
    gap: 50px;
    font-size: 16px;

    [type="radio"] {
        margin-right: 5px;
        vertical-align: middle;
        appearance: none;
        border: 2px solid var(--main-yellow-color);
        border-radius: 50%;
        width: 20px;
        height: 20px;
    }

    [type="radio"]:checked {
        border: 0.4em solid var(--main-yellow-color);
    }
`;

export const PageButtonContainer = styled.div`
    gap: 8px;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 50px 0 50px 0;
    
    button {
        width: 30px;
        height: 30px;
        font-size: 20px;
        -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border: none;
  background-color: transparent;
  cursor:pointer;
    }
`;