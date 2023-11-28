import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: white;
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
  bottom: 314px;
  left: 33px;
  cursor: default;
`;

export const BannerSub = styled.p`
  font-family: 'KOTRAHOPE';
  color: white;
  font-size: 32px;
  text-align: center;
  position: absolute;
  bottom: 259px;
  left: 209px;
  cursor: default;
`;

export const BannerInfo = styled.p`
  color: #00573b;
  font-size: 20px;
  text-align: left;
  position: absolute;
  bottom: 176px;
  left: 149px;
  cursor: default;
`;

export const BannerPhoneNumber = styled.h3`
  color: #00573b;
  font-size: 20px;
  position: absolute;
  bottom: 117px;
  left: 200px;
  cursor: default;
`;
