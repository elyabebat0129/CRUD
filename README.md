# CRUD Usuários

Aplicação web de gerenciamento de usuários com interface em HTML/CSS/JavaScript.

## Tecnologias

- HTML, CSS, JavaScript (ES Modules)
- Bootstrap 5
- Axios
- Nginx (Alpine)
- Docker / Docker Compose

## Estrutura do Projeto

```
crud/
├── Dockerfile
├── compose.yaml
├── package.json
└── src/
    └── scripts/
        ├── api/
        │   ├── create.js      # POST - Criar usuário
        │   ├── read.js        # GET - Listar usuários
        │   ├── update.js      # PUT / PATCH - Editar usuário
        │   └── delete.js      # DELETE - Excluir usuário
        ├── dom/
        │   └── render.js      # Renderização da tabela
        └── styles/
            ├── index.html     # Interface principal
            └── app.js         # Entry-point dos módulos
```

## Funcionalidades

- Criar usuário com nome, idade e email
- Listar todos os usuários em tabela
- Editar dados de um usuário existente
  - Usa `PUT` quando todos os campos foram alterados
  - Usa `PATCH` quando apenas alguns campos foram alterados
- Excluir um usuário