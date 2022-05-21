const selectionButtons = document.querySelectorAll('[data-selection]') 
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
    {
        name: 'rock'
        emoji: '✊'
        beats: 'scissors'
    }
    {
        name: 'paper'
        emoji: '✋'
        beats: 'rock'
    }
    {
        name: 'scissors'
        emoji: '✌️'
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
   selectionButton.addEventListener = 'mouseover', myFunction => {
     const selectionName = selectionButton.dataset.selection  
     const selection SELECTIONS.find(selection => selection.name === selectionName)
     makeSelection(selectionName)
   })
}

function makeSelection () {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection,computerSelection)
    const computerWinner = isWinner(computerSelection, selction)
    
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
    scoreSpam.innerText = parseInt(scoreSpan.innerText) + 1
}
 
function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
    return selectionButtons.beats === opponentSelection.name
}
function randomSelection () {
    const randomIndex = math.floor(Math.random * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}