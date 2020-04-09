function gerarTabuada() {
    let numero = document.getElementById('numero');
    let tab = document.getElementById('seltab');

    if (numero.value.length == 0) {
        alert('Por favor digite um número');
    }else{
        let num = Number(numero.value);
        tab.innerHTML = '';
        for (let index = 1; index <= 10; index++) {
           let item = document.createElement('option');
           item.text = `${num} x ${index} = ${num*index}`
           item.value = `tab${index}`;
           tab.appendChild(item)
        }
    }

}