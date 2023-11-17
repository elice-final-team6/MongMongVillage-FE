import {
  Container,
  Content,
  DogCafeList,
  DogCafeListItem,
  DogCafeListItemImg,
  DogCafeListItemTitle,
  DogCafeListItemWriter,
} from './styles';

const BestContents = () => {
  return (
    <Container>
      <Content>인기글</Content>
      <DogCafeList>
        <DogCafeListItem>
          사진
          <DogCafeListItemImg />
          <DogCafeListItemTitle>글 제목</DogCafeListItemTitle>
          <DogCafeListItemWriter>작성자</DogCafeListItemWriter>
        </DogCafeListItem>

        <DogCafeListItem>
          사진
          <DogCafeListItemImg />
          <DogCafeListItemTitle>글 제목</DogCafeListItemTitle>
          <DogCafeListItemWriter>작성자</DogCafeListItemWriter>
        </DogCafeListItem>

        <DogCafeListItem>
          사진
          <DogCafeListItemImg />
          <DogCafeListItemTitle>글 제목</DogCafeListItemTitle>
          <DogCafeListItemWriter>작성자</DogCafeListItemWriter>
        </DogCafeListItem>

        <DogCafeListItem>
          사진
          <DogCafeListItemImg />
          <DogCafeListItemTitle>글 제목</DogCafeListItemTitle>
          <DogCafeListItemWriter>작성자</DogCafeListItemWriter>
        </DogCafeListItem>
      </DogCafeList>
    </Container>
  );
};

export default BestContents;
