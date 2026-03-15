// EASA FULL THEORY DATASET (Εμπλουτισμένο - Ελληνικά)
const easaTheoryData = [
    {
        id: "a1a3",
        title: "A1/A3: Βασικές Απαιτήσεις",
        content: `
            <h2>Υποκατηγορίες A1 και A3 (Βασικό Επίπεδο)</h2>
            <p>Η βασική εκπαίδευση EASA καλύπτει τις πτήσεις χαμηλού κινδύνου μακριά από ανθρώπους (A3) ή με πολύ ελαφριά drones πάνω από μεμονωμένα άτομα (A1).</p>
            
            <h3>1. Υποκατηγορία A1 (Πτήση πάνω από ανθρώπους)</h3>
            <div class="theory-rule">
                <ul>
                    <li>Επιτρέπεται η πτήση πάνω από μεμονωμένα, μη εμπλεκόμενα άτομα, <b>αλλά</b> πρέπει να αποφεύγεται και να ελαχιστοποιείται ο χρόνος πτήσης πάνω τους.</li>
                    <li>ΑΠΑΓΟΡΕΥΕΤΑΙ αυστηρά η πτήση πάνω από συναθροίσεις πλήθους (π.χ. φεστιβάλ, διαδηλώσεις, συναυλίες).</li>
                    <li>Ισχύει για drones: 
                        <ul>
                            <li>Κλάσης <b>C0</b> (έως 250g)</li>
                            <li>Κλάσης <b>C1</b> (έως 900g). Για τα C1 απαιτείται η αποφυγή πτήσης πάνω από άτομα.</li>
                            <li>Ιδιοκατασκευές έως 250g και ταχύτητα < 19m/s.</li>
                        </ul>
                    </li>
                    <li>Απαίτηση: Διάβασμα του εγχειριδίου (C0). Για C1 απαιτείται και επιτυχής online εξέταση (A1/A3).</li>
                </ul>
            </div>

            <h3>2. Υποκατηγορία A3 (Πτήση μακριά από ανθρώπους)</h3>
            <div class="theory-rule">
                <ul>
                    <li>Απαγορεύεται η πτήση κοντά σε ανθρώπους και εντός αστικών/βιομηχανικών περιοχών.</li>
                    <li>Πρέπει να διατηρείται οριζόντια απόσταση τουλάχιστον <b>150 μέτρων</b> από κατοικημένες, εμπορικές, βιομηχανικές ή ψυχαγωγικές περιοχές.</li>
                    <li>Στην περιοχή πτήσης (πεδίο δράσης) <b>δεν πρέπει</b> να υπάρχουν μη εμπλεκόμενα άτομα. Εάν εμφανιστούν, το drone πρέπει να απομακρυνθεί άμεσα.</li>
                    <li>Ισχύει για drones:
                        <ul>
                            <li>Κλάσης <b>C3</b> και <b>C4</b> (έως 25kg, διαστάσεις έως 3m).</li>
                            <li>Παλαιότερα drones (χωρίς σήμανση κλάσης) άνω των 250g και έως 25kg.</li>
                            <li>Ιδιοκατασκευές έως 25kg.</li>
                        </ul>
                    </li>
                    <li>Απαίτηση: Επιτυχής online εξέταση A1/A3.</li>
                </ul>
            </div>
        `
    },
    {
        id: "a2",
        title: "A2: Προχωρημένες Πτήσεις",
        content: `
            <h2>Υποκατηγορία A2 (Προχωρημένο Επίπεδο)</h2>
            <p>Η υποκατηγορία Α2 επιτρέπει τη λειτουργία drones μεγαλύτερου βάρους (έως 4kg) σε αστικό περιβάλλον, πιο κοντά σε μη εμπλεκόμενα πρόσωπα.</p>
            
            <h3>1. Προϋποθέσεις & Απαιτήσεις Α2</h3>
            <ul>
                <li>Κατοχή πιστοποιητικού Α1/Α3.</li>
                <li>Ολοκλήρωση <b>Πρακτικής Αυτο-Εκπαίδευσης</b> (σε περιοχή τύπου Α3).</li>
                <li>Επιτυχής θεωρητική εξέταση σε εξεταστικό κέντρο (ή ελεγχόμενη online) 30 ερωτήσεων.</li>
            </ul>

            <h3>2. Κανόνας Αποστάσεων A2 (Κλάση C2)</h3>
            <div class="theory-alert">
                <p>Ο τηλεχειριστής πρέπει να διατηρεί ελάχιστη οριζόντια απόσταση ασφαλείας από μη εμπλεκόμενα πρόσωπα:</p>
                <ul>
                    <li><b>30 μέτρα</b> (Γενικός Κανόνας).</li>
                    <li><b>5 μέτρα</b> (Μειωμένη απόσταση), <u>ΜΟΝΟ</u> εάν το drone λειτουργεί σε επιλογή χαμηλής ταχύτητας (low-speed mode, max 3 m/s) και αφού ο χειριστής αξιολογήσει τον καιρό και τα εμπόδια.</li>
                </ul>
            </div>

            <h3>3. Κανόνας 1:1 (Αναλογία Ύψους/Απόστασης)</h3>
            <p>Σε κάθε περίπτωση (ειδικά στην A2), ο χειριστής πρέπει να εφαρμόζει τον κανόνα 1:1. Αυτό σημαίνει ότι αν το drone πετάει σε ύψος 40 μέτρων, η οριζόντια απόσταση από τους ανθρώπους πρέπει να είναι τουλάχιστον 40 μέτρα, για να προστατευτούν σε περίπτωση πτώσης.</p>
        `
    },
    {
        id: "law",
        title: "Αεροπορική Νομοθεσία (Γενικά)",
        content: `
            <h2>Εγγραφή, Ευθύνες και Εναέριος Χώρος</h2>
            
            <h3>1. Εγγραφή Εκμεταλλευόμενου (UAS Operator)</h3>
            <p>Ο εκμεταλλευόμενος (ιδιοκτήτης) εγγράφεται, <b>όχι το drone</b>. Η εγγραφή είναι υποχρεωτική εάν:</p>
            <ul>
                <li>Το drone ζυγίζει > 250g.</li>
                <li>Το drone ζυγίζει < 250g, ΔΕΝ είναι παιχνίδι (14+), και διαθέτει αισθητήρα συλλογής προσωπικών δεδομένων (κάμερα/μικρόφωνο).</li>
                <li>Ο μοναδικός αριθμός (GRC...) πρέπει να αναγράφεται σε όλα τα drones του εκμεταλλευόμενου και να εκπέμπεται μέσω Remote ID.</li>
            </ul>

            <h3>2. Ύψος και Εναέριος Χώρος</h3>
            <div class="theory-rule">
                Το μέγιστο επιτρεπόμενο ύψος πτήσης στην Ανοικτή Κατηγορία είναι <b>120 μέτρα (400 πόδια)</b> από την επιφάνεια του εδάφους (AGL).
            </div>
            <p>Αν ένα εμπόδιο (π.χ. κτίριο 50m) έχει λάβει άδεια πτήσης, το drone μπορεί να πετάξει έως 15m πάνω από το ύψος του εμποδίου (δηλ. στα 65m από το έδαφος) αν βρίσκεται εντός 50m οριζόντια από αυτό.</p>

            <h3>3. Προτεραιότητα</h3>
            <p>Τα επανδρωμένα αεροσκάφη (αεροπλάνα, ελικόπτερα, ανεμόπτερα) έχουν <b>ΠΑΝΤΑ ΠΡΟΤΕΡΑΙΟΤΗΤΑ</b>. Ο χειριστής drone οφείλει να κατέβει χαμηλά και να παραχωρήσει το δρόμο άμεσα.</p>
        `
    },
    {
        id: "meteorology",
        title: "Μετεωρολογία",
        content: `
            <h2>Ο Καιρός και η Πτήση ΣμηΕΑ</h2>

            <h3>1. Ο Άνεμος</h3>
            <ul>
                <li><b>Βαθμίδα Ανέμου (Wind Gradient):</b> Στα 120m ο άνεμος είναι συχνά διπλάσιος από τον άνεμο στο έδαφος λόγω απουσίας τριβών.</li>
                <li><b>Συνέπειες:</b> Η πτήση κόντρα στον άνεμο (headwind) αδειάζει την μπαταρία ταχύτατα. Η πτήση με ούριο άνεμο (tailwind) στο πήγαινε, μπορεί να εμποδίσει το drone να γυρίσει πίσω.</li>
                <li><b>Rotor / Αναταράξεις:</b> Πίσω από κτίρια ή βουνά (υπήνεμη πλευρά) δημιουργούνται καθοδικά ρεύματα και στροβιλισμοί. Αποφύγετε αυτές τις "σκιές αέρα".</li>
            </ul>

            <h3>2. Θερμοκρασία και Μπαταρίες (LiPo)</h3>
            <div class="theory-alert">
                Το κρύο (< 10°C) επιβραδύνει τις χημικές αντιδράσεις, μειώνοντας δραστικά την ικανότητα εκφόρτισης και <b>ρίχνοντας ραγδαία την τάση (voltage drop)</b>. Πάντα προθερμαίνετε τις μπαταρίες (> 20°C) πριν την πτήση τον χειμώνα.
            </div>

            <h3>3. Υετός και Ορατότητα</h3>
            <p>Ομίχλη και σκόνη μειώνουν την ορατότητα και παραβιάζουν τον κανόνα VLOS (Visual Line of Sight). Η υγρασία μπορεί να παγώσει στους έλικες (icing), μειώνοντας την άντωση και αυξάνοντας το βάρος, οδηγώντας σε πτώση.</p>
        `
    },
    {
        id: "human",
        title: "Ανθρώπινοι Παράγοντες & Ιδιωτικότητα",
        content: `
            <h2>Η Ανθρώπινη Απόδοση και η Ασφάλεια</h2>

            <h3>1. Κόπωση, Άγχος και Αλκοόλ</h3>
            <ul>
                <li>Το μεγαλύτερο ποσοστό ατυχημάτων οφείλεται σε ανθρώπινο λάθος (π.χ. παράβλεψη Pre-flight checklist λόγω βιασύνης).</li>
                <li>ΑΠΑΓΟΡΕΥΕΤΑΙ η πτήση υπό την επήρεια αλκοόλ (όριο 0.0 BAC), ναρκωτικών, ή φαρμάκων που προκαλούν υπνηλία.</li>
            </ul>

            <h3>2. Οπτικές Ψευδαισθήσεις</h3>
            <p><b>VLOS:</b> Οπτική Επαφή σημαίνει ότι βλέπουμε το drone με γυμνά μάτια (γυαλιά οράσεως/ηλίου επιτρέπονται, κυάλια ΟΧΙ). Σε μεγάλες αποστάσεις, χάνεται η αίσθηση του βάθους (depth perception), κάνοντας το drone να φαίνεται πιο κοντά στα εμπόδια από ό,τι είναι πραγματικά.</p>

            <h3>3. Προστασία Δεδομένων (GDPR)</h3>
            <div class="theory-rule">
                Δεν επιτρέπεται η σκόπιμη καταγραφή προσώπων, αυλών και ιδιωτικών στιγμών χωρίς ρητή συγκατάθεση. Αν καταγράψετε ακούσια (τυχαία στο βάθος), θολώστε (blur) τα πρόσωπα και τις πινακίδες πριν οποιαδήποτε δημοσίευση στα Social Media.
            </div>
        `
    }
];

