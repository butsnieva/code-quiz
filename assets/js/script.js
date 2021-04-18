var timerEl = document.querySelector('#timer')

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

countdown()