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
          <span>{CommunityCategory.all}</span>
        </CommunityNavItem>

        <CommunityNavItem
          selected={selectedCategory === CommunityCategory.free ? true : false}
          onClick={() => {
            handleNavClick(CommunityCategory.free);
            setSelectedCategory(CommunityCategory.free);
          }}
        >
          <span>{CommunityCategory.free}</span>
        </CommunityNavItem>
        <CommunityNavItem
          selected={selectedCategory === CommunityCategory.info ? true : false}
          onClick={() => {
            handleNavClick(CommunityCategory.info);
            setSelectedCategory(CommunityCategory.info);
          }}
        >
          <span> {CommunityCategory.info}</span>
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
          <span> {CommunityCategory.question}</span>
        </CommunityNavItem>
      </CommunityNavContainer>
    </>
  );
};

export default CommunityNav;
