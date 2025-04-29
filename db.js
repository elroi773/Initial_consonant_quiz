const mysql = require('mysql2');

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',   // MySQL 서버 주소
  user: 'root',        // MySQL 사용자 이름
  password: 'Mysql4344!',        // MySQL 비밀번호
  database: 'game'     // 사용할 데이터베이스 이름
});

// 연결 테스트
connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
    return;
  }
  console.log('MySQL에 성공적으로 연결되었습니다.');
});

module.exports = connection;
