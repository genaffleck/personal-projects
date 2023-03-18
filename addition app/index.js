const num1 = Math.ceil(Math.random()*21)-10;
const num2 = Math.ceil(Math.random()*21)-10;


const questionEl = document.getElementById("question")

const inputEl = document.getElementById("input")

const formEl = document.getElementById("form")

let score = JSON.parse(localStorage.getItem("score"));

const scoreEl = document.getElementById("score")


if(!score){
  score = 0;
}

scoreEl.innerText = `score: ${score}`

questionEl.innerText = `What is the sum of ${num1} and ${num2}?`;

const correctAns = num1 + num2;

formEl.addEventListener("submit", ()=>{
  const userAns = +inputEl.value
  if(userAns===correctAns){
    score++
    updateLocalStorage()
  }else {
    score--
    updateLocalStorage()
    // localStorage.clear() //placing this here sets local storage to zero when user gives incorrect answer
  }
});

function updateLocalStorage(){
  localStorage.setItem("score", JSON.stringify(score))
};

localStorage.clear();
