import { ProfileImgContainer, ProfileImgItem } from './styles';

const MyProfileImg = ({ imgSrc }) => {
  return (
    <>
      <ProfileImgContainer>
        <ProfileImgItem
          src={imgSrc ?? `${process.env.PUBLIC_URL}/imges/user.png`}
        />
      </ProfileImgContainer>
    </>
  );
};

export default MyProfileImg;
