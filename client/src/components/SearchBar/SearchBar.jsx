import {
  SearchContainer,
  StyledForm,
  SearchInput,
  SearchButton,
} from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faSearch} size="2x" />
          </div>
        </SearchButton>
      </StyledForm>
    </SearchContainer>
  );
};

export default SearchBar;
