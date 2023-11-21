import styled from 'styled-components';

export const Container = styled.div`
  height: 230px;
  border-bottom: 2px solid lightgray;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const TopContainer = styled.div`
  margin-top: 20px;
  span {
    font-weight: bold;
  }
`;

export const Title = styled.span`
  font-size: 18px;
`;

export const Category = styled.span`
  background-color: var(--main-yellow-color);
  padding: 10px;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 12px;
`;

export const Content = styled.div`
  padding-top: 10px;
  margin: 30px 30px 0 0;
  font-size: 16px;
  width: 100%; // 컨테이너의 너비 설정

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

export const PostImg = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 15px;
`;

export const Count = styled.span`
  display: flex;
  align-items: center;
  margin: 0 10px;
  svg {
    margin-right: 5px;
  }
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

export const DateText = styled.span`
  font-size: 12px;
  color: gray;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;
