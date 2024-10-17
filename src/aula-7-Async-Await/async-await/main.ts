interface IAluno {
    nome: string;
    turma: number;
}

function recuperaDadosPromise(): Promise<IAluno[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // const tempo = Math.floor(Math.random() * 3000) + 1000;
            if(true){
                resolve([
                    { nome: 'Rodrigo', turma: 1178 },
                    { nome: 'Jorge', turma: 1178 },
                ]);
            }else {
                reject('Falha ao recuperar dados');
            }
        }, 2000);
    })
}

// Promise.all([recuperaDadosPromise(), recuperaDadosPromise()]).then(valor => {
//     console.log(valor.flat());
// });



// recuperaDadosPromise()
// .then(valor => {
//     console.log(valor);
// })
// .catch(erro => {
//     console.log(erro);
// })
// .finally(() => {
//     // exemplo de aplicação: desligar loading
//     console.log('Fim da operação!');
// });


console.clear();
async function esperaAi() {
    console.log('Oi');
    // const valor = await recuperaDadosPromise();

    await recuperaDadosPromise();
    // console.log(valor);
    console.log('Tchau');
}

async function adicionarPost(titulo: string, conteudo: string) {

    const dadosDaRequisicao = {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': ''
        // },
        body: JSON.stringify({
            title: titulo,
            body: conteudo
        })
    }

    // const urlJsonPlaceholder = 'https://jsonplaceholder.typicode.com/posts'

    const urlMockApi = 'https://6526abec917d673fd76cc3a6.mockapi.io/api/v1/postagemmmm'
    const resposta = await fetch(urlMockApi, dadosDaRequisicao);


    if(resposta.status !== 201){

        alert('Algo errado com sua requisição');
        return  
    }
    const dados = await resposta.json();

    sessionStorage.setItem('@ID_ULTIMA_POSTAGEM', dados.id)
}

adicionarPost('Aula', 'Requisição POST para api Json Placeholder');

