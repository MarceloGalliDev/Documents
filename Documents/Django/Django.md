>> BACK-END > Python > Django

    - Para python, framework voltada para desenvolvimento web, ajuda a resolver problemas com desenvolvimento web
    - criando o projeto
        - pip install django
        - django-admin startproject myteacher .
        - python manage.py runserver  
    - asgi = é para aplicação assíncrona
    - wsgi = é para aplicação síncrona
    - __init__ = todo arquivo python que começa com __ são chamados de arquivos dander, é para indicar que a pasta tem arquivos importáveis
    - admin.py = para controle de admin do django
    - apps.py = arquivo de configuração do app
    - models.py =  arquivo onde vai os modelos da aplicação, representa as tabelas no banco de dados
    - testes.py = relativo aos testes unitários
    - views.py = todo código da camada de view, regra do negócio
    - migrations = é a atualização do app

    - comunicação das rotas (MTV)
        > cliente faz a requisição GET para /
        > URL Dispatcher envia para o VIEW
        > VIEW faz a busca nos Models que retorna com a regra do negócio
        > VIEW então busca o Template e retorna para View
        > Completado a sequência retorna para o Cliente com o conteúdo HTML

    - comunicação das rotas entre Front e Back
        > App Frontend faz a requisição GET
        > API onde encontra-se o Backend retor com um STATUS CODE, 200 que é Ok se ocorrer corretamente

    - Migration
        - é a forma de versionar o banco de dados
            - python manage.py makemigrations = cria o migration
            - python manage.py migrate = inclui no banco de dados
    
    - SQLite3
        - no SQLite3 temos uma sequencia de tabelas onde o primeiro nome é o nome da app e o segundo é a tabela
        - para salvar dados no banco usamos o comando python manage.py shell
            - incluimos a importação = from teacher.models import Professor
            - incluimos uma instância = professor = Professor(nome="Marcelo Galli", valor_hora=95.80, descricao="professor de programação", foto="https://github.com/MarceloGalliDev.png")
            - podemos utilizar professor.name para verificar se deu certo
            - usamos professor.save() para salvar no banco de dados
    
    - CORS
        - Bloqueio de segurança feito pelo navegador, para requisições de servidores diferentes.