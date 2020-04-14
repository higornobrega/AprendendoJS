let valores = [];
let res = document.getElementById('res');
let num = document.getElementById('num');
let lista = document.getElementById('tab');

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false;
    }
}

function adicionar () {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {       
        alert('Número inválido ou não digitado')
    }
    num.value = '';
    num.focus();
    
}


function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let mendia = 0;
        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) {
                maior = valores[pos];
            }
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }
        media = soma/tot;
        res.innerHTML = '';
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p> A média dos valores digitados é ${media}.</p>`;

    }
}
/*
//Minha solução

const vet = [];
function adicionar () {
    const res = document.getElementById('res');
    const nume = document.getElementById('num');
    const num = Number(nume.value);
    const busca = vet.indexOf(num);
    res.innerHTML='';
    if (nume.value.length == 0 || nume.value < 1 || nume.value > 100 || busca != -1) {
        alert('Número inválido ou não digitado')
    } else {       
        inserir(vet,num);
        console.log(vet);
        const tab = document.getElementById('tab');
        const item = document.createElement('option');
        item.text = `O número ${num} foi adicionado.`; 
        tab.appendChild(item);
    }
    
}

function finalizar() {
    if (vet.length == 0) {
        alert('Adicione números antes de finalizar');
    }else{
        const qnt_ele = quantEle();
        const ele_maior = maiorEle();
        const ele_menor = menorEle();
        const soma_ele = somaEle();
        const media_ele = mediaEle();
        const res = document.getElementById('res');
        res.innerHTML = `Ao todo, temos ${qnt_ele} números cadastrados.<br>`;
        res.innerHTML += `O maior valor informado foi ${ele_maior}.<br>`;
        res.innerHTML += `O menor valor informado foi ${ele_menor}.<br>`;
        res.innerHTML += `Somando todos os valores, temos ${soma_ele}.<br>`;
        res.innerHTML += `a média dos valores digitados é ${media_ele}.`;
    }
}
function mediaEle() {
    let som = somaEle();
    let qnt = quantEle();
    return som/qnt;
}
function somaEle() {
    let soma = 0;
    for (let i = 0; i < vet.length; i++) {
        soma += vet[i];       
    }
    return soma;
}

function maiorEle() {
    let vetMa = vet; 

    vetMa.sort(function (a , b) {
        return a - b;
    });
    return vetMa[(vet.length)-1]
}
function menorEle() {
    let vetMe = vet; 

    vetMe.sort(function (a , b) {
        return a - b;
    });
    return vetMe[0]
}

function quantEle() {
    return vet.length;
}

function inserir(v, n) {
    v.push(n);
    return v;
}
*/