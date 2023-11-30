import { useState, useEffect } from 'react';
import { LikeContainer } from './CommunityPostLike.styles';
import { usePutBoardLike } from '../../hooks/putBoardLike';
import { FaHeart } from 'react-icons/fa';
import { useGetMyLike } from '../../hooks/getMyLike';
import { redirect } from 'react-router-dom';

const CommunityPostLike = ({ likeCount, setLikeCount, boardId }) => {
  const userId = localStorage.getItem('userId');
  const [islikeClick, setIsLikeClick] = useState(false);
  const { data: myLikes } = useGetMyLike();

  /* 내가 좋아요 한 리스트 불러와서 해당 글을 좋아요 한 글인지 비교 */
  useEffect(() => {
    myLikes?.forEach((item) => {
      if (item?.board_id?._id === boardId) {
        setIsLikeClick(true);
      }
    });
  }, [myLikes, boardId]);

  const { mutate: putBoardLike } = usePutBoardLike(boardId);

  const handleLikeClick = () => {
    putBoardLike();
    setLikeCount(islikeClick ? likeCount - 1 : likeCount + 1);
    setIsLikeClick(!islikeClick);
  };

  return (
    <LikeContainer
      onClick={handleLikeClick}
      islikeclick={islikeClick ? 'true' : 'false'}
    >
      <FaHeart color="red" />
      {likeCount}
    </LikeContainer>
  );
};

export default CommunityPostLike;
