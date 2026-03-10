let questions = [];
let currentQuestion = 0;

let userAnswers = [];
let markedQuestions = [];

async function loadQuestions(){
const response = await fetch("questions.json");
questions = await response.json();
}

function startStudy(){

document.getElementById("home").style.display="none";

userAnswers = new Array(questions.length).fill(null);
markedQuestions = new Array(questions.length).fill(false);

currentQuestion = 0;

render();

}

function render(){

showQuestion();
showGrid();

}

function showQuestion(){

const q = questions[currentQuestion];

let html = `
<div style="width:65%;float:left;text-align:center">

<h2>Ερώτηση ${currentQuestion+1}</h2>

<p style="font-size:22px">${q.question}</p>
`;

q.answers.forEach((a,i)=>{

let color = "";

if(userAnswers[currentQuestion] !== null){

if(i === questions[currentQuestion].correct){
color="background:lightgreen";
}

if(i === userAnswers[currentQuestion] && i !== questions[currentQuestion].correct){
color="background:#ff9e9e";
}

}

html += `<button onclick="answer(${i})" style="display:block;margin:10px auto;padding:15px;width:300px;font-size:18px;${color}">${a}</button>`;

});

html += `
<br>

<button onclick="previous()">Previous</button>

<button onclick="next()">Next</button>

<button onclick="mark()">❗ Mark</button>

</div>
`;

document.getElementById("quiz").innerHTML = html;

}

function showGrid(){

let grid = `<div style="position:absolute;top:80px;right:40px;width:200px">`;

grid += `<h3>Questions</h3>`;

questions.forEach((q,i)=>{

let color="#eee";

if(userAnswers[i] !== null){
color="#b8ffb8";
}

if(markedQuestions[i]){
color="#ffe599";
}

grid += `<button onclick="goto(${i})" style="width:40px;height:40px;margin:4px;background:${color}">${i+1}</button>`;

});

grid += `</div>`;

document.getElementById("quiz").innerHTML += grid;

}

function answer(i){

userAnswers[currentQuestion] = i;

render();

}

function next(){

if(currentQuestion < questions.length-1){
currentQuestion++;
render();
}

}

function previous(){

if(currentQuestion > 0){
currentQuestion--;
render();
}

}

function goto(i){

currentQuestion = i;
render();

}

function mark(){

markedQuestions[currentQuestion] = !markedQuestions[currentQuestion];

render();

}

loadQuestions();