// Extended Question Pool containing mixed A1, A2, A3 questions
const questionsPool = [
    // A1/A3 Questions
    { cat: "A1/A3 Βασικό", q: "Τι ισχύει για την υποκατηγορία A1 (drones κλάσης C1);", answers: ["Επιτρέπεται η πτήση πάνω από συναθροίσεις", "Πρέπει να αποφεύγεται η πτήση πάνω από μεμονωμένα άτομα", "Απαγορεύεται η χρήση κάμερας", "Δεν απαιτείται εγγραφή στο μητρώο"], correct: 1, exp: "Στην A1, επιτρέπεται μεν (για C0/C1) η πτήση πάνω από μεμονωμένα άτομα, αλλά πρέπει πάντα να αποφεύγεται." },
    { cat: "A1/A3 Βασικό", q: "Ποια είναι η ελάχιστη απόσταση από κατοικημένες περιοχές στην υποκατηγορία A3;", answers: ["50 μέτρα", "120 μέτρα", "150 μέτρα", "Δεν υπάρχει όριο"], correct: 2, exp: "Στην A3, απαιτείται απόσταση 150m από οικιστικές, εμπορικές, βιομηχανικές ή ψυχαγωγικές περιοχές." },
    
    // A2 Questions
    { cat: "A2 Προχωρημένο", q: "Στην υποκατηγορία A2 (drone C2), ποια είναι η γενική οριζόντια απόσταση ασφαλείας από μη εμπλεκόμενα άτομα;", answers: ["5 μέτρα", "10 μέτρα", "30 μέτρα", "150 μέτρα"], correct: 2, exp: "Η γενική απόσταση είναι 30m. Μπορεί να μειωθεί στα 5m μόνο με ενεργό το low-speed mode." },
    { cat: "A2 Προχωρημένο", q: "Πότε επιτρέπεται να μειώσετε την απόσταση ασφαλείας στα 5 μέτρα στην υποκατηγορία A2;", answers: ["Όταν πετάτε γρήγορα για να απομακρυνθείτε", "ΜΟΝΟ όταν το drone είναι σε low-speed mode (max 3m/s)", "Όταν το επιτρέψει το άτομο", "Ποτέ, είναι πάντα 30m"], correct: 1, exp: "Τα 5m επιτρέπονται μόνο αν το C2 drone πετάει σε λειτουργία χαμηλής ταχύτητας." },
    { cat: "A2 Προχωρημένο", q: "Τι ορίζει ο Κανόνας 1:1 για την ασφάλεια (Rule of thumb);", answers: ["1 μπαταρία για 1 ώρα πτήσης", "Αν πετάω στα 40m ύψος, η απόσταση από τους ανθρώπους πρέπει να είναι τουλάχιστον 40m", "1 χειριστής για 1 drone", "Ταχύτητα 1m/s ανά 1m ύψους"], correct: 1, exp: "Ο κανόνας 1:1 προστατεύει το κοινό σε περίπτωση πτώσης, απαιτώντας η απόσταση να είναι ίση ή μεγαλύτερη από το ύψος πτήσης." },

    // Law General
    { cat: "Αεροπορική Νομοθεσία", q: "Ποιο είναι το απόλυτο όριο ύψους στην Ανοικτή Κατηγορία από το έδαφος;", answers: ["50 μέτρα", "120 μέτρα (400 πόδια)", "150 μέτρα", "Όσο αντέχει η μπαταρία"], correct: 1, exp: "Το απόλυτο όριο ύψους στην Open κατηγορία είναι 120m (400ft) από την επιφάνεια του εδάφους (AGL)." },
    { cat: "Αεροπορική Νομοθεσία", q: "Πότε είναι υποχρεωτική η εγγραφή του Εκμεταλλευόμενου (Operator) για drone < 250g;", answers: ["Ποτέ", "Μόνο αν πετάει σε CTR", "Αν διαθέτει κάμερα και δεν είναι παιχνίδι", "Αν έχει ταχύτητα > 20 m/s"], correct: 2, exp: "Η ύπαρξη αισθητήρα (κάμερα/μικρόφωνο) καθιστά υποχρεωτική την εγγραφή (εκτός αν υπάγεται στην Οδηγία Παιγνιδιών)." },

    // Meteorology
    { cat: "Μετεωρολογία", q: "Πώς επηρεάζουν οι χαμηλές θερμοκρασίες (π.χ. 0°C) μια μπαταρία LiPo;", answers: ["Αυξάνουν τη διάρκεια πτήσης", "Μειώνουν δραστικά την απόδοση (τάση) οδηγώντας σε πτώση", "Την φορτίζουν κατά την πτήση", "Καμία επίδραση"], correct: 1, exp: "Το κρύο επιβραδύνει τη χημική αντίδραση στις LiPo, οδηγώντας σε ταχεία πτώση της τάσης (voltage drop)." },
    { cat: "Μετεωρολογία", q: "Τι είναι η 'βαθμίδα ανέμου' (wind gradient);", answers: ["Η πτώση θερμοκρασίας", "Η διαφορά πίεσης", "Η αύξηση της ταχύτητας του ανέμου σε μεγαλύτερα ύψη", "Η διεύθυνση ανέμου"], correct: 2, exp: "Λόγω απουσίας τριβής με εμπόδια, ο άνεμος ψηλά (στα 120m) είναι συνήθως ισχυρότερος." },

    // Navigation / Human
    { cat: "Πλοήγηση", q: "Τι συμβαίνει όταν το drone χάσει το σήμα GNSS (GPS) κατά την πτήση;", answers: ["Εκτελεί άμεση προσγείωση", "Μπαίνει σε λειτουργία ATTI και παρασύρεται από τον άνεμο", "Μένει ακίνητο", "Επιστρέφει αυτόματα στο Home"], correct: 1, exp: "Χωρίς GNSS, το drone αδυνατεί να κρατήσει τη θέση του (hovering) και παρασύρεται." },
    { cat: "Ανθρώπινοι Παράγοντες", q: "Τι σημαίνει VLOS;", answers: ["Visual Line of Sight (Οπτική Επαφή με γυμνά μάτια)", "Video Loss", "Vertical Landing", "Velocity Line"], correct: 0, exp: "Απαιτείται άμεση οπτική επαφή με το drone (χωρίς FPV ή κυάλια) καθ' όλη τη διάρκεια." },
    { cat: "Ανθρώπινοι Παράγοντες", q: "Αν πλησιάζει ελικόπτερο την περιοχή πτήσης σας, τι κάνετε;", answers: ["Πετάω ψηλότερα", "Το αγνοώ", "Τραβάω βίντεο", "Μειώνω άμεσα ύψος και απομακρύνομαι"], correct: 3, exp: "Η επανδρωμένη αεροπορία έχει ΠΑΝΤΑ προτεραιότητα. Παραχωρείτε το δρόμο άμεσα." }
];

