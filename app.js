let questions = [

{
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
question:"Μπορεί drone να πετάξει πάνω από συγκεντρωμένο πλήθος;",
answers:["Ναι","Όχι","Μόνο με άδεια","Μόνο χαμηλά"],
correct:1,
explanation:"Απαγορεύεται η πτήση πάνω από πλήθος."
},

{
question:"Ποιος είναι υπεύθυνος για την πτήση;",
answers:["Κατασκευαστής","Πιλότος","Αστυνομία","Δήμος"],
correct:1,
explanation:"Ο pilot είναι υπεύθυνος για την πτήση."
}

];

let currentQuestion=0;
let userAnswers=[];
let marked=[];
let startTime;
let timerInterval;

function startStudy(){

document.getElementById("home").style.display="none";

userAnswers=new Array(questions.length).fill(null);
marked=new Array(questions.length).fill(false);

startTime=Date.now();
timerInterval=setInterval(updateTimer,1000);

render();

}

function updateTimer(){

let seconds=Math.floor((Date.now()-startTime)/1000);

let min=Math.floor(seconds/60);
let sec=seconds%60;

document.getElementById("timer").innerHTML="⏱ "+min+":"+sec.toString().padStart(2,"0");

}

function render(){

showQuestion();
showGrid();
checkAutoFinish();

}

function showQuestion(){

let q=questions[currentQuestion];

let progress=Math.round(((currentQuestion+1)/questions.length)*100);

let html=`

<div style="width:60%;margin:auto;background:white;padding:20px;border-radius:10px">

<h3>Question ${currentQuestion+1} / ${questions.length}</h3>

<div style="width:100%;background:#ddd;border-radius:10px;overflow:hidden;margin-bottom:20px">
<div style="width:${progress}%;background:#4caf50;height:16px"></div>
</div>

<p style="font-size:22px">${q.question}</p>
`;

q.answers.forEach((a,i)=>{

let color="";

if(userAnswers[currentQuestion]!==null){

if(i===q.correct) color="background:#9cff9c";

if(i===userAnswers[currentQuestion] && i!==q.correct)
color="background:#ff8f8f";

}

html+=`<button onclick="answer(${i})"
style="display:block;margin:10px auto;padding:15px;width:320px;font-size:18px;${color}">
${a} </button>`;

});

if(userAnswers[currentQuestion]!==null && userAnswers[currentQuestion]!==q.correct){

html+=`

<div style="margin-top:20px;padding:15px;background:#f4f4f4;border-radius:8px">
<b>Explanation:</b><br>
${q.explanation}
</div>
`;

}

html+=`

<br>

<button onclick="prev()" style="padding:14px 24px;font-size:20px;margin:6px">Previous</button>

<button onclick="next()" style="padding:14px 24px;font-size:20px;margin:6px">Next</button>

<button onclick="mark()" style="padding:14px 24px;font-size:20px;margin:6px">Mark</button>

<button onclick="finishExam()" style="padding:14px 24px;font-size:20px;margin:6px;background:#444;color:white">Finish</button>

</div>
`;

document.getElementById("quiz").innerHTML=html;

}

function showGrid(){

let grid=`

<div style="position:absolute;top:20px;right:20px;background:white;padding:12px;border-radius:10px">
`;

questions.forEach((q,i)=>{

let color="white";

if(userAnswers[i]!==null){

if(userAnswers[i]===questions[i].correct)
color="#9cff9c";
else
color="#ff8f8f";

}

let markBadge="";

if(marked[i]){

markBadge=`<span style="
position:absolute;
top:-6px;
right:-6px;
background:yellow;
color:black;
font-weight:bold;
font-size:14px;
padding:2px 6px;
border-radius:50%;
">!</span>`;

}

grid+=`

<div style="position:relative;display:inline-block;">

<button onclick="goto(${i})"
style="width:38px;height:38px;margin:3px;background:${color};font-weight:bold">
${i+1} </button>

${markBadge}

</div>
`;

});

grid+="</div>";

document.getElementById("quiz").innerHTML+=grid;

}

function answer(i){

if(userAnswers[currentQuestion]!==null) return;

userAnswers[currentQuestion]=i;

render();

if(i===questions[currentQuestion].correct){

setTimeout(()=>{

if(currentQuestion < questions.length-1){
currentQuestion++;
render();
}

},600);

}

}

function next(){

if(currentQuestion<questions.length-1){
currentQuestion++;
render();
}

}

function prev(){

if(currentQuestion>0){
currentQuestion--;
render();
}

}

function goto(i){

currentQuestion=i;
render();

}

function mark(){

marked[currentQuestion]=!marked[currentQuestion];
render();

}

function checkAutoFinish(){

let allAnswered=userAnswers.every(a=>a!==null);

if(allAnswered){

setTimeout(()=>{

alert("Finished! All questions answered.");

showResults();

},300);

}

}

function finishExam(){

let unanswered=userAnswers.includes(null);

if(unanswered){

if(!confirm("You have unanswered questions. Finish anyway?")) return;

}

showResults();

}

function showResults(){

clearInterval(timerInterval);

let correct=0;

questions.forEach((q,i)=>{
if(userAnswers[i]===q.correct) correct++;
});

let percent=Math.round((correct/questions.length)*100);

document.getElementById("quiz").innerHTML=`

<div style="width:50%;margin:auto;background:white;padding:30px;border-radius:10px">

<h2>Results</h2>

<p>Correct answers: ${correct} / ${questions.length}</p>

<p>Score: ${percent}%</p>

<h3>${percent>=75 ? "PASS" : "FAIL"}</h3>

<button onclick="location.reload()" style="padding:14px 25px;font-size:18px">Restart</button>

</div>

`;

}
