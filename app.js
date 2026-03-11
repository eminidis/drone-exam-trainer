let allQuestions = [];
let currentQuestions = [];
let userAnswers = [];
let marked = [];
let currentIndex = 0;
let isStudyMode = false;
let timer = null;
let timeLeft = 2700; // 45 λεπτά

// Σύνδεση με το νέο αρχείο που ανέβασες
const githubURL = "https://raw.githubusercontent.com/eminidis/drone-exam-trainer/refs/heads/main/31filesQuestions.json";

async function loadAllQuestions() {
    try {
        const response = await fetch(githubURL);
        if (!response.ok) throw new Error("Δεν βρέθηκε το αρχείο");
        const data = await response.json();
        
        // Φόρτωση των ερωτήσεων από το αρχείο
        allQuestions = data.questions || data; 
        console.log("Φορτώθηκαν " + allQuestions.length + " ερωτήσεις.");
        
        // Ενημέρωση του τίτλου στην αρχική οθόνη με τον σωστό αριθμό
        const mainTitle = document.querySelector('#menu-screen h1 span');
        if (mainTitle) mainTitle.innerText = `${allQuestions.length} ΕΡΩΤΗΣΕΩΝ (A1-A3 & A2)`;
        
        const studyBtn = document.querySelector('.category-btn div');
        if (studyBtn) studyBtn.innerText = `ΟΛΗ Η ΒΑΣΗ (${allQuestions.length} ΕΡΩΤΗΣΕΙΣ)`;

    } catch (error) {
        console.error("Σφάλμα:", error);
    }
}

loadAllQuestions();

window.startStudy = function() {
    const category = document.getElementById('categorySelect')?.value || 'all';
    const amount = document.getElementById('amountSelect')?.value || 'all';
    
    currentQuestions = category === 'all' ? [...allQuestions] : allQuestions.filter(q => q.category === category);
    if (amount !== 'all') currentQuestions = currentQuestions.slice(0, parseInt(amount));
    
    isStudyMode = true;
    initQuiz();
}

window.startExam = function() {
    if (allQuestions.length === 0) return alert("Περιμένετε να φορτώσουν οι ερωτήσεις...");
    currentQuestions = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 40);
    isStudyMode = false;
    initQuiz();
    startTimer();
}

function initQuiz() {
    currentIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    marked = new Array(currentQuestions.length).fill(false);
    
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('start-screen')?.classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    renderQuestion();
    renderDots();
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    document.getElementById('q-header').innerText = q.category || "ΕΡΩΤΗΣΗ";
    document.getElementById('q-counter').innerText = `${currentIndex + 1} / ${currentQuestions.length}`;
    document.getElementById('q-text').innerText = q.question;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    const explanation = document.getElementById('explanation');
    const expText = document.getElementById('exp-text');
    explanation.classList.add('hidden');

    q.options.forEach(opt => {
        const char = opt.trim().charAt(0).toLowerCase();
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        
        if (userAnswers[currentIndex] === char) btn.classList.add('selected');
        
        if (isStudyMode && userAnswers[currentIndex]) {
            if (char === q.answer.toLowerCase()) btn.classList.add('correct');
            else if (char === userAnswers[currentIndex]) btn.classList.add('wrong');
            btn.disabled = true;
            
            expText.innerText = q.options.find(o => o.trim().toLowerCase().startsWith(q.answer.toLowerCase()));
            explanation.classList.remove('hidden');
        }

        btn.innerHTML = `<div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-white/10 text-xs font-bold uppercase">${char}</div>
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
    }
}

window.prevQ = function() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
}

function renderDots() {
    const grid = document.getElementById('dot-grid');
    grid.innerHTML = '';
    currentQuestions.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `dot ${i === currentIndex ? 'active' : ''} ${userAnswers[i] ? 'answered' : ''}`;
        dot.innerText = i + 1;
        dot.onclick = () => { currentIndex = i; renderQuestion(); renderDots(); };
        grid.appendChild(dot);
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
        if (ans === currentQuestions[i].answer.toLowerCase()) correct++;
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

// Για το κουμπί Study Mode στο HTML
window.showStudyOptions = function() {
    isStudyMode = true;
    initQuiz();
}
