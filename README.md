# Backend Node.js para Upload de Imagens com Descrições

Este projeto backend em Node.js permite aos usuários fazer upload de imagens e gerar uma breve descrição de cada imagem utilizando o serviço Gemini do Google.

## Funcionalidades

* **Upload de imagens:** Permite aos usuários enviar imagens para o servidor.
* **Geração de descrições:** Utiliza o serviço Gemini para criar descrições textuais das imagens.
* **Operações CRUD em posts:** Cria, lê, atualiza e exclui posts (criando, lendo, atualizando e deletando registros).

## Dependências

* **@google/generative-ai:** Interage com o serviço Gemini para gerar texto.
* **cors:** Permite que o servidor aceite requisições de diferentes origens.
* **dotenv:** Carrega variáveis de ambiente a partir de um arquivo .env.
* **express:** Framework web para Node.js.
* **mongodb:** Driver para interagir com bancos de dados MongoDB.
* **multer:** Middleware para lidar com uploads de arquivos.

## Configuração

1. **Clone este repositório.**
2. **Instale as dependências:**
   
   npm install
   "@google/generative-ai",
    "cors",
    "dotenv",
    "express",
    "mongodb",
    "multer"