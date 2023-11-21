import React from 'react';
import { LikeContainer } from './CommunityPostLike.styles';

const CommunityPostLike = ({ like, onClick }) => {
  return (
    <LikeContainer like={like} onClick={onClick}>
      <div>👍</div>
      <p>{like}</p>
    </LikeContainer>
  );
};

export default CommunityPostLike;
