import React from 'react';
import {
  CommentsContainer,
  PostCommentsContainer,
  BTN,
} from './CommunityComments.styles';

const CommunityComments = ({ selectedPost, post }) => {
  if (post) {
    return (
      <>
        <CommentsContainer>
          <p>댓글 {post.comments.length}</p>
          <div>
            <input placeholder="댓글을 입력해주세요." />
            <BTN>등록</BTN>
          </div>
          <PostCommentsContainer>
            {post.comments.map((com) => (
              <div key={com._id}>
                <p className="ComContent">{com.content}</p>
                <div className="CommentUser">
                  <p>
                    <img src={1} alt="user-img" />
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
