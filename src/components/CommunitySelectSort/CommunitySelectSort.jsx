import React from 'react';
import { SelectSortContainer } from './CommunitySelectSort.styles';

const CommunitySelectSort = ({ sortOption, handleSortChange }) => {
  return (
    <SelectSortContainer>
      <label htmlFor="latest">
        <input
          type="radio"
          id="latest"
          name="sort"
          value="latest"
          checked={sortOption === 'latest'}
          onChange={handleSortChange}
        />
        <p>최신순</p>
      </label>
      <label htmlFor="likes">
        <input
          type="radio"
          id="likes"
          name="sort"
          value="likes"
          checked={sortOption === 'likes'}
          onChange={handleSortChange}
        />
        <p>인기순</p>
      </label>
    </SelectSortContainer>
  );
};

export default CommunitySelectSort;
