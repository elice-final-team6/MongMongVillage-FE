import React, { useState, useEffect } from 'react';
import { usePostComment } from '../../hooks/postComment';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';
import {
  CommentsContainer,
  PostCommentsContainer,
  BTN,
} from './CommunityComments.styles';

const CommunityComments = ({ selectedPost, post, id, onCommentPosted }) => {
  const [content, setContent] = useState('');
  const [boardId, setBoardId] = useState(id);

  const handleComment = (event) => {
    setContent(event.target.value);
  };

  const { mutate: postComment, data: postCommentData } = usePostComment(
    content,
    boardId,
  );

  // 댓글 작성
  const handlePostComment = () => {
    if (content === '') {
      alert('내용을 입력 후 작성해주세요.');
    } else if (content.length > 200) {
      alert('댓글은 200자를 초과할 수 없습니다.');
    } else {
      postComment();
      onCommentPosted();
      setContent('');
    }
  };

  // 시간 포멧을 바꿔주는 함수
  const handleDate = (time) => {
    const originalDate = time instanceof Date ? time : new Date(time);

    const year = originalDate.getFullYear();
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
    const day = originalDate.getDate().toString().padStart(2, '0');
    const hours = originalDate.getHours().toString().padStart(2, '0');
    const minutes = originalDate.getMinutes().toString().padStart(2, '0');
    const seconds = originalDate.getSeconds().toString().padStart(2, '0');
    const ampm = originalDate.getHours() >= 12 ? '오후' : '오전';

    const formattedDate = `${year}. ${month}. ${day}. ${ampm} ${hours}:${minutes}:${seconds}`;

    return formattedDate;
  };

  // 댓글 새로 작성되면 페이지 다시 띄워주도록
  if (post) {
    return (
      <>
        <CommentsContainer>
          <p>댓글 {post.comments.length}</p>
          <div>
            <input
              placeholder="댓글을 입력해주세요."
              value={content}
              onChange={handleComment}
            />
            <BTN onClick={handlePostComment}>등록</BTN>
          </div>
          <PostCommentsContainer>
            {post.comments.map((com) => (
              <div key={com._id}>
                <p className="ComContent">{com.content}</p>
                <div className="CommentUser">
                  <p>
                    {com.profilePicture ? (
                      <img alt="유저프로필이미지" src={com.profilePicture} />
                    ) : (
                      <img
                        src={`${`${process.env.PUBLIC_URL}/imges/user.png`}`}
                        alt="user_img"
                      />
                    )}
                  </p>
                  <p className="ComUser">{com.user_id.nickname}</p>
                  <p className="ComTime"> {handleDate(com.createdAt)}</p>
                </div>
              </div>
            ))}
          </PostCommentsContainer>
        </CommentsContainer>
      </>
    );
  } else {
    <></>;
  }
};

export default CommunityComments;
