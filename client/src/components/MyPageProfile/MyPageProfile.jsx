import { useState } from 'react';
import {
  ProfileContainer,
  MyInfoContainer,
  MyName,
  MyDescription,
  MyEmail,
  ImgEditButton,
  MyInfoEditContainer,
  MyInfoEditItemContainer,
  SubmitButton,
  WithdrawalButton,
  WithdrawText,
} from './styles';
import { MyProfileImg } from '../MyProfileImg';
import { FaPencil } from 'react-icons/fa6';

const MyPageProfile = ({ edit }) => {
  const [myInfo, setMyInfo] = useState({
    name: '엘리스',
    description: '강아지 두마리 견주입니다.\n잘 부탁 드려요.',
    email: 'elice@google.com',
  });

  return (
    <ProfileContainer>
      <MyProfileImg />
      {edit && (
        <ImgEditButton>
          사진 수정
          <FaPencil />
        </ImgEditButton>
      )}

      {edit ? (
        <>
          <MyInfoEditContainer>
            <MyInfoEditItemContainer>
              <label>닉네임</label>
              <input
                value={myInfo.name}
                onChange={(e) =>
                  setMyInfo({
                    email: myInfo.email,
                    description: myInfo.description,
                    name: e.target.value,
                  })
                }
              />
            </MyInfoEditItemContainer>
            <MyInfoEditItemContainer>
              <label>소개</label>
              <textarea
                value={myInfo.description}
                onChange={(e) =>
                  setMyInfo({
                    email: myInfo.email,
                    name: myInfo.name,
                    description: e.target.value,
                  })
                }
              />
            </MyInfoEditItemContainer>

            <MyInfoEditItemContainer>
              <label>이메일</label>
              <input
                value={myInfo.email}
                onChange={(e) =>
                  setMyInfo({
                    name: myInfo.name,
                    description: myInfo.description,
                    email: e.target.value,
                  })
                }
              />
            </MyInfoEditItemContainer>
          </MyInfoEditContainer>
          <SubmitButton>수정 완료</SubmitButton>
          <WithdrawalButton>회원 탈퇴</WithdrawalButton>
          <WithdrawText>
            회원 탈퇴 시 계정 관련 데이터를 복구할 수 없습니다.
          </WithdrawText>
        </>
      ) : (
        <MyInfoContainer>
          <MyName>{myInfo.name}</MyName>
          <MyDescription>{myInfo.description}</MyDescription>
          <MyEmail>{myInfo.email}</MyEmail>
        </MyInfoContainer>
      )}
    </ProfileContainer>
  );
};

export default MyPageProfile;
