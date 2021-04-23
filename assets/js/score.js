var scoreTable = document.querySelector('#score-table')
var clearBtn = document.querySelector('#clear-btn')

var scoreList = JSON.parse(localStorage.getItem('userScore'))
console.log(scoreList)

function createScoreTable() {
    scoreTable.innerHTML = ''
    var tableEl = document.createElement('table')
    scoreTable.appendChild(tableEl)

        var firstRow = document.createElement('tr')
            firstRow.className = 'first-row'
        tableEl.appendChild(firstRow)
        var intlTtl = document.createElement('th')
            intlTtl.textContent = 'Initials'
        var scoreTtl = document.createElement('th')
            scoreTtl.textContent = 'Score'
        firstRow.appendChild(intlTtl)
        firstRow.appendChild(scoreTtl)

    if (!scoreList) {
        scoreTable.innerHTML = '<h4>No high scores yet!</h4>'
    } else {
        scoreList.sort (function(a,b) {return b.score - a.score})

        for (var i = 0; i < scoreList.length; i++) {
        var tableRow = document.createElement('tr')
        tableEl.appendChild(tableRow)
        var initials = document.createElement('th')
            initials.textContent = scoreList[i].name
        var scoreValue = document.createElement('th')
            scoreValue.textContent = scoreList[i].score
        tableRow.appendChild(initials)
        tableRow.appendChild(scoreValue)
        }
    }
}
createScoreTable()



function clearTable () {
    scoreTable.innerHTML = '<h4>No highscores!</h4>'
    localStorage.clear()
}
clearBtn.addEventListener('click', clearTable)
