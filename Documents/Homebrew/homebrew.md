1. Install to HOMEBREW for macOS
    > colar no bash do macOS
    - /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    - echo 'eval $(/opt/homebrew/bin/brew shellenv)' >> /Users/$USER/.zprofile
    - eval $(/opt/homebrew/bin/brew shellenv)

    > se na instalação não instalar o xcode
    - xcode-select --install


2. Comandos Homebrew
    - brew search {nome do pacote}
    - brew install --cask {nome do pacote}
    - brew help

3. Terminal iterm2
    - brew install iterm2

4. Instalando Oh My Z.hs e plugins do terminal
    > clonar e adicionar no plugin ~/.zshrc
    - https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md
    - https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md
    - https://github.com/powerline/fonts
    
    > adicionar no ZSH_THEME
    - https://github.com/spaceship-prompt/spaceship-prompt

    > instalar fonts
    - cd fonts
    - ./install.hs

5. Colocando Path do macOS
> inserir o path do python no final do arquivo nano ~./zshrc