let allQuestions = [
let allQuestions=[

{
category:"Air Law",
question:"Πόσο ψηλά επιτρέπεται να πετάει ένα drone ανοιχτής κατηγορίας;",
answers:["50m","120m","300m","500m"],
correct:1,
explanation:"Το μέγιστο επιτρεπόμενο ύψος είναι 120m."
},

{
question:"Πρέπει να υπάρχει οπτική επαφή με το drone;",
answers:["Ναι πάντα","Όχι","Μόνο τη νύχτα","Μόνο σε πόλη"],
correct:0,
explanation:"Ο χειριστής πρέπει να διατηρεί VLOS."
},

{
category:"Air Law",
question:"Μπορεί drone να πετάξει πάνω από συγκεντρωμένο πλήθος;",
answers:["Ναι","Όχι","Μόνο με άδεια","Μόνο χαμηλά"],
correct:1,
explanation:"Απαγορεύεται η πτήση πάνω από πλήθος."
},

{
category:"Human Performance",
question:"Ποιος είναι υπεύθυνος για την πτήση;",
answers:["Κατασκευαστής","Πιλότος","Αστυνομία","Δήμος"],
correct:1,
explanation:"Ο pilot είναι υπεύθυνος για την πτήση."
},

{
category:"Operational Procedures",
question:"Πρέπει να υπάρχει οπτική επαφή με το drone;",
answers:["Ναι πάντα","Όχι","Μόνο τη νύχτα","Μόνο σε πόλη"],
correct:0,
explanation:"Ο χειριστής πρέπει να διατηρεί VLOS."
}

];
@@ -41,12 +45,35 @@ let examFinished=false;

function startStudy(){

questions=[...allQuestions];
let category=document.getElementById("categorySelect").value;
let amount=document.getElementById("questionAmount").value;

let filtered=allQuestions.filter(q=>q.category===category);

shuffle(filtered);

if(amount==="all"){
questions=filtered;
}else{
questions=filtered.slice(0,Number(amount));
}

initExam();

}

function shuffle(array){

for(let i=array.length-1;i>0;i--){

let j=Math.floor(Math.random()*(i+1));

[array[i],array[j]]=[array[j],array[i]];

}

}

function practiceWrong(){

if(wrongQuestions.length===0){
@@ -291,7 +318,7 @@ examFinished=true;

setTimeout(()=>{

if(confirm("All questions are answered. Finish exam?")){
if(confirm("All questions answered. Finish exam?")){
showResults();
}else{
examFinished=false;
@@ -351,11 +378,11 @@ document.getElementById("quiz").innerHTML=`
<br>

<button onclick="location.reload()" style="padding:14px 25px;font-size:18px;margin:8px">
Restart Exam
Restart
</button>

<button onclick="practiceWrong()" style="padding:14px 25px;font-size:18px;margin:8px;background:#ffc107">
Practice Wrong Questions (${wrongQuestions.length})
Practice Wrong (${wrongQuestions.length})
</button>

</div>
