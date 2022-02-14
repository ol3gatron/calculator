const buttons = document.querySelectorAll(".digitsBtn");
const funcBtns = document.querySelectorAll(".func")
const result = document.querySelector(".result");
const oper = document.querySelector(".operate")

const clearBtn = document.querySelector("#clear")

let arr = [];
let arr2 = [];
let funcArr = [];

buttons.forEach((button) => {
  button.addEventListener("click", function(e) {
    if (funcArr.length === 0) {
      result.innerText = e.target.innerText;
      arr.push(e.target.innerText)
      console.log(arr)
    } else {
      result.innerText = e.target.innerText;
      arr2.push(e.target.innerText)
      console.log(arr2)
    }
  })
})

funcBtns.forEach((button) => {
  button.addEventListener("click", function(e) {
    funcArr = []
    result.innerText = e.target.innerText;
    funcArr.push(e.target.innerText)
    console.log(funcArr)
    check()
  })
})

function check() {
  let tempArr = [];
  let temp;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(parseInt(arr[i]))) {
      tempArr += arr[i]
    } else {
      break
    }
  }
  arr = [];
  arr[0] = tempArr;
}

function check2() {
  let tempArr = [];
  for (let i = 0; i < arr2.length; i++) {
    tempArr += arr2[i]
  }
  arr2 = [];
  arr2[0] = tempArr;
}

oper.addEventListener("click", function() {
  check2();
  if (funcArr[0] === "×") {
    multiply()
  } else if (funcArr[0] === "÷") {
    divide()
  } else if (funcArr[0] === "-") {
    minus()
  } else if (funcArr[0] === "+") {
    plus()
  } else if (funcArr[0] === "nn" || funcArr[0] === "n") {
    power()
  } else if (funcArr[0] === "fib(n)") {
    fib()
  } else if (funcArr[0] === "n!") {
    factorial()
  }
  arr = []
  arr2 = []
  arr[0] = result.innerText
})

function multiply() {
  result.innerText = arr[0] * arr2[0]
}

function divide() {
  result.innerText = arr[0] / arr2[0]
}

function minus() {
  result.innerText = arr[0] - arr2[0]
}

function plus() {
  result.innerText = +arr[0] + +arr2[0]
}

function power() {
  result.innerText = arr[0] ** arr2[0]
}

function fib() {
  console.log("asa")
  if (arr[0] < 0) {
    return "OOPS"
  } else if (arr[0] == 1) {
    return 1
  } else {
    let temp1 = 0;
    let temp2 = 1
    let result2 = 0;
    for (let i = 1; i < arr[0]; i++) {
      result2 = temp1 + temp2;
      temp1 = temp2;
      temp2 = result2;
    }
    result.innerText = result2;
  }
}

function factorial() {
  let resultFac = 1
  for (let i = 0; i = arr[0]; i++) {
    resultFac *= i
  }
  result.textContent = resultFac;
}



clearBtn.addEventListener("click", function() {
  arr = []
  arr2 = []
  funcArr = []
  result.innerText = 0
})
