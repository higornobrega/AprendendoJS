/**
 * ANOTAÇÕES
 * Conceitos gerais
 * Apenas um parametro 
 */

function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par!';       
    } else {
        return 'impar!';
    }
}

let num = parimpar(10);

console.log(`O número é ${num}`);