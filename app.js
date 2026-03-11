let allQuestions = [];
let currentQuestions = [];
let userAnswers = [];
let currentIndex = 0;
let isStudyMode = false;

// URL για το JSON σου
const githubURL = "https://raw.githubusercontent.com/eminidis/drone-exam-trainer/refs/heads/main/31filesQuestions.json?v=" + Date.now();

async function loadData() {
    try {
        const r = await fetch(githubURL);
        const d = await r.json();
        allQuestions = d.ερωτήσεις || [];
    } catch (e) { console.error("Error", e); }
}
loadData();

window.startStudy = function() {
    if (allQuestions.length === 0) return;
    const cat = document.getElementById('categorySelect').value;
    currentQuestions = (cat === 'all') ? [...allQuestions] : allQuestions.filter(q => q.ΕΝΟΤΗΤΑ === cat);
    isStudyMode = true;
    initQuiz();
}

window.startExam = function() {
    if (allQuestions.length === 0) return;
    currentQuestions = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 40);
    isStudyMode = false;
    initQuiz();
}

function initQuiz() {
    currentIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    renderQuestion();
    renderDots();
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    if (!q) return;
    document.getElementById('q-counter').innerText = `${currentIndex + 1} / ${currentQuestions.length}`;
    document.getElementById('q-text').innerText = q.ερώτηση;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const expText = document.getElementById('exp-text');
    expText.classList.add('hidden');

    for (const key in q.επιλογές) {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (userAnswers[currentIndex] === key) btn.classList.add('selected');
        
        if (isStudyMode && userAnswers[currentIndex]) {
            if (key === q.σωστή_απάντηση) btn.classList.add('correct-choice');
            else if (key === userAnswers[currentIndex]) btn.classList.add('wrong-choice');
            btn.disabled = true;
            expText.innerText = "Σωστή απάντηση: " + q.επιλογές[q.σωστή_απάντηση];
            expText.classList.remove('hidden');
        }

        btn.innerHTML = `<div class="w-8 h-8 rounded bg-slate-800 flex items-center justify-center border border-white/10 text-[10px] font-bold mr-3">${key.toUpperCase()}</div>
                         <div class="flex-1 text-sm font-medium text-left text-white">${q.επιλογές[key]}</div>`;
        btn.onclick = () => {
            if (isStudyMode && userAnswers[currentIndex]) return;
            userAnswers[currentIndex] = key;
            renderQuestion();
            renderDots();
        };
        container.appendChild(btn);
    }
}

window.nextQ = function() { if (currentIndex < currentQuestions.length - 1) { currentIndex++; renderQuestion(); renderDots(); } }
window.prevQ = function() { if (currentIndex > 0) { currentIndex--; renderQuestion(); renderDots(); } }

function renderDots() {
    const grid = document.getElementById('dot-grid');
    grid.innerHTML = '';
    currentQuestions.forEach((_, i) => {
        const d = document.createElement('div');
        d.className = `dot ${i === currentIndex ? 'active' : ''} ${userAnswers[i] ? 'answered' : ''}`;
        d.innerText = i + 1;
        d.onclick = () => { currentIndex = i; renderQuestion(); renderDots(); };
        grid.appendChild(d);
    });
}
