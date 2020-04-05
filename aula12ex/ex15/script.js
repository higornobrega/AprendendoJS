/**
 * Solução do curso em vídeo
 */

function verificar() {
    var data = new Date();
    var nasc = window.document.getElementById('ano_nas');
    var rads = document.getElementsByName('genero');
    var result = window.document.getElementById('res');
    agora = data.getFullYear();
    var nas = Number(nasc.value);
    var idade = agora - nas;
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    result.innerHTML = idade;
    if ((rads[0].checked == true) && (rads[1].checked == false)) {
        sexo = ' Homem';
        //result.innerHTML = 'Detectamos um Homem';
    }else if((rads[1].checked == true) && (rads[0].checked == false)){
        sexo = 'a Mulher';
        //result.innerHTML = 'Feminino';
    }else{
        result.innerHTML = 'Idade ou Sexo não preenchida ou preenchida incorretamente\n tente novamente';
    }

    if ((idade > 12 && idade < 30) && (sexo == 'a Mulher')) {
        img.setAttribute('src', './img/jovem_feminina.jpg');
    } else if ((idade > 12 && idade < 30) && (sexo == ' Homem')) {
        img.setAttribute('src', './img/jovem_masculino.jpg');
    }else if ((idade >= 30 && idade < 65) && (sexo == ' Homem')) {
        img.setAttribute('src', './img/adulto_masculino.jpg');
    }else if ((idade >= 30 && idade < 65) && (sexo == 'a Mulher')) {
        img.setAttribute('src', './img/adulto_feminina.jpg');
    }else if ((idade >= 65) && (sexo == 'a Mulher')) {
        img.setAttribute('src', './img/idoso_feminina.jpg');
    }else if ((idade >= 65) && (sexo == ' Homem')) {
        img.setAttribute('src', './img/idoso_masculino.jpg');
    }else if ((idade <= 12) && (sexo == ' Homem')){
        img.setAttribute('src', './img/crianca_masculino.jpg');
    }else{
        img.setAttribute('src', './img/crianca_feminina.jpg');
    }

    if (nasc.value > agora || nasc.value.length == 0) {
        result.innerHTML = 'Idade ou Sexo não preenchida ou preenchida incorretamente\n tente novamente';
    }else{
        result.innerHTML = `Detectamos um${sexo} de ${idade} anos`;
        result.appendChild(img);
    }  
    /*
    for (var i = 0; i < rads.length; i++) {
        console.log(rads[i].checked);
        if (rads[i].checked) {
            result.innerHTML = rads[i].value;
        }
        
    }*/
    
    //console.log(sexoF.value);


    //result.innerHTML = sexo.value;
    //result.innerHTML = sexoF.value;
    /*
    if (sexoM.value == 'masculino') {
        result.innerHTML = sexoM.value;
    }else{
        result.innerHTML = sexoF.value;
    }*/
    //result.innerHTML = nasc
}



/*
//Minha solução

function verificar() {
    var data = new Date();
    var nasc = window.document.getElementById('ano_nas');
    var rads = document.getElementsByName('genero');
    var result = window.document.getElementById('res');
    agora = data.getFullYear();
    var nas = Number(nasc.value);
    var idade = agora - nas;
    
    result.innerHTML = idade;
    if ((rads[0].checked == true) && (rads[1].checked == false)) {
        sexo = ' Homem';
        //result.innerHTML = 'Detectamos um Homem';
    }else if((rads[1].checked == true) && (rads[0].checked == false)){
        sexo = 'a Mulher';
        //result.innerHTML = 'Feminino';
    }else{
        result.innerHTML = 'Idade ou Sexo não preenchida ou preenchida incorretamente\n tente novamente';
    }

    if ((idade > 12 && idade < 30) && (sexo == 'a Mulher')) {
        img = './img/jovem_feminina.jpg';
    } else if ((idade > 12 && idade < 30) && (sexo == ' Homem')) {
        img = './img/jovem_masculino.jpg';
    }else if ((idade >= 30 && idade < 65) && (sexo == ' Homem')) {
        img = './img/adulto_masculino.jpg';
    }else if ((idade >= 30 && idade < 65) && (sexo == 'a Mulher')) {
        img = './img/adulto_feminina.jpg';
    }else if ((idade >= 65) && (sexo == 'a Mulher')) {
        img = './img/idoso_feminina.jpg';
    }else if ((idade >= 65) && (sexo == ' Homem')) {
        img = './img/idoso_masculino.jpg';
    }else if ((idade <= 12) && (sexo == ' Homem')){
        img = './img/crianca_masculino.jpg';
    }else{
        img = './img/crianca_feminina.jpg';
    }

    if (nasc.value > agora || nasc.value.length == 0) {
        result.innerHTML = 'Idade ou Sexo não preenchida ou preenchida incorretamente\n tente novamente';
    }else{
        result.innerHTML = `Detectamos um${sexo} de ${idade} anos\n <img src="${img}" alt="">`;
    }  
    /*
    for (var i = 0; i < rads.length; i++) {
        console.log(rads[i].checked);
        if (rads[i].checked) {
            result.innerHTML = rads[i].value;
        }
        
    }*/
    
    //console.log(sexoF.value);


    //result.innerHTML = sexo.value;
    //result.innerHTML = sexoF.value;
    /*
    if (sexoM.value == 'masculino') {
        result.innerHTML = sexoM.value;
    }else{
        result.innerHTML = sexoF.value;
    }*/
    //result.innerHTML = nasc
/*}*/