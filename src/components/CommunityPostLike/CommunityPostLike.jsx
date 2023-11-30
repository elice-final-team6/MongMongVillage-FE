import React, { useState, useEffect } from 'react';
import { LikeContainer } from './CommunityPostLike.styles';
import { usePutBoardLike } from '../../hooks/putBoardLike';
import { FaHeart } from 'react-icons/fa';

const CommunityPostLike = ({ like, selectedPost }) => {
  const [islikeClick, setIsLikeClick] = useState(false);
  const boardId = selectedPost?.board?._id;
  const [likeCount, setLikeCount] = useState(like);
  const [userId, setUserId] = useState(null);
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  const handleLikeClick = () => {
    if (userId) {
      setIsLikeClick(!islikeClick);
    } else {
      setShowLoginAlert(true);
    }
  };

  const { mutate: putBoardLike } = usePutBoardLike(boardId);

  useEffect(() => {
    setUserId(localStorage.getItem('userId'));

    if (boardId && showLoginAlert) {
      alert('로그인 후 좋아요 기능을 이용해주세요.');
      setShowLoginAlert(false);
    }

    if (boardId && islikeClick) {
      putBoardLike(boardId);
      setLikeCount((prevLikeCount) => prevLikeCount + 1);
    }

    if (boardId && !islikeClick) {
      setLikeCount((prevLikeCount) => prevLikeCount - 1);
    }
  }, [boardId, islikeClick, putBoardLike, showLoginAlert]);

  return (
    <LikeContainer onClick={handleLikeClick} islikeclick={islikeClick}>
      <div style={{ marginBottom: '14px' }}>
        <FaHeart color="red" />
      </div>
      {userId !== null ? <p>{islikeClick ? like + 1 : like}</p> : <>{like}</>}
    </LikeContainer>
  );
};

export default CommunityPostLike;
