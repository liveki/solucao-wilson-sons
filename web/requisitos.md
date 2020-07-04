# Cadastro do usuário

**RF** - Requisitos Funcionais

- O usuário deve poder se cadastrar na plataforma

**RN** - Regras de negócio

- O usuário não pode cadastrar com um email já cadastrado
- Deverá ser solicitado a confirmação da senha na hora de cadastrar
- A senha e confirmação devem ser iguais

# Autenticação do usuáro

**RF** - Requisitos Funcionais

- O usuário deve poder se autenticar na plataforma

**RN** - Regras de negócio

- O usuário não deve poder se autenticaar com credenciais inválidas

# Manipulação de manobras

**RF** - Requisitos Funcionais

- O usuário deve poder gerenciar as manobras (CRUD)

**RNF** - Requisitos não funcionais

- Quando for cadastrada uma manobra, deve-se buscar as informações atuais.

**RN**

- Deve-se verificr se uma manobra já existe, se sim, aplicar _Machine Learning_

# Dados para cadastro do usuário

- nome
- email
- senha

# Dados para cadastro de manobras

- id_manobra (gerado de forma automática)
- id_navio (identificador do navio que solicitou manobra)
- latitude e longitude do navio
- lista de rebocadores (identificador dos X rebocadores envolvidos na manobra)
- latitude e longitude dos rebocadores
- consumo_total (soma dos gastos estimados por cada rebocador)
