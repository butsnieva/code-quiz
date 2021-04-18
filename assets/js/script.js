var timerEl = document.querySelector('#timer')
var mainEl = document.querySelector('#main')

function countdown() {
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
    var title = document.createElement('h2')
        title.className = 'title'
        title.textContent = 'Coding Quiz Challenge'
    mainEl.appendChild(title)

    var par = document.createElement('p')
        par.className = 'par'
        par.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!'
    mainEl.appendChild(par)

    var startBtn = document.createElement('div')
        startBtn.className = 'start-btn'
        startBtn.innerHTML = '<button>Start Quiz</button>'
    mainEl.appendChild(startBtn)

}
startQuiz();
mainEl.addEventListener('click', countdown)