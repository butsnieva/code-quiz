var headerEl = document.querySelector('#header')
var mainEl = document.querySelector('#main')
var startBtn = document.querySelector('#start-btn')
var quizEl = document.querySelector('#quiz-questions')
var questionEl = document.querySelector('#question')
var choicesEl = document.querySelector('#choices')

var questionArr = [
    {
        question: 'Question1',
        a: 'one',
        b: 'two',
        c: 'three',
        d: 'four',
        correct: 'c'
    },{
        question: 'Question2',
        a: 'one',
        b: 'two',
        c: 'three',
        d: 'four',
        correct: 'c'
    }, {
        question: 'Question3',
        a: 'one',
        b: 'two',
        c: 'three',
        d: 'four',
        correct: 'c'
    }, {
        question: 'Question4',
        a: 'one',
        b: 'two',
        c: 'three',
        d: 'four',
        correct: 'c'
    }, {
        question: 'Question5',
        a: 'one',
        b: 'two',
        c: 'three',
        d: 'four',
        correct: 'c'
    }]
    //console.log(questionArr)


function countdown() {
    var timerEl = document.createElement('p')
        timerEl.id = 'timer'
    headerEl.appendChild(timerEl)

    var count = 60
    var interval = setInterval(function() {
        if (count >= 1) {
            timerEl.textContent = 'Time: ' + count + 's'
            count--
        } else {
            timerEl.textContent = ''
            alert('Time is out!')
            clearInterval(interval)
        }
    }, 1000)
}

startBtn.addEventListener('click', questionEl)
startBtn.addEventListener('click', countdown)


// function closeOnClick() {
//     var display = document.querySelector('#welcome-msg')
//         display.remove()
// } 

// function questionEl() {
    
//     for (var i = 0; i < questionArr.length; i++) {
    
//     } 
// }



