const mysql = require('mysql2');

// DB 연결
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql4344!', // ← 비밀번호 입력
  database: 'game',
});

const initialsPairs = [
    { text1: "ㄱ", text2: "ㄱ" },
    { text1: "ㄱ", text2: "ㄴ" },
    { text1: "ㄱ", text2: "ㄷ" },
    { text1: "ㄱ", text2: "ㄹ" },
    { text1: "ㄱ", text2: "ㅁ" },
    { text1: "ㄱ", text2: "ㅂ" },
    { text1: "ㄱ", text2: "ㅅ" },
    { text1: "ㄱ", text2: "ㅇ" },
    { text1: "ㄱ", text2: "ㅈ" },
    { text1: "ㄱ", text2: "ㅊ" },
    { text1: "ㄱ", text2: "ㅋ" },
    { text1: "ㄱ", text2: "ㅌ" },
    { text1: "ㄱ", text2: "ㅍ" },
    { text1: "ㄱ", text2: "ㅎ" }, //ㄱ
    { text1: "ㄴ", text2: "ㄱ" },
    { text1: "ㄴ", text2: "ㄴ" },
    { text1: "ㄴ", text2: "ㄷ" },
    { text1: "ㄴ", text2: "ㄹ" },
    { text1: "ㄴ", text2: "ㅁ" },
    { text1: "ㄴ", text2: "ㅂ" },
    { text1: "ㄴ", text2: "ㅅ" },
    { text1: "ㄴ", text2: "ㅇ" },
    { text1: "ㄴ", text2: "ㅈ" },
    { text1: "ㄴ", text2: "ㅊ" },
    { text1: "ㄴ", text2: "ㅋ" },
    { text1: "ㄴ", text2: "ㅌ" },
    { text1: "ㄴ", text2: "ㅍ" },
    { text1: "ㄴ", text2: "ㅎ" }, //ㄴ
    { text1: "ㄷ", text2: "ㄱ" },
    { text1: "ㄷ", text2: "ㄴ" },
    { text1: "ㄷ", text2: "ㄷ" },
    { text1: "ㄷ", text2: "ㄹ" },
    { text1: "ㄷ", text2: "ㅁ" },
    { text1: "ㄷ", text2: "ㅂ" },
    { text1: "ㄷ", text2: "ㅅ" },
    { text1: "ㄷ", text2: "ㅇ" },
    { text1: "ㄷ", text2: "ㅈ" },
    { text1: "ㄷ", text2: "ㅊ" },
    { text1: "ㄷ", text2: "ㅋ" },
    { text1: "ㄷ", text2: "ㅌ" },
    { text1: "ㄷ", text2: "ㅍ" },
    { text1: "ㄷ", text2: "ㅎ" }, //ㄷ
    { text1: "ㄹ", text2: "ㄱ" },
    { text1: "ㄹ", text2: "ㄴ" },
    { text1: "ㄹ", text2: "ㄷ" },
    { text1: "ㄹ", text2: "ㄹ" },
    { text1: "ㄹ", text2: "ㅁ" },
    { text1: "ㄹ", text2: "ㅂ" },
    { text1: "ㄹ", text2: "ㅅ" },
    { text1: "ㄹ", text2: "ㅇ" },
    { text1: "ㄹ", text2: "ㅈ" },
    { text1: "ㄹ", text2: "ㅊ" },
    { text1: "ㄹ", text2: "ㅋ" },
    { text1: "ㄹ", text2: "ㅌ" },
    { text1: "ㄹ", text2: "ㅍ" },
    { text1: "ㄹ", text2: "ㅎ" }, //ㄹ
    { text1: "ㅁ", text2: "ㄱ" },
    { text1: "ㅁ", text2: "ㄴ" },
    { text1: "ㅁ", text2: "ㄷ" },
    { text1: "ㅁ", text2: "ㄹ" },
    { text1: "ㅁ", text2: "ㅁ" },
    { text1: "ㅁ", text2: "ㅂ" },
    { text1: "ㅁ", text2: "ㅅ" },
    { text1: "ㅁ", text2: "ㅇ" },
    { text1: "ㅁ", text2: "ㅈ" },
    { text1: "ㅁ", text2: "ㅊ" },
    { text1: "ㅁ", text2: "ㅋ" },
    { text1: "ㅁ", text2: "ㅌ" },
    { text1: "ㅁ", text2: "ㅍ" },
    { text1: "ㅁ", text2: "ㅎ" }, //ㅁ
    { text1: "ㅂ", text2: "ㄱ" },
    { text1: "ㅂ", text2: "ㄴ" },
    { text1: "ㅂ", text2: "ㄷ" },
    { text1: "ㅂ", text2: "ㄹ" },
    { text1: "ㅂ", text2: "ㅁ" },
    { text1: "ㅂ", text2: "ㅂ" },
    { text1: "ㅂ", text2: "ㅅ" },
    { text1: "ㅂ", text2: "ㅇ" },
    { text1: "ㅂ", text2: "ㅈ" },
    { text1: "ㅂ", text2: "ㅊ" },
    { text1: "ㅂ", text2: "ㅋ" },
    { text1: "ㅂ", text2: "ㅌ" },
    { text1: "ㅂ", text2: "ㅍ" },
    { text1: "ㅅ", text2: "ㅎ" }, //ㅂ
    { text1: "ㅅ", text2: "ㄱ" },
    { text1: "ㅅ", text2: "ㄴ" },
    { text1: "ㅅ", text2: "ㄷ" },
    { text1: "ㅅ", text2: "ㄹ" },
    { text1: "ㅅ", text2: "ㅁ" },
    { text1: "ㅅ", text2: "ㅂ" },
    { text1: "ㅅ", text2: "ㅅ" },
    { text1: "ㅅ", text2: "ㅇ" },
    { text1: "ㅅ", text2: "ㅈ" },
    { text1: "ㅅ", text2: "ㅊ" },
    { text1: "ㅅ", text2: "ㅋ" },
    { text1: "ㅅ", text2: "ㅌ" },
    { text1: "ㅅ", text2: "ㅍ" },
    { text1: "ㅅ", text2: "ㅎ" }, //ㅅ
    { text1: "ㅇ", text2: "ㄱ" },
    { text1: "ㅇ", text2: "ㄴ" },
    { text1: "ㅇ", text2: "ㄷ" },
    { text1: "ㅇ", text2: "ㄹ" },
    { text1: "ㅇ", text2: "ㅁ" },
    { text1: "ㅇ", text2: "ㅂ" },
    { text1: "ㅇ", text2: "ㅅ" },
    { text1: "ㅇ", text2: "ㅇ" },
    { text1: "ㅇ", text2: "ㅈ" },
    { text1: "ㅇ", text2: "ㅊ" },
    { text1: "ㅇ", text2: "ㅋ" },
    { text1: "ㅇ", text2: "ㅌ" },
    { text1: "ㅇ", text2: "ㅍ" },
    { text1: "ㅇ", text2: "ㅎ" }, //ㅇ
    { text1: "ㅈ", text2: "ㄱ" },
    { text1: "ㅈ", text2: "ㄴ" },
    { text1: "ㅈ", text2: "ㄷ" },
    { text1: "ㅈ", text2: "ㄹ" },
    { text1: "ㅈ", text2: "ㅁ" },
    { text1: "ㅈ", text2: "ㅂ" },
    { text1: "ㅈ", text2: "ㅅ" },
    { text1: "ㅈ", text2: "ㅇ" },
    { text1: "ㅈ", text2: "ㅈ" },
    { text1: "ㅈ", text2: "ㅊ" },
    { text1: "ㅈ", text2: "ㅋ" },
    { text1: "ㅈ", text2: "ㅌ" },
    { text1: "ㅈ", text2: "ㅍ" },
    { text1: "ㅈ", text2: "ㅎ" }, //ㅈ
    { text1: "ㅊ", text2: "ㄱ" },
    { text1: "ㅊ", text2: "ㄴ" },
    { text1: "ㅊ", text2: "ㄷ" },
    { text1: "ㅊ", text2: "ㄹ" },
    { text1: "ㅊ", text2: "ㅁ" },
    { text1: "ㅊ", text2: "ㅂ" },
    { text1: "ㅊ", text2: "ㅅ" },
    { text1: "ㅊ", text2: "ㅇ" },
    { text1: "ㅊ", text2: "ㅈ" },
    { text1: "ㅊ", text2: "ㅊ" },
    { text1: "ㅊ", text2: "ㅋ" },
    { text1: "ㅊ", text2: "ㅌ" },
    { text1: "ㅊ", text2: "ㅍ" },
    { text1: "ㅊ", text2: "ㅎ" }, //ㅊ
    { text1: "ㅌ", text2: "ㄱ" },
    { text1: "ㅌ", text2: "ㄴ" },
    { text1: "ㅌ", text2: "ㄷ" },
    { text1: "ㅌ", text2: "ㄹ" },
    { text1: "ㅌ", text2: "ㅁ" },
    { text1: "ㅌ", text2: "ㅂ" },
    { text1: "ㅌ", text2: "ㅅ" },
    { text1: "ㅌ", text2: "ㅇ" },
    { text1: "ㅌ", text2: "ㅈ" },
    { text1: "ㅌ", text2: "ㅊ" },
    { text1: "ㅌ", text2: "ㅋ" },
    { text1: "ㅌ", text2: "ㅌ" },
    { text1: "ㅌ", text2: "ㅍ" },
    { text1: "ㅌ", text2: "ㅎ" }, //ㅌ
    { text1: "ㅍ", text2: "ㄱ" },
    { text1: "ㅍ", text2: "ㄴ" },
    { text1: "ㅍ", text2: "ㄷ" },
    { text1: "ㅍ", text2: "ㄹ" },
    { text1: "ㅍ", text2: "ㅁ" },
    { text1: "ㅍ", text2: "ㅂ" },
    { text1: "ㅍ", text2: "ㅅ" },
    { text1: "ㅍ", text2: "ㅇ" },
    { text1: "ㅍ", text2: "ㅈ" },
    { text1: "ㅍ", text2: "ㅊ" },
    { text1: "ㅍ", text2: "ㅋ" },
    { text1: "ㅍ", text2: "ㅌ" },
    { text1: "ㅍ", text2: "ㅍ" },
    { text1: "ㅍ", text2: "ㅎ" }, //ㅍ
    { text1: "ㅎ", text2: "ㄱ" },
    { text1: "ㅎ", text2: "ㄴ" },
    { text1: "ㅎ", text2: "ㄷ" },
    { text1: "ㅎ", text2: "ㄹ" },
    { text1: "ㅎ", text2: "ㅁ" },
    { text1: "ㅎ", text2: "ㅂ" },
    { text1: "ㅎ", text2: "ㅅ" },
    { text1: "ㅎ", text2: "ㅇ" },
    { text1: "ㅎ", text2: "ㅈ" },
    { text1: "ㅎ", text2: "ㅊ" },
    { text1: "ㅎ", text2: "ㅋ" },
    { text1: "ㅎ", text2: "ㅌ" },
    { text1: "ㅎ", text2: "ㅍ" },
    { text1: "ㅎ", text2: "ㅎ" },
  ];
  
  

 // 삽입 함수
function insertInitials() {
  const query = 'INSERT INTO initials_pairs (text1, text2) VALUES ?';
  const values = initialsPairs.map(pair => [pair.text1, pair.text2]);

  connection.query(query, [values], (err, results) => {
    if (err) {
      console.error('초성 쌍 추가 실패:', err);
    } else {
      console.log('초성 쌍이 성공적으로 추가되었습니다.');
    }
    connection.end(); // 종료는 콜백 안에서!
  });
}

insertInitials();