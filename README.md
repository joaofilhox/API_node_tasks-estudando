# 🚀 API de Tasks - CRUD Completo

Uma API RESTful completa para gerenciamento de tasks, desenvolvida com Node.js, Express, TypeScript e Zod para validação de dados.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Executar](#como-executar)
- [Endpoints da API](#endpoints-da-api)
- [Exemplos de Uso](#exemplos-de-uso)
- [Deploy no Vercel](#deploy-no-vercel)
- [Contribuição](#contribuição)

## 🎯 Sobre o Projeto

Este projeto é uma API completa de CRUD (Create, Read, Update, Delete) para gerenciamento de tasks. Foi desenvolvido como parte do estudo de Node.js utilizando:

- **Express.js** para o servidor web
- **TypeScript** para tipagem estática
- **Zod** para validação de dados
- **POO (Programação Orientada a Objetos)** para organização do código
- **Middlewares** para validação e tratamento de erros
- **Arquitetura em camadas** (Controllers, Services, Routes)

## 🛠 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Linguagem de programação
- **Zod** - Validação de schemas
- **Helmet** - Segurança HTTP
- **ts-node-dev** - Desenvolvimento com hot reload

## 📁 Estrutura do Projeto

```
src/
├── app.ts                 # Configuração principal da aplicação
├── server.ts              # Inicialização do servidor
├── controllers/           # Controladores da aplicação
│   └── task.controllers.ts
├── services/              # Lógica de negócio
│   └── task.service.ts
├── routes/                # Definição das rotas
│   └── task.routes.ts
├── middlewares/           # Middlewares customizados
│   ├── bodyValidator.middleares.ts
│   └── isTaskIdValid.middlewares.ts
├── schemas/               # Schemas de validação (Zod)
│   └── task.schemas.ts
├── interfaces/            # Interfaces TypeScript
│   └── task.interface.ts
├── database/              # Simulação de banco de dados
│   └── database.ts
└── errors/                # Tratamento de erros
    ├── App.Error.ts
    └── handleErrors.ts
```

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

Para verificar se você tem o Node.js instalado, execute:

```bash
node --version
npm --version
```

## 📦 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/crud-tasks.git
   cd API_node_tasks-estudando
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

## 🚀 Como Executar

### Desenvolvimento

Para executar em modo de desenvolvimento com hot reload:

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3000`

### Produção

Para executar em modo de produção:

```bash
npm run build
npm start
```

## 📡 Endpoints da API

### Base URL
```
http://localhost:3000
```

### Rotas Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/tasks` | Lista todas as tasks |
| `GET` | `/tasks/:id` | Busca uma task específica |
| `POST` | `/tasks` | Cria uma nova task |
| `PATCH` | `/tasks/:id` | Atualiza uma task existente |
| `DELETE` | `/tasks/:id` | Remove uma task |

### Parâmetros de Query

- `search` (opcional): Busca tasks por título
  ```
  GET /tasks?search=estudar
  ```

## 💡 Exemplos de Uso

### 1. Criar uma Nova Task

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Estudar TypeScript",
    "description": "Aprender conceitos avançados de TypeScript",
    "steps": [
      "Instalar TypeScript",
      "Configurar tsconfig.json",
      "Estudar interfaces e tipos",
      "Praticar com projetos reais"
    ]
  }'
```

**Resposta:**
```json
{
  "id": 1,
  "title": "Estudar TypeScript",
  "description": "Aprender conceitos avançados de TypeScript",
  "steps": [
    "Instalar TypeScript",
    "Configurar tsconfig.json",
    "Estudar interfaces e tipos",
    "Praticar com projetos reais"
  ],
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

### 2. Listar Todas as Tasks

```bash
curl -X GET http://localhost:3000/tasks
```

### 3. Buscar Tasks por Título

```bash
curl -X GET "http://localhost:3000/tasks?search=TypeScript"
```

### 4. Buscar Task por ID

```bash
curl -X GET http://localhost:3000/tasks/1
```

### 5. Atualizar uma Task

```bash
curl -X PATCH http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Estudar TypeScript Avançado",
    "description": "Aprender conceitos avançados e práticas de TypeScript"
  }'
```

### 6. Deletar uma Task

```bash
curl -X DELETE http://localhost:3000/tasks/1
```

## 🌐 Deploy no Vercel

### 1. Preparação

Certifique-se de que o projeto está configurado corretamente:

```bash
npm run build
```

### 2. Deploy

1. Instale o Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Faça login no Vercel:
   ```bash
   vercel login
   ```

3. Deploy do projeto:
   ```bash
   vercel
   ```

4. Para deploy em produção:
   ```bash
   vercel --prod
   ```

### 3. Configuração Automática

O projeto já inclui um arquivo `vercel.json` configurado para deploy automático.

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Compila o TypeScript para JavaScript
- `npm start` - Executa em modo produção

## 🛡️ Validações

A API utiliza **Zod** para validação de dados:

- **Título**: String obrigatória com pelo menos 1 caractere
- **Descrição**: String obrigatória com pelo menos 1 caractere
- **Steps**: Array de strings obrigatório com pelo menos 1 item

## 🚨 Tratamento de Erros

A API inclui tratamento robusto de erros:

- **400 Bad Request**: Dados inválidos
- **404 Not Found**: Task não encontrada
- **500 Internal Server Error**: Erro interno do servidor

## 📝 Estrutura de uma Task

```typescript
interface Task {
  id: number;
  title: string;
  description: string;
  steps: string[];
  createdAt: Date;
  updatedAt?: Date;
}
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: joaofilhox

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
