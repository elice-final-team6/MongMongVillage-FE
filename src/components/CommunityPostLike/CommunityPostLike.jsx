import React, { useState, useEffect } from 'react';
import { LikeContainer } from './CommunityPostLike.styles';
import { usePutBoardLike } from '../../hooks/putBoardLike';

const CommunityPostLike = ({ like, selectedPost }) => {
  const [islikeClick, setIsLikeClick] = useState(false);
  const boardId = selectedPost?.board?._id;
  const [likeCount, setLikeCount] = useState(like);
  const [userId, setUserId] = useState(null);

  const handleLikeClick = () => {
    if (userId) {
      setIsLikeClick(!islikeClick);
    } else {
      alert('로그인 후 좋아요 기능을 이용해주세요.');
    }
  };

  const { mutate: putBoardLike } = usePutBoardLike(boardId);

  useEffect(() => {
    setUserId(localStorage.getItem('userId'));

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
      {userId !== null ? <p>{islikeClick ? like + 1 : like}</p> : <>{like}</>}
    </LikeContainer>
  );
};

export default CommunityPostLike;
