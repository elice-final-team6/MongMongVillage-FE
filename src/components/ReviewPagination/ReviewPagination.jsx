import { Button, Container } from './styles';
const ReviewPagintaion = ({ page, setPage }) => {
  const pageNumbs = 5;

  return (
    <Container>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(pageNumbs)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : undefined}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === pageNumbs}>
        &gt;
      </Button>
    </Container>
  );
};

export default ReviewPagintaion;
