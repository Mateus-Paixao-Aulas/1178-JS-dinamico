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

function buscarAluno(){
    const alunoEncontrado = alunosJaSorteados.find((aluno: string) => aluno?.includes(campoNomeAluno.value));
    return alunoEncontrado;
}

function excluirAluno(){
    const alunoEncontrado = buscarAluno();
    const alunosLocalStorage = JSON.parse(localStorage.getItem(KEY_ALUNOS) || '');

    const alunosJaSorteadosAtualizada = alunosLocalStorage.filter((aluno: string) => aluno !== alunoEncontrado);
    localStorage.setItem(KEY_ALUNOS, JSON.stringify(alunosJaSorteadosAtualizada));
    console.log('Aluno excluído com sucesso!');
}

function inserirAluno(){
    const alunoEncontrado = listaNomeAlunos.find(aluno => aluno?.includes(campoNomeAluno.value));
    const alunosLocalStorage = JSON.parse(localStorage.getItem(KEY_ALUNOS) || '');
    alunosLocalStorage.push(alunoEncontrado);
    localStorage.setItem(KEY_ALUNOS, JSON.stringify(alunosLocalStorage));
}

const campoNomeAluno = document.createElement('input');
campoNomeAluno.style.position = 'absolute';
campoNomeAluno.style.top = '40px';
campoNomeAluno.style.right = '0';
campoNomeAluno.style.zIndex = '9999';
campoNomeAluno.style.padding = '5px 10px';


const botaoSorteioAluno = document.createElement('button');
botaoSorteioAluno.innerText = 'Sortear Alunos';
botaoSorteioAluno.style.background = 'blue';
botaoSorteioAluno.style.position = 'absolute';
botaoSorteioAluno.style.top = '0';
botaoSorteioAluno.style.right = '0';
botaoSorteioAluno.style.zIndex = '9999';
botaoSorteioAluno.style.color = '#fff';
botaoSorteioAluno.style.padding = '5px 10px';
botaoSorteioAluno.style.fontSize = '24px';
botaoSorteioAluno.onclick = () => sortearAlunos();

const botaoBuscarAluno = botaoSorteioAluno.cloneNode() as HTMLButtonElement;
botaoBuscarAluno.innerText = 'Buscar Aluno';
botaoBuscarAluno.style.top = '70px';
botaoBuscarAluno.onclick = () => buscarAluno();

const botaoExcluirAluno = botaoSorteioAluno.cloneNode() as HTMLButtonElement;
botaoExcluirAluno.innerText = 'Excluir Aluno';
botaoExcluirAluno.style.top = '110px';
botaoExcluirAluno.onclick = () => excluirAluno();

const botaoInserirAluno = botaoSorteioAluno.cloneNode() as HTMLButtonElement;
botaoInserirAluno.innerText = 'Inserir Aluno';
botaoInserirAluno.style.top = '150px';
botaoInserirAluno.onclick = () => inserirAluno();

document.querySelector('body')!.appendChild(botaoSorteioAluno);
document.querySelector('body')!.appendChild(campoNomeAluno);
document.querySelector('body')!.appendChild(botaoBuscarAluno);
document.querySelector('body')!.appendChild(botaoExcluirAluno);
document.querySelector('body')!.appendChild(botaoInserirAluno);


// [
//     "Rayane Dos Santos Silva",
// Gabi
// Gabriel 
//     "Lucas Kennde"
// ]