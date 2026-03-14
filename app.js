let letters = ["A", "B", "C", "D"]
let current = 0
let totalQuestions = 5
let mode = "exam"
let correctCount = 0
let timerInterval
let seconds = 0
let examTime = 2700 // 45 λεπτά (EASA A2 Standard)
let answered = []
let flagged = []
let questionsPool = []
let questions = []

let chartInstance = null;

// --- EASA OFFICIAL THEORY DATASET (Μελλοντική Χρήση) ---
const easaTheoryData = [
    {
        module: "Αεροπορική Νομοθεσία",
        sections: [
            {
                title: "Κατηγορίες Πτήσεων (Open Category)",
                content: "Η Ανοικτή (Open) κατηγορία χωρίζεται σε τρεις υποκατηγορίες: A1, A2, A3 βάσει του βάρους του ΣμηΕΑ και της απόστασης από ανθρώπους.",
                notes: [
                    "A1: Πτήση πάνω από ανθρώπους (αλλά όχι πλήθη). Ισχύει για drones < 250g (C0) ή < 900g (C1).",
                    "A2: Πτήση κοντά σε ανθρώπους. Απαιτείται πιστοποιητικό A2. Απόσταση 30m (ή 5m σε low-speed mode) για C2 drones.",
                    "A3: Πτήση μακριά από ανθρώπους και αστικές περιοχές. Τουλάχιστον 150m απόσταση."
                ]
            },
            {
                title: "Ύψος και VLOS",
                content: "Βασικοί κανόνες ασφαλείας για όλες τις υποκατηγορίες της Open.",
                notes: [
                    "Μέγιστο επιτρεπόμενο ύψος: 120 μέτρα (400 ft) από την επιφάνεια του εδάφους.",
                    "VLOS (Visual Line of Sight): Πτήση πάντα εντός οπτικής επαφής του τηλεχειριστή."
                ]
            }
        ]
    },
    {
        module: "Μετεωρολογία",
        sections: [
            {
                title: "Επίδραση Ανέμου",
                content: "Ο άνεμος επηρεάζει άμεσα την κατανάλωση μπαταρίας και τη σταθερότητα του drone.",
                notes: [
                    "Η πτήση κόντρα στον άνεμο μειώνει δραστικά τον χρόνο πτήσης.",
                    "Προσοχή σε ριπές ανέμου (gusts) γύρω από ψηλά κτίρια (φαινόμενο σήραγγας)."
                ]
            }
        ]
    },
    {
        module: "Ανθρώπινοι Παράγοντες",
        sections: [
            {
                title: "Κρίση και Λήψη Αποφάσεων",
                content: "Η ανθρώπινη απόδοση επηρεάζεται από διάφορους εξωτερικούς και εσωτερικούς παράγοντες.",
                notes: [
                    "Κόπωση, στρες και κατανάλωση αλκοόλ απαγορεύουν ρητά την εκτέλεση πτήσης.",
                    "Η ψευδαίσθηση της προοπτικής (optical illusion) μπορεί να κάνει το drone να φαίνεται πιο κοντά ή μακριά από ότι είναι."
                ]
            }
        ]
    }
];

// --- STATS & LOCAL STORAGE ---
let studyStats = JSON.parse(localStorage.getItem("studyStats")) || {
    "Αεροπορική Νομοθεσία": { correct: 0, total: 0 },
    "Μετεωρολογία": { correct: 0, total: 0 },
    "Ανθρώπινοι Παράγοντες": { correct: 0, total: 0 },
    "Πλοήγηση": { correct: 0, total: 0 }
}

// Retro-compatibility αν το παλιό format ήταν νούμερα
if (typeof studyStats["Αεροπορική Νομοθεσία"] === 'number') {
    studyStats = {
        "Αεροπορική Νομοθεσία": { correct: 0, total: 0 },
        "Μετεωρολογία": { correct: 0, total: 0 },
        "Ανθρώπινοι Παράγοντες": { correct: 0, total: 0 },
        "Πλοήγηση": { correct: 0, total: 0 }
    }
}

let examHistory = JSON.parse(localStorage.getItem("examHistory")) || []
let questionStats = JSON.parse(localStorage.getItem("questionStats")) || {}
let wrongQuestions = JSON.parse(localStorage.getItem("wrongQuestions")) || []

