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

>Clonando repositório
    - copy link da página
    - git clone "url"
    - para permitir que um outro usuário faça commits no repositório, é necessário autorização dentro do settings>manage access do Github

>.gitignore
    - para não commitar arquivos que não deveram subir ao repositório
    - arquivos de ambientes
    - arquivos de configurações
    - arquivos da pasta node_modules

>Criar atalhos personalizados
    - usamos alias para gerar um atalho, usamos extensão .dog
        - git config alias.dog "log --all --decorate --oneline --graph"
        - git config --global alias.dog "log --all --decorate --oneline --graph"
    - para remover um alias.dog
        - git config --unset alias.dog
        - git config --global --unset alias.dog
    - listando atalhos personalizados
        - git config -l | grep âlias\. | cut -c 7- | sort
        - atalho personalizado da listagem
            - git config alias.alias "! git config -l | grep âlias\. | cut -c 7- | sort"

>Stash
    - usamos stash para salvar alterações realizada sem fazer commits
        - git stash
    - para colocar nome no stash
        - git stash push -m "nome do stash"
    - listando stash
        - git stash list
    - recuperando modificações mais recentes
        - git stash apply
    - recuperando modificações por id
        - git stash apply stash@{numero do stash}
    - removendo stash
        - git stash drop stash@{numero do stash}

>Cherry Pick
    - para juntarmos um branch para um merge, mas somente de uma parte do código, separados por commits, usamos o cherry pick
        - git cherry-pick "id do commit"



>>Comandos GIT
>comandos locais
    - git --version = para ver a versão do GIT instalada
    - git init = para criar um repositório
    - git status = para verificar o status do nosso repositório, branch, commits e etc
    - git add "nome do arquivo" = adicionado o arquivo no rastreamento do GIT
        - se usarmos um . em nome do arquivo, ele salva todos os arquivos
    - git config --global user.name "nome" = logando user
    - git config --global user.email "email" = logando email user
    - git commit -m "mensagem" = para comitar e fazer a inserção do arquivo ao GIT
    - git log = todas execuções realizada no GIT
    - git log -p "arquivos" = para ver log apenas de um grupo de arquivos
    - git log -p --autor=nome-autor = para ver log de um autor
    - git log --after="MMM DD YYYY" ou --before="MMM DD YYYY" = para ver log entre datas
    - git clone "url" = para clonar um repositório
    - rm -rf .git = para apagar um repositório, tem que ser executado dentro do diretório
    - git checkout = para verificar arquivos não monitorados
    - git clean -df = apaga novos arquivos que não subiram de Stages
    - git reset = para desfazer um git add
    - git commit --amend = para reescrever um commit
    - git branch = lista todos os branch em um repositório
    - git branch -a = lista todos os branch em um repositório remoto
    - git checkout "nome da branch" = para mudar a brench
    - git checkout -b "nome da branch" = cria uma nova brench
    - git branch -d "nome da branch" = apaga a brench
    - git branch -m "renomeando brench" = para renomear uma branch
    - git branch -m "nome atual" "novo nome" = para renomear uma branch estando em outra branch
    - git checkout --orphan "nome da branch" = para criar uma brench orfã
    - git log --all --decorate --oneline --graph = para exibir historicos de branch

>comandos remotos
    - sempre usaremos git remote para comandos remotos
    - git clone "url" "pasta desejada"
    - git remote add origin "url"
        - origin = nome do nosso repositório remoto, como um atalho, para evitar escrita da url
    - git remote -v = para ver o endereço do repositório que estamos enviando os códigos
    - git remote rm origin = remove a conexão entre repositório local e remoto
    - git remote rename "nome atual" "novo nome" = para renomear um repositório
    - git branch -a = listar branch do repositório remoto
    - git push -u origin "nome branch" = criando branch no repositório remoto
    - git push origin -d "nome branch" = para apagar uma branch
    - git branch -m "nome branch"  "novo nome" = renomeando uma branch
        - git push origin :"nome atual" "novo nome" = necessário para sobre-escrever a branch no repositório remoto
        - git push origin -u "novo nome da branch" = para ter conexão da nova branch
    - git blame "nome do arquivo" = para ver o usuário que alterou determinada linha do arquivo
    - git blame -w -L 1,12 "nome do arquivo" = para simplicar a análise (se adicionar o -e, será exibido o email)



