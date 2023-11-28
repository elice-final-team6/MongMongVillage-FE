import React, { useRef } from 'react';
import {
  SearchAndPostContainer,
  SearchContainer,
  SearchInputBox,
  PostBTN,
  SearchButton,
  SearchInput,
} from './CommunitySearchAndPost.styles';
import { FaSearch, FaPencilAlt } from 'react-icons/fa';

const CommunitySearchAndPost = ({
  handleSearchInputChange,
  handleNewPostClick,
  user,
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
            <SearchButton onClick={handleSearchButtonClick}>
              <FaSearch size={'20px'} />
            </SearchButton>
            <SearchInput
              type="text"
              placeholder="커뮤니티 게시글 검색"
              onKeyPress={handleKeyPress}
              ref={searchInputRef}
            />
          </SearchInputBox>
        </SearchContainer>
        {user ? (
          <PostBTN onClick={handleNewPostClick}>
            글작성
            <FaPencilAlt />
          </PostBTN>
        ) : (
          <></>
        )}
      </SearchAndPostContainer>
    </>
  );
};

export default CommunitySearchAndPost;