let current = 0;
let totalQuestions = 10;
let mode = "exam";
let correctCount = 0;

let timerInterval;
let seconds = 0;
let examTime = 2700; // 45 minutes

let answered = [];
let flagged = [];
let userAnswers = [];
let questions = [];
let isLoggedIn = false;

let chartInstance = null;

let studyStats = JSON.parse(localStorage.getItem("studyStats")) || {
    "A1/A3 Βασικό": { correct: 0, total: 0 },
    "A2 Προχωρημένο": { correct: 0, total: 0 },
    "Αεροπορική Νομοθεσία": { correct: 0, total: 0 },
    "Μετεωρολογία": { correct: 0, total: 0 },
    "Ανθρώπινοι Παράγοντες": { correct: 0, total: 0 },
    "Πλοήγηση": { correct: 0, total: 0 }
};

let examHistory = JSON.parse(localStorage.getItem("examHistory")) || [];

window.onload = () => {
    document.getElementById("topNavbar").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("testScreen").style.display = "none";
    document.getElementById("landingScreen").style.display = "flex";
    document.getElementById("landingNavbar").style.display = "flex";
};

function hideAll() {
    ["landingScreen", "landingNavbar", "menu", "theoryScreen", "studySetup", "testScreen", "statsScreen", "studyStatsScreen", "examStatsScreen", "resultScreen", "missionScreen", "missionSimulatorScreen", "settingsScreen"]
    .forEach(id => { const el = document.getElementById(id); if(el) el.style.display = "none"; });
    
    document.getElementById("testScreen").classList.remove("study-mode-bg");
}

