let allQuestions = []; // Οι ερωτήσεις θα έρθουν από το GitHub
let questions = [];
let wrongQuestions = [];
let currentQuestion = 0;
let userAnswers = [];
let marked = [];
let startTime;
let timerInterval;
let examFinished = false;

// ΤΟ URL ΤΟΥ ΑΡΧΕΙΟΥ ΣΟΥ
const githubURL = "https://raw.githubusercontent.com/eminidis/drone-exam-trainer/refs/heads/main/questions.json";

// ΒΗΜΑ 1: Η "ΓΕΦΥΡΑ" ΠΟΥ ΦΕΡΝΕΙ ΤΙΣ ΕΡΩΤΗΣΕΙΣ
async function loadAllQuestions() {
    try {
        const response = await fetch(githubURL);
        const data = await response.json();
        allQuestions = data.questions; // Γεμίζει τον πίνακα με τις 310 ερωτήσεις
        console.log("Επιτυχής φόρτωση ερωτήσεων!");
    } catch (error) {
        console.error("Σφάλμα κατά τη φόρτωση:", error);
        alert("Δεν ήταν δυνατή η φόρτωση των ερωτήσεων από το GitHub.");
    }
}

// ΚΑΛΟΥΜΕ ΤΗ ΦΟΡΤΩΣΗ ΑΜΕΣΩΣ ΜΟΛΙΣ ΑΝΟΙΞΕΙ Η ΣΕΛΙΔΑ
loadAllQuestions();

function startStudy() {
    let category = document.getElementById("categorySelect").value;
    let amount = document.getElementById("questionAmount").value;

    // ΠΡΟΣΟΧΗ: Εδώ χρησιμοποιούμε q.ΕΝΟΤΗΤΑ γιατί έτσι είναι στο JSON σου
    let filtered = allQuestions.filter(q => q.ΕΝΟΤΗΤΑ === category || category === "all");

    shuffle(filtered);

    if (amount === "all") {
        questions = filtered;
    } else {
        questions = filtered.slice(0, Number(amount));
    }

    initExam();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function practiceWrong() {
    if (wrongQuestions.length === 0) {
        alert("No wrong questions to practice.");
        return;
    }
    questions = wrongQuestions.map(i => allQuestions[i]);
    initExam();
}

function initExam() {
    document.getElementById("home").style.display = "none";
    currentQuestion = 0;
    userAnswers = new Array(questions.length).fill(null);
    marked = new Array(questions.length).fill(false);
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    examFinished = false;
    render();
}

function updateTimer() {
    let seconds = Math.floor((Date.now() - startTime) / 1000);
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    document.getElementById("timer").innerHTML = "⏱ " + min + ":" + sec.toString().padStart(2, "0");
}

function render() {
    showQuestion();
    showGrid();
    checkAutoFinish();
}

function showQuestion() {
    let q = questions[currentQuestion];
    let progress = Math.round(((currentQuestion + 1) / questions.length) * 100);

    // ΑΛΛΑΓΗ: Χρησιμοποιούμε q.ερώτηση αντί για q.question
    let html = `
    <div style="width:60%;margin:auto;background:white;padding:20px;border-radius:10px">
    <h3>Question ${currentQuestion + 1} / ${questions.length}</h3>
    <div style="width:100%;background:#ddd;border-radius:10px;overflow:hidden;margin-bottom:20px">
    <div style="width:${progress}%;background:#4caf50;height:16px"></div>
    </div>
    <p style="font-size:22px">${q.ερώτηση}</p>
    `;

    // ΑΛΛΑΓΗ: Χρησιμοποιούμε q.επιλογές αντί για q.answers
    const choices = ["α", "β", "γ", "δ"];
    choices.forEach((key) => {
        let a = q.επιλογές[key];
        if (!a) return; // Αν δεν υπάρχει 4η επιλογή

        let color = "";
        if (userAnswers[currentQuestion] !== null) {
            if (key === q.σωστή_απάντηση) color = "background:#9cff9c";
            if (key === userAnswers[currentQuestion] && key !== q.σωστή_απάντηση)
                color = "background:#ff8f8f";
        }

        html += `<button onclick="answer('${key}')"
        style="display:block;margin:10px auto;padding:15px;width:320px;font-size:18px;${color}">
        ${a} </button>`;
    });

    if (userAnswers[currentQuestion] !== null && userAnswers[currentQuestion] !== q.σωστή_απάντηση) {
        html += `
        <div style="margin-top:20px;padding:15px;background:#f4f4f4;border-radius:8px">
        <b>Σωστή Απάντηση:</b> ${q.σωστή_απάντηση.toUpperCase()}
        </div>
        `;
    }

    html += `
    <br>
    <button onclick="prev()" style="padding:14px 24px;font-size:20px;margin:6px">Previous</button>
    <button onclick="next()" style="padding:14px 24px;font-size:20px;margin:6px">Next</button>
    <button onclick="mark()" style="padding:14px 24px;font-size:20px;margin:6px">Mark</button>
    <button onclick="finishExam()" style="padding:14px 24px;font-size:20px;margin:6px;background:#444;color:white">Finish</button>
    </div>
    `;

    document.getElementById("quiz").innerHTML = html;
}

function showGrid() {
    let grid = `<div style="position:absolute;top:20px;right:20px;background:white;padding:12px;border-radius:10px">`;
    questions.forEach((q, i) => {
        let color = "white";
        if (userAnswers[i] !== null) {
            if (userAnswers[i] === questions[i].σωστή_απάντηση) color = "#9cff9c";
            else color = "#ff8f8f";
        }
        let markBadge = "";
        if (marked[i]) {
            markBadge = `<span style="position:absolute;top:-6px;right:-6px;background:yellow;color:black;font-weight:bold;font-size:14px;padding:2px 6px;border-radius:50%;">!</span>`;
        }
        grid += `
        <div style="position:relative;display:inline-block;">
        <button onclick="goto(${i})" style="width:38px;height:38px;margin:3px;background:${color};font-weight:bold">${i + 1}</button>
        ${markBadge}
        </div>`;
    });
    grid += "</div>";
    document.getElementById("quiz").innerHTML += grid;
}

function answer(key) {
    if (userAnswers[currentQuestion] !== null) return;
    userAnswers[currentQuestion] = key;
    render();

    if (key === questions[currentQuestion].σωστή_απάντηση) {
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                render();
            }
        }, 600);
    }
}

