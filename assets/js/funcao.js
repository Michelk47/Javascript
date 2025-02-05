function texto(a){
    let texto = a;
    console.log(texto);
    console.log("Olá michel");
}
//texto("paremetro passado");

function soma(n1, n2){
    let somar = n1 + n2;
    return somar;
}
//console.log(soma(5,10));

function retornaIdade(i){
    let alert;
    if(i <= 18){
        alert = "você é menor de idade";
    }else{
        alert = "acesso liberado";

    }
    return alert;
}
//console.log(retornaIdade(25));


function porcentagem(x, y){
    let calt = (x * y)/100;
    let retorno = `O resultado da porcentagem de ${y} de ${x} é ${calt} `;
    return retorno;
}

//console.log(porcentagem(30,10));

//========== Função arrow function ==========//

// const somar = (x, y) => {

//     return x+ y;

// }

// forma reduzida para fazer um arrow function que retorna só uma linha
const somar = (x,y) => x+y;
console.log(somar(10,10));
//==========================================//



//================== array =================//
let ingredientes =[
    'Farinha',
    'Ovos',
    'Oleo',
    'Leite',
];

//push adiciona um valor dentro do array
//console.log(ingredientes.push('Chocolate'));

//função pop() remove a ultimo valor do array
//ingredientes.pop();
//função shift() remove o primeiro valor do array
//ingredientes.shift();


console.log(ingredientes);
//==========================================//