function goMenu() {
    if (!isLoggedIn) return;
    hideAll(); 
    document.getElementById("menu").style.display = "flex"; 
    document.getElementById("topNavbar").style.display = "flex";
    clearInterval(timerInterval); 
}

function toggleTheme() { document.body.classList.toggle("dark"); }

function openLoginModal() { document.getElementById("loginModal").style.display = "flex"; }
function closeLoginModal() { document.getElementById("loginModal").style.display = "none"; }

function doLogin() {
    closeLoginModal();
    isLoggedIn = true;
    hideAll();
    document.getElementById("topNavbar").style.display = "flex";
    document.getElementById("menu").style.display = "flex";
}

function openSettings() { 
    hideAll(); 
    document.getElementById("topNavbar").style.display = "flex";
    document.getElementById("settingsScreen").style.display = "flex"; 
}

function saveSettings() {
    alert("Οι ρυθμίσεις αποθηκεύτηκαν επιτυχώς!");
    goMenu();
}

function resetAllData() {
    if(confirm("Είστε βέβαιοι; Η ενέργεια είναι μη αναστρέψιμη!")) {
        localStorage.removeItem("studyStats");
        localStorage.removeItem("examHistory");
        location.reload();
    }
}

function logoutMock() {
    alert("Αποσύνδεση...");
    isLoggedIn = false;
    hideAll();
    document.getElementById("topNavbar").style.display = "none";
    document.getElementById("landingScreen").style.display = "flex";
    document.getElementById("landingNavbar").style.display = "flex";
}

