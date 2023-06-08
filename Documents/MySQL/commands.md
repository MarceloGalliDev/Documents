# Comandos basicos

1. Comandos MySQL
  > para conectar no banco default
  - mysql -u root -p

  > para conectar diretamente no banco de dados
  - mysql -u root -p {nome do banco de dados}

  > usando no modo python
  - py 

  > para conectar na instancia do banco de dados
  - connect {banco_de_dados}

  > selecionar banco de dados
  - use {banco_de_dados};

  > listar banco de dados
  - show databases;

  > listar tabelas
  - show tables;

  > deletar banco de dados
  - drop database {nome_do_banco_de_dados};

  > deletar tabela
  - drop table {nome_da_tabela};

  > descrever tabelas
  - desc {table};

  > copiar o banco de dados
  - mysqldump -u root -p {database_name} > {database_name}.sql;

  > importar banco de dados
  - mysql -u root -p {database_name} < {database_name}.sql;