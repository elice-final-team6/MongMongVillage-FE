import React from 'react';
import { ListContainer } from './CommunityList.styles';
import { CommunityListItem } from '../CommunityListItem';

const CommunityList = ({
  currentPageItems,
  handlePostClick,
  totalPages,
  // handleUserClick,
  // filteredList
}) => {
  // const [itemsToDisplay, setItemsToDisplay] = useState([]);
  // if (filteredList.length === 0) {
  //   setItemsToDisplay(currentPageItems);
  // } else {
  //   setItemsToDisplay(filteredList);
  // }

  const itemsToDisplay = currentPageItems || [];
  return (
    <ListContainer>
      {itemsToDisplay.map((item, idx) => (
        <CommunityListItem
          key={idx}
          item={item}
          totalPages={totalPages}
          handlePostClick={handlePostClick}
          // handleUserClick={handleUserClick}
        />
      ))}
    </ListContainer>
  );
};

export default CommunityList;
