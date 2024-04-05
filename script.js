function startQuiz() {
    window.location.href = 'question1.html';
  }
  
  function chooseOption(questionNumber, option) {
    localStorage.setItem(`question${questionNumber}`, option);
    if (questionNumber < 8) {
      window.location.href = `question${questionNumber + 1}.html`;
    } else {
      window.location.href = 'result.html';
    }
  }
  
  function calculateResult() {
    let scoreA = 0;
    let scoreB = 0;
    let scoreC = 0;
    for (let i = 1; i <= 8; i++) {
      const answer = localStorage.getItem(`question${i}`);
      if (answer === 'A') scoreA++;
      else if (answer === 'B') scoreB++;
      else if (answer === 'C') scoreC++;
    }
    
    if (scoreA > scoreB && scoreA > scoreC) {
      document.getElementById('result-text').innerText = 'Your cat sees you as a fellow companion, a true partner.';
    } else if (scoreB > scoreA && scoreB > scoreC) {
      document.getElementById('result-text').innerText = 'Your cat respects you, seeing you as a leader or parent.';
    } else {
      document.getElementById('result-text').innerText = 'In your kitty’s heart of your home, it’s themselves who are the real master.';
    }
  }
  
  if (document.getElementById('result-text')) {
    calculateResult();
  }
  