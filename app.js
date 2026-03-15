// EASA FULL THEORY DATASET (Ελληνικά)
const easaTheoryData = [
    {
        id: "law",
        title: "Αεροπορική Νομοθεσία (Κανονισμοί ΕΕ)",
        content: `
            <h2>Αεροπορική Νομοθεσία: Κανονισμοί (ΕΕ) 2019/947 & 2019/945</h2>
            <p>Η νομοθεσία της Ευρωπαϊκής Ένωσης καθορίζει κοινούς κανόνες για όλα τα κράτη μέλη της EASA σχετικά με την ασφαλή πτήση των Συστημάτων Μη Επανδρωμένων Αεροσκαφών (ΣμηΕΑ / UAS).</p>
            
            <h3>1. Κατηγορίες Πτήσεων</h3>
            <p>Οι πτήσεις drones χωρίζονται σε τρεις κύριες κατηγορίες με βάση τον κίνδυνο:</p>
            <ul>
                <li><b>Ανοικτή (Open):</b> Πτήσεις χαμηλού κινδύνου. Δεν απαιτείται άδεια λειτουργίας, αρκεί η τήρηση των κανόνων (μέγιστο βάρος 25kg, πτήση εντός VLOS, μέγιστο ύψος 120m).</li>
                <li><b>Ειδική (Specific):</b> Πτήσεις μεσαίου κινδύνου. Απαιτείται επιχειρησιακή άδεια από την ΥΠΑ/EASA (π.χ. πτήσεις BVLOS - εκτός οπτικής επαφής, ρίψη υλικού).</li>
                <li><b>Πιστοποιημένη (Certified):</b> Πτήσεις υψηλού κινδύνου (π.χ. μεταφορά επιβατών, επικίνδυνων φορτίων). Οι απαιτήσεις μοιάζουν με την επανδρωμένη αεροπορία.</li>
            </ul>

            <h3>2. Η Ανοικτή Κατηγορία (Υποκατηγορίες)</h3>
            <div class="theory-rule">
                <b>Υποκατηγορία A1 (Πτήση πάνω από ανθρώπους):</b>
                <ul>
                    <li>Επιτρέπεται η πτήση πάνω από μεμονωμένα άτομα (αλλά πρέπει να αποφεύγεται όσο είναι δυνατόν).</li>
                    <li>ΑΠΑΓΟΡΕΥΕΤΑΙ αυστηρά η πτήση πάνω από συναθροίσεις πλήθους.</li>
                    <li>Ισχύει για drones Κλάσης C0 (<250g) και C1 (<900g), ή ιδιοκατασκευές <250g.</li>
                </ul>
            </div>
            <div class="theory-rule">
                <b>Υποκατηγορία A2 (Πτήση κοντά σε ανθρώπους):</b>
                <ul>
                    <li>Απαιτείται πιστοποιητικό γνώσεων εξ' αποστάσεως (A2).</li>
                    <li>Πρέπει να διατηρείται οριζόντια απόσταση ασφαλείας τουλάχιστον <b>30 μέτρων</b> από μη εμπλεκόμενα πρόσωπα.</li>
                    <li>Η απόσταση μπορεί να μειωθεί στα <b>5 μέτρα</b> αν το drone πετάει σε λειτουργία χαμηλής ταχύτητας (low-speed mode).</li>
                    <li>Ισχύει για drones Κλάσης C2 (<4kg).</li>
                </ul>
            </div>
            <div class="theory-rule">
                <b>Υποκατηγορία A3 (Πτήση μακριά από ανθρώπους):</b>
                <ul>
                    <li>Απαγορεύεται η πτήση κοντά σε ανθρώπους και η πτήση εντός αστικών/βιομηχανικών περιοχών.</li>
                    <li>Πρέπει να διατηρείται απόσταση τουλάχιστον <b>150 μέτρων</b> από κατοικημένες, εμπορικές ή βιομηχανικές περιοχές.</li>
                    <li>Ισχύει για drones Κλάσης C3 και C4 (<25kg), ή παλαιότερα drones <25kg.</li>
                </ul>
            </div>

            <h3>3. Εγγραφή Εκμεταλλευόμενου (Operator Registration)</h3>
            <p>Είναι υποχρεωτική η εγγραφή του <b>Εκμεταλλευόμενου</b> (όχι του ίδιου του drone) σε εθνικό μητρώο (π.χ. e-ΥΠΑ) εάν:</p>
            <ul>
                <li>Το drone ζυγίζει >250g.</li>
                <li>Το drone ζυγίζει <250g, ΔΕΝ είναι παιχνίδι, και διαθέτει αισθητήρα συλλογής προσωπικών δεδομένων (π.χ. κάμερα, μικρόφωνο).</li>
            </ul>
            <p>Ο αριθμός μητρώου (π.χ. GRC...) πρέπει να αναγράφεται πάνω στο drone (αυτοκόλλητο) και να εισάγεται στο σύστημα Remote ID του drone (αν υπάρχει).</p>
        `
    },
    {
        id: "airspace",
        title: "Περιορισμοί Εναέριου Χώρου",
        content: `
            <h2>Εναέριος Χώρος και Γεωγραφικές Ζώνες</h2>
            <p>Όλος ο εναέριος χώρος ελέγχεται από εθνικές αρχές. Το γεγονός ότι ένα drone μπορεί να φτάσει τα 500m ύψος, δεν σημαίνει ότι επιτρέπεται.</p>
            
            <h3>1. Βασικοί Κανόνες Ύψους</h3>
            <div class="theory-alert">
                Το μέγιστο επιτρεπόμενο ύψος πτήσης στην Ανοικτή Κατηγορία είναι <b>120 μέτρα (400 πόδια)</b> από την επιφάνεια του εδάφους.
            </div>
            <p>Σε περίπτωση πτήσης πάνω από φυσικό εμπόδιο (π.χ. λόφο), το ύψος μετριέται από το σημείο του εδάφους ακριβώς κάτω από το drone. Αν πετάτε πάνω από ψηλό κτίριο (με άδεια του ιδιοκτήτη), μπορείτε να πετάξετε έως 15m πάνω από το κτίριο (εντός ζώνης 50m).</p>

            <h3>2. UAS Γεωγραφικές Ζώνες (Geographical Zones)</h3>
            <p>Τα κράτη μέλη ορίζουν περιοχές όπου η πτήση απαγορεύεται ή υπόκειται σε όρους. Ο τηλεχειριστής είναι ΠΑΝΤΑ υπεύθυνος να ελέγχει τους χάρτες (π.χ. DAGR στην Ελλάδα) πριν την πτήση.</p>
            <ul>
                <li><b>Απαγορευμένες ζώνες (No-fly zones):</b> Αεροδρόμια, Ελικοδρόμια, Στρατόπεδα, Φυλακές, Κρίσιμες Υποδομές (Σταθμοί ρεύματος, διυλιστήρια), Αρχαιολογικοί χώροι (απαιτούν άδεια).</li>
                <li><b>Περιορισμένες ζώνες:</b> Απαιτείται ειδική άδεια για την είσοδο.</li>
                <li><b>Ζώνες Natura:</b> Απαγορεύεται η πτήση για προστασία της άγριας ζωής χωρίς άδεια (π.χ. περίοδος φωλεοποίησης πουλιών).</li>
            </ul>

            <h3>3. Κυκλοφορία Επανδρωμένων Αεροσκαφών</h3>
            <p>Τα επανδρωμένα αεροσκάφη (αεροπλάνα, ελικόπτερα, αλεξίπτωτα πλαγιάς) έχουν <b>ΠΑΝΤΑ ΠΡΟΤΕΡΑΙΟΤΗΤΑ</b>. Μόλις ο τηλεχειριστής αντιληφθεί επανδρωμένο αεροσκάφος να πλησιάζει, πρέπει άμεσα να μειώσει ύψος και να απομακρυνθεί από την πορεία του.</p>
        `
    },
    {
        id: "meteorology",
        title: "Μετεωρολογία",
        content: `
            <h2>Μετεωρολογία για Drones</h2>
            <p>Ο καιρός είναι καθοριστικός παράγοντας. Μικρά ΣμηΕΑ επηρεάζονται δραστικά από τον άνεμο, τη θερμοκρασία και την υγρασία.</p>

            <h3>1. Ο Άνεμος</h3>
            <ul>
                <li><b>Βαθμίδα Ανέμου (Wind Gradient):</b> Η ταχύτητα του ανέμου αυξάνεται όσο ανεβαίνουμε ψηλότερα λόγω της απουσίας τριβής με το έδαφος (κτίρια, δέντρα). Στα 120m ο άνεμος μπορεί να είναι διπλάσιος από αυτόν στο έδαφος.</li>
                <li><b>Αναταράξεις (Turbulence):</b> Δημιουργούνται πίσω από φυσικά ή τεχνητά εμπόδια (κτίρια, βουνά). Ποτέ μην πετάτε ακριβώς στην "υπήνεμη" (leeward) πλευρά ενός κτιρίου.</li>
                <li><b>Συνέπειες:</b> Κόντρα άνεμος μειώνει δραματικά την μπαταρία. Ούριος άνεμος μπορεί να παρασύρει το drone εκτός εμβέλειας.</li>
            </ul>

            <h3>2. Η Θερμοκρασία</h3>
            <div class="theory-rule">
                <b>Επίδραση στις Μπαταρίες LiPo:</b> Το κρύο (< 10°C) επιβραδύνει τη χημική αντίδραση της μπαταρίας, μειώνοντας την ικανότητα εκφόρτισης και <b>μειώνοντας δραστικά τον χρόνο πτήσης</b>. 
            </div>
            <p>Σε χαμηλές θερμοκρασίες, η μπαταρία πρέπει να προθερμαίνεται (π.χ. στην τσέπη) γύρω στους 20°C πριν την πτήση.</p>

            <h3>3. Ορατότητα και Υετός (Βροχή/Χιόνι)</h3>
            <ul>
                <li>Η πτήση Ανοικτής Κατηγορίας απαιτεί πάντα VLOS (Οπτική Επαφή). Ομίχλη, σκόνη, ή χαμηλός φωτισμός απαγορεύουν την πτήση.</li>
                <li>Η βροχή (ακόμα και ψιχάλα) μπορεί να βραχυκυκλώσει τα ηλεκτρονικά, εκτός αν το drone έχει συγκεκριμένη πιστοποίηση IP (Ingress Protection).</li>
            </ul>
        `
    },
    {
        id: "performance",
        title: "Πλοήγηση & Επιδόσεις ΣμηΕΑ",
        content: `
            <h2>Πλοήγηση & Συστήματα Drone</h2>

            <h3>1. Συστήματα Εντοπισμού Θέσης (GNSS)</h3>
            <p>Το drone χρησιμοποιεί Δορυφορικά Συστήματα Πλοήγησης (GNSS όπως το GPS, Galileo, GLONASS) για να διατηρεί σταθερή τη θέση του στο χώρο (hovering) και να εκτελεί το Return-to-Home (RTH).</p>
            <ul>
                <li><b>Loss of GNSS (Απώλεια Σήματος):</b> Εάν χαθεί το σήμα (π.χ. ανάμεσα σε ψηλά κτίρια - Urban Canyon effect), το drone θα μεταβεί σε ATTI (Attitude) Mode.</li>
                <li><b>ATTI Mode:</b> Σε αυτή τη λειτουργία, το drone κρατάει μεν το ύψος του, αλλά θα <b>παρασύρεται από τον άνεμο</b>. Ο χειριστής πρέπει να το ελέγχει εντελώς χειροκίνητα.</li>
            </ul>

            <h3>2. Λειτουργία Return-to-Home (RTH)</h3>
            <p>Σύστημα ασφαλείας που φέρνει το drone πίσω στο σημείο απογείωσης (Home Point). Ενεργοποιείται:</p>
            <ul>
                <li>Χειροκίνητα από τον πιλότο.</li>
                <li>Αυτόματα, αν χαθεί η σύνδεση (C2 Link Loss).</li>
                <li>Αυτόματα, αν η μπαταρία φτάσει σε κρίσιμο όριο.</li>
            </ul>
            <div class="theory-alert">
                Το Home Point πρέπει να ενημερώνεται πριν την απογείωση (όταν κλειδώσουν αρκετοί δορυφόροι). Το ύψος του RTH πρέπει να ρυθμίζεται ΠΑΝΤΑ υψηλότερα από το ψηλότερο εμπόδιο της περιοχής!
            </div>

            <h3>3. Αισθητήρες</h3>
            <ul>
                <li><b>Γυροσκόπιο (Gyroscope):</b> Αντιλαμβάνεται την κλίση και τη γωνιακή ταχύτητα. Διατηρεί το drone οριζόντιο.</li>
                <li><b>Βαρόμετρο (Barometer):</b> Μετράει την ατμοσφαιρική πίεση για να υπολογίσει το ύψος από το έδαφος (AGL).</li>
                <li><b>Πυξίδα (Compass/Magnetometer):</b> Εντοπίζει τον μαγνητικό βορρά. Είναι πολύ ευαίσθητη σε μεταλλικά αντικείμενα. ΜΗΝ απογειώνεστε από καπό αυτοκινήτων ή μεταλλικές εξέδρες.</li>
            </ul>
        `
    },
    {
        id: "human",
        title: "Ανθρώπινοι Παράγοντες",
        content: `
            <h2>Ανθρώπινοι Παράγοντες (Human Factors)</h2>
            <p>Το 70-80% των αεροπορικών ατυχημάτων οφείλονται σε ανθρώπινο λάθος. Ο τηλεχειριστής είναι το κρισιμότερο στοιχείο του συστήματος.</p>

            <h3>1. Κόπωση και Άγχος (Fatigue & Stress)</h3>
            <ul>
                <li>Η σωματική και πνευματική κόπωση μειώνει δραματικά το χρόνο αντίδρασης, την εγρήγορση και την κρίση.</li>
                <li>Το άγχος (π.χ. πελάτης που βιάζεται) οδηγεί σε βιαστικές, λανθασμένες αποφάσεις και παράκαμψη διαδικασιών ελέγχου (Pre-flight checklist).</li>
            </ul>

            <h3>2. Αλκοόλ και Ουσίες</h3>
            <div class="theory-alert">
                Η πτήση ΣμηΕΑ υπό την επήρεια αλκοόλ, ναρκωτικών ουσιών, ή συνταγογραφούμενων φαρμάκων που προκαλούν υπνηλία <b>ΑΠΑΓΟΡΕΥΕΤΑΙ</b>. Το όριο στο αίμα πρέπει να είναι 0.0 BAC.
            </div>

            <h3>3. Οπτική Αντίληψη & Ψευδαισθήσεις</h3>
            <ul>
                <li><b>Κρίση Απόστασης:</b> Όσο απομακρύνεται το drone, είναι εξαιρετικά δύσκολο να κρίνουμε την απόστασή του από εμπόδια. Συνήθως φαίνεται πιο κοντά στο εμπόδιο από ότι είναι στην πραγματικότητα (βάθος πεδίου).</li>
                <li><b>VLOS (Visual Line of Sight):</b> Η πτήση πρέπει να γίνεται με οπτική επαφή με γυμνά μάτια. Τα κυάλια ΔΕΝ επιτρέπονται ως μέσο τήρησης VLOS (χρησιμοποιούνται μόνο για περιστασιακό έλεγχο). Γυαλιά ηλίου/οράσεως επιτρέπονται.</li>
            </ul>
        `
    },
    {
        id: "privacy",
        title: "Ιδιωτικότητα & Δεδομένα",
        content: `
            <h2>Ιδιωτικότητα και Προστασία Προσωπικών Δεδομένων</h2>
            <p>Η χρήση καμερών στα drones εγείρει σοβαρά ζητήματα απορρήτου. Ο χειριστής υπόκειται στον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR).</p>

            <h3>1. Βασικές Αρχές</h3>
            <ul>
                <li>Δεν επιτρέπεται η καταγραφή προσώπων, πινακίδων αυτοκινήτων ή ιδιωτικών χώρων (π.χ. αυλές, παράθυρα) χωρίς τη ρητή συναίνεση των ατόμων.</li>
                <li>Η τυχαία (παρεμπίπτουσα) καταγραφή στο βάθος είναι ανεκτή αν δεν αναγνωρίζονται πρόσωπα, αλλά η σκόπιμη εστίαση (zoom) απαγορεύεται.</li>
            </ul>

            <h3>2. Καλές Πρακτικές Μείωσης Κινδύνου (Mitigation)</h3>
            <ul>
                <li>Ενημερώστε τους παρευρισκόμενους πριν την πτήση (π.χ. "Θα πετάξω ένα drone εδώ και θα καταγράψω το τοπίο").</li>
                <li>Αποφύγετε να πετάτε χαμηλά πάνω από κήπους και ιδιωτικές κατοικίες.</li>
                <li>Εάν καταγράψετε προσωπικά δεδομένα ακούσια, θολώστε τα πρόσωπα (blurring) πριν τη δημοσίευση στα κοινωνικά δίκτυα, ή διαγράψτε το αρχείο.</li>
            </ul>

            <h3>3. Ασφάλεια (Security)</h3>
            <p>Ασφάλεια (Security) αναφέρεται στην προστασία του drone από κακόβουλες ενέργειες (αντίθετα με το Safety που είναι η αποφυγή ατυχημάτων). Μην αφήνετε ποτέ το χειριστήριο εκτός επιτήρησης και χρησιμοποιείτε ισχυρούς κωδικούς στο δίκτυο Wi-Fi/C2 Link του drone εάν υποστηρίζεται, για αποφυγή υποκλοπής (hijacking).</p>
        `
    }
];

