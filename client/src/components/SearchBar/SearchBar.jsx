import {
  SearchContainer,
  StyledForm,
  SearchInput,
  SearchButton,
} from './styles';

import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SearchContainer>
      <StyledForm onSubmit={handleSubmit}>
        <SearchInput type="search" placeholder="애견카페 검색" />
        <SearchButton>
          <div>
            <FaSearch size={'20px'} />
          </div>
        </SearchButton>
      </StyledForm>
    </SearchContainer>
  );
};

export default SearchBar;
