import React from 'react';
import {
  PostContainer,
  Category,
  Title,
  MainImg,
  Content,
} from './CommunityPost.styles';

const CommunityPost = ({ selectedPost, post }) => {
  console.log('선택 게시글 : ', selectedPost);
  return (
    <PostContainer>
      <Title>
        <Category>{selectedPost?.board?.category}</Category>
        <p>{selectedPost?.board?.title}</p>
      </Title>
      <MainImg>
        {selectedPost?.board?.images.length > 0 ? (
          selectedPost?.board?.images?.map((image, index) => (
            <img key={image} src={image} alt={`${index}.img`} />
          ))
        ) : (
          <></>
        )}
      </MainImg>
      <Content>{selectedPost?.board?.content}</Content>
    </PostContainer>
  );
};

export default CommunityPost;
