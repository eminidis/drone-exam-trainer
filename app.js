let allQuestions = [];
let currentQuestions = [];
let userAnswers = [];
let marked = [];
let currentIndex = 0;
let isStudyMode = false;
let timer = null;
let timeLeft = 2700;

// Προσθέτουμε ένα τυχαίο νούμερο στο τέλος για να ΜΗΝ κολλάει ο Chrome (Cache Buster)
const githubURL = "https://raw.githubusercontent.com/eminidis/drone-exam-trainer/refs/heads/main/31filesQuestions.json?v=" + new Date().getTime();

async function loadAllQuestions() {
    try {
        console.log("Έναρξη φόρτωσης από:", githubURL);
        const response = await fetch(githubURL);
        if (!response.ok) throw new Error("HTTP error! status: " + response.status);
        
        const data = await response.json();
        allQuestions = data.questions || data;
        
        console.log("Φορτώθηκαν επιτυχώς " + allQuestions.length + " ερωτήσεις.");
        
        // Ενημέρωση των κειμένων στην αρχική οθόνη
        const titleSpan = document.querySelector('h2 span.text-blue-500');
        if (titleSpan) titleSpan.innerText = allQuestions.length + " ΕΡΩΤΗΣΕΩΝ";
        
    } catch (error) {
        console.error("ΚΡΙΣΙΜΟ ΣΦΑΛΜΑ:", error);
        alert("Πρόβλημα στη φόρτωση των ερωτήσεων. Βεβαιωθείτε ότι το αρχείο 31filesQuestions.json είναι σωστό στο GitHub.");
    }
}

loadAllQuestions();

window.startStudy = function() {
    if (allQuestions.length === 0) return alert("Οι ερωτήσεις ακόμα φορτώνουν...");
    const category = document.getElementById('categorySelect').value;
    const amount = document.getElementById('amountSelect').value;
    
    currentQuestions = category === 'all' ? [...allQuestions] : allQuestions.filter(q => q.category === category);
    if (amount !== 'all') currentQuestions = currentQuestions.slice(0, parseInt(amount));
    
    isStudyMode = true;
    initQuiz();
}

window.startExam = function() {
    if (allQuestions.length === 0) return alert("Οι ερωτήσεις ακόμα φορτώνουν...");
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

    document.getElementById('q-header').innerText = q.category || "ΓΕΝΙΚΗ ΕΝΟΤΗΤΑ";
    document.getElementById('q-counter').innerText = `${currentIndex + 1} / ${currentQuestions.length}`;
    document.getElementById('q-text').innerText = q.question;
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    const expText = document.getElementById('exp-text');
    expText.classList.add('hidden');

    q.options.forEach(opt => {
        const char = opt.trim().charAt(0).toUpperCase();
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        
        if (userAnswers[currentIndex] === char) btn.classList.add('selected');
        
        if (isStudyMode && userAnswers[currentIndex]) {
            const correctChar = q.answer.trim().toUpperCase();
            if (char === correctChar) btn.classList.add('correct-choice');
            else if (char === userAnswers[currentIndex]) btn.classList.add('wrong-choice');
            btn.disabled = true;
            
            expText.innerText = "Σωστή απάντηση: " + q.options.find(o => o.trim().toUpperCase().startsWith(correctChar));
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
    if (!grid) return;
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
        if (ans === currentQuestions[i].answer.trim().toUpperCase()) correct++;
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
