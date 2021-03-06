const digits = document.querySelectorAll(".digitsBtn")
const operators = document.querySelectorAll(".func")
const display = document.querySelector(".result")
const result = document.querySelector(".operate")
const clear = document.querySelector("#clear")
const currentOperator = document.querySelector(".historyOutput")

const container = document.querySelector(".container")
const greenBtn = document.querySelector(".color.greenish")
greenBtn.addEventListener("click", () => {
  container.style.backgroundColor = "rgb(122, 163, 61)"
})

const redBtn = document.querySelector(".color.redish")
redBtn.addEventListener("click", () => {
  container.style.backgroundColor = "rgb(224, 54, 139)"
})

const blueBtn = document.querySelector(".color.blueish")
blueBtn.addEventListener("click", () => {
  container.style.backgroundColor = "#3939a1"
})

let num1 = ""
let num2 = ""
let num3 = ""
let operator = ""
let history = ""

result.addEventListener("click", () => {
    if (operate(operator, num1, num2) === undefined) {
      display.innerText = 0
    } else {
      num3 = operate(operator, num1, num2)
    operateHistory("=" + num3)
    display.innerText = num3
    num1 = num3;
    console.log(`Третье число: ${num3}`)
    num2 = "";
    num3 = "";
    }
})

function operateHistory(c) {
  console.log(c)
  history += c
  currentOperator.innerText = history
}

function operate(operator, num1, num2) {
  if (!num1) {
    num1 = 0
  } else if (!num2) {
    num2 = 0
  } else if (!num1 && !num2) {
    num1 = 0;
    num2 = 0;
  } else if (operator === "+") {
    return add(parseInt(num1), parseInt(num2))
  } else if (operator === "-") {
    return substract(num1, num2)
  } else if (operator === "*") {
    return multiply(num1, num2)
  } else if (operator === "÷") {
    return divide(num1, num2)
  } else if (operator === "nn" || operator === "n") {
    return power(num1, num2)
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

function power(num1, num2) {
  return num1 ** num2
}

digits.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (operator) {
      num2 += e.target.innerText
      display.innerText = num2
      console.log(`Второе число: ${num2}`)
      operateHistory(e.target.innerText)
    } else {
      num1 += e.target.innerText
      display.innerText = num1
      console.log(`Первое число: ${num1}`)
      operateHistory(num1)
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
    display.innerText = operator
    operateHistory(operator)
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