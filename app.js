let questions = [];
let currentQuestion = 0;
let answered = false;

async function loadQuestions(){
const response = await fetch("questions.json");
questions = await response.json();
}

function startStudy(){
document.getElementById("home").style.display="none";

currentQuestion = 0;

showQuestion();

function showQuestion(){

answered = false;

const q = questions[currentQuestion];

let html = `
<h2>Ερώτηση ${currentQuestion+1}</h2>
<p style="font-size:22px">${q.question}</p>
`;

q.answers.forEach((a,i)=>{
html += `<button onclick="checkAnswer(${i})" id="a${i}" style="display:block;margin:10px auto;padding:15px;width:300px;font-size:18px">${a}</button>`;
});

html += `<div id="result" style="margin-top:20px;font-size:22px"></div>`;
html += `<button onclick="nextQuestion()" style="margin-top:20px;padding:10px 20px">Επόμενη ερώτηση</button>`;

document.getElementById("quiz").innerHTML = html;

}

function checkAnswer(i){

if(answered) return;

answered = true;

const correct = questions[currentQuestion].correct;

if(i === correct){

document.getElementById("a"+i).style.background="green";
document.getElementById("result").innerHTML="✔ Σωστό";

}else{

document.getElementById("a"+i).style.background="red";
document.getElementById("a"+correct).style.background="green";

document.getElementById("result").innerHTML="❌ Λάθος";

}

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion >= questions.length){

document.getElementById("quiz").innerHTML="<h2>Τέλος Study Mode</h2>";
return;

}

showQuestion();

}

loadQuestions();
