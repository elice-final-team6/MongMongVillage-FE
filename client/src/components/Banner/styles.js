import styled from 'styled-components';

export const Container = styled.div`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const BannerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BannerImg = styled.img`
  width: 1200px;
  max-width: 1420px;
  border-radius: 50px;
`;

export const BannerName = styled.p`
  font-family: 'KOTRAHOPE';
  color: #00573b;
  font-size: 90px;
  text-align: center;
  position: absolute;
  bottom: 220px;
  left: 33px;
  cursor: default;
`;

export const BannerSub = styled.p`
  font-family: 'KOTRAHOPE';
  color: white;
  font-size: 32px;
  text-align: center;
  position: absolute;
  bottom: 223px;
  left: 209px;
  cursor: default;
`;

export const BannerInfo = styled.p`
  color: #00573b;
  font-size: 20px;
  text-align: left;
  position: absolute;
  bottom: 148px;
  left: 149px;
  cursor: default;
`;

export const BannerPhoneNumber = styled.h3`
  color: #00573b;
  font-size: 20px;
  position: absolute;
  bottom: 94px;
  left: 200px;
  cursor: default;
`;
