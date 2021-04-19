var headerEl = document.querySelector('#header')
var mainEl = document.querySelector('#main')

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
        answers: {
            a: 'one',
            b: 'two',
            c: 'three',
            d: 'four'
        },
        correct: 'c'
    },{
        question: 'Question3',
        answers: {
            a: 'one',
            b: 'two',
            c: 'three',
            d: 'four'
        },
        correct: 'c'
    },{
        question: 'Question4',
        answers: {
            a: 'one',
            b: 'two',
            c: 'three',
            d: 'four'
        },
        correct: 'c'
    },{
        question: 'Question5',
        answers: {
            a: 'one',
            b: 'two',
            c: 'three',
            d: 'four'
        },
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


function startQuiz() {
    var welcomeMsgEl = document.createElement('div')
        welcomeMsgEl.id = 'welcome-msg'
    mainEl.appendChild(welcomeMsgEl)

    var title = document.createElement('h2')
        title.className = 'title'
        title.textContent = 'Coding Quiz Challenge'
    welcomeMsgEl.appendChild(title)

    var par = document.createElement('p')
        par.className = 'par'
        par.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!'
    welcomeMsgEl.appendChild(par)

    var startBtn = document.createElement('div')
        startBtn.className = 'start-btn'
        startBtn.innerHTML = '<button>Start Quiz</button>'
    welcomeMsgEl.appendChild(startBtn)
    
startBtn.addEventListener('click', closeOnClick)
startBtn.addEventListener('click', questionEl)
startBtn.addEventListener('click', countdown)
}

function closeOnClick() {
    var display = document.querySelector('#welcome-msg')
        display.remove()
} 

function questionEl() {
    
    for (var i = 0; i < questionArr.length; i++) {

    var quizEl = document.createElement('div')
    mainEl.appendChild(quizEl)

    var question = document.createElement('h3')
        question.className = 'question'
        question.textContent = questionArr[i].question
    quizEl.appendChild(question)

    var answerOptions = document.createElement('div')
        answerOptions.className = 'answers'
    quizEl.appendChild(answerOptions)


    //    FIGURE OUT HOW TO DRY THE FOLLOWING CODE
            var optionOne = document.createElement('button')
                optionOne.className = 'answer'
                optionOne.textContent = questionArr[i].a
            answerOptions.appendChild(optionOne)

            var optionTwo = document.createElement('button')
                optionTwo.className = 'answer'
                optionTwo.textContent = questionArr[i].b
            answerOptions.appendChild(optionTwo)

            var optionThree = document.createElement('button')
                optionThree.className = 'answer'
                optionThree.textContent = questionArr[i].c
            answerOptions.appendChild(optionThree)

            var optionFour = document.createElement('button')
                optionFour.className = 'answer'
                optionFour.textContent = questionArr[i].d
            answerOptions.appendChild(optionFour)
    return quizEl
    }
}



startQuiz();