function openTheory() {
    hideAll();
    document.getElementById("topNavbar").style.display = "flex";
    document.getElementById("theoryScreen").style.display = "flex";
    
    const sidebar = document.getElementById("theorySidebar");
    sidebar.innerHTML = easaTheoryData.map(t => 
        `<button class="theory-module-btn" id="btn_theory_${t.id}" onclick="loadTheoryContent('${t.id}')">${t.title}</button>`
    ).join('');
}

function loadTheoryContent(id) {
    const item = easaTheoryData.find(t => t.id === id);
    if(item) {
        document.getElementById("theoryContent").innerHTML = item.content;
        document.querySelectorAll('.theory-module-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(`btn_theory_${id}`).classList.add('active');
        document.querySelector('.theory-content').scrollTop = 0;
    }
}

function openMission() { 
    hideAll(); 
    document.getElementById("topNavbar").style.display = "flex";
    document.getElementById("missionScreen").style.display = "flex"; 
}

// SIMULATOR LOGIC
let simStep = 1;
function startMission(id) {
    if (id !== 1) return;
    hideAll();
    document.getElementById("topNavbar").style.display = "none";
    document.getElementById("missionSimulatorScreen").style.display = "flex";
    simStep = 1;
    loadSimStep();
}

function loadSimStep() {
    const title = document.getElementById("simStepTitle");
    const desc = document.getElementById("simStepDesc");
    const opts = document.getElementById("simOptions");
    
    opts.innerHTML = "";

    if (simStep === 1) {
        title.innerText = "Βήμα 1: Προετοιμασία & Καιρός";
        desc.innerText = "Αστικό περιβάλλον (A2). Άνεμος 8m/s. Αντοχή Drone 10m/s. Ποια είναι η πρώτη σας ενέργεια;";
        opts.innerHTML += `<button class="sim-btn" onclick="simAnswer(true)">Ελέγχω τον χάρτη ζωνών (DAGR) και προχωρώ με προσοχή στον άνεμο.</button>`;
        opts.innerHTML += `<button class="sim-btn" onclick="simAnswer(false)">Αγνοώ τον καιρό, η αντοχή του drone καλύπτει τον άνεμο.</button>`;
    } else if (simStep === 2) {
        title.innerText = "Βήμα 2: Προφίλ Πτήσης";
        desc.innerText = "Απογείωση επιτυχής. Εντοπίζετε έναν περαστικό να περπατάει σε απόσταση 10 μέτρων από το σημείο ελέγχου.";
        opts.innerHTML += `<button class="sim-btn" onclick="simAnswer(false)">Συνεχίζω την επιθεώρηση του κτιρίου πετώντας από πάνω του.</button>`;
        opts.innerHTML += `<button class="sim-btn" onclick="simAnswer(true)">Ενεργοποιώ τη λειτουργία χαμηλής ταχύτητας (low-speed mode, 3m/s) για να διατηρήσω τα 5 μέτρα ασφαλείας.</button>`;
    } else if (simStep === 3) {
        title.innerText = "Επιτυχία Αποστολής!";
        desc.innerText = "Τηρήσατε εξαιρετικά τους κανόνες ασφαλείας (A2) και η επιθεώρηση του κτιρίου ολοκληρώθηκε χωρίς ρίσκο για τους πολίτες.";
        opts.innerHTML += `<button class="sim-btn" style="background:#22c55e; border-color:#16a34a; text-align:center;" onclick="openMission()">Ολοκλήρωση & Επιστροφή</button>`;
    }
}

function simAnswer(isCorrect) {
    if (isCorrect) {
        simStep++;
        loadSimStep();
    } else {
        alert("CRITICAL ERROR: Παραβίαση ασφαλείας EASA. Η αποστολή απέτυχε.");
        openMission();
    }
}

function openStats() { 
    hideAll(); 
    document.getElementById("topNavbar").style.display = "flex";
    document.getElementById("statsScreen").style.display = "flex"; 
}

function openStudyStats() {
    hideAll();
    document.getElementById("topNavbar").style.display = "flex";
    document.getElementById("studyStatsScreen").style.display = "flex";
    let html = `<table class="stats-table" style="width:100%; border-collapse: collapse; text-align: left;">
        <tr style="border-bottom: 2px solid #cbd5e1;"><th style="padding:10px;">Ενότητα</th><th>Ποσοστό</th><th>Πρόοδος</th></tr>`;
    let totalC = 0, totalT = 0;
    for (let cat in studyStats) {
        let s = studyStats[cat];
        let perc = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
        totalC += s.correct; totalT += s.total;
        html += `<tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding:15px 10px;">${cat}</td>
                    <td style="font-weight:bold; color:#2563eb;">${perc}%</td>
                    <td><div style="height:8px; background:#e2e8f0; border-radius:4px;"><div style="height:100%; background:#2563eb; width:${perc}%; border-radius:4px;"></div></div></td>
                 </tr>`;
    }
    html += `</table>`;
    document.getElementById("studyStatsContent").innerHTML = html;
    
    let avg = totalT > 0 ? Math.round((totalC/totalT)*100) : 0;
    document.getElementById("studyOverview").innerHTML = `
        <div style="display:flex; justify-content:space-around; background:#f8fafc; padding:20px; border-radius:10px; margin-bottom:20px; border:1px solid #e2e8f0;">
            <div style="text-align:center;"><div style="font-size:28px; font-weight:bold; color:#2563eb;">${totalT}</div>Απαντήσεις</div>
            <div style="text-align:center;"><div style="font-size:28px; font-weight:bold; color:#22c55e;">${avg}%</div>Επιτυχία</div>
        </div>
    `;
    if(document.body.classList.contains("dark")) {
        document.getElementById("studyOverview").firstElementChild.style.background = "#0f172a";
        document.getElementById("studyOverview").firstElementChild.style.borderColor = "#334155";
    }
}

function openExamStats() {
    hideAll();
    document.getElementById("topNavbar").style.display = "flex";
    document.getElementById("examStatsScreen").style.display = "flex";
    const avg = examHistory.length > 0 ? Math.round(examHistory.reduce((a,b)=>a+b)/examHistory.length) : 0;
    document.getElementById("examOverview").innerHTML = `
        <div style="display:flex; justify-content:space-around; background:#f8fafc; padding:20px; border-radius:10px; margin-bottom:20px; border:1px solid #e2e8f0;">
            <div style="text-align:center;"><div style="font-size:28px; font-weight:bold; color:#2563eb;">${avg}%</div>Μέσος Όρος</div>
            <div style="text-align:center;"><div style="font-size:28px; font-weight:bold; color:#f59e0b;">${examHistory.length}</div>Εξετάσεις</div>
        </div>
    `;
    if(document.body.classList.contains("dark")) {
        document.getElementById("examOverview").firstElementChild.style.background = "#0f172a";
        document.getElementById("examOverview").firstElementChild.style.borderColor = "#334155";
    }
    setTimeout(renderChart, 100);
}

function renderChart() {
    const ctx = document.getElementById('examChart').getContext('2d');
    if (chartInstance) chartInstance.destroy();
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: examHistory.map((_, i) => `Εξέταση ${i + 1}`),
            datasets: [{ 
                label: 'Βαθμολογία %', 
                data: examHistory, 
                borderColor: '#2563eb', 
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                borderWidth: 3,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#2563eb',
                pointRadius: 5,
                fill: true,
                tension: 0.4
            }]
        },
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            scales: { y: { min: 0, max: 100, grid: { color: '#e2e8f0' } }, x: { grid: { display: false } } },
            plugins: { legend: { display: false } }
        }
    });
}

