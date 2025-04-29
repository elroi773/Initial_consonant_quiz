const express = require('express');
const getRandomInitials = require('./getRandomInitials');

const app = express();
const port = 3000;

// 랜덤 초성 쌍 조회 API
app.get('/random-initials', (req, res) => {
  getRandomInitials((randomInitials) => {
    res.json(randomInitials); // 랜덤 초성 쌍 반환
  });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
