import React from 'react';
import { ListContainer } from './CommunityList.styles';
import { CommunityListItem } from '../CommunityListItem';

const CommunityList = ({
  currentPageItems,
  handlePostClick,
  // handleUserClick,
}) => {
  const itemsToDisplay = currentPageItems || [];
  return (
    <ListContainer>
      {itemsToDisplay.map((item, idx) => (
        <CommunityListItem
          key={idx}
          item={item}
          handlePostClick={handlePostClick}
          // handleUserClick={handleUserClick}
        />
      ))}
    </ListContainer>
  );
};

export default CommunityList;
