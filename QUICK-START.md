# 🚀 Guia de Início Rápido

## Instalação e Execução

### 1. Instalar dependências
```bash
npm install
```

### 2. Executar em desenvolvimento
```bash
npm run dev
```

### 3. Testar a API
Acesse: `http://localhost:3000/tasks`

## 📝 Exemplos Rápidos

### Criar uma task
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Minha Task",
    "description": "Descrição da task",
    "steps": ["Passo 1", "Passo 2"]
  }'
```

### Listar tasks
```bash
curl http://localhost:3000/tasks
```

### Buscar por título
```bash
curl "http://localhost:3000/tasks?search=Minha"
```

## 🛠 Scripts Disponíveis

- `npm run dev` - Desenvolvimento com hot reload
- `npm run build` - Compilar TypeScript
- `npm start` - Executar em produção

## 📁 Arquivos de Teste

- `test-api.http` - Requisições para VS Code REST Client
- `Tasks-API.postman_collection.json` - Coleção do Postman

## 🌐 Deploy

```bash
npm run build
vercel
``` 