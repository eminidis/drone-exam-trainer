let questions=[]
let quiz=[]
let current=0
let score=0
let timer=null
let timeLeft=0

fetch("questions.json")
.then(r=>r.json())
.then(data=>{
questions=data
})

function shuffle(a){
return a.sort(()=>Math.random()-0.5)
}

function startStudy(){

quiz=[...questions]

current=0
score=0

document.getElementById("menu").classList.add("hidden")
document.getElementById("quiz").classList.remove("hidden")

showQuestion()

}

function startExam(){

quiz=shuffle([...questions]).slice(0,40)

current=0
score=0

document.getElementById("menu").classList.add("hidden")
document.getElementById("quiz").classList.remove("hidden")

startTimer(40*60)

showQuestion()

}

function startTimer(seconds){

timeLeft=seconds

timer=setInterval(()=>{

timeLeft--

document.getElementById("timer").innerText =
"Χρόνος: "+Math.floor(timeLeft/60)+":"+("0"+timeLeft%60).slice(-2)

if(timeLeft<=0){
clearInterval(timer)
finish()
}

},1000)

}

function showQuestion(){

if(current>=quiz.length){
finish()
return
}

let q=quiz[current]

document.getElementById("question").innerText =
(current+1)+". "+q.question

let html=""

q.answers.forEach((a,i)=>{

html+=`<button onclick="answer(${i})">${a}</button>`

})

document.getElementById("answers").innerHTML=html

}

function answer(i){

let q=quiz[current]

if(i===q.correct){
score++
}

current++

showQuestion()

}

function finish(){

clearInterval(timer)

let percent=Math.round(score/quiz.length*100)

document.getElementById("quiz").innerHTML=`

<h2>Αποτελέσματα</h2>

<p>Σκορ: ${score}/${quiz.length}</p>

<p>Ποσοστό: ${percent}%</p>

<button onclick="location.reload()">Ξανά</button>

`

}