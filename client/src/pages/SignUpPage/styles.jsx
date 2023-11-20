import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  margin: 150px auto;
`;

export const Title = styled.h1`
  font-size: 26px;
  text-align: center;
  margin: 20px 0;
`;

export const CheckButton = styled.button`
  border: none;
  background-color: lightgray;
  border-radius: 20px;
  margin-left: 10px;
  width: 25%;
  height: min-content;
  padding: 10px;
`;

export const SubmitButton = styled.button`
  background-color: var(--main-yellow-color);
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  padding: 10px;
  width: 100%;
  margin: 30px 0;
`;

export const InputContainer = styled.div`
  width: 100%;
`;

export const AuthInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthInput = styled.input`
  width: 100%;
  padding: 10px 0 10px 10px;
  margin: 10px 0;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid gray;
`;

export const Text = styled.p`
  font-size: 12px;
  margin: 0 20px;
  color: green;
  &.warning {
    color: red;
  }
`;
