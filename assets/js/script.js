var headerEl = document.querySelector('#header')
var timeRemainingEl = document.querySelector('#timer')
var mainEl = document.querySelector('#main')
var startingEl = document.querySelector('#start-quiz')
var startBtn = document.querySelector('#start-btn')
var quizEl = document.querySelector('#quiz-questions')
var questionEl = document.querySelector('#question')
var choicesEl = document.querySelector('#choices')
var notice = document.querySelector('#notice')
var interval
var questionId = 0
var countTime = 50

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
            alert('Time is out!')
            displayScore()
        }
    }, 1000)
}
startBtn.addEventListener('click', countdown)
startBtn.addEventListener('click', quiz)

function quiz() {
    startingEl.innerHTML = ''
    notice.textContent = ''
    choicesEl.innerHTML=''
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
    
    if (event.target.textContent === questionArr[questionId-1].correct) {
        notice.textContent = 'Correct!'
            if (questionId === questionArr.length) {
                setTimeout(function(){displayScore()}, 1000)
            }else{
                setTimeout(function(){quiz()}, 1000)
                }
    } else {
        notice.textContent = 'Wrong!'
        countTime = countTime - 10
            if (questionId === questionArr.length) {
                timeRemainingEl.innerHTML = ''
                setTimeout(function(){displayScore()}, 1000)
            }else{
                setTimeout(function(){quiz()}, 1000)
            }
    //debugger
}}


function displayScore() {
    quizEl.innerHTML = ''
    timeRemainingEl.innerHTML = ''
    clearInterval(interval)
        var finalScoreEl = document.createElement('div')
        mainEl.appendChild(finalScoreEl)
        var title = document.createElement('h2')
            title.textContent = 'All Done!'
        finalScoreEl.appendChild(title)
        var usersScore = document.createElement('p')
            usersScore.textContent = ('Your final score is ' + parseInt(countTime) + '!')
        finalScoreEl.appendChild(usersScore)
        var inputDiv = document.createElement('div')
            inputDiv.className = 'users-input'
        finalScoreEl.appendChild(inputDiv)
        var inputLable = document.createElement('p')
            inputLable.textContent = 'Enter initials:'
        inputDiv.appendChild(inputLable)
        var inputBox = document.createElement('input')
            inputBox.type = 'text'
            inputBox.id = 'usersName'
        inputDiv.appendChild(inputBox)
        var submitBtn = document.createElement('button')
            submitBtn.id = 'submit-btn'
            submitBtn.textContent = 'Submit'
        inputDiv.appendChild(submitBtn)
        
    var scoreList = JSON.parse(localStorage.getItem('userScore'))
    if (!scoreList) scoreList = []
    submitBtn.addEventListener('click', function(event){
        event.preventDefault()
        var score = { score: countTime, name: inputBox.value.trim() }
        scoreList.push(score)
        localStorage.setItem('userScore', JSON.stringify(scoreList))
        window.location.assign('score-table.html')
    })
}
