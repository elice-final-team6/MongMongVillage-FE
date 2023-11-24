import React, { useRef, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { usePostBoard } from '../../hooks';
import {
  Container,
  CategorySelector,
  Input,
  TextArea,
  ImageUploadContainer,
  ImageUploadText,
  Title,
  PostBTN,
} from './NewPost.styles';

const NewPost = () => {
  const titleInputRef = useRef();
  const contentInputRef = useRef();
  const categorySelectRef = useRef();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [imagesFile, setimagesFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const image = acceptedFiles[0];
    setimagesFile(image);
  };
  // img dropzone 사용
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const { mutate: postBoard } = usePostBoard(
    category,
    title,
    content,
    imagesFile,
  );

  // 글 등록 함수
  const handleNewPost = (e) => {
    e.preventDefault();

    if (categorySelectRef.current.value === '') {
      alert('카테고리를 선택해주세요.');
      categorySelectRef.current.focus();
    } else if (titleInputRef.current.value === '') {
      alert('글 제목을 입력해주세요');
      titleInputRef.current.focus();
    } else if (contentInputRef.current.value === '') {
      alert('글 내용을 입력해주세요.');
      contentInputRef.current.focus();
    } else {
      setCategory(categorySelectRef.current.value);
      setTitle(titleInputRef.current.value);
      setContent(contentInputRef.current.value);

      postBoard();
    }
  };

  return (
    <form encType="multipart/form-data" onSubmit={handleNewPost}>
      <Container>
        <Title>카테고리 선택</Title>
        <CategorySelector ref={categorySelectRef}>
          <option value="">카테고리 선택</option>
          <option value="info">정보글</option>
          <option value="general">자유글</option>
          <option value="question">질문글</option>
        </CategorySelector>

        <Title>게시글 작성</Title>
        <Input
          type="text"
          placeholder="제목을 입력해주세요..."
          ref={titleInputRef}
        />

        <TextArea placeholder="내용을 입력해주세요..." ref={contentInputRef} />

        <Title>사진 업로드</Title>
        <ImageUploadContainer {...getRootProps()}>
          <input type="file" name="image" {...getInputProps()} multiple />
          <ImageUploadText>사진을 첨부하세요.</ImageUploadText>
        </ImageUploadContainer>

        {imagesFile && (
          <div style={{ marginBottom: '80px' }}>
            <p style={{ marginTop: '16px' }}>등록 이미지 미리보기</p>
            <img
              src={URL.createObjectURL(imagesFile)}
              alt="Uploaded"
              style={{ maxWidth: '100%', marginTop: '16px' }}
            />
          </div>
        )}

        <PostBTN type="submit">글 등록</PostBTN>
      </Container>
    </form>
  );
};

export default NewPost;
