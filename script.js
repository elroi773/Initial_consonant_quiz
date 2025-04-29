
  let currentInitial = "";
  
  // 랜덤 초성 뽑기
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // 화면에 초성 표시
  function showRandomQuote() {
    const randomQuote = getRandomQuote();
    currentInitial = `${randomQuote.text1}${randomQuote.text2}`;
    document.getElementById("randomQuote").innerText = currentInitial;
  }
  
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
  
  // 처음 시작할 때 초성 보여주기
  window.onload = function() {
    showRandomQuote();
  };