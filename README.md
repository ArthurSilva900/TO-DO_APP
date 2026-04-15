# To-Do — Aula de Web (HTML/CSS/JS)

Projeto simples para iniciantes em Web. Apenas HTML, CSS e JavaScript.

Estrutura do projeto:

- /To-Do
  - /css/style.css
  - /js/script.js
  - index.html

Como usar localmente

1. Abra o arquivo `index.html` no navegador (duplo-clique). Ou, para um servidor simples:

```bash
# macOS / Linux
python3 -m http.server 8000

# Windows (PowerShell)
py -m http.server 8000
```

Abra http://localhost:8000 no navegador (se usar o servidor).

Funcionalidades

- Campo de entrada: digite a descrição da tarefa.
- Seletor de prioridade: Alta, Média, Baixa.
- Lista de exibição: tarefas adicionadas dinamicamente com `innerHTML +=`.
- Ação de conclusão: checkbox que alterna a classe `completed` no item.
- Estilização condicional: classes `priority-high`, `priority-medium`, `priority-low` e `cordaprioridade`.

Deploy no Vercel (passos simples)

1. Coloque o projeto em um repositório Git (GitHub / GitLab / Bitbucket).
2. Acesse https://vercel.com, crie conta e clique em "New Project" → importe o repositório.
3. Vercel detecta que é um site estático e faz o deploy automaticamente.

Alternativa com CLI:

```bash
# instalar Vercel (uma vez)
npm i -g vercel

# rodar deploy interativo na pasta do projeto
vercel
```

Observações

- Código JavaScript intencionalmente simples para iniciantes (função `createTask`, `innerHTML +=`).
- Este projeto está pronto para deploy estático (Vercel, Netlify, GitHub Pages, etc.).
