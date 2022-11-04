let num1 = window.prompt("Digite qualquer número.");
let num2 = window.prompt("Digite qualquer número.");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let soma = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

alert(
  "O resultado da operação é" +
    "\n\nAdição:" +
    soma +
    "\nSubtração:" +
    sub +
    "\nMultiplicação:" +
    mult +
    "\nDivisão:" +
    div
);
