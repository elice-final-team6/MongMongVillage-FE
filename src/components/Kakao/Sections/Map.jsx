import React, { useEffect, useState } from 'react';
import { useGetAllCafes } from '../../../hooks/getAllCafes';
import { ROUTE } from '../../../routes/Routes';
import { useNavigate } from 'react-router-dom';
import { MapContainer, CafeList } from './Map.style';
const { kakao } = window;

export default function Map(props) {
  const keyword = props.searchKeyword;
  const { mutate: mutateAllCafes, data: allCafesData } = useGetAllCafes();
  const [resultCafe, setResultCafe] = useState([]);
  const [long, setLong] = useState();
  const [lat, setLat] = useState();
  const [selectedCafe, setSelectedCafe] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (keyword) {
      mutateAllCafes();
    } else {
      alert('검색어를 입력해주세요.');
    }
  }, [keyword]);

  useEffect(() => {
    if (allCafesData && allCafesData.cafes) {
      const nameResults =
        allCafesData?.cafes.filter((cafe) => cafe.name.includes(keyword)) || [];
      const addressResults =
        allCafesData?.cafes.filter((cafe) =>
          cafe.road_addr.includes(keyword),
        ) || [];
      const mergedResults =
        nameResults.length > 0 ? nameResults : addressResults;

      setResultCafe(mergedResults);
      console.log('검색결과 카페 : ', resultCafe);
    }
  }, [allCafesData]);

  useEffect(() => {
    console.log('검색결과 카페 2 : ', resultCafe);
    // setLong(resultCafe[0].longitude);
    // setLat(resultCafe[0].latitude);
    // 정상 출력
    let container = document.getElementById('map');
    if (resultCafe.length === 0) {
      let options = {
        center: new kakao.maps.LatLng(37.516826, 126.9786567),
        level: 7,
      };

      //map
      const map = new kakao.maps.Map(container, options);
    }
    if (resultCafe.length > 0) {
      let options = {
        center: new kakao.maps.LatLng(
          resultCafe[0].longitude,
          resultCafe[0].latitude,
        ),
        level: 7,
      };

      //map
      const map = new kakao.maps.Map(container, options);

      resultCafe.forEach((el) => {
        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(el.longitude, el.latitude),
          title: el.name,
        });

        const content = `
          <div style="padding: 10px; background-color: #fff; border-radius: 10px;">
            <h3 style="margin-bottom: 5px;">${el.name}</h3>
            <p>${el.road_addr}</p>
            <p>${el.phone_number}</p>
          </div>
        `;

        // 마커에 표시할 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: content, // 인포윈도우에 표시할 내용
        });

        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다
        // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        kakao.maps.event.addListener(
          marker,
          'mouseover',
          makeOverListener(map, marker, infowindow),
        );
        kakao.maps.event.addListener(
          marker,
          'mouseout',
          makeOutListener(infowindow),
        );

        // Add a click event to each marker to update the selectedCafe state
        kakao.maps.event.addListener(marker, 'click', () => {
          setSelectedCafe(el);
        });
      });
    }
  }, [resultCafe]);

  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }

  return (
    <MapContainer>
      <div className="map-container">
        <div
          id="map"
          className="map"
          style={{ width: '76%', maxHeight: '600px !important', float: 'left' }}
        ></div>
        <CafeList
          className="cafe-list"
          style={{
            width: '24%',
            float: 'left',
            padding: '20px',
            border: '1px solid black',
            overflowY: 'auto',
            maxHeight: '600px',
          }}
        >
          <h2>카페 목록</h2>
          <ul>
            {resultCafe.map((cafe) => (
              <li
                key={cafe.id}
                style={{ cursor: 'pointer', marginBottom: '10px' }}
                onClick={() =>
                  navigate(`${ROUTE.CAFE_DETAIL_PAGE.link}/${cafe._id}`)
                }
              >
                <p className="cafename">{cafe.name}</p>
                <p>{cafe.road_addr}</p>
                <p>{cafe.phone_number}</p>
              </li>
            ))}
          </ul>
        </CafeList>
      </div>
    </MapContainer>
  );
}