function openStudy() { 
    hideAll(); 
    mode = "study";
    document.getElementById("topNavbar").style.display = "flex";
    document.getElementById("studySetup").style.display = "flex"; 
}

function openExamConfirm() { 
    if(confirm("--- ΠΙΣΤΟΠΟΙΗΣΗ EASA A2 ---\n\n• Ερωτήσεις: 30 (Τυχαίες)\n• Βάση Επιτυχίας: 75%\n• Διάρκεια: 45 λεπτά\n\nΚατά τη διάρκεια της εξέτασης δεν επιτρέπεται η χρήση βοηθημάτων. Είστε έτοιμοι να ξεκινήσετε;")) { 
        mode = "exam"; 
        prepareQuestions(30); 
        startTest(); 
    } 
}

function startStudy() {
    prepareQuestions();
    startTest();
}

function prepareQuestions(num) {
    let count = num || parseInt(document.getElementById("studyCount").value);
    let cat = document.getElementById("studyCategory") ? document.getElementById("studyCategory").value : "Random";
    
    let pool = (cat === "Random" || mode === "exam") ? questionsPool : questionsPool.filter(q => q.cat === cat);
    
    if (pool.length === 0) pool = questionsPool; // Fallback

    let shuffled = pool.sort(() => 0.5 - Math.random());
    while(shuffled.length < count && pool.length > 0) {
        shuffled = shuffled.concat(pool.sort(() => 0.5 - Math.random()));
    }
    questions = shuffled.slice(0, count);
    totalQuestions = questions.length;
}

