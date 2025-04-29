const connection = require('./db');

// 랜덤 초성 쌍 조회 함수
function getRandomInitials(callback) {
  const query = 'SELECT * FROM initials_pairs ORDER BY RAND() LIMIT 1'; // 랜덤으로 하나 가져오기
  connection.query(query, (err, results) => {
    if (err) {
      console.error('랜덤 초성 쌍 조회 실패:', err);
      return;
    }
    if (results.length > 0) {
      callback(results[0]); // 첫 번째 결과 반환
    } else {
      console.log('초성 쌍이 없습니다.');
    }
  });
}

module.exports = getRandomInitials;
