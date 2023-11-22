import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 224px;
`;

export const FooterContainer = styled.div`
  width: 1000px;
  margin: auto;
  padding: 20px;
  padding-bottom: 0;
`;

export const LogoListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr;
`;

export const LogoContainer = styled.span`
  margin: 0;
  display: inline-block;
  position: relative;
`;

export const ListContainer = styled.span`
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
`;

export const CommunityList = styled.span`
  display: inline-block;
  padding: 0 35px;
`;

export const Info = styled.span`
  padding: 35px 15px 0 15px;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 10px 0;

  ${(props) =>
    props.id === 'bannerText' &&
    `
    text-align: left;
    display: inline-block;
    position: absolute;
    top: 18px;
    left: 70px;
    `};

  ${(props) =>
    props.id === 'linkTo' &&
    `
    cursor: pointer;
    &:hover {
      color: var(--main-yellow-color);
      transition: 0.5s;
    }
    `};

  ${(props) =>
    props.id === 'listTitle' &&
    `
    color: #949494;
    `};
`;
