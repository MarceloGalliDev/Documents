1. Instalação do SQL
2. Instalação do Workbench
3. Criando a estrutura do banco
    - Usamos o workbench gerenciar nosso banco de dados
    - na aba esquerda no segundo icone, temos a edição do relacionamento do banco de dados
    - PK = primary key
    - NN = not null
    - AI = auto increment

    - Atentar-se aos tipo de chaves
        - primary
        - estrangeira

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
        - UPDATE usuario SET nome = 'Maria' WHERE id = 1
        - DELETE FROM usuario WHERE id = 1