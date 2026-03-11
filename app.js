// TIMER
let timer = null;
let timeLeft = 2700; // 45 minutes

// QUESTIONS
let allQuestions = [];
let examQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

const githubURL = "https://raw.githubusercontent.com/eminidis/drone-exam-trainer/main/31filesQuestions.json";

// LOAD QUESTIONS
async function loadAllQuestions() {
  try {
    const response = await fetch(githubURL);

    if (!response.ok) {
      throw new Error("Δεν βρέθηκε το αρχείο JSON");
    }

    const data = await response.json();

    allQuestions = data.questions || data;

    console.log("Φορτώθηκαν", allQuestions.length, "ερωτήσεις");

  } catch (error) {
    console.error("Σφάλμα φόρτωσης:", error);
  }
}

// START EXAM
function startExam() {

  examQuestions = shuffle(allQuestions).slice(0, 40);

  currentQuestionIndex = 0;
  score = 0;

  startTimer();

  showQuestion();
}

// TIMER
function startTimer() {

  timer = setInterval(() => {

    timeLeft--;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    document.getElementById("timer").innerText =
      minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    if (timeLeft <= 0) {
      finishExam();
    }

  }, 1000);
}

// SHOW QUESTION
function showQuestion() {

  const q = examQuestions[currentQuestionIndex];

  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {

    const btn = document.createElement("button");

    btn.innerText = answer;

    btn.onclick = () => selectAnswer(index);

    answersDiv.appendChild(btn);

  });
}

// ANSWER
function selectAnswer(index) {

  const q = examQuestions[currentQuestionIndex];

  if (index === q.correct) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < examQuestions.length) {
    showQuestion();
  } else {
    finishExam();
  }
}

// FINISH
function finishExam() {

  clearInterval(timer);

  document.getElementById("quiz").innerHTML =
    "<h2>Τελικό σκορ: " + score + " / " + examQuestions.length + "</h2>";
}

// SHUFFLE
function shuffle(array) {

  for (let i = array.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

// LOAD ON PAGE START
loadAllQuestions();
