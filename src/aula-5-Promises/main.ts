// Promises


// console.log('Meu código rodando...');
// // Algo assíncrono 

// setTimeout(() => {
//     console.log('Opa, demorei mas cheguei!');
// }, 1000);

// console.log('Outro código rodando...');

function recuperaDados() {
    setTimeout(() => {
        // Minha função demora 1s para retornar
        return true;
    }, 1000);
}

const retorno = recuperaDados();

console.log(retorno);

// Pendente (Pending) -> Não foi concluída
// Resolvida (Fulfilled) -> Foi concluída com sucesso
// Rejeitada (Rejected) -> Falhou

interface IAluno {
    nome: string;
    turma: number;
}

function recuperaDadosPromise(): Promise<IAluno[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tempo = Math.floor(Math.random() * 3000) + 1000;
            if(tempo < 2000){
                resolve([
                    { nome: 'Rodrigo', turma: 1178 },
                    { nome: 'Jorge', turma: 1178 },
                ]);
            }else {
                reject('Falha ao recuperar dados');
            }
        }, 1000);
    })
}

// recuperaDadosPromise()
// .then(valor => {
//     console.log(valor);
//     console.log(valor[0].nome);
//     console.log(valor[0].turma);
// })
// .catch(erro => {
//     console.log(erro);
// })
// .finally(() => {
//     // exemplo de aplicação: desligar loading
//     console.log('Fim da operação!');
// });

fetch('https://viacep.com.br/ws/mateus/json/')
// .then(valor => {
//     console.log(valor);
//     valor.json().then(endereco => {
//         console.log(endereco);
//     }).catch(erro => {
//         console.log(erro);
//     })
// })
.then(resposta => resposta.json())
.then(valor => console.log(valor))
.catch(erro => {
    console.log('Ops, parece que algo deu errado =(', erro);
})
.finally(() => {
    // exemplo de aplicação: desligar loading
    console.log('Fim da operação!');
})