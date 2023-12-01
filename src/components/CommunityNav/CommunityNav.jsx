import { CommunityNavContainer, CommunityNavItem } from './CommunityNav.styles';

import { CommunityCategory } from '../../libs/CommunityCategory';
import { useState } from 'react';

const CommunityNav = ({ handleNavClick, category }) => {
  const [selectedCategory, setSelectedCategory] = useState(category);

  return (
    <CommunityNavContainer category={category}>
      <CommunityNavItem
        onClick={() => {
          setSelectedCategory(CommunityCategory.all);
          handleNavClick(CommunityCategory.all);
        }}
        selected={selectedCategory === CommunityCategory.all}
      >
        <span>전체글</span>
      </CommunityNavItem>

      <CommunityNavItem
        selected={selectedCategory === CommunityCategory.general}
        onClick={() => {
          handleNavClick(CommunityCategory.general);
          setSelectedCategory(CommunityCategory.general);
        }}
      >
        <span>자유글</span>
      </CommunityNavItem>
      <CommunityNavItem
        selected={selectedCategory === CommunityCategory.info}
        onClick={() => {
          handleNavClick(CommunityCategory.info);
          setSelectedCategory(CommunityCategory.info);
        }}
      >
        <span>정보글</span>
      </CommunityNavItem>
      <CommunityNavItem
        selected={selectedCategory === CommunityCategory.question}
        onClick={() => {
          handleNavClick(CommunityCategory.question);
          setSelectedCategory(CommunityCategory.question);
        }}
      >
        <span>질문글</span>
      </CommunityNavItem>
    </CommunityNavContainer>
  );
};

export default CommunityNav;
