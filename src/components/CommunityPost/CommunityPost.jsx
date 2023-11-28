import React from 'react';
import {
  PostContainer,
  Category,
  Title,
  MainImg,
  Content,
} from './CommunityPost.styles';

const CommunityPost = ({ selectedPost, post }) => {
  const formattedContent = selectedPost?.board?.content.replace(/\n/g, '<br>');

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
      <Content dangerouslySetInnerHTML={{ __html: formattedContent }} />
    </PostContainer>
  );
};

export default CommunityPost;