function startTest() {
    hideAll();
    
    document.getElementById("topNavbar").style.display = "none";
    const ts = document.getElementById("testScreen");
    ts.style.display = "flex";
    
    current = 0; correctCount = 0; answered = []; flagged = []; userAnswers = [];
    
    const isExam = mode === "exam";
    document.getElementById("examTypeMock").innerText = isExam ? "ΕΞΕΤΑΣΗ: Πιστοποίηση EASA A2" : "ΜΕΛΕΤΗ: Εξάσκηση EASA";
    
    createGrid(); 
    loadQuestion(); 
    startTimer();
}

function createGrid() {
    const grid = document.getElementById("questionGrid");
    grid.innerHTML = "";
    for(let i=0; i<totalQuestions; i++) {
        let d = document.createElement("div"); 
        d.innerText = i+1;
        d.id = `grid_q_${i}`;
        d.onclick = () => { current = i; loadQuestion(); };
        grid.appendChild(d);
    }
}

function updateProgress() {
    document.getElementById("qCounter").innerText = `Ερ. ${current + 1} / ${totalQuestions}`;
    document.getElementById("qCategoryBadge").innerText = questions[current].cat;
    
    const progressPerc = ((answered.filter(Boolean).length) / totalQuestions) * 100;
    document.getElementById("examProgressBar").style.width = progressPerc + "%";

    const pinBtn = document.getElementById("flagBtn");
    if(flagged[current]) pinBtn.classList.add("active");
    else pinBtn.classList.remove("active");

    document.querySelectorAll(".av-grid div").forEach((el, idx) => {
        el.classList.remove("active", "answered", "correct", "wrong", "flagged");
        
        if(idx === current) el.classList.add("active");
        
        if (answered[idx]) {
            if (mode === "study") {
                if (userAnswers[idx] === questions[idx].correct) el.classList.add("correct");
                else el.classList.add("wrong");
            } else {
                el.classList.add("answered");
            }
        }

        if (flagged[idx]) el.classList.add("flagged");
    });
}

function loadQuestion() {
    const q = questions[current];
    document.getElementById("questionText").innerText = q.q;
    const expDiv = document.getElementById("explanation");
    
    // Εμφάνιση επεξήγησης ΜΟΝΟ στο study mode όταν έχει απαντηθεί λάθος (ή και σωστά, ως feedback)
    if (answered[current] && mode === "study") {
        expDiv.style.display = "block";
        if (userAnswers[current] !== q.correct) {
            expDiv.innerHTML = `<strong style="color: #ef4444; font-size: 16px;">❌ Λάθος Απάντηση</strong><br><br><strong>Επεξήγηση:</strong> ${q.exp}`;
        } else {
            expDiv.innerHTML = `<strong style="color: #22c55e; font-size: 16px;">✔️ Σωστή Απάντηση</strong><br><br><strong>Επεξήγηση:</strong> ${q.exp}`;
        }
    } else {
        expDiv.style.display = "none";
    }

    const letters = ['A', 'B', 'C', 'D'];
    for(let i=0; i<4; i++) {
        let btn = document.getElementById(`btnAns${i}`);
        let ansText = document.getElementById(`ansText${i}`);
        
        if(q.answers[i]) {
            btn.style.display = "flex";
            ansText.innerText = q.answers[i];
            btn.className = "";
            
            if (answered[current]) {
                if (mode === "study") {
                    btn.disabled = true;
                    if (i === q.correct) btn.classList.add("correct");
                    else if (i === userAnswers[current]) btn.classList.add("wrong");
                } else {
                    btn.disabled = false;
                    if (i === userAnswers[current]) btn.classList.add("selected");
                }
            } else {
                btn.disabled = false;
            }
        } else {
            btn.style.display = "none";
        }
    }

    updateProgress();
}

function answer(i) {
    if (mode === "study" && answered[current]) return; 

    const q = questions[current];
    answered[current] = true;
    userAnswers[current] = i;
    
    if (mode === "study") {
        if (i === q.correct) {
            correctCount++;
            if(!studyStats[q.cat]) studyStats[q.cat] = {correct:0, total:0};
            studyStats[q.cat].correct++;
        }
        if(!studyStats[q.cat]) studyStats[q.cat] = {correct:0, total:0};
        studyStats[q.cat].total++;
        localStorage.setItem("studyStats", JSON.stringify(studyStats));
    }

    loadQuestion(); 

    if(mode === "exam") {
        setTimeout(() => { if(current < totalQuestions - 1) nextQuestion(); }, 300);
    }
}

