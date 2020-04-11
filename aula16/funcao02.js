/**
 * ANOTAÇÕES
 * Mais de um parametro
 * Da para inicializar um parametro no escopo, que sera subtituido pelo dado da chamada ou não
 */

function soma(n1 = 0, n2 = 0) { //Se na chamada da função for enviado os dois parâmetros,
    return n1 + n2;             // n1 e n2 será subtituida pelos parâmetros da chamada, 
}                               // se um dos dois não for enviado, será substituido pelo
                                // dado da inicialização

console.log(soma(2));