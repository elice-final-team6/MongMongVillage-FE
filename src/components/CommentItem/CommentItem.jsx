import {
  CommentBottomContainer,
  Container,
  CommentTopContainer,
  ButtonContainer,
  EditInput,
} from './styles';

import { getRelativeTime } from '../../libs/getRelativeTime';
import { useDeleteComment } from '../../hooks/deleteComment';
import { usePatchComment } from '../../hooks/patchComment';
import { useState } from 'react';

const CommentItem = ({ item, postId }) => {
  const userId = localStorage.getItem('userId');
  const role = localStorage.getItem('role');

  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState(item.content);

  /* 댓글 수정 */
  const { mutate: patchComment } = usePatchComment(item._id, postId, content);
  const handlePatchComment = () => {
    patchComment();
    setEdit(!edit);
  };

  /* 댓글 삭제 */
  const { mutate: deleteComment } = useDeleteComment(item._id, postId);

  const handleDeleteComment = (e) => {
    console.log(e);
    e.preventDefault();
    deleteComment();
  };

  /* 수정 모드 토글 함수 */
  const toggleEdit = () => {
    setEdit(!edit);
  };
  return (
    <Container>
      <CommentTopContainer>
        <div>
          <img
            alt="user_img"
            src={
              item?.user_id?.profilePicture ??
              `${process.env.PUBLIC_URL}/imges/user.webp`
            }
          />
          <span className="user">{item?.user_id?.nickname}</span>
        </div>
        <span className="time">{getRelativeTime(item.createdAt)}</span>
      </CommentTopContainer>
      <CommentBottomContainer>
        {edit ? (
          <form onSubmit={handlePatchComment}>
            <EditInput
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <ButtonContainer>
              <button type="submit" onClick={handlePatchComment}>
                수정
              </button>
              <button className="cancel" onClick={toggleEdit}>
                취소
              </button>
            </ButtonContainer>
          </form>
        ) : (
          <>
            <p className="content">{content}</p>
            <ButtonContainer>
              {item?.user_id?._id === userId && (
                <button onClick={toggleEdit}>수정</button>
              )}
              {role === 'ADMIN' || item?.user_id?._id === userId ? (
                <button onClick={handleDeleteComment}>삭제</button>
              ) : (
                <></>
              )}
            </ButtonContainer>
          </>
        )}
      </CommentBottomContainer>
    </Container>
  );
};

export default CommentItem;
