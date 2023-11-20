import { ProfileImgContainer, ProfileImgItem } from './styles';
import { useState } from 'react';

const MyProfileImg = () => {
  const [profileImg] = useState(
    'https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg',
  );

  return (
    <>
      <ProfileImgContainer>
        <ProfileImgItem src={profileImg} />
      </ProfileImgContainer>
    </>
  );
};

export default MyProfileImg;
