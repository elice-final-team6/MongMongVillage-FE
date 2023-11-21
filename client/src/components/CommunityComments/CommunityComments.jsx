import React from 'react';
import {
  CommentsContainer,
  PostCommentsContainer,
  BTN,
} from './CommunityComments.styles';

const CommunityComments = ({ selectedPost }) => {
  return (
    <>
      <CommentsContainer>
        <p>댓글 {selectedPost.comment.length}</p>
        <div>
          <input placeholder="댓글을 입력해주세요." />
          <BTN>등록</BTN>
        </div>
        <PostCommentsContainer>
          {selectedPost.comment.map((com) => (
            <div key={com.id}>
              <div className="CommentUser">
                <p>
                  <img src={com.userImg} />
                </p>
                <p className="ComTitle">{com.writer}</p>
              </div>
              <p className="ComText">{com.text}</p>
              <p className="ComTime">{com.time}</p>
            </div>
          ))}
        </PostCommentsContainer>
      </CommentsContainer>
    </>
  );
};

export default CommunityComments;
