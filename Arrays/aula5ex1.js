// Array = tipo de variável composta

//-------------------------QUESTÃO 1 E 2 ------------------------------------


let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"]

let filmesMais = filmes.join(' - ');
console.log(filmesMais)
console.log(filmesMais.toUpperCase());


//------------------------------ QUESTÃO 3, 4, 5 --------------------------


let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"]

filmes.push(cartoons)
console.log(filmes)

cartoons.pop("Fortnite")  // Remover o último
console.log(cartoons)

// ----------------------------QUESTÃO 6 ------------------------------------

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]; 



/* for(i=0; i > asiaScores.lenght; i++){
    for(x=0; x > euroScores.length; x++){
        if (euroScores[x] == asiaScores[i]){
            alert("São diferentes!")
        } return;
    }
} */

console.log(euroScores, asiaScores)