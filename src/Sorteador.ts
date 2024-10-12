const elementosLabel = document.querySelectorAll('[type="checkbox"] + span + label');
const arrayLabelAlunos = Array.from(elementosLabel);
const arrayLabelAlunosFiltrados = arrayLabelAlunos.filter(label => label.textContent !== 'Selecionar tudo');
const listaNomeAlunos = arrayLabelAlunosFiltrados.map(label => label.textContent?.trim());

const KEY_ALUNOS = '@ALUNOS_SORTEADOS';
const alunosArmazenados = localStorage.getItem(KEY_ALUNOS);

const alunosJaSorteados = alunosArmazenados ? JSON.parse(alunosArmazenados) : [];

const alunosSortudos: string[] = [];

function sortearAlunos() {
    while(alunosSortudos.length < 4) {
        const indexSorteado = Math.floor(Math.random() * listaNomeAlunos.length);
        const alunoSorteado = listaNomeAlunos[indexSorteado] as string;
        
        if(!alunosJaSorteados.includes(alunoSorteado)) {
            alunosSortudos.push(alunoSorteado);
            alunosJaSorteados.push(alunoSorteado);
        }
    }

   console.log(alunosSortudos);
   localStorage.setItem(KEY_ALUNOS, JSON.stringify(alunosJaSorteados));
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
botaoSorteio.onclick = () => sortearAlunos();


document.querySelector('body')!.appendChild(botaoSorteio);

// Sorteados de hoje
// [
//     "Juliana Andrade",
//     "Gabriel Oliveira",
//     "Jonathan Machado Da França Costa",
//     "Tiago Tomé Lima"
//]
// =((((

// Quem Apresentou: 
// Leo
// Gui Fermino
// Rodrigo
// Gui Souza

// TODO: Remover um item da lista
// TODO: Adicionar um nome especifico na lista
// TODO: Buscar um nome na lista