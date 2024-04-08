# CRUD de Tasks

Este é um projeto simples de CRUD (Create, Read, Update, Delete) de tasks, desenvolvido como parte do estudo de Node.js utilizando Express, TypeScript, POO (Programação Orientada a Objetos), middlewares e lidando com erros de forma escalável.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js
- npm ou yarn

## Instalação

1. Clone o repositório: `git clone https://github.com/seu-usuario/crud-tasks.git`
2. Entre no diretório do projeto: `cd API_node_tasks-estudando`
3. Instale as dependências: `npm install` ou `yarn install`

## Uso

Para iniciar o servidor, execute o seguinte comando:

```bash
npm run dev
```
```bash
* exemplo: POST /tasks: Cria uma nova task.
curl -X POST \
  http://localhost:3000/tasks \
  -H 'Content-Type: application/json' \
  -d '{
	"title": "Minha Nova Task",
	"description": "Esta é uma descrição da minha nova task",
	"steps": ["Passo 1", "Passo 2", "Passo 3"]
}'
```

```bash
 Após iniciar o servidor, você pode acessar a API através do navegador ou
 de ferramentas como Postman na url: http://localhost:3000. As rotas disponíveis incluem:

GET /tasks: Retorna todas as tasks.
GET /tasks/:id: Retorna uma task específica pelo ID.
PATCH /tasks/:id: Atualiza uma task existente pelo ID.
DELETE /tasks/:id: Deleta uma task pelo ID.

* Certifique-se de substituir :id pelo ID da task desejada.
