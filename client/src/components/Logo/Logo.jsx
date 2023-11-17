import { ReactComponent as LogoSVG } from './Logo.svg';

import styled from 'styled-components';

const StyledLogo = styled.div`
  margin-left: 20%;
  cursor: pointer;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <LogoSVG width="95px" height="95px" />
    </StyledLogo>
  );
};

export default Logo;