function initQuestionStats() {
    questionsPool.forEach((q, i) => {
        if (!q.id) { q.id = "Q" + i }
        if (!questionStats[q.id]) {
            questionStats[q.id] = { seen: 0, correct: 0, wrong: 0 }
        }
    })
    localStorage.setItem("questionStats", JSON.stringify(questionStats))
}

function recordSeen(id) {
    if (questionStats[id]) {
        questionStats[id].seen++
        saveQuestionStats()
    }
}

function recordCorrect(id) {
    if (questionStats[id]) {
        questionStats[id].correct++
        saveQuestionStats()
    }
}

function recordWrong(id) {
    if (questionStats[id]) {
        questionStats[id].wrong++
        if (!wrongQuestions.includes(id)) {
            wrongQuestions.push(id)
        }
        saveQuestionStats()
    }
}

function saveQuestionStats() {
    localStorage.setItem("questionStats", JSON.stringify(questionStats))
    localStorage.setItem("wrongQuestions", JSON.stringify(wrongQuestions))
}

// --- MISSION MODE DATA ---
const missionsPool = [
    {
        title: "Επιθεώρηση Εργοταξίου",
        drone: "C2",
        weight: "3.5 kg",
        location: "Ημι-αστική περιοχή",
        people: "Άνθρωποι κοντά (στα 10m)",
        wind: "7 m/s",
        q: "Σε ποια κατηγορία ανήκει η πτήση και ποιος είναι ο περιορισμός;",
        answers: [
            "A1 - Επιτρέπεται πτήση πάνω από ανθρώπους",
            "A2 - Απαιτείται low-speed mode για πτήση στα 5m",
            "A3 - Απαγορεύεται η πτήση, απαιτούνται 150m απόσταση"
        ],
        correct: 1,
        exp: "Σωστά! Με drone C2 σε απόσταση κάτω των 30m, απαιτείται ενεργοποίηση του low-speed mode (μέγιστο 5m απόσταση) σύμφωνα με τους κανόνες της A2."
    }
];
let currentMission = 0;

// --- UI & NAVIGATION ---
function toggleTheme() {
    document.body.classList.toggle("dark")
}

function openSettings() {
    hideAll()
    document.getElementById("settingsScreen").style.display = "flex"
}

function openStats() {
    hideAll()
    document.getElementById("statsScreen").style.display = "flex"
}

// --- ΕΠΑΓΓΕΛΜΑΤΙΚΑ ΣΤΑΤΙΣΤΙΚΑ ---
function openStudyStats() {
    hideAll()
    document.getElementById("studyStatsScreen").style.display = "flex"
    
    let container = document.getElementById("studyStatsContent");
    let overview = document.getElementById("studyOverview");
    let tableHTML = `<table class="stats-table">
                        <thead>
                            <tr>
                                <th>Ενότητα Θεωρίας EASA</th>
                                <th>Ποσοστό Επιτυχίας</th>
                                <th>Απαντήσεις (Σωστά / Σύνολο)</th>
                            </tr>
                        </thead>
                        <tbody>`;
    
    let totalC = 0, totalA = 0;

    for (let category in studyStats) {
        let stats = studyStats[category];
        let correct = stats.correct || 0;
        let total = stats.total || 0;
        
        totalC += correct;
        totalA += total;

        let percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
        
        tableHTML += `
            <tr>
                <td><strong>${category}</strong></td>
                <td>
                    ${percentage}%
                    <div class="progress-bar-container">
                        <div class="progress-fill" style="width: ${percentage}%;"></div>
                    </div>
                </td>
                <td>${correct} / ${total}</td>
            </tr>
        `;
    }
    tableHTML += `</tbody></table>`;
    container.innerHTML = tableHTML;

    let totalPercentage = totalA > 0 ? Math.round((totalC / totalA) * 100) : 0;
    overview.innerHTML = `
        <div class="stat-item">
            <div class="stat-value">${totalPercentage}%</div>
            <div class="stat-label">Συνολική Επιτυχία</div>
        </div>
        <div class="stat-item">
            <div class="stat-value">${totalA}</div>
            <div class="stat-label">Λυμένες Ερωτήσεις</div>
        </div>
    `;
}

