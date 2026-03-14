let letters=["A","B","C","D"]

let current=0
let totalQuestions=5
let mode="exam"

let correctCount=0

let timerInterval
let seconds=0
let examTime=3600

let answered=[]
let flagged=[]

let questionsPool=[]
let questions=[]

let studyStats=JSON.parse(localStorage.getItem("studyStats")) || {
"Αεροπορική Νομοθεσία":0,
"Μετεωρολογία":0,
"Ανθρώπινοι Παράγοντες":0,
"Πλοήγηση":0
}

let examHistory=JSON.parse(localStorage.getItem("examHistory")) || []

let questionStats=JSON.parse(localStorage.getItem("questionStats")) || {}
let wrongQuestions=JSON.parse(localStorage.getItem("wrongQuestions")) || []

function initQuestionStats(){

questionsPool.forEach((q,i)=>{

if(!q.id){
q.id="Q"+i
}

if(!questionStats[q.id]){

questionStats[q.id]={
seen:0,
correct:0,
wrong:0
}

}

})

localStorage.setItem("questionStats",JSON.stringify(questionStats))

}

function recordSeen(id){

questionStats[id].seen++
saveQuestionStats()

}

function recordCorrect(id){

questionStats[id].correct++
saveQuestionStats()

}

function recordWrong(id){

questionStats[id].wrong++

if(!wrongQuestions.includes(id)){
wrongQuestions.push(id)
}

saveQuestionStats()

}

function saveQuestionStats(){

localStorage.setItem("questionStats",JSON.stringify(questionStats))
localStorage.setItem("wrongQuestions",JSON.stringify(wrongQuestions))

}

function toggleTheme(){
document.body.classList.toggle("dark")
}

function openSettings(){
hideAll()
document.getElementById("settingsScreen").style.display="flex"
}

function openStats(){
hideAll()
document.getElementById("statsScreen").style.display="flex"
renderStudyStats()
renderExamStats()
}

function openStudyStats(){
hideAll()
document.getElementById("studyStatsScreen").style.display="flex"
}

function openExamStats(){
hideAll()
document.getElementById("examStatsScreen").style.display="flex"
}

function openStudy(){
hideAll()
document.getElementById("studySetup").style.display="flex"
}

function openExamConfirm(){

let confirmStart=confirm("Είσαι σίγουρος ότι θέλεις να ξεκινήσεις κανονικό τεστ;")

if(!confirmStart){
return
}

openExam()

}

function openExam(){
mode="exam"
prepareQuestions()
startTest()
}

function startStudy(){
mode="study"
prepareQuestions()
startTest()
}

function prepareQuestions(){

let category=document.getElementById("studyCategory") ? document.getElementById("studyCategory").value : "Random"
let count=document.getElementById("studyCount") ? parseInt(document.getElementById("studyCount").value) : 5

let filtered=[...questionsPool]

if(category!=="Random"){
filtered=questionsPool.filter(q=>q.cat===category)
}

filtered=shuffleArray(filtered)

questions=filtered.slice(0,count)

totalQuestions=questions.length

}

function shuffleArray(array){

for(let i=array.length-1;i>0;i--){
let j=Math.floor(Math.random()*(i+1))
let temp=array[i]
array[i]=array[j]
array[j]=temp
}

return array

}

function startTimer(){

clearInterval(timerInterval)

if(mode==="study"){

seconds=0

timerInterval=setInterval(()=>{

seconds++

let m=Math.floor(seconds/60)
let s=seconds%60

document.getElementById("timer").innerText=
String(m).padStart(2,"0")+":"+String(s).padStart(2,"0")

},1000)

}else{

let time=examTime

timerInterval=setInterval(()=>{

time--

let m=Math.floor(time/60)
let s=time%60

document.getElementById("timer").innerText=
String(m).padStart(2,"0")+":"+String(s).padStart(2,"0")

if(time<=0){
finishSession(true)
}

},1000)

}

}

function startTest(){

hideAll()

document.getElementById("testScreen").style.display="block"

current=0
correctCount=0
answered=[]
flagged=[]

createGrid()
loadQuestion()
startTimer()

}

function createGrid(){

let grid=document.querySelector(".question-grid")
grid.innerHTML=""

for(let i=0;i<totalQuestions;i++){

let cell=document.createElement("div")
cell.innerText=i+1

cell.onclick=function(){
current=i
loadQuestion()
}

grid.appendChild(cell)

}

}

