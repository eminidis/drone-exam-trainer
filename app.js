let questions = [

{
question:"Πόσο ψηλά επιτρέπεται να πετάει ένα drone ανοιχτής κατηγορίας;",
answers:["50m","120m","300m","500m"],
correct:1
},

{
question:"Πρέπει να υπάρχει οπτική επαφή με το drone;",
answers:["Ναι πάντα","Όχι","Μόνο τη νύχτα","Μόνο σε πόλη"],
correct:0
},

{
question:"Μπορεί drone να πετάξει πάνω από συγκεντρωμένο πλήθος;",
answers:["Ναι","Όχι","Μόνο με άδεια","Μόνο χαμηλά"],
correct:1
},

{
question:"Ποιος είναι υπεύθυνος για την πτήση;",
answers:["Κατασκευαστής","Πιλότος","Αστυνομία","Δήμος"],
correct:1
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

}

function showQuestion(){

let q=questions[currentQuestion];

let html=`

<div style="width:60%;margin:auto;background:white;padding:20px;border-radius:10px">

<h2>Ερώτηση ${currentQuestion+1}</h2>

<p style="font-size:22px">${q.question}</p>

`;

q.answers.forEach((a,i)=>{

let color="";

if(userAnswers[currentQuestion]!==null){

if(i===q.correct) color="background:#9cff9c";

if(i===userAnswers[currentQuestion] && i!==q.correct)
color="background:#ff8f8f";

}

html+=`
<button onclick="answer(${i})"
style="display:block;margin:10px auto;padding:15px;width:300px;font-size:18px;${color}">
${a}
</button>
`;

});

html+=`

<br>

<button onclick="prev()">Previous</button>
<button onclick="next()">Next</button>
<button onclick="mark()">❗ Mark</button>

</div>

`;

document.getElementById("quiz").innerHTML=html;

}

function showGrid(){

let grid=`
<div style="
position:absolute;
top:20px;
right:20px;
background:white;
padding:10px;
border-radius:10px;
">

`;

questions.forEach((q,i)=>{

let color="white";

if(userAnswers[i]!==null){

if(userAnswers[i]===questions[i].correct)
color="#9cff9c";
else
color="#ff8f8f";

}

if(marked[i]) color="yellow";

grid+=`
<button onclick="goto(${i})"
style="width:35px;height:35px;margin:3px;background:${color}">
${i+1}
</button>
`;

});

grid+="</div>";

document.getElementById("quiz").innerHTML+=grid;

}

function answer(i){

userAnswers[currentQuestion]=i;

render();

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
