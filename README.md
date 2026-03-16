# CRUD Usuários

Aplicação web de gerenciamento de usuários com interface em HTML/CSS/JavaScript consumindo uma API REST em PHP.

## Tecnologias

- HTML, CSS, JavaScript
- Bootstrap 5

## Estrutura do Projeto

```
crud/
└── src/
    └── scripts/
        ├── api/
        │   ├── create.js      # POST - Criar usuário
        │   ├── read.js        # GET - Listar usuários
        │   ├── update.js      # PUT - Editar usuário
        │   └── delete.js      # DELETE - Excluir usuário
        ├── dom/
        │   └── render.js      # Renderização da tabela
        └── styles/
            └── index.html     # Interface principal
```

## Funcionalidades

- Criar usuário com nome, idade e email
- Listar todos os usuários em tabela
- Editar dados de um usuário existente
- Excluir um usuário