const questionsPool = [
    { cat: "Αεροπορική Νομοθεσία", q: "Ποιο είναι το απόλυτο όριο ύψους στην Ανοικτή Κατηγορία από το σημείο του εδάφους;", answers: ["50 μέτρα", "120 μέτρα (400 πόδια)", "150 μέτρα", "Όσο αντέχει η μπαταρία"], correct: 1, exp: "Βάσει του (ΕΕ) 2019/947, το απόλυτο όριο ύψους στην Open κατηγορία είναι 120m (400ft) από την επιφάνεια του εδάφους (AGL)." },
    { cat: "Αεροπορική Νομοθεσία", q: "Σε ποια υποκατηγορία επιτρέπεται η πτήση ΚΟΝΤΑ σε μη εμπλεκόμενα άτομα, απαιτώντας πιστοποιητικό εξ' αποστάσεως;", answers: ["A1", "A2", "A3", "Specific"], correct: 1, exp: "Η A2 επιτρέπει πτήση σε απόσταση 30m (ή 5m σε low speed mode) από ανθρώπους." },
    { cat: "Αεροπορική Νομοθεσία", q: "Πότε είναι υποχρεωτική η εγγραφή του Εκμεταλλευόμενου (Operator) για drone κάτω των 250g;", answers: ["Ποτέ", "Μόνο αν πετάει σε CTR", "Αν διαθέτει κάμερα και δεν είναι παιχνίδι", "Αν έχει ταχύτητα > 20 m/s"], correct: 2, exp: "Σε drones <250g που ΔΕΝ υπάγονται στην Οδηγία Παιγνιδιών, η ύπαρξη αισθητήρα (κάμερα/μικρόφωνο) καθιστά υποχρεωτική την εγγραφή." },
    { cat: "Μετεωρολογία", q: "Πώς επηρεάζουν οι χαμηλές θερμοκρασίες (π.χ. 0°C) μια μπαταρία LiPo;", answers: ["Αυξάνουν τη διάρκεια πτήσης", "Μειώνουν δραστικά το χρόνο πτήσης και την απόδοση", "Την φορτίζουν κατά την πτήση", "Δεν έχουν καμία επίδραση"], correct: 1, exp: "Το κρύο επιβραδύνει τη χημική αντίδραση στις LiPo, οδηγώντας σε ταχεία πτώση της τάσης." },
    { cat: "Μετεωρολογία", q: "Τι είναι η 'βαθμίδα ανέμου' (wind gradient);", answers: ["Η πτώση της θερμοκρασίας με το ύψος", "Η διαφορά πίεσης μεταξύ δύο πόλεων", "Η αύξηση της ταχύτητας του ανέμου σε μεγαλύτερα ύψη συγκριτικά με το έδαφος", "Η διεύθυνση του ανέμου"], correct: 2, exp: "Λόγω της απουσίας εμποδίων/τριβής, ο άνεμος στα 120 μέτρα είναι συνήθως ισχυρότερος από ότι στο έδαφος." },
    { cat: "Πλοήγηση", q: "Τι συμβαίνει όταν το drone χάσει το σήμα GNSS (GPS) κατά την πτήση;", answers: ["Εκτελεί άμεση προσγείωση", "Μπαίνει σε λειτουργία ATTI και παρασύρεται από τον άνεμο", "Σταματάει στον αέρα απολύτως ακίνητο", "Επιστρέφει αυτόματα στο Home Point"], correct: 1, exp: "Χωρίς GNSS, το drone αδυνατεί να κρατήσει τη θέση του οριζόντια και παρασύρεται. Μόνο το ύψος (βαρόμετρο) και η ισορροπία (γυροσκόπιο) διατηρούνται." },
    { cat: "Πλοήγηση", q: "Πριν ενεργοποιήσετε την αυτόματη Επιστροφή (Return-to-Home), τι πρέπει οπωσδήποτε να ελέγξετε στις ρυθμίσεις;", answers: ["Το ISO της κάμερας", "Να απενεργοποιήσετε τους αισθητήρες", "Να ορίσετε το RTH Altitude (ύψος) πάνω από το ψηλότερο εμπόδιο της περιοχής", "Το χρώμα των LED"], correct: 2, exp: "Το RTH Altitude εγγυάται ότι το drone θα ανέβει αρκετά ψηλά ώστε να μην προσκρούσει σε δέντρα ή κτίρια κατά την επιστροφή σε ευθεία γραμμή." },
    { cat: "Ανθρώπινοι Παράγοντες", q: "Τι σημαίνει VLOS;", answers: ["Visual Line of Sight (Οπτική Επαφή με γυμνά μάτια)", "Video Loss of Signal", "Vertical Landing Open System", "Variable Line of Speed"], correct: 0, exp: "VLOS σημαίνει ότι ο τηλεχειριστής πρέπει να βλέπει το drone άμεσα, χωρίς ηλεκτρονικά μέσα (FPV) ή κυάλια, για να αποφεύγει εμπόδια." },
    { cat: "Ανθρώπινοι Παράγοντες", q: "Αν εντοπίσετε ένα επανδρωμένο ελικόπτερο να πλησιάζει την περιοχή πτήσης σας, τι πρέπει να κάνετε;", answers: ["Να πετάξετε ψηλότερα για να φανείτε", "Να αγνοήσετε το ελικόπτερο γιατί τα drones έχουν προτεραιότητα", "Να τραβήξετε βίντεο το ελικόπτερο", "Να μειώσετε άμεσα ύψος και να απομακρυνθείτε από την πορεία του"], correct: 3, exp: "Η επανδρωμένη αεροπορία έχει ΠΑΝΤΑ προτεραιότητα. Ο χειριστής UAS οφείλει να παραχωρεί το δρόμο άμεσα." },
    { cat: "Ιδιωτικότητα", q: "Βάσει GDPR, τι πρέπει να κάνετε αν, καταγράφοντας ένα τοπίο, καταγράψετε καθαρά πρόσωπα αγνώστων περαστικών;", answers: ["Να πουλήσετε το βίντεο", "Τίποτα, ο δημόσιος χώρος είναι ελεύθερος", "Να θολώσετε (blur) τα πρόσωπα πριν δημοσιεύσετε το βίντεο", "Να ζουμάρετε περισσότερο"], correct: 2, exp: "Αν αναγνωρίζονται πρόσωπα (προσωπικά δεδομένα), απαιτείται η συγκατάθεσή τους ή η ανωνυμοποίησή τους (π.χ. θόλωμα) πριν την οποιαδήποτε χρήση/δημοσίευση." }
];

