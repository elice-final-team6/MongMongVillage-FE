import React from 'react';
import { ListContainer } from './CommunityList.styles';
import { CommunityListItem } from '../CommunityListItem';

const CommunityList = ({ currentPageItems, handlePostClick, totalPages }) => {
  const itemsToDisplay = currentPageItems || [];
  return (
    <ListContainer>
      {itemsToDisplay.map((item, idx) => (
        <CommunityListItem
          key={idx}
          item={item}
          totalPages={totalPages}
          handlePostClick={handlePostClick}
        />
      ))}
    </ListContainer>
  );
};

export default CommunityList;
