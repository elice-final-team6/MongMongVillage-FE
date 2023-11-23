import React from 'react';
import {
  PostContainer,
  Category,
  Title,
  MainImg,
  Content,
} from './CommunityPost.styles';

const CommunityPost = ({ selectedPost, post }) => {
  // console.log('selectedPost : ', selectedPost);
  // console.log('post : ', post);
  return (
    <PostContainer>
      <Title>
        <Category>{selectedPost.category}</Category>
        {selectedPost.title}
      </Title>
      <MainImg>
        {selectedPost?.images.lenght > 0 ? (
          <img src={selectedPost?.images[0]} alt="ContentImg" />
        ) : (
          <></>
        )}
      </MainImg>
      <Content>{selectedPost.content}</Content>
    </PostContainer>
  );
};

export default CommunityPost;
