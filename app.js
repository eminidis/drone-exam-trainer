let questions = [];
let currentQuestion = 0;

async function loadQuestions(){
const response = await fetch("questions.json");
questions = await response.json();
}

function startStudy(){
currentQuestion = 0;
showQuestion();
}

function showQuestion(){

if(currentQuestion >= questions.length){
alert("Τέλος ερωτήσεων");
return;
}

const q = questions[currentQuestion];

let html = "<h2>"+q.question+"</h2>";

q.answers.forEach((a,i)=>{
html += `<button onclick="checkAnswer(${i})">${a}</button><br><br>`;
});

document.getElementById("quiz").innerHTML = html;

}

function checkAnswer(i){

const correct = questions[currentQuestion].correct;

if(i === correct){
alert("Σωστό");
}else{
alert("Λάθος");
}

currentQuestion++;
showQuestion();
}

loadQuestions();