function openExamStats() {
    hideAll()
    document.getElementById("examStatsScreen").style.display = "flex"
    
    let overview = document.getElementById("examOverview");
    
    let totalExams = examHistory.length;
    let passedExams = examHistory.filter(score => score >= 75).length;
    let passRate = totalExams > 0 ? Math.round((passedExams / totalExams) * 100) : 0;
    let avgScore = totalExams > 0 ? Math.round(examHistory.reduce((a, b) => a + b, 0) / totalExams) : 0;

    overview.innerHTML = `
        <div class="stat-item">
            <div class="stat-value">${totalExams}</div>
            <div class="stat-label">Σύνολο Εξετάσεων</div>
        </div>
        <div class="stat-item">
            <div class="stat-value">${avgScore}%</div>
            <div class="stat-label">Μέσος Όρος (A2)</div>
        </div>
        <div class="stat-item">
            <div class="stat-value">${passRate}%</div>
            <div class="stat-label">Ποσοστό Επιτυχίας (PASS)</div>
        </div>
    `;

    renderExamChart();
}

function renderExamChart() {
    const ctx = document.getElementById('examChart').getContext('2d');
    
    if (chartInstance) {
        chartInstance.destroy();
    }

    let labels = examHistory.map((_, i) => `Εξέταση ${i + 1}`);
    let data = examHistory;

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Βαθμολογία Προσομοίωσης A2 (%)',
                data: data,
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { callback: function(value) { return value + "%" } }
                }
            },
            plugins: {
                annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            yMin: 75,
                            yMax: 75,
                            borderColor: 'rgb(22, 163, 74)',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            label: { content: 'Βάση Επιτυχίας (75%)', enabled: true, position: 'end' }
                        }
                    }
                }
            }
        }
    });
}

function openStudy() {
    hideAll()
    document.getElementById("studySetup").style.display = "flex"
}

function openMission() {
    hideAll()
    currentMission = 0
    renderMission()
    document.getElementById("missionScreen").style.display = "flex"
}

function openExamConfirm() {
    let confirmStart = confirm("Έναρξη προσομοίωσης A2 (30 ερωτήσεις - 45 λεπτά);\n\nΑυτό προσομοιώνει την επίσημη εξέταση της EASA.")
    if (!confirmStart) { return }
    openExam()
}

function openExam() {
    mode = "exam"
    prepareQuestions(30) 
    startTest()
}

function startStudy() {
    mode = "study"
    prepareQuestions()
    startTest()
}

