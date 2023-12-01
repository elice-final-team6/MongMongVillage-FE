import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Map from './Sections/Map';
import './styles.css';

const Kakao = () => {
  const location = useLocation();

  // 입력 폼 변화 감지하여 입력 값 관리
  const [value, setValue] = useState(
    new URLSearchParams(location.search).get('keyword') || '강서구 애견카페',
  );
  // 제출한 검색어 관리
  const [keyword, setKeyword] = useState(
    new URLSearchParams(location.search).get('keyword') || '강서구 애견카페',
  );

  // 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
  const keywordChange = (e) => {
    setValue(e.target.value);
  };

  // 제출한 검색어 state에 담아주는 함수
  const submitKeyword = (e) => {
    e.preventDefault();
    setKeyword(value);
  };

  // 검색어를 입력하지 않고 검색 버튼을 눌렀을 경우
  const valueChecker = () => {
    if (value === '') {
      alert('검색어를 입력해주세요.');
    }
  };

  return (
    <div className="landing-page">
      <div className="landing-page__inner">
        <div className="search-form-container">
          <form className="search-form" onSubmit={submitKeyword}>
            <label htmlFor="place" className="form__label">
              <input
                type="text"
                className="form__input"
                name="place"
                onChange={keywordChange}
                placeholder="서울의 '구' 명 이나 업체의 상호명을 입력해주세요... ex) 강서구"
                required
                style={{ width: '500px' }}
              />
              <div className="btn-box">
                <input
                  className="btn form__submit"
                  type="submit"
                  value="검색"
                  onClick={valueChecker}
                />
              </div>
            </label>
          </form>
        </div>
        {/* 제출한 검색어 넘기기 */}
        <Map searchKeyword={keyword} />
      </div>
    </div>
  );
};

export default Kakao;
