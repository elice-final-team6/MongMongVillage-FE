import {
  Container,
  Content,
  FooterContainer,
  CommunityList,
  LogoContainer,
  ListContainer,
  Info,
  LogoListContainer,
  SnsContainer,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../Logo/Logo.svg';
import { ROUTE } from '../../routes/Routes';

import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaBlogger } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <FooterContainer>
        <LogoListContainer>
          <LogoContainer>
            <LogoSVG width="93px" height="93px" />
            <Content id="bannerText">
              &nbsp;MONGMONG <br /> &nbsp; &nbsp;- VILLAGE-
            </Content>
          </LogoContainer>

          <Info>
            <Content id="info">상호명: 멍멍빌리지 | 대표: 최정윤 </Content>
            <Content id="info">고객센터: mongmonghelp@gmail.com</Content>
            <Content id="info">서비스문의: mongmongv6@gmail.com</Content>
            <Content id="info">
              Copyright 2023 by Team6, Inc, All rights reserved
            </Content>
            <Content id="info">배너 출처: wepik.com</Content>
          </Info>

          <ListContainer>
            <CommunityList>
              <Content
                id="linkTo"
                onClick={() => {
                  navigate(ROUTE.MAIN_PAGE.link);
                  scrollTop();
                }}
              >
                HOME
              </Content>
              <Content
                id="linkTo"
                onClick={() => {
                  navigate(ROUTE.COMMUNITY_PAGE.link);
                  scrollTop();
                }}
              >
                COMMUNITY
              </Content>
              <Content
                id="linkTo"
                onClick={() => {
                  navigate(ROUTE.REVIEW_LIST_PAGE.link);
                  scrollTop();
                }}
              >
                REVIEW
              </Content>
              <Content
                id="linkTo"
                onClick={() => {
                  navigate(ROUTE.CAFE_MAP_PAGE.link);
                  scrollTop();
                }}
              >
                SEARCH CAFE
              </Content>
            </CommunityList>
          </ListContainer>

          <SnsContainer>
            <FaInstagram
              style={{ cursor: 'pointer', transition: '0.5s' }}
              size="36px"
              onMouseOver={(e) =>
                (e.currentTarget.style.color = 'var(--main-yellow-color)')
              }
              onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
            />
            <FaFacebook
              style={{ cursor: 'pointer', transition: '0.5s' }}
              size="36px"
              onMouseOver={(e) =>
                (e.currentTarget.style.color = 'var(--main-yellow-color)')
              }
              onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
            />
            <FaXTwitter
              style={{ cursor: 'pointer', transition: '0.5s' }}
              size="36px"
              onMouseOver={(e) =>
                (e.currentTarget.style.color = 'var(--main-yellow-color)')
              }
              onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
            />
            <FaBlogger
              style={{ cursor: 'pointer', transition: '0.5s' }}
              size="36px"
              onMouseOver={(e) =>
                (e.currentTarget.style.color = 'var(--main-yellow-color)')
              }
              onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
            />
          </SnsContainer>
        </LogoListContainer>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
