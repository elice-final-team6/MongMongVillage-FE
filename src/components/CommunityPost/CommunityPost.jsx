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
      <Title>
        <Category>{selectedPost.category}</Category>
        {selectedPost.title}
      </Title>
      <MainImg>
        <img src={selectedPost.mainImg} alt="post_image" />
      </MainImg>
      <Content>{selectedPost.content}</Content>
    </PostContainer>
  );
};

export default CommunityPost;
