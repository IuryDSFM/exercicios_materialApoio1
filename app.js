let nome, num1, num2, soma, dobroNum1, triploNum2, sobrenome, idade;

//Exercício 01
console.log("Olá, mundo!");
document.getElementById("exe-01").innerHTML = "Olá, mundo!";

//Exercício 02
nome = prompt("Digite seu nome:");
console.log(nome, typeof nome);
document.getElementById("exe-02").innerHTML = "Seu nome: " + nome;

//Exercício 03
num1 = parseFloat(prompt("Digite um número:"));
console.log(num1, typeof num1);

num2 = parseFloat(prompt("Agora, digite outro:"));
console.log(num2, typeof num2);

soma = num1 + num2;
console.log(soma, typeof soma);
document.getElementById("exe-03").innerHTML = "Soma: " + soma;

//Exercício 04
dobroNum1 = num1 * 2;
console.log(dobroNum1, typeof dobroNum1);
document.getElementById("exe-04").innerHTML = "Dobro do 1° número: " + dobroNum1;

//Exercício 05
document.getElementById("exe-05").innerHTML = "Rodrigo Laranjeira, idade : 28";

//Exercício 06
for ($i = 1; $i <= 5; $i++) {
    document.getElementById("exe-06").innerHTML += "<br>Estou aprendendo JavaScript!";
};

//Exercício 07
for ($i = 1; $i <= 10; $i++) {
    if ($i == 1) {
        document.getElementById("exe-07").innerHTML += "<strong>Sequeência do 1-10:</strong> " + $i;
    } else {
        document.getElementById("exe-07").innerHTML += ", " + $i;
    }

};

//Exercício 08
for ($i = 1; $i <= 3; $i++) {
    document.getElementById("exe-08").innerHTML += "<br>Feliz Ano Novo!";
};

//Exercício 09
triploNum2 = num2 * 3;
console.log(triploNum2, typeof triploNum2);
document.getElementById("exe-09").innerHTML = "Triplo do 2° número: " + triploNum2;

//Exercício 10
sobrenome = prompt("Digite seu sobrenome:");
console.log(sobrenome, typeof sobrenome);

idade = parseFloat(prompt("Agora, digite sua idade:"));
console.log(idade, typeof idade);

document.getElementById("exe-10").innerHTML = `Seu nome e sua idade são: ${nome} ${sobrenome}, ${idade}`;