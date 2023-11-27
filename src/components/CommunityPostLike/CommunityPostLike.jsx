import React, { useState, useEffect } from 'react';
import { LikeContainer } from './CommunityPostLike.styles';
import { usePutBoardLike } from '../../hooks/putBoardLike';

const CommunityPostLike = ({ like, selectedPost }) => {
  console.log(like);
  const [islikeClick, setIsLikeClick] = useState(false);
  const boardId = selectedPost?.board?._id;
  const [likeCount, setLikeCount] = useState(like);

  const handleLikeClick = () => {
    setIsLikeClick(!islikeClick);
  };

  const { mutate: putBoardLike } = usePutBoardLike(boardId);

  useEffect(() => {
    if (boardId) {
      putBoardLike(boardId);
      setLikeCount((prevLikeCount) =>
        islikeClick ? prevLikeCount + 1 : prevLikeCount - 1,
      );
    }
  }, [islikeClick]);

  return (
    <LikeContainer
      selectedPost={selectedPost}
      onClick={handleLikeClick}
      islikeClick={islikeClick}
    >
      <div style={{ marginBottom: '14px' }}>❤️</div>
      <p>{islikeClick ? like + 1 : like}</p>
    </LikeContainer>
  );
};

export default CommunityPostLike;
