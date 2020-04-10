/**
 * ANOTAÇÕES
 * array.indexOf(valor_que_quer_buscar) -> Busca um valor no array, se tiver no vetor ele retorna a posição onde
 * ele se não tiver no vetor retorna -1
 * 
 */

let valores = [5, 8, 2, 9, 3];
for(let pos in valores){ //Pos aqui é uma string
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);   
}
/*
for (let index = 0; index < valores.length; index++) {
    console.log(`A posição ${index} tem o valor ${valores[index]}`);   
}
*/
