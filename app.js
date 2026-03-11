let allQuestions = [];
let currentQuestions = [];
let userAnswers = [];
let marked = [];
let currentIndex = 0;
let isStudyMode = false;
let timer = null;
let timeLeft = 2700; // 45 λεπτά

const githubURL = "https://raw.githubusercontent.com/eminidis/drone-exam-trainer/refs/heads/main/questions.json";

async function loadAllQuestions() {
    try {
        const response = await fetch(githubURL);
        const data = await response.json();
        allQuestions = data.questions;
        console.log("Επιτυχής φόρτωση ερωτήσεων!");
    } catch (error) {
        console.error("Σφάλμα κατά τη φόρτωση:", error);
        alert("Δεν ήταν δυνατή η φόρτωση των ερωτήσεων.");
    }
}

loadAllQuestions();

window.startStudy = function() {
    const category = document.getElementById('categorySelect').value;
    const amount = document.getElementById('amountSelect').value;
    
    currentQuestions = category === 'all' ? [...allQuestions] : allQuestions.filter(q => q.category === category);
    if (amount !== 'all') currentQuestions = currentQuestions.slice(0, parseInt(amount));
    
    isStudyMode = true;
    initQuiz();
}

window.startExam = function() {
    currentQuestions = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 40);
    isStudyMode = false;
    initQuiz();
    startTimer();
}

function initQuiz() {
    currentIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    marked = new Array(currentQuestions.length).fill(false);
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    renderQuestion();
    renderDots();
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    document.getElementById('q-header').innerText = q.category;
    document.getElementById('q-counter').innerText = `${currentIndex + 1} / ${currentQuestions.length}`;
    document.getElementById('q-text').innerText = q.question;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    const expText = document.getElementById('exp-text');
    expText.classList.add('hidden');

    q.options.forEach(opt => {
        const char = opt.charAt(0);
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        
        if (userAnswers[currentIndex] === char) btn.classList.add('selected');
        
        if (isStudyMode && userAnswers[currentIndex]) {
            if (char === q.answer) btn.classList.add('correct-choice');
            else if (char === userAnswers[currentIndex]) btn.classList.add('wrong-choice');
            btn.disabled = true;
            
            expText.innerText = "Σωστή απάντηση: " + q.options.find(o => o.startsWith(q.answer));
            expText.classList.remove('hidden');
        }

        btn.innerHTML = `<div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-white/10 text-xs font-bold">${char}</div>
                         <div class="flex-1 text-sm font-medium">${opt.substring(3)}</div>`;
        
        btn.onclick = () => handleSelect(char);
        container.appendChild(btn);
    });

    document.getElementById('progress-bar').style.width = `${((currentIndex + 1) / currentQuestions.length) * 100}%`;
    document.getElementById('prev-btn').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
}

function handleSelect(char) {
    if (isStudyMode && userAnswers[currentIndex]) return;
    userAnswers[currentIndex] = char;
    renderQuestion();
    renderDots();
    if (!isStudyMode && currentIndex < currentQuestions.length - 1) {
        setTimeout(nextQ, 300);
    }
}

window.nextQ = function() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
        updateDots();
    }
}

window.prevQ = function() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
        updateDots();
    }
}

window.toggleMark = function() {
    marked[currentIndex] = !marked[currentIndex];
    renderDots();
}

function renderDots() {
    const grid = document.getElementById('dot-grid');
    grid.innerHTML = '';
    currentQuestions.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `dot ${i === currentIndex ? 'active' : ''} ${userAnswers[i] ? 'answered' : ''} ${marked[i] ? 'marked' : ''}`;
        dot.innerText = i + 1;
        dot.onclick = () => { currentIndex = i; renderQuestion(); updateDots(); };
        grid.appendChild(dot);
    });
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function startTimer() {
    timeLeft = 2700;
    const timerEl = document.getElementById('active-timer');
    timerEl.classList.remove('hidden');
    timer = setInterval(() => {
        timeLeft--;
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        timerEl.innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
        if (timeLeft <= 0) submitQuiz();
    }, 1000);
}

window.showConfirm = function() { document.getElementById('confirm-modal').classList.remove('hidden'); }
window.hideConfirm = function() { document.getElementById('confirm-modal').classList.add('hidden'); }

window.submitQuiz = function() {
    if (timer) clearInterval(timer);
    hideConfirm();
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('active-timer').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');

    let correct = 0;
    userAnswers.forEach((ans, i) => {
        if (ans === currentQuestions[i].answer) correct++;
    });

    const score = Math.round((correct / currentQuestions.length) * 100);
    const scoreEl = document.getElementById('res-score');
    scoreEl.innerText = score + '%';
    
    if (score >= 75) {
        document.getElementById('res-icon').innerText = "🏆";
        document.getElementById('res-title').innerText = "ΕΠΙΤΥΧΙΑ!";
        scoreEl.className = "text-8xl font-black mb-2 text-emerald-400";
    } else {
        document.getElementById('res-icon').innerText = "📈";
        document.getElementById('res-title').innerText = "ΑΠΟΤΥΧΙΑ";
        scoreEl.className = "text-8xl font-black mb-2 text-rose-400";
    }
    document.getElementById('res-stats').innerText = `${correct} ΣΩΣΤΕΣ / ${currentQuestions.length} ΕΡΩΤΗΣΕΙΣ`;
}
