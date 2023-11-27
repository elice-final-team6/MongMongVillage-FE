import React, { useEffect } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import {
  UnderContentContainer,
  ContentInfo,
  ContentButton,
  BTN,
} from './CommunityUnderContent.styles';

const CommunityUnderContent = ({ selectedPost, onEdit, onDelete, post }) => {
  const handleEditClick = () => {
    // 수정 모달을 띄우거나 수정폼을 보여줄 수 있는 작업
    onEdit(post);
  };

  const handleDeleteClick = () => {
    // 삭제 확인 모달을 띄우고 사용자가 확인하면 삭제 진행
    onDelete(post._id);
  };

  // // 시간 포멧 바꿔줌
  // const originalDate =
  //   post?.board?.createdAt instanceof Date
  //     ? post?.board?.createdAt
  //     : new Date(post?.board?.createdAt);

  // const year = originalDate.getFullYear();
  // const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
  // const day = originalDate.getDate().toString().padStart(2, '0');
  // const hours = originalDate.getHours().toString().padStart(2, '0');
  // const minutes = originalDate.getMinutes().toString().padStart(2, '0');
  // const seconds = originalDate.getSeconds().toString().padStart(2, '0');
  // const ampm = originalDate.getHours() >= 12 ? '오후' : '오전';

  // const formattedDate = `${year}. ${month}. ${day}. ${ampm} ${hours}:${minutes}:${seconds}`;

  return (
    <UnderContentContainer>
      <ContentInfo>
        <div>
          {post?.board?.user_id.profilePicture ? (
            <img src={post?.board?.user_id.profilePicture} alt="UserImg" />
          ) : (
            <img
              src={`${`${process.env.PUBLIC_URL}/imges/user.png`}`}
              alt="user_img"
            />
          )}
        </div>
        <div>
          <p className="nickname">{post?.board?.user_id?.nickname}</p>
          <p className="createAt">
            {new Date(post?.board?.createdAt).toLocaleString()}
          </p>
        </div>
      </ContentInfo>
      <ContentButton>
        <BTN onClick={handleEditClick}>
          <p>수정</p>
        </BTN>
        <BTN onClick={handleDeleteClick}>
          <p>삭제</p>
        </BTN>
      </ContentButton>
    </UnderContentContainer>
  );
};

export default CommunityUnderContent;
