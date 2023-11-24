import React from 'react';
import {
  PostContainer,
  Category,
  Title,
  MainImg,
  Content,
} from './CommunityPost.styles';

const CommunityPost = ({ selectedPost, post }) => {
  return (
    <PostContainer>
      <Title>
        <Category>{selectedPost?.board?.category}</Category>
        <p>{selectedPost?.board?.title}</p>
      </Title>
      <MainImg>
        {selectedPost?.board?.images.length > 0 ? (
          <img src={selectedPost?.board?.images[0]} alt="ContentImg" />
        ) : (
          <></>
        )}
      </MainImg>
      <Content>{selectedPost?.board?.content}</Content>
    </PostContainer>
  );
};

export default CommunityPost;
