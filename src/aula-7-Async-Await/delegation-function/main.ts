const botoes = document.querySelectorAll('#listaCadastro button');
// botoes.forEach(botao => {
//     botao.addEventListener('click', (event) => {
//         const target = event.target as HTMLButtonElement;
//         if(!target.parentElement) return; // early return 

        
//         if(target.parentElement.hasAttribute('style')){
//             target.parentElement.style.backgroundColor = 'transparent';
//             target.remove();
//         }else{
//             target.parentElement.style.backgroundColor = '#fad0d6';
//             target.textContent = 'Remover cor';
//         }
//     });
// });


const listaCadastro = document.querySelector('#listaCadastro');
// Delegation Function

// TODO: falar sobre setAtribute, getAttribute, hasAtribute


listaCadastro?.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if(target.matches('button')) {
        if(!target.parentElement) return; // early return 

        if(target.parentElement.hasAttribute('style')){
            target.parentElement.style.backgroundColor = 'transparent';
            target.remove();
        }else{
            target.parentElement.style.backgroundColor = '#fad0d6';
            target.textContent = 'Remover cor';
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
            <span>E-mail: ${dados.email}</span>
            <button>Pintar</button>
        </li>
    `;
}

form?.addEventListener('change', capturaDados);
form?.addEventListener('submit', enviarDados);