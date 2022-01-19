# vivinio-api

<h4 align="center">
    :computer: API para cadastramento de vinhos, autenticação de usuário e comentários sobre os vinhos
</h4>

<p align="center">
     <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#user-content-clipboard-instruções">Instruções</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#%EF%B8%8F-comandos-básicos-para-as-migrations">Migrations</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-gerar-o-build">Build</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#%EF%B8%8F-collection-das-requisições---insomnia">Requisições</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-ajustes-e-melhorias">Melhorias</a>
</p>

<div align="center">
    <img src="https://raw.githubusercontent.com/ygor-salles/vivinio/dev/assets/Modelagem.PNG" alt="ModelagemBanco">
</div>
 
----
 ## 💻 Projeto

API em ExpressJS. Aplicação backend para cadastramento de vinhos, autenticação de usuário e comentários sobre os vinhos 

- A resolução completa desse projeto se encontra em um pdf dentro da pasta `./assets`

---

## :rocket: Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [Typeorm](https://typeorm.io/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Firebase](https://console.firebase.google.com/u/0/)

---

## :clipboard: Instruções

### VARIÁVEIS DE AMBIENTE

- Criar na raiz da pasta do projeto um arquivo `.env` e preencher as informações conforme se encontra no arquivo `.env.example`.

### FIREBASE

- Para que as imagens dos vinhos sejam salvas na nuvem é necessário criar uma conta no firebase storage e definir as variaveis de ambiente do firebase em `.env` e setar a variável de ambiente firebaseActive como true. Para que as imagens sejam salvas localmente basta definir a variável de ambiente firebaseActive como false

### DOCKER

- Após preenchida as variáveis de ambiente, subir o container do docker pelo terminal com o comando:

```bash
docker-compose up
```

### DEPENDÊNCIAS

- No terminal executar o comando para instalar as dependências:

```bash
yarn
```

### MIGRATIONS

- No terminal executar as migrations para criar as tabelas do banco de dados, com o comando:

```bash
yarn typeorm migration:run
```

### START

- Finalizado! Basta agora executar a aplicação backend com o seguinte comando:

```bash
yarn dev
```

- A Api estará rodando na porta conforme definido no arquivo .env em PORT, por padrão utilize
  a porta 4000. `http://localhost:4000`

---

## ⚙️ Comandos básicos para as migrations

- Criar uma migration

```bash
yarn typeorm migration:create -n CreateExample
```

- Rodar as migrations

```bash
yarn typeorm migration:run
```

- Desfazer alterações da migration

```bash
yarn typeorm migration:revert
```

---

## 📬 Gerar o build

```bash
yarn build
```

---

## ✈️ Collection das requisições - insomnia

- As collections das requisições backend `Insomnia_2021-12-21.json` se econtra dentro da pasta `assets` deste projeto.

---

## 📌 Ajustes e melhorias

Até o momento não há nenhuma nova feature para a api

  


