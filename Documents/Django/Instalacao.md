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


# Django Practicing
> Praticando Django
- se atentar ao uso de namespace para as pastas statics

> atualizando pacotes
- pip install --upgrade pip
- python3 -m pip install pip setuptools wheel --upgrade-

> criando par de keys ssh
- ssh-keygen

> Comandos terminal
- pwd = para ver o caminho que você está
- ls = ver arquivos na pasta
- cd = navegar nas pastas

> Funcionamento Template no Django
- os dados listados nas views é os que são enviados aos templates para renderização, ou seja, estamos passando na view a chave para que o template busque as informações de acordo com essa chave.
- os dados listados nas templates pela views são os que estão listados no models

> Funcionamento de urls no Django
- acessamos as urls atraves dos nomes dados na urls.py
- uso de urls dinamicos
    path('recipes/<int:id>', views.recipe) = aqui no id dinamico podemos usar outros tipificadores como str, entre outros.

- dando nome unico
    path('', views.home, name='recipes-home')

> Details Django
- verificar a documentação do Django
- uso de pipe ('|') dentro do template significa o uso de filtros

- data = 
    {{recipe.created_at|date:"d/m/Y"}} as {{recipe.created_at|date:"H:i"}}

- url = 
    - simples
    {% url '(nome unico dado lá na url)' %}
    {% url 'recipes-home' %}

    - com parâmetros
    {% url '(nome unico)' (id ou dado desejado a ser recuperado) %}
    {% url 'recipes-recipe' recipe.id %}

- loop if = 
    {% if (condição) %}
    {% if is_detail_page is not True %}
    {% if is_detail_page True %}
    {% if is_detail_page is None %}
    {% if is_detail_page == 1 %}
        exemplo
    {% elif (condição) %}
        exemplo
    {% else %}
        exmplo
    {% endif %}