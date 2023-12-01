import styled from 'styled-components';

export const Container = styled.section`
  height: 300px;
  background-color: none;
`;

export const BestImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s linear;
    transform: scale(1.05);
  }
`;

export const BestInfo = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

export const BestTitle = styled.p`
  font-size: 22px;
  padding: 2px;
  width: 75%;

  text-overflow: ellipsis;
  overflow: hidden;

  overflow-wrap: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  max-height: 1em;
  line-height: 2rem; /* 적절한 줄 높이 설정 */
`;

export const BestWriter = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  font-size: 20px;
  cursor: pointer;
  padding-right: 20px;

  img {
    border-radius: 70%;
    overflow: hidden;
    width: 25px;
    height: 25px;
    padding-right: 7px;
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
