# Projeto Integrador  - Ciências da Computação - UFFS 2023 🎓
### Dupla
`Lucas Smaniotto Schuch - 2121101016` <br>
`Valtemir Junior Gomes da Silva - 2121101043`

Projeto desenvolvido para a integração de disciplinas do curso de Ciências da Computação da UFFS, ministradas por Felipe Grando (Programação II), Denio Duarte (Banco de Dados I), Marina Girolimetto e Raquel Aparecida Pegoraro (Engenharia de Software I), com o intuito de desenvolver um sistema web para solucionar um problema real.

## Organização do Projeto 🗂️

- Index 
  - [Descrição do Projeto 📝](#descrição-do-projeto-)
    - [Documentação 📚](#documentação-)
    - [Estrutura do Projeto 📁](#estrutura-do-projeto-)
    - [Configuração do Projeto ⚙️](#configuração-do-projeto-)
    - [Execução do Projeto ▶️](#execução-e-exaecução-)
  - [Tecnologias Utilizadas 🛠️](#tecnologias-utilizadas-)
## Descrição do Projeto 📝
O projeto consiste em um sistema de gestão de uma clínica de terapia e estética, que possui um site para que clientes solicitem agendamentos e uma área administrativa para as funcionárias da clínica gerenciarem os agendamentos, clientes, seções, seviços e pacotes.
  
### Documentação 📚
- Requisitos de Usuário: [`docs/User Requirements.pdf`](https://github.com/ValtemirJr/ProjetoIntegrador/blob/main/docs/User%20Requirements.pdf)
- Modelo Conceitual: [`docs/Conceptual Model.png`](https://github.com/ValtemirJr/ProjetoIntegrador/blob/main/docs/Conceptual%20Model.png)
- Modelo Lógico Relacional:
  - Diagrama: [`docs/Relational Logical Model.png`](https://github.com/ValtemirJr/ProjetoIntegrador/blob/main/docs/Relational%20Logical%20Model.png)
- Modelo Físico: [`db/Physical_Model.sql`](https://github.com/ValtemirJr/ProjetoIntegrador/blob/main/db/Physical_Model.sql)

### Estrutura do Projeto 📁
O projeto foi dividido em duas pastas, sendo elas `server` e `client`. A pasta `server` contém o código do servidor/backend, enquanto a pasta `client` contém o código do cliente/frontend.

O projeto também conta com uma pasta `docs`, que contém a documentação do projeto, requisitos de usuário, modelo conceitual e modelo lógico relacional.

A pasta `server` contém as seguintes pastas:
- `src`: Contém o código do servidor.
  - `config`: Contém os arquivos de configuração do servidor.
  - `controllers`: Contém os controladores do servidor.
  - `database`: Contém os arquivos de configuração do banco de dados.
  - `middlewares`: Contém os middlewares do servidor.
  - `models`: Contém os modelos do banco de dados.
  - `routes`: Contém as rotas do servidor.
  - `app.js`: Arquivo de configuração do servidor.
  - `server.js`: Arquivo de inicialização do servidor.

A pasta `client` contém as seguintes pastas:
- `src`: Contém o código do cliente.
  - `assets`: Contém as imagens dos componentes e do carousel.  
  - `components`: Contém os componentes do cliente.
  - `pages`: Contém as páginas do cliente.
    - `public`: Contém as páginas públicas do cliente.
    - `secure`: Contém as páginas privadas do cliente.
  - `util`: Contém scripts de utilidade do cliente.
- `public`: Contém os arquivos públicos do cliente.

### Configuração do Projeto ⚙️
O projeto foi desenvolvido com o gerenciados de pacotes [npm](https://www.npmjs.com/), portanto é necessário que o mesmo esteja instalado em sua máquina.
Para instalar as dependências do projeto, execute o comando `npm install` na pasta raiz das pastas `server` e `client`.

Para executar o projeto, é necessário configurar o banco de dados. Para isso, crie um banco de dados PostgreSQL e configure as variáveis de ambiente do projeto, seguindo o arquivo `.env.example` na pasta `server`, além de executar as migrations do banco de dados, executando o comando `npx sequelize db:migrate`.

### Execução do Projeto ▶️
Para executar o projeto, o servidor e o cliente devem ser executados separadamente. 

Para executar o servidor, execute o comando `npm run dev` na pasta `server`, e o servidor será executado na porta `3333` em modo de desenvolvimento.

Para executar o cliente, execute o comando `npm start` na pasta `client` e o cliente será executado na porta `3000` em modo de desenvolvimento.

## Tecnologias Utilizadas 🛠️
- [Node.js](https://nodejs.org/en/): linguagem de programação utilizada para desenvolver o servidor.
  - [Express](https://expressjs.com/pt-br/): utilizado para definir os endpoints do servidor.
  - [Sequelize](https://sequelize.org/): utilizado para realizar a conexão com o banco de dados, definir os modelos e realizar as migrations.
  - [Nodemon](https://nodemon.io/): utilizado para reiniciar o servidor automaticamente quando um arquivo é alterado.
  - [Bcrypt](https://www.npmjs.com/package/bcrypt): utilizado para realizar a criptografia de dados sensíveis.
  - [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): utilizado para realizar a autenticação de usuários.
  - [Cors](https://www.npmjs.com/package/cors): utilizado para permitir o acesso ao servidor de outros domínios.
  - [Dotenv](https://www.npmjs.com/package/dotenv): utilizado para carregar as variáveis de ambiente do servidor.
  - [Pg](https://www.npmjs.com/package/pg) e [Pg-hstore](https://www.npmjs.com/package/pg-hstore): utilizado para realizar a conversão de dados do banco de dados PostgreSQL. utilizado para realizar a conexão com o banco de dados PostgreSQL.
  - [Eslint](https://eslint.org/): utilizado para padronizar o código.
- [React](https://pt-br.reactjs.org/): biblioteca utilizada para desenvolver o cliente.
  - [React Router Dom](https://reactrouter.com/web/guides/quick-start): utilizado para definir as rotas do cliente.
  - [React Icons](https://react-icons.github.io/react-icons/): utilizado para utilizar ícones .svg.
  - [Styled Components](https://styled-components.com/): utilizado para estilizar os componentes sem a necessidade de arquivos .css e reutilização de componentes.
  - [Eslint](https://eslint.org/): utilizado para padronizar o código.
  - [Prettier](https://prettier.io/): utilizado para padronizar o código.
  - [React Slick](https://react-slick.neostack.com/), [Slick Carousel](https://kenwheeler.github.io/slick/), [Framer Motion](https://www.framer.com/motion/): utilizado para criar o carrossel de imagens.
  - [React Google Maps API](https://react-google-maps-api-docs.netlify.app/): utilizado para criar o mapa de localização da clínica.
  - [Sweet Alert2](https://sweetalert2.github.io/): utilizado para criar as mensagens de alerta estilizadas.
- [PostgreSQL](https://www.postgresql.org/): SGBD utilizado para armazenar os dados do projeto.
