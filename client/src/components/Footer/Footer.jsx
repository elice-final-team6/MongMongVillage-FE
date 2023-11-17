import {
  Container,
  Content,
  FooterContainer,
  CommunityList,
  LogoContainer,
  ListContainer,
  Info,
  LogoListContainer,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../Logo/Logo.svg';

const Footer = () => {
  const navigate = useNavigate();

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

          <ListContainer>
            <CommunityList>
              <Content id="listTitle">커뮤니티</Content>
              <Content id="linkTo" onClick={() => navigate('/')}>
                자유글
              </Content>
              <Content id="linkTo" onClick={() => navigate('/')}>
                정보글
              </Content>
              <Content id="linkTo" onClick={() => navigate('/')}>
                질문글
              </Content>
            </CommunityList>
            <CommunityList>
              <Content id="listTitle">커뮤니티</Content>
              <Content id="linkTo" onClick={() => navigate('/')}>
                자유글
              </Content>
              <Content id="linkTo" onClick={() => navigate('/')}>
                정보글
              </Content>
              <Content id="linkTo" onClick={() => navigate('/')}>
                질문글
              </Content>
            </CommunityList>
            <CommunityList>
              <Content id="listTitle">커뮤니티</Content>
              <Content id="linkTo" onClick={() => navigate('/')}>
                자유글
              </Content>
              <Content id="linkTo" onClick={() => navigate('/')}>
                정보글
              </Content>
              <Content id="linkTo" onClick={() => navigate('/')}>
                질문글
              </Content>
            </CommunityList>
            <CommunityList>
              <Content id="listTitle">커뮤니티</Content>
              <Content id="linkTo" onClick={() => navigate('/')}>
                자유글
              </Content>
              <Content id="linkTo" onClick={() => navigate('/')}>
                정보글
              </Content>
              <Content id="linkTo" onClick={() => navigate('/')}>
                질문글
              </Content>
            </CommunityList>
          </ListContainer>
        </LogoListContainer>
        <Info>
          <Content id="info">이메일: aaaa@gmail.com</Content>
          <Content id="info">전화 번호: 000-000-000</Content>
          <Content id="info">6팀</Content>
          <Content id="info">배너 출처: wepik.com</Content>
        </Info>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