function nextQuestion() { if(current < totalQuestions - 1) { current++; loadQuestion(); } }
function prevQuestion() { if(current > 0) { current--; loadQuestion(); } }

function flagQuestion() { 
    flagged[current] = !flagged[current];
    updateProgress();
}

function finishSession() {
    let unans = totalQuestions - answered.filter(Boolean).length;
    if (unans > 0 && !confirm(`Έχετε ${unans} αναπάντητες ερωτήσεις. Είστε σίγουροι ότι θέλετε να υποβάλετε την εξέταση;`)) return;

    clearInterval(timerInterval);

    if (mode === "exam") {
        correctCount = 0;
        for(let i=0; i<totalQuestions; i++) {
            if (userAnswers[i] === questions[i].correct) correctCount++;
        }
    }

    let score = Math.round((correctCount / totalQuestions) * 100);
    let passMark = 75; 

    if(mode === "exam") { 
        examHistory.push(score); 
        localStorage.setItem("examHistory", JSON.stringify(examHistory)); 
    }
    
    hideAll();
    document.getElementById("topNavbar").style.display = "flex";
    document.getElementById("resultScreen").style.display = "flex";
    document.getElementById("finalScore").innerText = score + "%";
    
    const pf = document.getElementById("passFail");
    const circle = document.querySelector(".score-circle");

    if(score >= passMark) {
        pf.innerText = "ΕΠΙΤΥΧΙΑ ΠΙΣΤΟΠΟΙΗΣΗΣ";
        pf.style.color = "#16a34a";
        circle.style.borderColor = "#16a34a";
    } else {
        pf.innerText = "ΑΠΟΤΥΧΙΑ (Βάση EASA: 75%)";
        pf.style.color = "#dc2626";
        circle.style.borderColor = "#dc2626";
    }

    document.getElementById("examStatsSummary").innerHTML = `
        <div class="summary-item"><div class="val">${correctCount}</div><div class="lbl">Σωστές</div></div>
        <div class="summary-item"><div class="val" style="color:#ef4444;">${totalQuestions - correctCount}</div><div class="lbl">Λάθος / Κενές</div></div>
        <div class="summary-item"><div class="val" style="color:#f59e0b;">${document.getElementById("timer").innerText}</div><div class="lbl">Χρόνος</div></div>
    `;

    generateReview();
    document.getElementById("reviewSection").style.display = "none";
    document.getElementById("reviewBtn").innerText = "Εμφάνιση Λαθών";
}

function generateReview() {
    const list = document.getElementById("mistakesList");
    list.innerHTML = "";
    let mistakes = 0;

    questions.forEach((q, idx) => {
        if (userAnswers[idx] !== q.correct) {
            mistakes++;
            const userAnsText = userAnswers[idx] !== undefined ? q.answers[userAnswers[idx]] : "Αναπάντητη";
            list.innerHTML += `
                <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 15px;">
                    <strong style="color: #1e293b; font-size: 16px;">Ερώτηση ${idx + 1}:</strong> ${q.q}<br>
                    <div style="margin-top: 10px;">
                        <span style="display:inline-block; background: #fee2e2; color: #991b1b; padding: 5px 10px; border-radius: 4px; font-size: 14px; margin-bottom: 5px;">❌ ${userAnsText}</span><br>
                        <span style="display:inline-block; background: #dcfce7; color: #166534; padding: 5px 10px; border-radius: 4px; font-size: 14px; font-weight:bold;">✔️ ${q.answers[q.correct]}</span>
                    </div>
                    <div style="margin-top: 15px; background: #f8fafc; padding: 10px; border-left: 3px solid #3b82f6; font-size: 14px; color: #475569;">
                        ${q.exp}
                    </div>
                </div>
            `;
        }
    });

    if (mistakes === 0) {
        list.innerHTML = "<p style='color:#16a34a; font-weight:bold; font-size:18px; text-align:center;'>Άριστα! Η επίδοσή σας ήταν αλάνθαστη.</p>";
    }
}

function toggleReview() {
    const rev = document.getElementById("reviewSection");
    const btn = document.getElementById("reviewBtn");
    if (rev.style.display === "none") {
        rev.style.display = "block";
        btn.innerText = "Απόκρυψη Λαθών";
    } else {
        rev.style.display = "none";
        btn.innerText = "Εμφάνιση Λαθών";
    }
}

function startTimer() {
    clearInterval(timerInterval); 
    seconds = mode === "exam" ? examTime : 0; 
    
    const timerEl = document.getElementById("timer");
    
    timerInterval = setInterval(() => {
        if (mode === "exam") {
            seconds--;
            if (seconds <= 0) { finishSession(); return; }
            if (seconds < 300 && seconds > 60) timerEl.classList.add("warning");
            if (seconds <= 60) timerEl.classList.add("danger");
        } else {
            seconds++;
        }
        
        let h = Math.floor(seconds/3600);
        let m = Math.floor((seconds%3600)/60);
        let s = seconds%60;
        
        timerEl.innerText = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    }, 1000);
}
