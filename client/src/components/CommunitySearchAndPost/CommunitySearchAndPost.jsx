import React from 'react';
import {
  SearchAndPostContainer,
  SearchContainer,
  SearchInputBox,
  PostBTN,
  SearchButton,
  SearchInput,
} from './CommunitySearchAndPost.styles';

const CommunitySearchAndPost = ({
  handleSearchInputChange,
  handleNewPostClick,
}) => {
  return (
    <>
      <SearchAndPostContainer>
        <SearchContainer>
          <SearchInputBox>
            <SearchButton onClick={handleSearchInputChange}>🔍</SearchButton>
            <SearchInput
              type="text"
              placeholder="커뮤니티 게시글 검색"
              onChange={handleSearchInputChange}
            />
          </SearchInputBox>
        </SearchContainer>
        <PostBTN onClick={handleNewPostClick}>글작성</PostBTN>
      </SearchAndPostContainer>
    </>
  );
};

export default CommunitySearchAndPost;
