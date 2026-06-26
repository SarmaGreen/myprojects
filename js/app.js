/*let num = 42;
let fistName = "Artem";
const isProgrammer = true;
console.log(num + 10);
console.log(num - 10);
console.log(num * 10);
console.log(num / 10);
console.log(num);
/*
let num2 = num + 10;
console.log(num, num2);
num = num2 - num;
console.log(num, num2);

const fullName = fistName + '\n' + " Zelensky";
console.log(fullName);
*/
const resultElement = document.getElementById("result");
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const umnojBtn = document.getElementById('umnoj');
const delitBtn = document.getElementById('delit');
let action = "+";

//console.log(resultElement);
//console.log(resultElement.textContent);
//resultElement.textContent = 42;
//console.log(typeof sum);

plusBtn.onclick = function (){
  console.log("hello1")
  action = "+"
}
minusBtn.onclick = function (){
  console.log("hello2")
  action = "-"
}
umnojBtn.onclick = function (){
  console.log("hello2")
  action = "*"
}
delitBtn.onclick = function (){
  console.log("hello2")
  action = "/"
}

function printResult(result){
  if(result < 0){
    resultElement.style.color = 'red';
  } else {
    resultElement.style.color = 'green';
  }
resultElement.textContent = result;
}
function computNumbersWithAction(inp1, inp2, actionSymb){
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  if(actionSymb == '+'){
   return num1 + num2
  } if(actionSymb == '-'){
    return  num1 - num2
  }
  if(actionSymb == '*'){
    return  num1 * num2
  }
  if(actionSymb == '/'){
    return  num1 / num2
  }
}

submitBtn.onclick = function (){
  const result = computNumbersWithAction(input1, input2, action)
  printResult(result);
}


