var headerEl = document.querySelector('#header')
var timeRemainingEl = document.querySelector('#timer')
var mainEl = document.querySelector('#main')
var startingEl = document.querySelector('#start-quiz')
var startBtn = document.querySelector('#start-btn')
var quizEl = document.querySelector('#quiz-questions')
var questionEl = document.querySelector('#question')
var choicesEl = document.querySelector('#choices')
var scoreTable = document.querySelector('#score-table')
var interval


var questionId = 0
var countTime = 60

var questionArr = [
    {
        question: 'Commonly used data types DO NOT include:',
        choices: [
            '1. strings',
            '2. alerts',
            '3. booleans',
            '4. numbers'],
        correct: '2. alerts'
    },{
        question: 'The condition in an if / else statement is enclosed within ____.',
        choices: [
            '1. parenthesis',
            '2. curly brackets',
            '3. square brackets',
            '4. quotes'],
        correct: '1. parenthesis'
    },{
        question: 'Arrays in JavaScript can be used to store ____.',
        choices: [
            '1. booleans',
            '2. other arrays',
            '3. numbers and strings',
            '4. all of the above'],
        correct: '4. all of the above'
    },{
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: [
            '1. curly brackets',
            '2. commas',
            '3. quotes',
            '4. parenthesis'],
        correct: '3. quotes'
    },{
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: [
            '1. JavaScript',
            '2. terminal / bash',
            '3. for loops',
            '4. console.log'],
        correct: '4. console.log'
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
    finalScoreEl.innerHTML = ('<h2>All Done!</h2><p>Your final score is ' + parseInt(countTime+1) + '!</p><div class="users-input"><p>Enter initials:</p><input type="text"></input><button id="submit-btn">Submit</button></div>')
    mainEl.appendChild(finalScoreEl)
}

function highScoreCreateRow() {
    var tableRow = document.createElement('tr')
    scoreTable.appendChild(tableRow)
    var initials = document.createElement('th')
    var score = document.createElement('th')
    tableRow.appendChild(initials)
    tableRow.appendChild(score)
}