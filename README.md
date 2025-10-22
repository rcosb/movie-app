# 🎬 Movie App

Um aplicativo mobile moderno desenvolvido em **Ionic com Angular** para explorar e descobrir informações sobre filmes. O app consome a API do The Movie Database (TMDb) para exibir filmes populares, permitir buscas e mostrar detalhes completos.

## ✨ Funcionalidades

*   **Página Inicial (Home)**: Lista os filmes mais populares do momento.
*   **Busca em Tempo Real**: Permite buscar filmes por título.
*   **Página de Detalhes**: Exibe informações detalhadas como sinopse, orçamento, receita e avaliação.
*   **Interface Adaptativa**: Design responsivo que se adapta a diferentes tamanhos de tela usando componentes Ionic.

## 🛠️ Tecnologias e Ferramentas

Este projeto foi construído com as seguintes tecnologias:

*   [Ionic Framework](https://ionicframework.com/) :cite[2]:cite[6]
*   [Angular](https://angular.io/) (Standalone Components)
*   [TypeScript](https://www.typescriptlang.org/)
*   [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api)

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
*   [Node.js](https://nodejs.org/) (versão LTS recomendada) :cite[2]
*   Gerenciador de pacotes npm (vem com o Node.js)
*   [Ionic CLI](https://ionicframework.com/docs/cli) instalado globalmente:
    ```bash
    npm install -g @ionic/cli
    ```

## 🚀 Como Executar o Projeto

Siga estos passos para configurar e executar o projeto localmente:

1.  **Clone o repositório**
    ```bash
    git clone https://github.com/rcosb/movie-app.git
    cd movie-app
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    ```

3.  **Obtenha uma chave da API TMDb**
    *   Crie uma conta gratuita em [The Movie DB](https://www.themoviedb.org/).
    *   Vá para as configurações da sua conta e solicite uma API Key.
    *   No projeto, localize o arquivo `movie.service.ts` em `src/app/services/`.
    *   Substitua `sua_chave_aqui` pela sua própria API Key.

4.  **Execute o servidor de desenvolvimento**
    ```bash
    ionic serve
    ```
    O aplicativo será aberto automaticamente no seu navegador no endereço `http://localhost:8100`.

## 📁 Estrutura do Projeto e Implementação

O projeto atende aos seguintes requisitos técnicos solicitados:

| Componente | Exemplo no Código | Localização no Projeto |
| :--- | :--- | :--- |
| **2 Pages** | `HomePage` e `DetailsPage` | `src/app/pages/` |
| **HttpClient** | Requisições à API TMDb | `movie.service.ts` |
| **Service** | `MovieService` | `src/app/services/movie.service.ts` |
| **Pipe (Built-in)** | `date` e `currency` | Templates `home.page.html` e `details.page.html` |
| **Diretiva Estrutural `@for`** | Listagem de filmes | `home.page.html` |
| **Diretiva Estrutural `@if`** | Controle de estado de carregamento | `details.page.html` |
| **Passagem de Parâmetro por Rota** | `router.navigate(['/details', movieId])` | `home.page.ts` -> `details.page.ts` |

## 👥 Desenvolvimento e Contribuições

Este projeto foi desenvolvido como um trabalho acadêmico para a disciplina de **FrontEnd Frameworks**.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

> **Nota sobre a API**: Este produto usa a API TMDb, mas não é endossado nem certificado pela TMDb.
