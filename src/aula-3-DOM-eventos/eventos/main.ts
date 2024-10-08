const [botao] = document.getElementsByTagName('button');
botao.innerText = 'Alterei o botão';


function dizerOla() {
    console.log('Olá!!!, tudo bem?');
}

botao.onclick = function() {
    console.log('Opa, Atributo!!!');
}

botao.addEventListener('click', () => {
    console.log('Eai, Ouvinte...');
});

// botao.addEventListener('click', () => {
//     console.log('Eai, Outro Ouvinte...');
// });

botao.addEventListener('blur', () => {
    console.log('Tchau, Blur!');
});

botao.addEventListener('blur', () => {
    console.log('Hmm, Blur mais uma vez?!');
});

botao.addEventListener('dblclick', () => {
    console.log('Double click? Uau!!!');
})

window.dizerOla = dizerOla;