//--------------QUESTÃO 1 --------------

let numerosPrimos = [2,3,5,7,11,13,17,19,23,29,31,37,41];
let numeros = [...numerosPrimos, 45, 65, 67, 69 ];
console.log(numeros)


//------------QUESTÃO 2-----------------

// "rest": descanso, repouso
// ...rest = utilizado durante a definição da função
let maiorNumero = [1, 2, 3, 4, 5, 6]
let menorNumero1 = Math.min(...maiorNumero) 
console.log(menorNumero1)
let menorNumero2 = Math.max(...maiorNumero) // CORRETO!!! precisa usar REST
console.log(menorNumero2)
console.log("\n")
