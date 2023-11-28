import {
  SearchContainer,
  StyledForm,
  SearchInput,
  SearchButton,
} from './styles';

import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ROUTE } from '../../routes/Routes';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === '') {
      alert('검색어를 입력해주세요!');
      return;
    }

    navigate(`${ROUTE.CAFE_MAP_PAGE.link}?keyword=${value}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <SearchContainer>
      <StyledForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="애견카페 검색"
          onChange={handleChange}
          required
        />
        <SearchButton>
          <div>
            <FaSearch size={'23px'} />
          </div>
        </SearchButton>
      </StyledForm>
    </SearchContainer>
  );
};

export default SearchBar;
