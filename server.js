const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql4344!', // 실제 비밀번호
  database: 'game',
});

connection.connect((err) => {
  if (err) {
    console.error('데이터베이스 연결 실패:', err);
    return;
  }
  console.log('MySQL 연결 성공');
});

app.get('/random-initials', (req, res) => {
  const query = 'SELECT * FROM initials_pairs ORDER BY RAND() LIMIT 1';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('DB 오류:', err); // 오류 로그 추가
      return res.status(500).json({ error: 'DB 오류' });
    }
    console.log('랜덤 초성 쌍:', results[0]); // 서버에서 받은 데이터 확인
    res.json(results[0]); // 하나만 보내줌
  });
});
