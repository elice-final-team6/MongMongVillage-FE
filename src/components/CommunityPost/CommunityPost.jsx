import React, { useEffect, useState } from 'react';
import {
  PostContainer,
  Category,
  Title,
  MainImg,
  Content,
} from './CommunityPost.styles';

const CommunityPost = ({ selectedPost, post }) => {
  const formattedContent = selectedPost?.board?.content.replace(/\n/g, '<br>');
  const [categoryKor, setCategoryKor] = useState('');

  useEffect(() => {
    if (selectedPost?.board?.category === 'info') {
      setCategoryKor('정보글');
    } else if (selectedPost?.board?.category === 'general') {
      setCategoryKor('자유글');
    } else {
      setCategoryKor('질문글');
    }
  }, [selectedPost]);

  return (
    <PostContainer>
      <Title>
        <Category>
          <p>{categoryKor}</p>
        </Category>
        <p className="Title">{selectedPost?.board?.title}</p>
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
