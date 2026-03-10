import fitz  # PyMuPDF
import json
import re

def extract_questions(pdf_path):
    doc = fitz.open(pdf_path)
    full_text = ""
    for page in doc:
        full_text += page.get_text()

    # Καθαρισμός κειμένου από κεφαλίδες/υποσέλιδα
    full_text = re.sub(r'Σελίδα \d+ από \d+', '', full_text)
    
    data = {
        "title": "ΒΑΣΙΚΟ ΕΡΩΤΗΜΑΤΟΛΟΓΙΟ ΠΙΣΤΟΠΟΙΗΤΙΚΩΝ ΧΕΙΡΙΣΤΩΝ ΣΜΗΕΑ A1-A3/A2",
        "questions": []
    }

    # Regex για τον εντοπισμό ερωτήσεων που ξεκινούν με αριθμό και κλείνουν με παρένθεση ή τελεία
    # και των επιλογών α), β), γ), δ)
    pattern = r'(\d+)\)\s*(.*?)(?=\s*[α-δ]\)|$)'
    matches = re.findall(r'(\d+)\)\s*(.*?)(?=\s*α\)|$)', full_text, re.DOTALL)
    
    # Σημείωση: Λόγω της πολυπλοκότητας του PDF, αυτό το script 
    # θα εξάγει το κείμενο ακριβώς όπως το βλέπει.
    
    for match in matches:
        q_id = match[0]
        q_text = match[1].strip()
        data["questions"].append({
            "id": int(q_id),
            "question": q_text
        })

    with open('uas_questions.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    
    print("Το αρχείο uas_questions.json δημιουργήθηκε με επιτυχία!")

# Αντικατάστησε το όνομα με το ακριβές όνομα του αρχείου σου
extract_questions('ΕΡΩΤΗΜΑΤΟΛΟΓΙΟ Α1-Α2-Α3.pdf')