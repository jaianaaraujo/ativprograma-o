// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

 let array = [2, 4, 6, 8, 9, 10]
// arrow function
 let numImpar = array.map(array => array + 1); // tranformando em numeros impares    

console.log(numImpar)// imprindo a nova array com os numeros impares

let numImpar1 = array.map(function(num1){  // Fiz tambem com função regular 
return num1 + 1;
});

console.log(numImpar1)



// QUESTÃO 2

// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ['ana', 'bia', 'jai', 'ivan', 'maria', 'eduarda', 'jose', 'jesus', 'maria'];

console.log(nomes.indexOf('maria')); // 4 // Aqui eu pesquisei em qual indice esta Maria no inicio da array
console.log(nomes.lastIndexOf('maria')); //8 // Aqui eu pesquisei onde está maria no final da array

let procuraNome = nomes.filter(nome => nome === 'maria');

console.log(procuraNome);


// QUESTÃO 3

//Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
//Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

let number = [6, 8, 9, 10, 12, 16];




let number1 = number.reduce((acumulador, el) =>{
return ` " ${acumulador} - ${el} " `
})

console.log(number1);


// QUESTÃO 4

// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

let animais = ['cachorro', 
'gato', 
'piriquito', 
'cobra'];

/* let animaisMaior;

animaisMaior = animais.map((nome) => {  // criei um objeto com map para poder puxá-lo em outra função com forEach
    return {   // fiz uma tentativa de criar  um objeto, para depois chamá-lo no forEach, falta conferir
        nome: nome,
        banho: 'Tomou banho'};
})

console.log(animaisMaior) */


animais.forEach(animal => {
    console.log(`O animal é um ${animal.toUpperCase()}`)
})