function loadQuestion(){

let q=questions[current]

recordSeen(q.id)

document.getElementById("questionText").innerText=q.q
document.getElementById("explanation").innerText=""

let buttons=document.querySelectorAll(".answers button")

buttons.forEach((b,i)=>{
b.innerText=letters[i]+". "+q.answers[i]
})

}

function answer(i){

let q=questions[current]
let cell=document.querySelectorAll(".question-grid div")[current]

if(mode==="exam"){

if(!answered[current]){
answered[current]=true
cell.classList.add("exam")

if(i===q.correct){
correctCount++
recordCorrect(q.id)
}else{
recordWrong(q.id)
}
}

}else{

if(answered[current]) return

if(i===q.correct){

correctCount++
cell.classList.add("correct")
answered[current]=true

recordCorrect(q.id)

let cat=q.cat
studyStats[cat]=Math.min(100,studyStats[cat]+10)

localStorage.setItem("studyStats",JSON.stringify(studyStats))

if(current<totalQuestions-1){
current++
loadQuestion()
}

}else{

cell.classList.add("wrong")

recordWrong(q.id)

document.getElementById("explanation").innerText=q.exp

}

checkStudyCompletion()

}

}

function checkStudyCompletion(){

if(mode!=="study") return

let done=answered.filter(x=>x).length

if(done===totalQuestions){

let finish=confirm("Ολοκληρώθηκαν οι ερωτήσεις. Θέλεις να τελειώσεις το session;")

if(finish){
finishSession()
}

}

}

function nextQuestion(){

if(current<totalQuestions-1){
current++
loadQuestion()
}

}

function prevQuestion(){

if(current>0){
current--
loadQuestion()
}

}

function flagQuestion(){

let cell=document.querySelectorAll(".question-grid div")[current]
cell.classList.toggle("flag")

}

function finishSession(timeout){

if(mode==="exam" && !timeout){

let confirmFinish=confirm("Είσαι σίγουρος ότι θέλεις να τελειώσεις το τεστ;")

if(!confirmFinish){
return
}

}

clearInterval(timerInterval)

let score=Math.round((correctCount/totalQuestions)*100)

let resultText="ΑΠΟΤΥΧΙΑ"

if(score>=75){
resultText="ΕΠΙΤΥΧΙΑ"
}

if(mode==="exam"){
examHistory.push(score)
localStorage.setItem("examHistory",JSON.stringify(examHistory))
}

hideAll()

document.getElementById("resultScreen").style.display="flex"

document.getElementById("finalScore").innerText=score+"%"

document.getElementById("passFail").innerText=resultText

}

function goMenu(){

hideAll()
document.getElementById("menu").style.display="flex"

}

function hideAll(){

let ids=[
"menu",
"studySetup",
"testScreen",
"statsScreen",
"studyStatsScreen",
"examStatsScreen",
"settingsScreen",
"resultScreen"
]

ids.forEach(id=>{
let el=document.getElementById(id)
if(el) el.style.display="none"
})

}

questionsPool=[

{
cat:"Αεροπορική Νομοθεσία",
q:"Τι σημαίνει UAV;",
answers:["Μη επανδρωμένο αεροσκάφος","Αυτόνομο όχημα","Αεροσκάφος επιβατών","Δορυφόρος"],
correct:0,
exp:"Η σωστή απάντηση είναι: Μη επανδρωμένο αεροσκάφος."
},

{
cat:"Μετεωρολογία",
q:"Ποια μπαταρία χρησιμοποιούν τα περισσότερα drones;",
answers:["AA","LiPo","NiMH","Lead"],
correct:1,
exp:"Η σωστή απάντηση είναι: LiPo."
},

{
cat:"Ανθρώπινοι Παράγοντες",
q:"Τι κάνει το Return to Home;",
answers:["Σβήνει το drone","Επιστρέφει στο σημείο απογείωσης","Κλείνει την κάμερα","Κάνει προσγείωση όπου είναι"],
correct:1,
exp:"Η σωστή απάντηση είναι: Επιστρέφει στο σημείο απογείωσης."
},

{
cat:"Πλοήγηση",
q:"Ποιος αισθητήρας σταθεροποιεί το drone;",
answers:["Γυροσκόπιο","GPS","Κάμερα","Μπαταρία"],
correct:0,
exp:"Η σωστή απάντηση είναι: Γυροσκόπιο."
},

{
cat:"Πλοήγηση",
q:"Τι χρησιμοποιείται για πλοήγηση;",
answers:["Radar","GPS","Sonar","Infrared"],
correct:1,
exp:"Η σωστή απάντηση είναι: GPS."
}

]

initQuestionStats()
