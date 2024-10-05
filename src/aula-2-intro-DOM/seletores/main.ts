// Seletores DOM

// Pode retornar null
// const meuTitulo2 = document.getElementById('meuTitulo2');
// console.log(meuTitulo?.textContent);
// console.log(meuTitulo2.textContent); // Cannot read properties of null

const meuTitulo = document.getElementById('meuTitulo');
console.log(meuTitulo?.textContent);

if(meuTitulo){
    console.log(meuTitulo.outerHTML);
}

const minhaSessao = document.getElementsByClassName('minhaSessao');

if(minhaSessao.length){
    console.log(minhaSessao[0]);
    // console.log(minhaSessao[0].innerHTML);
}

// Retorna o primeiro resultado
const meuParagrafo = document.querySelector('.minhaSessao p');
const meuTitulo2 = document.querySelector('#meuTitulo');
const minhaAncora = document.querySelector('header nav a');
const menu = document.querySelector('nav');

// Retorna todos os resultados
const meusParagrafos = document.querySelectorAll('.minhaSessao p');

console.log(meuParagrafo);
console.log(meusParagrafos);
console.log(meuTitulo2);
console.log(menu);
console.log(minhaAncora);

