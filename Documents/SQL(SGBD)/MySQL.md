1. Instalação do SQL
2. Instalação do Workbench
3. Criando a estrutura do banco
    - Primeiro passo é listar os requisitos do nosso sistema
    - Criar a tabela visual do nosso banco para sanar os requisitos 
    - Usamos o workbench gerenciar nosso banco de dados
    - Utilizar o atalho 't' apra criar uma table
    - na aba esquerda no segundo icone, temos a edição do relacionamento do banco de dados
    - PK = primary key
    - NN = not null
    - AI = auto increment
    
    - Definir as conexões entre tabelas, 1:1, 1:* ...
    - No nosso sistema, cada cliente possui somente um endereço

    - Atentar-se aos tipo de chaves
        - primary
        - estrangeira

    - Criar conexão
    - Renomear o banco de dados
    - Botão direito do mouse, dar um set as default schema, ficará em negrito

    - Transformando o schema visual do BD e código
        - File > Export
        - copia do texto dos comando para criação da banco de dados e colo no arquivo root do servidor local
    
        - Database > Forward Engineer
        - cria-se diretamente no root do servidor o banco de dados

4. Comandos SQL
    - DQL
        - SELECT
            SELECT * FROM usuarios;
    
    - DDL (criação de tables e banco de daos dentro da tabela)
        - CREATE DATABASE banco_teste
        - CREATE TABLE usuario(id INT, nome VARCHAR(255))
        - ALTER TABLE usuario ADD idade INT AFTER nome
        - DROP DATABASE banco_teste
        - DROP TABLE usuario
    
    - DML
        - INSERT INTO usuario (id, nome, idade) VALUES (1, 'Maria', 50)
        - UPDATE usuario SET nome = 'Maria' WHERE id = 1 (todo comando UPDATE, é necessário usar o WHERE para não correr risco de alterar toda a coluna de uma table)
        - DELETE FROM usuario WHERE id = 1

    - DQL
        - Usado para consultas
        - SELECT * FROM usuario
        - usando filtros
        - SELECT nome, telefone FROM cliente WHERE cpf = "12345678911";

    - Exemplos de comandos

        ALTER TABLE produto
        DROP COLUMN descricao;

        UPDATE cliente
        SET nome = "Maria" WHERE idcliente = 1;

        UPDATE produto
        SET valor = 800, nome="Monitor ultrawide"
        WHERE idproduto = 1 OR idproduto = 2;

        DELETE FROM produto_has_pedido
        WHERE produto_idproduto = 2;

        SELECT cpf, nome FROM cliente; (retorna na ordem escrita)
