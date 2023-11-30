import { Button, Container } from './styles';
const ReviewPagintaion = ({ page, navigatePage, totalNum = 40 }) => {
  const reviewsPerPage = 10;
  const pageNum = parseInt(totalNum / reviewsPerPage) + 1;
  const currentPage = parseInt(page);

  return (
    <Container>
      {currentPage > 1 && (
        <Button onClick={() => navigatePage(currentPage - 1)}>&lt;</Button>
      )}
      {Array(pageNum)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => navigatePage(i + 1)}
            aria-current={currentPage === i + 1 ? 'page' : undefined}
          >
            {i + 1}
          </Button>
        ))}
      {currentPage !== pageNum && (
        <Button onClick={() => navigatePage(currentPage + 1)}>&gt;</Button>
      )}
    </Container>
  );
};

export default ReviewPagintaion;
