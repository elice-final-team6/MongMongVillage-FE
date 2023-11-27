import React, { useState, useEffect } from 'react';
import { LikeContainer } from './CommunityPostLike.styles';
import { usePutBoardLike } from '../../hooks/putBoardLike';

const CommunityPostLike = ({ like, selectedPost }) => {
  const [islikeClick, setIsLikeClick] = useState(false);
  const boardId = selectedPost?.board?._id;

  const { mutate: putBoardLike } = usePutBoardLike(boardId);

  useEffect(() => {
    if (boardId) {
      putBoardLike(boardId);
    }
  }, [islikeClick]);

  const handleLikeClick = () => {
    setIsLikeClick(!islikeClick);
  };

  return (
    <LikeContainer
      selectedPost={selectedPost}
      onClick={handleLikeClick}
      islikeClick={islikeClick}
    >
      <div style={{ marginBottom: '14px' }}>❤️</div>
      <p>{selectedPost?.board?.like_count}</p>
    </LikeContainer>
  );
};

export default CommunityPostLike;
