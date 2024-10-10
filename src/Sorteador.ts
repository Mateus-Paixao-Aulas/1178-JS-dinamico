const elementosLabel = document.querySelectorAll('[type="checkbox"] + span + label');
const arrayLabelAlunos = Array.from(elementosLabel);
const arrayLabelAlunosFiltrados = arrayLabelAlunos.filter(label => label.textContent !== 'Selecionar tudo');
const listaNomeAlunos = arrayLabelAlunosFiltrados.map(label => label.textContent?.trim());

const alunosSortudos = [];
const alunosJaSorteados = [
    "Lucas Salvador Notaro",
    "Luiz Fernando Dionizio Pedrozo",
    "Thiago Dourado Fontenla",
    "Matheus Cavalcante De Souza"
];


// TODO: Atualizar para não cair o mesmo nome sorteado.
while(alunosSortudos.length < 4) {
    const indexSorteado = Math.floor(Math.random() * listaNomeAlunos.length);
    const alunoSorteado = listaNomeAlunos[indexSorteado];
    
    if(!alunosJaSorteados.includes(alunoSorteado || '')){
        alunosSortudos.push(alunoSorteado); 
    }
}


const botaoSorteio = document.createElement('button');
botaoSorteio.innerText = 'Sortear Alunos';
botaoSorteio.style.background = 'blue';
botaoSorteio.style.position = 'absolute';
botaoSorteio.style.top = '0';
botaoSorteio.style.right = '0';
botaoSorteio.style.color = '#fff';
botaoSorteio.style.padding = '5px 10px';
botaoSorteio.style.fontSize = '24px';
botaoSorteio.style.zIndex = '9999';
botaoSorteio.onclick = () => console.log('Opa, sou eu!!!');


document.querySelector('body')!.appendChild(botaoSorteio);