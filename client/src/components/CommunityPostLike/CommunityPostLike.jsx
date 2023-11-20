import React from 'react';
import { LikeContainer } from './CommunityPostLike.styles';

const CommunityPostLike = ({ likeCount, onClick }) => {
  return (
    <LikeContainer likeCount={likeCount} onClick={onClick}>
      <div>👍</div>
      <p>{likeCount}</p>
    </LikeContainer>
  );
};

export default CommunityPostLike;
