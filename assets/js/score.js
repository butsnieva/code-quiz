var scoreTable = document.querySelector('#score-table')


function createScoreTable() {
    var tableRow = document.createElement('tr')
    scoreTable.appendChild(tableRow)
    var initials = document.createElement('th')
    var score = document.createElement('th')
    tableRow.appendChild(initials)
    tableRow.appendChild(score)
}
