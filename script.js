const digits = document.querySelectorAll(".digitsBtn")
const operators = document.querySelectorAll(".func")
const display = document.querySelector(".result")
const result = document.querySelector(".operate")
const clear = document.querySelector("#clear")
const currentOperator = document.querySelector(".historyOutput")

let num1 = ""
let num2 = ""
let num3 = ""
let operator = ""
let history = ""

result.addEventListener("click", () => {
  if (num1 == 0 || num2 == 0 && operator === "÷") {
    display.innerText = "Ты не можешь разделить на ноль, дурень!"
  } else {
    num3 = operate(operator, num1, num2)
    .innerText = num3
    num1 = num3;
    console.log(`Третье число: ${num3}`)
    num2 = "";
    num3 = "";
  }
})

function operate(operator, num1, num2) {
  history = ""
  history += num1;
  history += operator;
  history += num2;
  currentOperator.innerText = history
  if (operator === "+") {
    return add(parseInt(num1), parseInt(num2))
  } else if (operator === "-") {
    return substract(num1, num2)
  } else if (operator === "*") {
    return multiply(num1, num2)
  } else if (operator === "÷") {
    return divide(num1, num2)
  }
}

function add(num1, num2) {
  return num1 + num2
}

function substract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

digits.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (operator) {
      num2 += e.target.innerText
      display.innerText = num2
      console.log(`Второе число: ${num2}`)
    } else {
      num1 += e.target.innerText
      display.innerText = num1
      console.log(`Первое число: ${num1}`)
    }
  })
})

operators.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (num1 && num2) {
      console.log(num1 + " " + num2)
      num3 = operate(operator, num1, num2)
      display.innerText = num3
      num1 = num3;
      console.log(`Третье число: ${num3}`)
      num2 = "";
      num3 = "";
    }
    operator = e.target.innerText
    console.log(operator)
  })
})

clear.addEventListener("click", () => {
  num1 = ""
  num2 = ""
  num3 = ""
  operator = ""
  display.innerText = 0
  currentOperator.innerText = ""
  history = ""
  console.log("Clear")
  console.clear()
})