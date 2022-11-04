let nome = window.prompt("Digite o seu primeiro nome:");
let sobrenome = window.prompt("Digite seu Sobrenome:");
let estudo = window.prompt("Qual curso você está cursando?");
let ano = window.prompt("Em qual ano você nasceu?");

console.log(nome);
console.log(sobrenome);
console.log(estudo);
console.log(ano);

window.alert(
  "Obrigado " +
    nome +
    " " +
    sobrenome +
    " pela sua inscrição. Você cursa " +
    estudo +
    " e tem " +
    (2022 - ano) +
    "  anos."
);
