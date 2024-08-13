---

# 🚀 **Bem-vindo ao Backend da Aplicação!** 🚀

Este é um backend ágil e poderoso desenvolvido com **Express** e **Sequelize**. Ele fornece uma API RESTful para gerenciar usuários e autenticação, utilizando **PostgreSQL** e **bcrypt** para garantir a segurança das senhas. 

## 🛠️ **Estrutura do Projeto**

- **Database**: Conexão e configuração do Sequelize para PostgreSQL.
- **Models**: Definição de modelos, incluindo o modelo `User` com segurança adicional para hashes de senhas.
- **Controllers**: A lógica por trás do gerenciamento de usuários e autenticação.
  - **UserController**: Cria novos usuários com validação de dados.
  - **SessionController**: Autentica usuários com verificação robusta de credenciais.
- **Routes**: Roteamento eficiente para criação de usuários e autenticação.
- **Server**: Configuração e execução do servidor Express.

## 💡 **Funcionalidades**

- **Criação de Usuário** (`POST /users`): Cadastre novos usuários com validação detalhada.
- **Autenticação de Usuário** (`POST /session`): Faça login com credenciais seguras e verifique a identidade.

## 📋 **Requisitos**

Certifique-se de ter os seguintes itens prontos:

- Node.js
- PostgreSQL
- Sequelize
- Bcrypt
- Express
- Yup (para validação de dados)

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

3. **Configure o banco de dados**:
   Ajuste o arquivo `config/database.js` com suas credenciais.

4. **Execute as migrações**:
   Crie as tabelas no banco de dados com:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Inicie o servidor**:
   Coloque tudo em movimento:
   ```bash
   npm start
   ```

Seu servidor estará pronto para rodar na porta 3001! 🌟

## 🎉 **Divirta-se Desenvolvendo!** 🎉

Se você encontrar algum problema ou tiver dúvidas, não hesite em abrir uma issue ou contribuir. Estamos aqui para ajudar!

---
