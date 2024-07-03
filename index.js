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
