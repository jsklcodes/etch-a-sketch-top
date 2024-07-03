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
