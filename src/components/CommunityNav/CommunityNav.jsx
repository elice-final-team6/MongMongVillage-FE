import { CommunityNavContainer, CommunityNavItem } from './CommunityNav.styles';

import { CommunityCategory } from '../../libs';
import { useState } from 'react';

const CommunityNav = ({ handleNavClick, category }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    CommunityCategory.all,
  );
  return (
    <>
      <CommunityNavContainer category={category}>
        <CommunityNavItem
          onClick={() => {
            setSelectedCategory(CommunityCategory.all);
            handleNavClick(CommunityCategory.all);
          }}
          selected={selectedCategory === CommunityCategory.all ? true : false}
        >
          <span>전체글</span>
        </CommunityNavItem>

        <CommunityNavItem
          selected={selectedCategory === CommunityCategory.free ? true : false}
          onClick={() => {
            handleNavClick(CommunityCategory.free);
            setSelectedCategory(CommunityCategory.free);
          }}
        >
          <span>자유글</span>
        </CommunityNavItem>
        <CommunityNavItem
          selected={selectedCategory === CommunityCategory.info ? true : false}
          onClick={() => {
            handleNavClick(CommunityCategory.info);
            setSelectedCategory(CommunityCategory.info);
          }}
        >
          <span> 정보글</span>
        </CommunityNavItem>
        <CommunityNavItem
          selected={
            selectedCategory === CommunityCategory.question ? true : false
          }
          onClick={() => {
            handleNavClick(CommunityCategory.question);
            setSelectedCategory(CommunityCategory.question);
          }}
        >
          <span>질문글</span>
        </CommunityNavItem>
      </CommunityNavContainer>
    </>
  );
};

export default CommunityNav;
