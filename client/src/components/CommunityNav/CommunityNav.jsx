import { useState } from 'react';
import { CommunityNavContainer } from './CommunityNav.styles';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes/Routes';

const CATEGORY_DIC = {
  all: 'all',
  free: 'free',
  info: 'info',
  question: 'question',
};

const CommunityNav = ({ handleNavClick, filteredCategory }) => {
  return (
    <>
      <CommunityNavContainer filteredCategory={filteredCategory}>
        <div className="all" onClick={() => handleNavClick(CATEGORY_DIC.all)}>
          전체
        </div>
        <div className="free" onClick={() => handleNavClick(CATEGORY_DIC.free)}>
          자유글
        </div>
        <div className="info" onClick={() => handleNavClick(CATEGORY_DIC.info)}>
          정보글
        </div>
        <div
          className="question"
          onClick={() => handleNavClick(CATEGORY_DIC.question)}
        >
          질문글
        </div>
      </CommunityNavContainer>
    </>
  );
};

export default CommunityNav;
