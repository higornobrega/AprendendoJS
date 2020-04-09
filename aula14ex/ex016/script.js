function contar() {
    let ini = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let res = document.getElementById('res');
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!');
        res.innerHTML = 'Impossivel contar';
    }else{
        res.innerHTML = 'Contando: <br>';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1');
            p = 1;
        }
            if (f > i) {
                //Contagem crescente
                for (let index = i; index < f; index += p) {
                    res.innerHTML += ` ${index} \u{1F449}`; 
                }
            }else{
                //Contagem decrescente
                for (let index = i; index > f; index -= p) {
                    res.innerHTML += ` ${index} \u{1F449}`;    
                }
            }

        res.innerHTML += `\u{1F3C1}`
    }
    /*
    //Minha Solução
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res');
    inicio = Number(inicio.value);
    fim = Number(fim.value);
    passo = Number(passo.value);
    var cont = 0;
    var element = [];
    if (inicio < fim) {
        for (var i = inicio; i <= fim; i = i + passo) {
            element[cont] = i;
            cont++;
        }
        res.innerHTML = element;
    }else{
        res.innerHTML = "Inicio maior que o fim"
    }*/

}