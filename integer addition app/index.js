const num1 = Math.ceil(Math.random()*21)-10;
const num2 = Math.ceil(Math.random()*21)-10;
const chosenValue = Math.random() < 0.5 ? "+" : "-";


const questionEl = document.getElementById("question")

const inputEl = document.getElementById("input")

const formEl = document.getElementById("form")

let score = JSON.parse(localStorage.getItem("score"));

const scoreEl = document.getElementById("score")


if(!score){
  score = 0;
}

scoreEl.innerText = `score: ${score}`

if(num2<0 && chosenValue==="-"){
  questionEl.innerText = `Evaluate: ${num1} ${chosenValue} (${num2})?`;
}else{
  questionEl.innerText = `Evaluate: ${num1} ${chosenValue} ${num2}?`;
}
;

if(num2 <0 && chosenValue==="+"){
  questionEl.innerText = `Evaluate: ${num1} ${chosenValue} (${num2})?`;
};

if(chosenValue === "+"){
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
}else{
  const correctAns = num1 - num2;
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
};


function updateLocalStorage(){
  localStorage.setItem("score", JSON.stringify(score))
};

localStorage.clear();
