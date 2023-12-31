import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '30px')};
  margin: 40px auto;
  padding: 0 10px;
  background: linear-gradient(
    to top,
    var(--main-yellow-color) 40%,
    transparent 30%
  );
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : '26px')};
    margin: 30px auto;
  }

  @media screen and (max-width: 767px) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : '20px')};
    margin: 20px auto;
  }
`;
