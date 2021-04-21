var scoreTable = document.querySelector('#score-table')

var scoreList = JSON.parse(localStorage.getItem('userScore'))
console.log(scoreList)

function createScoreTable() {
    var tableEl = document.createElement('table')
    scoreTable.appendChild(tableEl)

    var firstRow = document.createElement('tr')
    tableEl.appendChild(firstRow)
    var intlTtl = document.createElement('th')
        intlTtl.textContent = 'Initials'
    var scoreTtl = document.createElement('th')
        scoreTtl.textContent = 'Score'
    firstRow.appendChild(intlTtl)
    firstRow.appendChild(scoreTtl)

    for (var i = 0; i < scoreList.length; i++) {
        var tableRow = document.createElement('tr')
        tableEl.appendChild(tableRow)
        var initials = document.createElement('th')
            initials.textContent = scoreList[i].name
        var scoreValue = document.createElement('th')
            scoreValue.textContent = scoreList[i].score
        tableRow.appendChild(initials)
        tableRow.appendChild(scoreValue)
}}

createScoreTable()