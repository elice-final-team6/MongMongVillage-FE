import React from 'react';
import {
  UnderContentContainer,
  ContentInfo,
  ContentButton,
  BTN,
} from './CommunityUnderContent.styles';

const CommunityUnderContent = ({ selectedPost }) => {
  return (
    <UnderContentContainer>
      <ContentInfo>
        <div>{selectedPost.userImg}</div>
        <div>
          <p>{selectedPost.user}</p>
          <p>{selectedPost.time}</p>
        </div>
      </ContentInfo>
      <ContentButton>
        <BTN>수정</BTN>
        <BTN>삭제</BTN>
      </ContentButton>
    </UnderContentContainer>
  );
};

export default CommunityUnderContent;
