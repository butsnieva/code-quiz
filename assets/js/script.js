var headerEl = document.querySelector('#header')
var timeRemainingEl = document.querySelector('#timer')
var mainEl = document.querySelector('#main')
var startingEl = document.querySelector('#start-quiz')
var startBtn = document.querySelector('#start-btn')
var quizEl = document.querySelector('#quiz-questions')
var questionEl = document.querySelector('#question')
var choicesEl = document.querySelector('#choices')


var questionId = 0
var countTime = 60

var questionArr = [
    {
        question: 'Question1',
        choices: [
            'one1',
            'two1',
            'three1',
            'four1'],
        correct: 'one1'
    },{
        question: 'Question2',
        choices: [
            'one2',
            'two2',
            'three2',
            'four2'],
        correct: 'one2'
    },{
        question: 'Question3',
        choices: [
            'one3',
            'two3',
            'three3',
            'four3'],
        correct: 'one3'
    },{
        question: 'Question4',
        choices: [
            'one4',
            'two4',
            'three4',
            'four4'],
        correct: 'one4'
    },{
        question: 'Question5',
        choices: [
            'one5',
            'two5',
            'three5',
            'four5'],
        correct: 'one5'
    },
]
    //console.log(questionArr)

function countdown() {
    var timerEl = document.createElement('p')
    timeRemainingEl.appendChild(timerEl)

    interval = setInterval(function() {
        if (countTime >= 1) {
            timerEl.textContent = 'Time: ' + countTime + 's'
            countTime--
        } else {
            timerEl.textContent = ''
            alert('Time is out!')
            clearInterval(interval)
        }
    }, 1000)
}
startBtn.addEventListener('click', countdown)
startBtn.addEventListener('click', quiz)

function quiz() {
    startingEl.innerHTML = ""
    questionEl.textContent = questionArr[questionId].question
        for (var i = 0; i < 4; i++) {
            var choiceBtn = document.createElement('button')
                choiceBtn.className = 'choice'
                choiceBtn.textContent = questionArr[questionId].choices[i]
                choicesEl.appendChild(choiceBtn)
        }
    choicesEl.addEventListener('click', checkAnswer)
    questionId++
}

function checkAnswer(event) {
    choicesEl.innerHTML=''
    // if (questionId === questionArr.length) {
    //     score()
    if (event.target.textContent === questionArr[questionId-1].correct) {
        alert('correct!')
            if (questionId === questionArr.length) {
                score()
            }else{
                quiz()}
    } else {
        alert('wrong')
        countTime = countTime - 10
            if (questionId === questionArr.length) {
                score()
            }else{
                quiz()}
    //debugger
}}


function score() {
    quizEl.innerHTML = ''
    clearInterval(interval)
    var finalScoreEl = document.createElement('div')
    finalScoreEl.innerHTML = ('<h2>All Done!</h2><p>Your final score is ' + parseInt(countTime+1) + '!</p><div><p>Enter initials:</p><input type="text"></input><button id="submit-btn">Submit</button></div>')
    mainEl.appendChild(finalScoreEl)
}

function highScoreTable() {
    
}