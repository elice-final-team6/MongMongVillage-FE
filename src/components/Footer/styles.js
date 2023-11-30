import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 188px;
  display: flex;
`;

export const FooterContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-left: 146px;
`;

export const LogoListContainer = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr 0.7fr 1.25fr;
  align-items: center;
`;

export const LogoContainer = styled.section`
  margin: 0;
  display: inline-block;
  position: relative;
  border-right: 1px solid gray;
  width: 230px;
  height: 100%;
`;

export const ListContainer = styled.section`
  margin: 0;
  display: flex;
  align-items: center;
  padding-top: 4px;
`;

export const CommunityList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 24px;
  width: 100%;
  border-right: 1px solid gray;
`;

export const Info = styled.section`
  padding-left: 39px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  line-height: 9px;
  border-right: 1px solid gray;
  width: 480px;
  justify-content: center;
  height: 100%;
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

export const SnsContainer = styled.section`
  padding-left: 36px;
  display: grid;
  grid-template-columns: 0.3fr 0.5fr;
  grid-gap: 23px;
`;

export const SnsIcon = styled.article`
  cursor: pointer;

  &:hover {
    color: var(--main-yellow-color);
    transition: 0.5s;
  }
`;
