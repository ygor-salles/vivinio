# vivinio
API em ExpressJS. Aplicação backend para cadastramento de vinhos, autenticação de usuário e comentários sobre os vinhos 

## :clipboard: Instruções

### VARIÁVEIS DE AMBIENTE

- Criar na raiz da pasta do projeto um arquivo `.env`
  e preencher as informações conforme se encontra no arquivo `.env_example`.
  
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

## Comandos básicos para as migrations

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