function next() { if (currentQuestion < questions.length - 1) { currentQuestion++; render(); } }
function prev() { if (currentQuestion > 0) { currentQuestion--; render(); } }
function goto(i) { currentQuestion = i; render(); }
function mark() { marked[currentQuestion] = !marked[currentQuestion]; render(); }

function checkAutoFinish() {
    if (examFinished) return;
    let allAnswered = userAnswers.every(a => a !== null);
    if (allAnswered) {
        examFinished = true;
        setTimeout(() => {
            if (confirm("All questions answered. Finish exam?")) { showResults(); } 
            else { examFinished = false; }
        }, 300);
    }
}

function finishExam() {
    if (userAnswers.includes(null)) {
        if (!confirm("You still have unanswered questions. Finish anyway?")) return;
    }
    showResults();
}

function showResults() {
    clearInterval(timerInterval);
    let correct = 0;
    wrongQuestions = [];
    questions.forEach((q, i) => {
        if (userAnswers[i] === q.σωστή_απάντηση) correct++;
        else wrongQuestions.push(i);
    });
    let percent = Math.round((correct / questions.length) * 100);
    document.getElementById("quiz").innerHTML = `
    <div style="width:50%;margin:auto;background:white;padding:30px;border-radius:10px">
    <h2>Results</h2>
    <p>Correct answers: ${correct} / ${questions.length}</p>
    <p>Score: ${percent}%</p>
    <h3>${percent >= 75 ? "PASS" : "FAIL"}</h3>
    <br>
    <button onclick="location.reload()" style="padding:14px 25px;font-size:18px;margin:8px">Restart</button>
    <button onclick="practiceWrong()" style="padding:14px 25px;font-size:18px;margin:8px;background:#ffc107">Practice Wrong (${wrongQuestions.length})</button>
    </div>`;
}
