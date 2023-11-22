import React from 'react';
import {
  UnderContentContainer,
  ContentInfo,
  ContentButton,
  BTN,
} from './CommunityUnderContent.styles';

const CommunityUnderContent = ({ selectedPost, onEdit, onDelete }) => {
  const handleEditClick = () => {
    // 수정 모달을 띄우거나 수정폼을 보여줄 수 있는 작업
    onEdit(selectedPost);
  };

  const handleDeleteClick = () => {
    // 삭제 확인 모달을 띄우고 사용자가 확인하면 삭제 진행
    onDelete(selectedPost.id);
  };

  return (
    <UnderContentContainer>
      <ContentInfo>
        <div>
          <img src={selectedPost.userImg} />
        </div>
        <div>
          <p>{selectedPost.user}</p>
          <p>{selectedPost.time}</p>
        </div>
      </ContentInfo>
      <ContentButton>
        <BTN onClick={handleEditClick}>수정</BTN>
        <BTN onClick={handleDeleteClick}>삭제</BTN>
      </ContentButton>
    </UnderContentContainer>
  );
};

export default CommunityUnderContent;
