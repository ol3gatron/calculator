const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
let abc = ""

buttons.forEach(addEventListener("click", function(e) {
  console.log(e.target.innerText)
  result.innerText = e.target.innerText;
}))