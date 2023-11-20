import React from 'react';
import {
  PostContainer,
  Category,
  Title,
  MainImg,
  Content,
} from './CommunityPost.styles';

const CommunityPost = ({ selectedPost }) => {
  return (
    <PostContainer>
      <Category>{selectedPost.category}</Category>
      <Title>{selectedPost.title}</Title>
      <MainImg>{selectedPost.mainImg}</MainImg>
      <Content>{selectedPost.content}</Content>
    </PostContainer>
  );
};

export default CommunityPost;
