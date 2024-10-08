const elementosLabel = document.querySelectorAll('[type="checkbox"] + span + label');
const arrayLabelAlunos = Array.from(elementosLabel);
const arrayLabelAlunosFiltrados = arrayLabelAlunos.filter(label => label.textContent !== 'Selecionar tudo');
const listaNomeAlunos = arrayLabelAlunosFiltrados.map(label => label.textContent?.trim());

const alunosSortudos = [];
while(alunosSortudos.length < 4) {
    const indexSorteado = Math.floor(Math.random() * listaNomeAlunos.length);
    alunosSortudos.push(listaNomeAlunos[indexSorteado]);
}

// [
//     "Lucas Salvador Notaro",
//     "Luiz Fernando Dionizio Pedrozo",
//     "Thiago Dourado Fontenla",
//     "Matheus Cavalcante De Souza"
// ]