>>Comandos GIT
>Instalação macOS
    - brew install git
    - git --version = para verificar a versão

>Estados de um arquivo no GIT
    - modificado = quando o estado do arquivo teve alguma alteração
    - preparado = quando ele é adicionado usando o comando git add
    - consolidado = após modificados e preparados usando o comando git commit, salvando a alteração do arquivo

>Repositório
    - local = armazenamento localmente
    - remoto = armazenamento em nuvem, github é um exemplo
    - criando respositório
        - git init

>Configurando USER
    - git config --global user.name "nome"
    - git config --global user.email "email"

>Commit
    - git commit -m "mensagem"
    - git revert "id do commit"

>Criando SSH e salvando no GitHub
    - ssh-keygen -t rsa -b 4096 -C "email"
        - próximo passo é o caminho do .ssh-keygen
        - frase sercreta
    - login no site do github
        - github.com/settings/keys
        - copiando e colando o SSH
            - pbcopy < ~/.ssh/id_rsa.pub
    - teste de conexão
        - ssh -T git@github.com
            - frase secreta

>Subindo projeto para GitHub
    - git remote add origin "link do repositório"
    - git push -u origin main = enviando os arquivos
    - git pull origin main = pegando arquivos alterados no repositório

>Utilizando Branch
    - git branch "nome" = criando a branch
    - git switch "nome" = iniciando dentro da branch
    - git push -u origin "branch" = fazendo push na branch especifica
    - git pull origin "branch" = fazendo pull da branch
    - merge é feito pela página do GitHub
        - análise do merge pelo pull request entre duas branch
        - análise dos conflitos
        


>Comandos GIT
    - git --version = para ver a versão do GIT instalada
    - git init = para criar um repositório
    - git status = para verificar o status do nosso repositório, branch, commits e etc
    - git add "nome do arquivo" = adicionado o arquivo no rastreamento do GIT
        - se usarmos um . em nome do arquivo, ele salva todos os arquivos
    - git config --global user.name "nome" = logando user
    - git config --global user.email "email" = logando email user
    - git commit -m "mensagem" = para comitar e fazer a inserção do arquivo ao GIT
    - git log = todas execuções realizada no GIT