// --- SETUP & LOGIC ---
function prepareQuestions(overrideCount = null) {
    let category = document.getElementById("studyCategory") ? document.getElementById("studyCategory").value : "Random"
    let count = overrideCount ? overrideCount : (document.getElementById("studyCount") ? parseInt(document.getElementById("studyCount").value) : 5)

    let filtered = [...questionsPool]
    if (category !== "Random") {
        filtered = questionsPool.filter(q => q.cat === category)
    }

    filtered = shuffleArray(filtered)
    questions = filtered.slice(0, count)
    totalQuestions = questions.length
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

function startTimer() {
    clearInterval(timerInterval)

    if (mode === "study") {
        seconds = 0
        timerInterval = setInterval(() => {
            seconds++
            let m = Math.floor(seconds / 60)
            let s = seconds % 60
            document.getElementById("timer").innerText = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0")
        }, 1000)
    } else {
        let time = examTime
        timerInterval = setInterval(() => {
            time--
            let m = Math.floor(time / 60)
            let s = time % 60
            document.getElementById("timer").innerText = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0")

            if (time <= 0) {
                finishSession(true)
            }
        }, 1000)
    }
}

function startTest() {
    hideAll()
    document.getElementById("testScreen").style.display = "block"
    current = 0
    correctCount = 0
    answered = []
    flagged = []
    createGrid()
    loadQuestion()
    startTimer()
}

function createGrid() {
    let grid = document.querySelector(".question-grid")
    grid.innerHTML = ""

    for (let i = 0; i < totalQuestions; i++) {
        let cell = document.createElement("div")
        cell.innerText = i + 1
        cell.onclick = function () {
            current = i
            loadQuestion()
        }
        grid.appendChild(cell)
    }
}

function loadQuestion() {
    let q = questions[current]
    if (q) recordSeen(q.id)

    document.getElementById("questionText").innerText = q.q
    let expDiv = document.getElementById("explanation");
    expDiv.style.display = "none";
    expDiv.innerText = "";

    let buttons = document.querySelectorAll(".answers button")
    buttons.forEach((b, i) => {
        if (q.answers[i]) {
            b.innerText = letters[i] + ". " + q.answers[i]
            b.style.display = "block"
        } else {
            b.style.display = "none"
        }
        b.classList.remove("correct", "wrong")
    })
}

function answer(i) {
    let q = questions[current]
    let cell = document.querySelectorAll(".question-grid div")[current]

    if (mode === "exam") {
        if (!answered[current]) {
            answered[current] = true
            cell.classList.add("exam")

            if (i === q.correct) {
                correctCount++
                recordCorrect(q.id)
            } else {
                recordWrong(q.id)
            }
            setTimeout(nextQuestion, 400) 
        }
    } else {
        // STUDY MODE
        if (answered[current]) return

        let expDiv = document.getElementById("explanation");
        expDiv.style.display = "block";
        
        let cat = q.cat;
        if (!studyStats[cat]) studyStats[cat] = { correct: 0, total: 0 };
        studyStats[cat].total++;

        if (i === q.correct) {
            correctCount++
            cell.classList.add("correct")
            answered[current] = true
            recordCorrect(q.id)

            studyStats[cat].correct++;
            localStorage.setItem("studyStats", JSON.stringify(studyStats))

            expDiv.style.color = "#22c55e"
            expDiv.style.background = "#dcfce7"
            expDiv.innerText = "Εξαιρετικά! Απάντησες σωστά."
            setTimeout(nextQuestion, 1200) 
        } else {
            cell.classList.add("wrong")
            recordWrong(q.id)
            localStorage.setItem("studyStats", JSON.stringify(studyStats))
            
            expDiv.style.color = "#dc2626"
            expDiv.style.background = "#fee2e2"
            expDiv.innerText = q.exp // Explanation από την θεωρία
        }
        checkStudyCompletion()
    }
}

function checkStudyCompletion() {
    if (mode !== "study") return
    let done = answered.filter(x => x).length
    if (done === totalQuestions) {
        setTimeout(() => {
            let finish = confirm("Έχεις ολοκληρώσει τη μελέτη. Θέλεις να δεις το αποτέλεσμα;")
            if (finish) {
                finishSession()
            }
        }, 1500)
    }
}

function nextQuestion() {
    if (current < totalQuestions - 1) {
        current++
        loadQuestion()
    }
}

function prevQuestion() {
    if (current > 0) {
        current--
        loadQuestion()
    }
}

function flagQuestion() {
    let cell = document.querySelectorAll(".question-grid div")[current]
    cell.classList.toggle("flag")
}

// --- MISSION RENDER ---
function renderMission() {
    let m = missionsPool[currentMission]
    document.getElementById("missionCard").innerHTML = `
        <div class="mission-visual">
            <h3>📍 ${m.title}</h3>
            <p><strong>Drone:</strong> ${m.drone} (Βάρος: ${m.weight})</p>
            <p><strong>Περιοχή:</strong> ${m.location}</p>
            <p><strong>Συνθήκες Πεδίου:</strong> ${m.people}</p>
            <p><strong>Άνεμος:</strong> ${m.wind}</p>
        </div>
        <div class="mission-q">
            <h4>${m.q}</h4>
            ${m.answers.map((a, i) => `<button onclick="checkMission(${i})">${a}</button>`).join('')}
        </div>
        <div id="missionFeedback" style="display:none; padding:15px; margin-top:20px; border-radius:8px; font-weight:bold; font-size:18px;"></div>
    `
}

function checkMission(i) {
    let m = missionsPool[currentMission]
    let fb = document.getElementById("missionFeedback")
    fb.style.display = "block"
    
    if (i === m.correct) {
        fb.style.color = "#16a34a"
        fb.style.background = "#dcfce7"
        fb.innerText = m.exp
    } else {
        fb.style.color = "#dc2626"
        fb.style.background = "#fee2e2"
        fb.innerText = "Λάθος Απόφαση. " + m.exp
    }
}

function finishSession(timeout) {
    if (mode === "exam" && !timeout) {
        let confirmFinish = confirm("Είσαι σίγουρος ότι θέλεις να υποβάλλεις την εξέταση;")
        if (!confirmFinish) { return }
    }

    clearInterval(timerInterval)

    let score = Math.round((correctCount / totalQuestions) * 100)
    let resultText = "ΑΠΟΤΥΧΙΑ (FAIL)"

    if (score >= 75) {
        resultText = "ΕΠΙΤΥΧΙΑ (PASS)"
    }

    if (mode === "exam") {
        examHistory.push(score)
        localStorage.setItem("examHistory", JSON.stringify(examHistory))
    }

    hideAll()
    document.getElementById("resultScreen").style.display = "flex"
    document.getElementById("finalScore").innerText = score + "%"
    
    let passFailEl = document.getElementById("passFail");
    passFailEl.innerText = resultText;
    passFailEl.style.color = score >= 75 ? "#16a34a" : "#dc2626";
}

function goMenu() {
    hideAll()
    document.getElementById("menu").style.display = "flex"
}

function hideAll() {
    let ids = [
        "menu", "studySetup", "testScreen", "statsScreen",
        "studyStatsScreen", "examStatsScreen", "settingsScreen", "resultScreen", "missionScreen"
    ]

    ids.forEach(id => {
        let el = document.getElementById(id)
        if (el) el.style.display = "none"
    })
}

// --- ΒΑΣΗ ΕΡΩΤΗΣΕΩΝ ---
questionsPool = [
    {
        id: "Q0",
        cat: "Αεροπορική Νομοθεσία",
        q: "Τι σημαίνει το ακρωνύμιο UAV;",
        answers: ["Μη επανδρωμένο αεροσκάφος (Unmanned Aerial Vehicle)", "Αυτόνομο όχημα πτήσης", "Αεροσκάφος μεταφοράς επιβατών", "Δορυφορικό σύστημα"],
        correct: 0,
        exp: "Σύμφωνα με τους κανονισμούς της EASA, UAV σημαίνει Unmanned Aerial Vehicle, δηλαδή ένα αεροσκάφος που επιχειρεί χωρίς πιλότο εντός αυτού."
    },
    {
        id: "Q1",
        cat: "Μετεωρολογία",
        q: "Ποιος τύπος μπαταρίας χρησιμοποιείται κυρίως στα σύγχρονα drones;",
        answers: ["Αλκαλικές AA", "Lithium Polymer (LiPo)", "Νικελίου-Υδριδίου (NiMH)", "Μολύβδου"],
        correct: 1,
        exp: "Οι μπαταρίες Lithium Polymer (LiPo) χρησιμοποιούνται λόγω της ικανότητάς τους να αποθηκεύουν μεγάλη ποσότητα ενέργειας (υψηλή ενεργειακή πυκνότητα) και να παρέχουν γρήγορα υψηλά ρεύματα εκφόρτισης."
    },
    {
        id: "Q2",
        cat: "Ανθρώπινοι Παράγοντες",
        q: "Ποια είναι η λειτουργία του συστήματος RTH (Return to Home);",
        answers: ["Απενεργοποιεί άμεσα τους κινητήρες του drone", "Επιστρέφει αυτόματα το drone στο αρχικό σημείο απογείωσης (Home Point)", "Κλείνει το σύστημα καταγραφής βίντεο", "Πραγματοποιεί άμεση προσγείωση στο σημείο που βρίσκεται"],
        correct: 1,
        exp: "Η λειτουργία Return to Home (RTH) αποτελεί σύστημα ασφαλείας που, όταν ενεργοποιηθεί (χειροκίνητα ή λόγω απώλειας σήματος), φέρνει το drone πίσω στο προκαθορισμένο Home Point."
    },
    {
        id: "Q3",
        cat: "Πλοήγηση",
        q: "Ποιος εσωτερικός αισθητήρας είναι υπεύθυνος για τη βασική σταθεροποίηση του drone κατά την πτήση;",
        answers: ["Γυροσκόπιο", "Δέκτης GPS", "Οπτική Κάμερα", "Αισθητήρας Μπαταρίας"],
        correct: 0,
        exp: "Το γυροσκόπιο (Gyroscope) μετράει τη γωνιακή ταχύτητα και τις κλίσεις του drone, παρέχοντας τα δεδομένα στον Flight Controller για να διατηρήσει το drone οριζοντιωμένο και σταθερό."
    },
    {
        id: "Q4",
        cat: "Πλοήγηση",
        q: "Ποιο σύστημα παρέχει στο drone την ικανότητα να γνωρίζει τη γεωγραφική του θέση;",
        answers: ["Σύστημα Ραντάρ (Radar)", "Παγκόσμιο Σύστημα Εντοπισμού Θέσης (GPS)", "Αισθητήρας Υπερήχων (Sonar)", "Αισθητήρας Υπέρυθρων (Infrared)"],
        correct: 1,
        exp: "Το GPS (μαζί με άλλα GNSS συστήματα όπως Galileo ή GLONASS) λαμβάνει σήματα από δορυφόρους για να υπολογίσει με ακρίβεια τις συντεταγμένες θέσης (Γεωγραφικό Μήκος, Πλάτος, Υψόμετρο) του drone."
    }
]

initQuestionStats()
