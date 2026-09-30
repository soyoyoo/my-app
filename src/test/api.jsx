// 테스트용 가상 데이터 데이터베이스
const mockData = {
  '/planets': [
    { id: 'earth', name: '지구 (Earth)' },
    { id: 'mars', name: '화성 (Mars)' },
    { id: 'jupiter', name: '목성 (Jupiter)' }
  ],
  '/planets/earth/places': [
    { id: 1, name: '서울 타워' },
    { id: 2, name: '뉴욕 타임스퀘어' },
    { id: 3, name: '파리 에펠탑' }
  ],
  '/planets/mars/places': [
    { id: 4, name: '올림푸스 몬스 (거대 화산)' },
    { id: 5, name: '마리네리스 협곡' }
  ],
  '/planets/jupiter/places': [
    { id: 6, name: '대적반 (거대 폭풍)' },
    { id: 7, name: '유로파 얼음 바다' }
  ]
};

/**
 * 가상으로 데이터를 가져오는 비동기 함수
 * @param {string} url - 요청할 API 경로
 * @returns {Promise<any>}
 */
export const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    // 실제 네트워크 통신 느낌을 주기 위해 0.5초 지연
    setTimeout(() => {
      if (mockData[url]) {
        resolve(mockData[url]);
      } else {
        reject(new Error(`404 Not Found: ${url} 경로를 찾을 수 없습니다.`));
      }
    }, 500);
  });
};
