import React from 'react';
import { LikeContainer } from './CommunityPostLike.styles';

const CommunityPostLike = ({ like, onClick, likeClick }) => {
  return (
    <LikeContainer like={like} onClick={onClick} likeClick={likeClick}>
      <div>👍</div>
      <p>{like}</p>
    </LikeContainer>
  );
};

export default CommunityPostLike;
