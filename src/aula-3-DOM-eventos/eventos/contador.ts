const [botao] = document.getElementsByTagName('button');
const nav = document.querySelector('nav');

let contador = 0;
const contar = (valor: number) => {
    contador = valor;
    botao.innerText = 'Ação contar: '+ contador;
}

botao.addEventListener('click', () => {
    contar(contador + 1);
});

botao.addEventListener('click', () => {
    if(nav && contador === 5) {
        nav.style.backgroundColor = 'red';
    }
});