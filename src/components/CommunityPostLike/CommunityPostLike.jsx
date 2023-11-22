import React from 'react';
import { LikeContainer } from './CommunityPostLike.styles';

const CommunityPostLike = ({ like, onClick, likeclick }) => {
  return (
    <LikeContainer likeclick={String(likeclick)} onClick={onClick}>
      <div>👍</div>
      <p>{like}</p>
    </LikeContainer>
  );
};

export default CommunityPostLike;