let current = 0;
let totalQuestions = 10;
let mode = "exam";
let correctCount = 0;

let timerInterval;
let seconds = 0;
let examTime = 2700;

let answered = [];
let flagged = [];
let userAnswers = [];
let questions = [];
let isLoggedIn = false;

let chartInstance = null;

let studyStats = JSON.parse(localStorage.getItem("studyStats")) || {
    "Αεροπορική Νομοθεσία": { correct: 0, total: 0 },
    "Μετεωρολογία": { correct: 0, total: 0 },
    "Ανθρώπινοι Παράγοντες": { correct: 0, total: 0 },
    "Πλοήγηση": { correct: 0, total: 0 },
    "Ιδιωτικότητα": { correct: 0, total: 0 }
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
    ["landingScreen", "landingNavbar", "menu", "theoryScreen", "studySetup", "testScreen", "statsScreen", "studyStatsScreen", "examStatsScreen", "resultScreen", "missionScreen", "settingsScreen"]
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
    
    if(mode === "study") {
        ts.classList.add("study-mode-bg");
    }
    
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
        el.classList.remove("active");
        if(idx === current) el.classList.add("active");
        
        if (mode === "study" && answered[idx]) {
            el.classList.remove("answered");
            if (userAnswers[idx] === questions[idx].correct) el.classList.add("correct");
            else el.classList.add("wrong");
        } else if (answered[idx]) {
            el.classList.add("answered");
        }

        if (flagged[idx]) el.classList.add("flagged");
        else el.classList.remove("flagged");
    });
}

function loadQuestion() {
    const q = questions[current];
    document.getElementById("questionText").innerText = q.q;
    const expDiv = document.getElementById("explanation");
    const tabExp = document.getElementById("tabExplanation");
    const tabQ = document.getElementById("tabQuestion");
    
    if (answered[current] && mode === "study") {
        expDiv.style.display = "block";
        tabExp.style.display = "flex";
        
        tabQ.classList.remove("active");
        tabExp.classList.add("active");

        expDiv.innerHTML = `<strong>Αιτιολόγηση:</strong> ${q.exp}`;
        
        tabExp.onclick = () => { tabExp.classList.add("active"); tabQ.classList.remove("active"); expDiv.style.display = "block"; document.getElementById("answersContainer").style.display = "none"; };
        tabQ.onclick = () => { tabQ.classList.add("active"); tabExp.classList.remove("active"); expDiv.style.display = "none"; document.getElementById("answersContainer").style.display = "flex"; };
        
        tabQ.onclick();

    } else {
        expDiv.style.display = "none";
        tabExp.style.display = "none";
        tabQ.classList.add("active");
        document.getElementById("answersContainer").style.display = "flex";
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
