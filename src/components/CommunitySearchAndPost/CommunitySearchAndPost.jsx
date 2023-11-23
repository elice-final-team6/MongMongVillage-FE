import React, { useRef } from 'react';
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
  const searchInputRef = useRef(null);

  const handleSearchButtonClick = () => {
    handleSearchInputChange(searchInputRef.current.value);
    searchInputRef.current.value = '';
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchInputChange(searchInputRef.current.value);
      searchInputRef.current.value = '';
    }
  };
  return (
    <>
      <SearchAndPostContainer>
        <SearchContainer>
          <SearchInputBox>
            <SearchButton onClick={handleSearchButtonClick}>🔍</SearchButton>
            <SearchInput
              type="text"
              placeholder="커뮤니티 게시글 검색"
              onKeyPress={handleKeyPress}
              ref={searchInputRef}
            />
          </SearchInputBox>
        </SearchContainer>
        <PostBTN onClick={handleNewPostClick}>글작성</PostBTN>
      </SearchAndPostContainer>
    </>
  );
};

export default CommunitySearchAndPost;
