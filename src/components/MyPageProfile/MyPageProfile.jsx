import { useState, useEffect } from 'react';
import {
  ProfileContainer,
  MyInfoContainer,
  MyName,
  MyIntroduction,
  MyEmail,
  ImgEditButton,
  MyInfoEditContainer,
  MyInfoEditItemContainer,
  SubmitButton,
  WithdrawalButton,
  WithdrawText,
  CheckButton,
} from './styles';

import { useGetUserInfo } from '../../hooks/getUserInfo';
import { useDeleteUser } from '../../hooks/deleteUser';
import { usePatchUserInfo } from '../../hooks/patchUserInfo';
import { getCheckNickname } from '../../hooks/getCheckNickname';

import { MyProfileImg } from '../MyProfileImg';
import { FaPencil } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';

const MyPageProfile = ({ edit }) => {
  const navigate = useNavigate();

  const [myInfo, setMyInfo] = useState({
    nickname: '',
    introduction: ' ',
    email: ' ',
    profilePicture: '',
  });

  const userId = localStorage.getItem('userId');
  const { isLoading, data: userData } = useGetUserInfo(userId);
  const [preview, setPreview] = useState(myInfo.profilePicture);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('로그인이 필요합니다.');
      navigate(ROUTE.LOGIN_PAGE.link);
    }
  }, []);

  useEffect(() => {
    if (userData) {
      setMyInfo({
        ...myInfo,
        profilePicture: userData.profilePicture,
        nickname: userData.nickname,
        email: userData.email,
        introduction: userData.introduction,
      });
      setPreview(userData.profilePicture);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  /* 회원 탈퇴 */
  const { mutate: deleteUser } = useDeleteUser();

  const handleDeleteUser = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('정말 탈퇴하시겠습니까?')) {
      deleteUser();
    }
  };

  /* 회원 정보 수정 */
  const { mutate: putUser } = usePatchUserInfo(
    myInfo.nickname,
    myInfo.introduction,
    myInfo.profilePicture,
  );

  const handlePutUser = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('회원정보를 수정하시겠습니까?')) {
      putUser();
    }
  };

  /* 프로필 사진 업로드 */
  const handleImgFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const newPhotoUrl = URL.createObjectURL(file);
      setMyInfo({
        ...myInfo,
        profilePicture: file,
      });
      setPreview(newPhotoUrl); // 사용자에게 보여줄 사진
    }
  };

  // 닉네임 중복체크 api
  const NickNameDuplicateCheck = async (e) => {
    e.preventDefault();

    const isDuplicate = await getCheckNickname(myInfo.nickname);

    if (!isDuplicate) {
      alert('사용 가능한 닉네임입니다.');
    } else {
      alert('이미 존재하는 닉네임입니다.');
    }
  };

  return isLoading ? (
    <ProfileContainer>로딩중 . . .</ProfileContainer>
  ) : (
    <ProfileContainer>
      <MyProfileImg imgSrc={preview} />
      {edit && (
        <>
          <ImgEditButton className="input-file-button" htmlFor="input-file">
            사진 수정
            <FaPencil />
          </ImgEditButton>
          <input
            type="file"
            id="input-file"
            style={{ display: 'none' }}
            onChange={handleImgFile}
          />
        </>
      )}

      {edit ? (
        <>
          <MyInfoEditContainer>
            <MyInfoEditItemContainer>
              <label>닉네임</label>
              <input
                value={myInfo.nickname}
                onChange={(e) =>
                  setMyInfo({ ...myInfo, nickname: e.target.value })
                }
              />
              <CheckButton onClick={(e) => NickNameDuplicateCheck(e)}>
                중복확인
              </CheckButton>
            </MyInfoEditItemContainer>
            <MyInfoEditItemContainer>
              <label>소개</label>
              <textarea
                value={myInfo.introduction || ''}
                onChange={(e) =>
                  setMyInfo({ ...myInfo, introduction: e.target.value })
                }
              />
            </MyInfoEditItemContainer>
          </MyInfoEditContainer>
          <SubmitButton onClick={handlePutUser}>수정 완료</SubmitButton>
          <WithdrawalButton onClick={handleDeleteUser}>
            회원 탈퇴
          </WithdrawalButton>
          <WithdrawText>
            회원 탈퇴 시 계정 관련 데이터를 복구할 수 없습니다.
          </WithdrawText>
        </>
      ) : (
        <MyInfoContainer>
          <MyName>{myInfo.nickname}</MyName>
          <MyEmail>{myInfo.email}</MyEmail>
          {myInfo?.introduction?.length > 0 ? (
            <MyIntroduction>{myInfo.introduction}</MyIntroduction>
          ) : (
            <MyIntroduction className="no-introduction">
              회원 정보 수정 버튼을 눌러 소개 글을 추가해보세요!
            </MyIntroduction>
          )}
        </MyInfoContainer>
      )}
    </ProfileContainer>
  );
};

export default MyPageProfile;
