let timer = null;
let timeLeft = 2700; // 45 λεπτά

const githubURL = "https://raw.githubusercontent.com/eminidis/drone-exam-trainer/refs/heads/main/questions.json";
// Σύνδεση με το νέο αρχείο που ανέβασες
const githubURL = "https://raw.githubusercontent.com/eminidis/drone-exam-trainer/refs/heads/main/31filesQuestions.json";

async function loadAllQuestions() {
try {
const response = await fetch(githubURL);
        if (!response.ok) throw new Error("Δεν βρέθηκε το αρχείο");
const data = await response.json();
        allQuestions = data.questions;
        console.log("Επιτυχής φόρτωση ερωτήσεων!");
        
        // Φόρτωση των ερωτήσεων από το αρχείο
        allQuestions = data.questions || data; 
        console.log("Φορτώθηκαν " + allQuestions.length + " ερωτήσεις.");
        
        // Ενημέρωση του τίτλου στην αρχική οθόνη με τον σωστό αριθμό
        const mainTitle = document.querySelector('#menu-screen h1 span');
        if (mainTitle) mainTitle.innerText = `${allQuestions.length} ΕΡΩΤΗΣΕΩΝ (A1-A3 & A2)`;
        
        const studyBtn = document.querySelector('.category-btn div');
        if (studyBtn) studyBtn.innerText = `ΟΛΗ Η ΒΑΣΗ (${allQuestions.length} ΕΡΩΤΗΣΕΙΣ)`;

} catch (error) {
        console.error("Σφάλμα κατά τη φόρτωση:", error);
        alert("Δεν ήταν δυνατή η φόρτωση των ερωτήσεων.");
        console.error("Σφάλμα:", error);
}
}

loadAllQuestions();

window.startStudy = function() {
    const category = document.getElementById('categorySelect').value;
    const amount = document.getElementById('amountSelect').value;
    const category = document.getElementById('categorySelect')?.value || 'all';
    const amount = document.getElementById('amountSelect')?.value || 'all';

currentQuestions = category === 'all' ? [...allQuestions] : allQuestions.filter(q => q.category === category);
if (amount !== 'all') currentQuestions = currentQuestions.slice(0, parseInt(amount));
@@ -35,6 +46,7 @@ window.startStudy = function() {
}

window.startExam = function() {
    if (allQuestions.length === 0) return alert("Περιμένετε να φορτώσουν οι ερωτήσεις...");
currentQuestions = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 40);
isStudyMode = false;
initQuiz();
@@ -46,41 +58,43 @@ function initQuiz() {
userAnswers = new Array(currentQuestions.length).fill(null);
marked = new Array(currentQuestions.length).fill(false);

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('start-screen')?.classList.add('hidden');
document.getElementById('quiz-screen').classList.remove('hidden');
renderQuestion();
renderDots();
}

function renderQuestion() {
const q = currentQuestions[currentIndex];
    document.getElementById('q-header').innerText = q.category;
    document.getElementById('q-header').innerText = q.category || "ΕΡΩΤΗΣΗ";
document.getElementById('q-counter').innerText = `${currentIndex + 1} / ${currentQuestions.length}`;
document.getElementById('q-text').innerText = q.question;

const container = document.getElementById('options-container');
container.innerHTML = '';

    const explanation = document.getElementById('explanation');
const expText = document.getElementById('exp-text');
    expText.classList.add('hidden');
    explanation.classList.add('hidden');

q.options.forEach(opt => {
        const char = opt.charAt(0);
        const char = opt.trim().charAt(0).toLowerCase();
const btn = document.createElement('button');
btn.className = 'option-btn';

if (userAnswers[currentIndex] === char) btn.classList.add('selected');

if (isStudyMode && userAnswers[currentIndex]) {
            if (char === q.answer) btn.classList.add('correct-choice');
            else if (char === userAnswers[currentIndex]) btn.classList.add('wrong-choice');
            if (char === q.answer.toLowerCase()) btn.classList.add('correct');
            else if (char === userAnswers[currentIndex]) btn.classList.add('wrong');
btn.disabled = true;

            expText.innerText = "Σωστή απάντηση: " + q.options.find(o => o.startsWith(q.answer));
            expText.classList.remove('hidden');
            expText.innerText = q.options.find(o => o.trim().toLowerCase().startsWith(q.answer.toLowerCase()));
            explanation.classList.remove('hidden');
}

        btn.innerHTML = `<div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-white/10 text-xs font-bold">${char}</div>
        btn.innerHTML = `<div class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-white/10 text-xs font-bold uppercase">${char}</div>
                        <div class="flex-1 text-sm font-medium">${opt.substring(3)}</div>`;

btn.onclick = () => handleSelect(char);
@@ -105,41 +119,28 @@ window.nextQ = function() {
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
        dot.className = `dot ${i === currentIndex ? 'active' : ''} ${userAnswers[i] ? 'answered' : ''}`;
dot.innerText = i + 1;
        dot.onclick = () => { currentIndex = i; renderQuestion(); updateDots(); };
        dot.onclick = () => { currentIndex = i; renderQuestion(); renderDots(); };
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
@@ -165,7 +166,7 @@ window.submitQuiz = function() {

let correct = 0;
userAnswers.forEach((ans, i) => {
        if (ans === currentQuestions[i].answer) correct++;
        if (ans === currentQuestions[i].answer.toLowerCase()) correct++;
});

const score = Math.round((correct / currentQuestions.length) * 100);
@@ -183,3 +184,9 @@ window.submitQuiz = function() {
}
document.getElementById('res-stats').innerText = `${correct} ΣΩΣΤΕΣ / ${currentQuestions.length} ΕΡΩΤΗΣΕΙΣ`;
}

// Για το κουμπί Study Mode στο HTML
window.showStudyOptions = function() {
    isStudyMode = true;
    initQuiz();
}
