# 1. Passo
> pip install Django
  - tem que ser em maiúsculo o Django, pegando a última versão

> pip install pytz
  - por alguma razão não está vindo mais com o Django a instalação do pytz

> pip install pymysql
  - instalar somente se necessário
  - incluir no arquivo settings.py
  - import pymysql
  - pymysql.install_as_MySQLdb()

> pip install mysqlclient    
  - tem que atualizar o setuptools e wheel do bash antes

# 2. Passo
> django-admin startproject {nome}
> cd {nome}
> python manage.py startapp {nome da app}
> pip install pymysql
  - incluir no arquivo settings.py
    - import pymysql
    - pymysql.install_as_MySQLdb()
> pip install python-decouple
  - para manusear variáveis de ambiente
> pip install unipath 
  - para gerenciar o path
> pip install cryptography
  - para adicionar a criptografia

# 3. Passo
> Incluir nas variáveis de ambiente do windows o mysql
  - painel de controle > sistema > configurações avançadas do windows > variáveis de ambiente
    - localizar a pasta bin dentro do mysql
    - e no path do windows incluir %{NOME_VARIAVEL}%
