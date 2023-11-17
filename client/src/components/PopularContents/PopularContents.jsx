import {
  Container,
  Content,
  DogCafeList,
  DogCafeListItem,
  DogCafeListItemImg,
  DogCafeListItemTitle,
  DogCafeListItemWriter,
} from './styles';

const PopularContents = () => {
  return (
    <Container>
      <Content>인기 애견카페</Content>
      <DogCafeList>
        <DogCafeListItem>
          사진
          <DogCafeListItemImg />
          <DogCafeListItemTitle>카페 이름</DogCafeListItemTitle>
          <DogCafeListItemWriter>작성자</DogCafeListItemWriter>
        </DogCafeListItem>

        <DogCafeListItem>
          사진
          <DogCafeListItemImg />
          <DogCafeListItemTitle>카페 이름</DogCafeListItemTitle>
          <DogCafeListItemWriter>작성자</DogCafeListItemWriter>
        </DogCafeListItem>

        <DogCafeListItem>
          사진
          <DogCafeListItemImg />
          <DogCafeListItemTitle>카페 이름</DogCafeListItemTitle>
          <DogCafeListItemWriter>작성자</DogCafeListItemWriter>
        </DogCafeListItem>

        <DogCafeListItem>
          사진
          <DogCafeListItemImg />
          <DogCafeListItemTitle>카페 이름</DogCafeListItemTitle>
          <DogCafeListItemWriter>작성자</DogCafeListItemWriter>
        </DogCafeListItem>
      </DogCafeList>
    </Container>
  );
};

export default PopularContents;
