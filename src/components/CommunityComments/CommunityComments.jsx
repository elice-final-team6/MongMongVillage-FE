import React, { useState, useEffect } from 'react';
import { usePostComment } from '../../hooks';
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
                  <p className="ComTime"> {com.createdAt}</p>
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
