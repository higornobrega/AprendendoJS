/**
 * ANOTAÇÕES
 * array.push(elemento_que_deseja_inserir) -> Insere no final do array
 * array.length -> Tamanho do array
 * array.sort() -> Coloca os elentos do array em ordem crescente 
 * array.indexOf(valor_que_quer_buscar) -> Busca um valor no array
 */

let num = [5, 8, 2, 9, 3]; //Vetor com o 1 e Ordenado  1,2,3,5,8,9

console.log(`Nosso vetor é o ${num}`);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
num.push(1);
console.log(`Adicionando 1 no final do array fica ${num}`)
num.sort();
console.log(`O Vetor ordenado é ${num}`);
let busca = num.indexOf(15);
if (busca == -1) {
    console.log(`Valor não encontrado`);
}else{
    console.log(`O valor está na posição ${busca} do vetor`);
}