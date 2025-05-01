let currentInitial = "";

// 서버에서 랜덤 초성 쌍 가져오기
async function getRandomQuoteFromServer() {
  try {
    const res = await fetch('http://localhost:3000/random-initials');
    const data = await res.json();
    return data; // { text1: "ㄱ", text2: "ㅁ" }
  } catch (error) {
    console.error('초성 데이터를 불러오지 못했습니다:', error);
    return { text1: "ㄱ", text2: "ㅅ" }; // fallback
  }
}

// 페이지가 로드되면 랜덤 초성 표시
window.onload = async function() {
  const data = await getRandomQuoteFromServer();
  currentInitial = `${data.text1}${data.text2}`;
  document.getElementById("randomQuote").innerText = currentInitial;
};

// 단어를 초성으로 변환하는 함수
function getInitials(word) {
  const INITIAL_SOUND = [
    "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ",
    "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ",
    "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ",
    "ㅋ", "ㅌ", "ㅍ", "ㅎ"
  ];
  
  let result = "";
  for (let i = 0; i < word.length; i++) {
    const code = word.charCodeAt(i) - 44032;
    if (code >= 0 && code <= 11171) {
      const initialIndex = Math.floor(code / 588);
      result += INITIAL_SOUND[initialIndex];
    } else {
      result += word[i];
    }
  }
  return result;
}

console.log(".")


// 단어 제출 함수 (플레이어별)
function submitWord(playerNumber) {
  const wordInput = document.getElementById(`player${playerNumber}Word`);
  const wordList = document.getElementById("wordList");
  const word = wordInput.value.trim();
  
  if (word === "") {
    alert("단어를 입력하세요!");
    return;
  }

  const wordInitial = getInitials(word);

  if (wordInitial.startsWith(currentInitial)) {
    const li = document.createElement("li");
    li.textContent = `플레이어 ${playerNumber}: ${word}`;
    wordList.appendChild(li);
    wordInput.value = "";
  } else {
    alert(`입력한 단어의 초성이 ${currentInitial}로 시작하지 않습니다!`);
    wordInput.value = "";
  }
}

app.get('/random-initials', (req, res) => {
  console.log('GET /random-initials 요청이 왔습니다');  // 요청이 들어올 때 로그
  const query = 'SELECT * FROM initials_pairs ORDER BY RAND() LIMIT 1';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('DB 오류:', err);  // 오류 로그 추가
      return res.status(500).json({ error: 'DB 오류' });
    }
    console.log('랜덤 초성 쌍:', results[0]);  // 결과 로그
    res.json(results[0]); // 하나만 보내줌
  });
});


async function getRandomQuoteFromServer() {
  try {
    const res = await fetch('http://localhost:3000/random-initials');
    if (!res.ok) {
      throw new Error(`HTTP 에러! 상태: ${res.status}`);
    }
    const data = await res.json();
    console.log('서버에서 받은 데이터:', data); // 받은 데이터 출력
    return data; // { text1: "ㄱ", text2: "ㅁ" }
  } catch (error) {
    console.error('초성 데이터를 불러오지 못했습니다:', error);
    return { text1: "ㄱ", text2: "ㅅ" }; // fallback
  }
}

window.onload = async function() {
  const data = await getRandomQuoteFromServer();
  const currentInitial = `${data.text1}${data.text2}`;
  document.getElementById("randomQuote").innerText = currentInitial;
};
