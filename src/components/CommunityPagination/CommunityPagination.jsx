import React from 'react';
import { useState, useEffect } from 'react';
import { Container, PageButton } from './CommunityPagination.styles';

const CommunityPagination = ({
  currentPage,
  goToPrevPage,
  goToNextPage,
  totalPages,
  goToPage,
}) => {
  const [pages, setPages] = useState([]);

  const visiblePages = 5; // 한 번에 표시되는 페이지 수
  const halfVisible = Math.floor(visiblePages / 2);

  // 빈 배열 만들어서 5개의 페이지 동적으로 set 해줌
  const newPages = [];
  let startPage = Math.max(currentPage - halfVisible, 1);
  let endPage = Math.min(startPage + visiblePages - 1, totalPages);

  if (endPage - startPage + 1 < visiblePages) {
    startPage = Math.max(endPage - visiblePages + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    newPages.push(i);
  }

  useEffect(() => {
    setPages(newPages);
  }, [currentPage, totalPages]);

  return (
    <Container>
      {currentPage !== 1 ? (
        <PageButton onClick={goToPrevPage} disabled={currentPage === 1}>
          {'<'}
        </PageButton>
      ) : (
        <div className="space"></div>
      )}

      {pages.map((page) => (
        <PageButton
          key={page}
          onClick={() => goToPage(page)}
          active={currentPage === page ? 'true' : undefined}
        >
          {page}
        </PageButton>
      ))}
      {currentPage < totalPages ? (
        <PageButton
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </PageButton>
      ) : (
        <div className="space"></div>
      )}
    </Container>
  );
};

export default CommunityPagination;
