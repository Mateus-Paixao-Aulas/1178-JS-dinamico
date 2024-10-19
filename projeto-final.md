
# Projeto Final: E-commerce Front-End Dinâmico

## Introdução

Parabéns por chegar ao projeto final do nosso curso de **Front-End Dinâmico**! Este projeto permitirá que você aplique todos os conhecimentos adquiridos ao longo do curso. Utilizaremos a [Fake Store API](https://fakestoreapi.com/docs) para simular um ambiente de e-commerce realista.

## Objetivos

- **Desenvolver uma aplicação front-end** que simula um site de e-commerce.
- **Implementar autenticação de usuários** com armazenamento seguro de tokens.
- **Consumir APIs externas** para listar produtos e gerenciar o carrinho de compras.
- **Aplicar boas práticas de programação** utilizando `Promises`, `async/await` e gerenciamento de estado com `localStorage` e `sessionStorage`.
- **Criar uma interface interativa** que proporciona uma boa experiência ao usuário.

## Estrutura do Projeto

A aplicação final deverá conter três telas principais:

1. **Tela de Login**
2. **Listagem de Produtos**
3. **Carrinho / Checkout**

### 1. Tela de Login

- **Funcionalidades:**
  - Formulário de login com campos para email e senha. (Campo senha, ser possível ver ou não os caracteres)
  - Validação de entrada (e.g., campos obrigatórios, formato de email).
  - Autenticação do usuário utilizando a Fake Store API.
  - Armazenamento do token de autenticação no `sessionStorage`.

- **Regras:**
  - Apenas usuários autenticados podem acessar as demais funcionalidades da aplicação.
  - Mensagens de erro claras para tentativas de login inválidas. (Extra)

### 2. Listagem de Produtos

- **Funcionalidades:**
  - Exibição de uma lista de produtos obtidos da Fake Store API.
  - Opção para filtrar e ordenar produtos. (Extra)
  - Adicionar produtos ao carrinho com quantidade desejada.

- **Regras:**
  - Apenas usuários logados podem adicionar produtos ao carrinho.

### 3. Carrinho / Checkout

- **Funcionalidades:**
  - Exibição dos produtos adicionados ao carrinho com detalhes como nome, preço, imagem e quantidade.
  - Cálculo automático do total da compra.
  - Processo de checkout que simula a finalização da compra.

- **Regras:**
  - Acesso à página de checkout somente para usuários autenticados.
  - Garantir que o carrinho reflete o usuário atual logado.

## Regras Gerais do Projeto

- **Autenticação:**
  - Armazene o token de autenticação no `sessionStorage`.
  - Verifique a presença do token para permitir o acesso às páginas protegidas.

- **Gerenciamento de Estado:**
  - Utilize `localStorage` para armazenar o carrinho de compras, garantindo que os dados persistam entre sessões. (Extra)

- **Consumo de APIs:**
  - Utilize `fetch` com `Promises` e `async/await` para interagir com a Fake Store API.
  - Trate erros de requisição de forma adequada, exibindo mensagens para o usuário.

- **Interatividade:**
  - Implemente manipulação de DOM para ações específicas, como adicionar um produto ao carrinho.
  - Assegure que a interface seja responsiva e amigável em diferentes dispositivos.

## Entregáveis

- **Código Fonte:** Repositório no GitHub (ou outra plataforma) com todo o código desenvolvido.
- **Documentação:** Instruções de instalação e uso, além de explicações sobre as funcionalidades implementadas.
- **Apresentação:** Demonstração da aplicação funcionando, destacando as principais features e desafios superados.

## Dicas e Recursos

- **Fake Store API Documentation:** [https://fakestoreapi.com/docs](https://fakestoreapi.com/docs)
- **Manipulação de `localStorage` e `sessionStorage`:** [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- **Trabalhando com `fetch` e `async/await`:** [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
- **Validação de Formulários:** Considere utilizar bibliotecas como [Validator.js](https://github.com/validatorjs/validator.js) ou implementar validações personalizadas. (Extra)
- **Gerenciamento de Estado:** Explore técnicas para sincronizar o estado da aplicação com o `localStorage`.

## Avaliação

Seu projeto será avaliado com base nos seguintes critérios:

- **Funcionalidade:** O projeto atende a todos os requisitos especificados.
- **Código Limpo:** Código bem estruturado, comentado e seguindo boas práticas.
- **Interface do Usuário:** Design intuitivo e responsivo.
- **Uso de Tecnologias:** Aplicação eficaz de `Promises`, `async/await`, `fetch`, `localStorage` e `sessionStorage`.
- **Inovação:** Funcionalidades adicionais ou melhorias que enriqueçam a aplicação. (Extra)

## Conclusão

Este projeto é uma excelente oportunidade para consolidar seus conhecimentos em desenvolvimento front-end e criar uma aplicação funcional que simula um cenário real de e-commerce. Dedique-se, explore soluções criativas e não hesite em buscar ajuda quando necessário. Boa sorte e mãos à obra!

---

**Boa sorte a todos e que seu código seja limpo e eficiente! 🚀💚**
