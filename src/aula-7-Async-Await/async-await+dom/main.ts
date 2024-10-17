
const listaCadastro = document.querySelector('#listaCadastro');
const imagemAvatar = document.querySelector<HTMLImageElement>('aside img');

const label = document.querySelector('aside span');

listaCadastro?.addEventListener('click', async (event) => {
    const target = event.target as HTMLElement;
    if(target.matches('button')) {

        try {
            const git = target.getAttribute('value');

            console.log(target.getAttribute('data-gitHub'));
            console.log(target.dataset.github);
            const resposta = await fetch('https://api.github.com/users/'+git);

            const dadosGit = await resposta.json();

            if(!label) return
            label.textContent = dadosGit.name;
            imagemAvatar?.setAttribute('src', dadosGit.avatar_url);
        } catch(error){
            console.log(error);
        }
        
    }
})

const form = document.querySelector<HTMLFormElement>('form');
const dados: Record<string, string> = {};

function capturaDados(event: Event) {
    const target = event.target as HTMLInputElement;
    dados[target.name] = target.value;
}

function enviarDados(event: Event) {
    event.preventDefault();
    if(!listaCadastro) return;

    listaCadastro.innerHTML += `
        <li>
            <span>Nome: ${dados.nome}</span>
            <span>Github: ${dados.git}</span>
            <button value="${dados.git}" data-gitHub="teste">Buscar GitHub</button>
        </li>
    `;
}

form?.addEventListener('change', capturaDados);
form?.addEventListener('submit', enviarDados);