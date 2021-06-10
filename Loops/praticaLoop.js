// --------------- ATIVIDADE 1 ---------------

for(let i=0; i <= 5; i++ ){

        console.log("Olá Mundo!")       // não precisou colocar no console o ++ porque é string
}

// ---------------ATIVIDADE 2 ----------------

// for de 1 a 10 -> imprimir apenas console de numeração IMPAR

for(let a=1; a%2 !=0 && a <= 10; a++){
    console.log(a++)                                   // pelo fato desse ser número coloca o ++ no console
} 


// ------------- ATIVIDADE 3 -----------------
// Criar tabuada utilizando dois loops for


for(let i = 1; i <= 10; i++){
    console.log(`Tabuada de ${i}`)
    for(let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`)
    }
    console.log()
}