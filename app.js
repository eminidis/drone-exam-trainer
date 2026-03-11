let allQuestions = [];
let currentQuestions = [];
let userAnswers = [];
let marked = [];
let currentIndex = 0;
let isStudyMode = false;
let timer = null;
let timeLeft = 2700;

const githubURL = "https://raw.githubusercontent.com/eminidis/drone-exam-trainer/refs/heads/main/31filesQuestions.json?v=" + new Date().getTime();

async function loadAllQuestions() {
    try {
        const response = await fetch(githubURL);
        const data = await response.json();
        
        // Προσαρμογή στους δικούς σου ελληνικούς όρους μέσα στο JSON
        allQuestions = data.ερωτήσεις || [];
        
        const titleSpan = document.querySelector('h2 span.text-blue-500');
        if (titleSpan) titleSpan.innerText = allQuestions.length + " ΕΡΩΤΗΣΕΩΝ";
        
    } catch (error) {
        console.error("Σφάλμα φόρτωσης:", error);
    }
}

loadAllQuestions();

window.startStudy = function() {
    if (allQuestions.length === 0) return;
    const cat = document.getElementById('categorySelect').value;
    const amt = document.getElementById('amountSelect').value;
    
    currentQuestions = (cat === 'all') ? [...allQuestions] : allQuestions.filter(q => q.ΕΝΟΤΗΤΑ === cat);
    if (amt !== 'all') currentQuestions = currentQuestions.slice(0, parseInt(amt));
    
    isStudyMode = true;
    initQuiz();
}

window.startExam = function() {
    if (allQuestions.length === 0) return;
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
    if (!q) return;

    document.getElementById('q-header').innerText = q.ΕΝΟΤΗΤΑ || "ΕΝΟΤΗΤΑ";
    document.getElementById('q-counter').innerText = `${currentIndex + 1} / ${currentQuestions.length}`;
    document.getElementById('q-text').innerText = q.ερώτηση;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    const expText = document.getElementById('exp-text');
    expText.classList.add('hidden');

    // Διάβασμα των επιλογών α, β, γ, δ από το αντικείμενο "επιλογές"
    const choices = q.επιλογές;
    for (const key in choices) {
        const btn = document.createElement('button');
        btn.className = 'option-btn'; // Χρήση του δικού σου CSS class
        
        if (userAnswers[currentIndex] === key) btn.classList.add('selected');
        
        if (isStudyMode && userAnswers[currentIndex]) {
            if (key === q.σωστή_απάντηση) btn.classList.add('correct-choice');
            else if (key === userAnswers[currentIndex]) btn.classList.add('wrong-choice');
            btn.disabled = true;
            
            expText.innerText = "Σωστή απάντηση: " + choices[q.σωστή_απάντηση];
            expText.classList.remove('hidden');
        }

        btn.innerHTML = `<div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-white/10 text-xs font-bold uppercase">${key}</div>
                         <div class="flex-1 text-sm font-medium">${choices[key]}</div>`;
        
        btn.onclick = () => handleSelect(key);
        container.appendChild(btn);
    }

    document.getElementById('progress-bar').style.width = `${((currentIndex + 1) / currentQuestions.length) * 100}%`;
    document.getElementById('prev-btn').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
}

function handleSelect(key) {
    if (isStudyMode && userAnswers[currentIndex]) return;
    userAnswers[currentIndex] = key;
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
        renderDots();
    }
}

window.prevQ = function() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
        renderDots();
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
        dot.onclick = () => { currentIndex = i; renderQuestion(); renderDots(); };
        grid.appendChild(dot);
    });
}

function startTimer() {
    timeLeft = 2700;
    const timerEl = document.getElementById('active-timer');
    timerEl.classList.remove('hidden');
    if (timer) clearInterval(timer);
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
        if (ans === currentQuestions[i].σωστή_απάντηση) correct++;
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
