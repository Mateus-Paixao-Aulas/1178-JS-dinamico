// *** Introdução ao Storage ***
// O Storage permite que você armazene dados no navegador, sendo útil para persistir informações
// que podem ser usadas em sessões futuras ou na mesma sessão de navegação.
// Existem dois tipos principais de Storage:
// - localStorage: Persiste até que o usuário ou o próprio código remova.
// - sessionStorage: Dados temporários que expiram quando o navegador é fechado.

// *** Exemplo de uso do localStorage ***
// Armazenando preferências ou dados que precisam sobreviver entre as sessões do usuário.

// Salvando um item no localStorage com a chave '@TESTE_KEY' e o valor 'O meu valor!!!'
localStorage.setItem('@TESTE_KEY', 'O meu valor!!!');

// Removendo um item específico do localStorage usando a chave 'teste'
// localStorage.removeItem('teste');

// Limpando todo o conteúdo armazenado no localStorage
// localStorage.clear();

// Obtendo valores armazenados no localStorage
// const meuValor = localStorage.getItem('@TESTE_KEY');
// const meuOutroValor = localStorage.getItem('@OUTRA_KEY');

// O ideal é sempre validar a presença do valor antes de utilizá-lo no código
// console.log(meuValor);
// console.log(meuOutroValor);

// *** Exemplo de uso do sessionStorage ***
// Ideal para armazenar informações temporárias como tokens, que só precisam durar 
// durante a sessão atual do navegador (enquanto o navegador está aberto).

// Armazenando um item no sessionStorage
// sessionStorage.setItem('@TESTE_KEY', 'O meu valor no session!!!');

// Removendo o item do sessionStorage
// sessionStorage.removeItem('@TESTE_KEY');

// *** Monitoração do Storage ***
// O evento 'storage' é disparado quando uma alteração é feita no armazenamento (local ou session)
// em uma aba diferente do navegador. Útil para sincronizar dados entre diferentes guias abertas.
// window.addEventListener('storage', () => {
//     console.log('Opa, storage atualizado');
// });

// *** Exemplo prático com array de animais ***
// Definindo uma chave para armazenar no localStorage
const KEY = '@ANIMAIS';

// Armazenando um array de animais como string no localStorage
// Para isso, usamos JSON.stringify para converter o array em uma string.
localStorage.setItem(KEY, JSON.stringify(['Cachorro', 'Gato', 'Passarinho']));

// Recuperando o valor armazenado no localStorage com a chave '@ANIMAIS'
const animaisArmazenados = localStorage.getItem(KEY);

// Convertendo o valor recuperado de volta para um array (usamos JSON.parse)
const animaisArray = animaisArmazenados ? JSON.parse(animaisArmazenados) : [];

// Tipagem explícita como array de strings
const lista: string[] = animaisArray;

// Exibindo no console a lista de animais recuperada do localStorage
console.log(lista);
