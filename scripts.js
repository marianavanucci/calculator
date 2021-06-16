const numberButtons = document.querySelectorAll('[data-number]')
Calculator {

constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
}
// cria os objetos previousOperandTextElement e currentOperandTextElement

clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

delete(){

}

appendNumber(number){
    this.currentOperand = number
}
chooseOperation(){

}

compute(){

}

updateDisplay(){
    this.currentOperandTextElement.innerText = this.cu
}

}

const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach( button => {
button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
})
})