
---

# 🚀 **Bem-vindo ao Backend da Aplicação!** 🚀

Este é um backend ágil e poderoso desenvolvido com **Express** e **Sequelize**, além de uma integração com **MongoDB**. Ele fornece uma API RESTful para gerenciar usuários, produtos e autenticação, utilizando **PostgreSQL**, **bcrypt**, **multer**, **JWT** e **MongoDB** para o armazenamento seguro e eficiente de dados, arquivos e autenticação.

## 🛠️ **Estrutura do Projeto**

- **Database**: Conexão e configuração do Sequelize para PostgreSQL.
- **Models**: Definição de modelos, incluindo:
  - **User**: Segurança adicional para hashes de senhas com **bcrypt**.
  - **Product**: Armazena informações de produtos, incluindo nome, preço, categoria e caminho para o arquivo de imagem.
  - **Category**: Define categorias para os produtos e é usada na associação com o modelo `Product`.
- **Controllers**: A lógica por trás do gerenciamento de usuários, produtos e autenticação.
  - **UserController**: Cria novos usuários com validação de dados.
  - **SessionController**: Autentica usuários com verificação robusta de credenciais.
  - **ProductController**: Gerencia a criação e listagem de produtos, incluindo validação e upload de imagens.
- **Middlewares**: Funções intermediárias que garantem a segurança e a eficiência do backend.
  - **AuthMiddleware**: Verifica a validade do token JWT para proteger rotas.
- **Config**: Configurações adicionais, como:
  - **Auth**: Configuração do JWT, incluindo segredo e tempo de expiração do token.
  - **Multer**: Configuração para armazenamento de arquivos com nomes únicos gerados por UUID.
  - **MongoDB**: Configuração para conectar ao MongoDB e gerenciar pedidos.
- **Routes**: Roteamento eficiente para criação de usuários, produtos e autenticação, protegendo rotas com o middleware de autenticação JWT.
- **Server**: Configuração e execução do servidor Express.

## 💡 **Funcionalidades**

- **Criação de Usuário** (`POST /users`): Cadastre novos usuários com validação detalhada.
- **Autenticação de Usuário** (`POST /session`): Faça login com credenciais seguras e verifique a identidade, recebendo um token JWT.
- **Criação de Produto** (`POST /products`): Adicione novos produtos com nome, preço, categoria e upload de imagem.
- **Listagem de Produtos** (`GET /products`): Obtenha uma lista de todos os produtos cadastrados.
- **Gerenciamento de Pedidos**: A integração com o MongoDB permitirá o gerenciamento de pedidos, com a possibilidade de adicionar e listar pedidos.
- **Proteção de Rotas**: Rotas sensíveis são protegidas com o middleware de autenticação JWT, garantindo acesso apenas para usuários autenticados.

## 📋 **Requisitos**

Certifique-se de ter os seguintes itens prontos:

- **Node.js**: Plataforma para executar o servidor e o código JavaScript no backend.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar informações.
- **Sequelize**: ORM (Object-Relational Mapping) para conectar e interagir com o PostgreSQL.
- **Bcrypt**: Biblioteca para hashing de senhas.
- **Express**: Framework para construir o servidor e gerenciar rotas.
- **Yup**: Biblioteca para validação de dados.
- **Multer**: Middleware para o upload de arquivos.
- **JWT**: Biblioteca para gerar e verificar tokens de autenticação.
- **MongoDB**: Banco de dados não relacional utilizado para gerenciar pedidos.

## ⚙️ **Configuração e Execução**

Siga estes passos para configurar e executar o backend:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/LeandroFerraz31/seu-repositorio.git
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o banco de dados PostgreSQL**:
   Ajuste o arquivo `config/database.js` com suas credenciais do PostgreSQL.

4. **Configure o MongoDB**:
   Ajuste o arquivo `config/database.js` para incluir a configuração do MongoDB, se necessário.

5. **Configure o JWT**:
   Ajuste o arquivo `config/auth.js` com um segredo forte e defina o tempo de expiração do token.

6. **Execute as migrações**:
   Crie as tabelas no banco de dados PostgreSQL com:
   ```bash
   npx sequelize-cli db:migrate
   ```

7. **Inicie o servidor**:
   Coloque tudo em movimento:
   ```bash
   npm start
   ```

8. **Desenvolvimento**:
   - Use **Nodemon** para reiniciar automaticamente o servidor durante o desenvolvimento. Execute:
     ```bash
     npm run dev
     ```
   - **Biome** e **ESLint** ajudarão a garantir a qualidade e a consistência do código. Execute **Biome** e **ESLint** para análise e linting:
     ```bash
     npx biome
     npx eslint .
     ```

9. **Gitignore**:
   - O arquivo **.gitignore** está configurado para ignorar arquivos e pastas que não devem ser versionados, como `node_modules` e arquivos de configuração locais.

Seu servidor estará pronto para rodar na porta 3001! 🌟

## 🎉 **Divirta-se Desenvolvendo!** 🎉

Se você encontrar algum problema ou tiver dúvidas, não hesite em abrir uma issue ou contribuir. Estamos aqui para ajudar!

---