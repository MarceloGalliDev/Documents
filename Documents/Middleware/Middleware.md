>> Middleware
- O que é Middleware?
    - É uma função que consegue interceptar a requisição
    - O middleware tem acesso ao caminho da rota, ou acesso ao objeto de solicitação, e resposta
    - A próxima função do middleware é comumente chamada por uma variável next.
    - Exemplo, verificação se o usuário que esta acessando a rota é um admin
    - Ele fica entre o req e o res
    