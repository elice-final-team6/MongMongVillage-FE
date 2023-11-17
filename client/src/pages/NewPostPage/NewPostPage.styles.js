import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  font-family: 'GmarketSansMedium', sans-serif;

  max-width: 1280px; /* 추가 */
  width: 100%; /* 추가 */
  margin-left: auto; /* 추가 */
  margin-right: auto; /* 추가 */
`;

export const NewPostContainer = styled.div`
  margin-top: 160px;
  width: 100%;
`;

export const CategorySelector = styled.select`
  width: 16%;
  padding: 8px;
  margin-bottom: 16px;
  font-size: 16px;
  border-radius: 4px;
  border: 3px solid lightgrey;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1%;
  margin-bottom: 16px;
  font-size: 16px;
  border-radius: 4px;
  border: 3px solid lightgrey;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 1%;
  height: 300px;
  margin-top: 20px;
  margin-bottom: 100px;
  font-size: 16px;
  border-radius: 4px;
  border: 3px solid lightgrey;
`;

export const ImageUploadContainer = styled.div`
  border: 2px dashed #ccc;
  background-color: lightyellow;
  height: 120px;
  padding: 20px;
  margin-bottom: 60px;
  cursor: pointer;
  border-radius: 8px;

  /* Flexbox를 사용하여 세로 및 가로 중앙 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ImageUploadText = styled.p`
  margin: 0;
`;

export const PostBTN = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 400px;
  font-size: 20px;
  font-weight: bold;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 60px;
  border: none;
  background-color: var(--main-yellow-color);

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 160px;
`;
