const boardDiv = document.querySelector('#board')
const boardSizeButton = document.querySelector('#board-size-button')
const colorInput = document.querySelector('#color')
const randomColorButton = document.querySelector('#random-color-button')
const boardGuidesButton = document.querySelector('#board-guides-button')
const clearBoardButton = document.querySelector('#clear-board-button')

let mouseIsDown = false
let currentColor = '#000000'
let randomColorModeIsActived = false
let boardGuidesIsActived = false

const generateRandomNumberByRange = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const generateRandomHSLColor = () => {
  const hue = generateRandomNumberByRange(0, 360)
  const saturation = generateRandomNumberByRange(20, 100)
  const lightness = generateRandomNumberByRange(20, 100)

  return `hsl(${hue} ${saturation} ${lightness})`
}

const createSquareHtml = () => {
  const square = `<div class="square"></div>`
  return square
}

const createSquareRowHtml = numberOfSquares => {
  const square = createSquareHtml()
  const squareRow = `<div class="square-row">${square.repeat(
    numberOfSquares
  )}</div>`

  return squareRow
}

const renderSquareRowsIntoBoard = numberOfRows => {
  const squareRows = createSquareRowHtml(numberOfRows)
  boardDiv.insertAdjacentHTML('afterbegin', squareRows.repeat(numberOfRows))
}

const toggleBoardGuides = () => {
  const squares = document.querySelectorAll('.square')

  console.log(squares)

  if (boardGuidesIsActived) {
    squares.forEach(square => square.classList.add('guide'))
  } else {
    squares.forEach(square => square.classList.remove('guide'))
  }
}

const handleMouseMoveOnBoard = event => {
  if (mouseIsDown && randomColorModeIsActived) {
    event.target.style.backgroundColor = generateRandomHSLColor()
  } else if (mouseIsDown) {
    event.target.style.backgroundColor = currentColor
  }
}

const handleChangeBoardSize = event => {
  const boardSize = prompt(
    'Type the number of squares per side (maximum of 100) for the new board: '
  )

  if (boardSize > 100) {
    alert('The number of squares per side must be a maximum of 100.')
    return
  }

  boardDiv.textContent = ''
  renderSquareRowsIntoBoard(boardSize)
  toggleBoardGuides()
}

const changeRandomColorButtonText = () => {
  const randomColorButtonTextPrefix = randomColorModeIsActived
    ? 'Desactive'
    : 'Active'

  randomColorButton.textContent = `${randomColorButtonTextPrefix} random color mode`
}

const handleRandomColorModeToggle = event => {
  randomColorModeIsActived = !randomColorModeIsActived
  changeRandomColorButtonText()
}

const handleColorSelection = event => {
  currentColor = event.target.value
  randomColorModeIsActived = false
}

const changeBoardGuidesButtonText = () => {
  const boardGuidesButtonTextPrefix = boardGuidesIsActived
    ? 'Desactive'
    : 'Active'

  boardGuidesButton.textContent = `${boardGuidesButtonTextPrefix} board guides`
}

const handleBoardGuidesToggle = event => {
  boardGuidesIsActived = !boardGuidesIsActived
  changeBoardGuidesButtonText()
  toggleBoardGuides()
}

const handleClearBoard = event => {
  const squareRows = [...boardDiv.children]

  squareRows.forEach(squareRow => {
    const squares = [...squareRow.children]

    squares.map(square => (square.style.backgroundColor = 'transparent'))
  })
}

document.addEventListener('DOMContentLoaded', renderSquareRowsIntoBoard(16))
boardDiv.addEventListener('mousedown', () => (mouseIsDown = true))
boardDiv.addEventListener('mouseup', () => (mouseIsDown = false))
boardDiv.addEventListener('mousemove', handleMouseMoveOnBoard)
boardSizeButton.addEventListener('click', handleChangeBoardSize)
randomColorButton.addEventListener('click', handleRandomColorModeToggle)
colorInput.addEventListener('change', changeRandomColorButtonText)
colorInput.addEventListener('input', handleColorSelection)
boardGuidesButton.addEventListener('click', handleBoardGuidesToggle)
clearBoardButton.addEventListener('click', handleClearBoard)
