import styled from 'styled-components';

export const CommunityNavContainer = styled.div`
  display: flex;
  margin-top: 30px;
  border-bottom: 2px solid black;
  padding-bottom: 24px;

  max-width: 1280px;
  width: 100%;
`;

export const CommunityNavItem = styled.span`
  width: 25%;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  & > span {
    color: ${(props) => (props.selected ? 'black' : 'gray')};
    font-weight: ${(props) => (props.selected ? '900' : 'normal')};
    background: ${(props) =>
      props.selected
        ? 'linear-gradient(to top, var(--main-yellow-color) 40%, transparent 50%)'
        : 'none'};
  }
`;
