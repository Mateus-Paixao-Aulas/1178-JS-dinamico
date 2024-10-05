// const campoNome = document.querySelector<HTMLInputElement>('#campoNome');
const campoNome = document.getElementById('campoEmail') as HTMLInputElement;
const campoEmail = document.querySelector<HTMLInputElement>('#campoEmail');
const paragrafo = document.querySelector('.minhaSessao p');

if(campoNome && paragrafo){
    campoNome.oninput = function() {
        const valorDigitado = campoNome.value
        paragrafo.textContent = 'Olá, '+ valorDigitado;
    }
}

if(campoEmail) {
    campoEmail.onblur = function() {
        const valorDigitado = campoEmail.value
        if(!valorDigitado.includes('@')){
            alert('E-mail incorreto!');
        }else{
            console.log(valorDigitado);
        }
    }
}