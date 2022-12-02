- Introdução
    - Inteiro é tido tudo em minusculo seguindo o snake case
    - String é toda em maiuscula seguindo o snake case

    - Operadores lógicos
        - not, usado para negar um resultado boleano
            print(not(10 > 10))

        - or, um ou outro, um somente precisa ser verdadeiro
            print(10 == 10) or (10 > 20)
        
        - and, um e o outro, todos tem que ser verdadeiros
            print(10 == 10) and (10 > 20)
    
    - Operadores de condicionais
        - if, atentar-se a identação
            idade = 20
            if idade < 18:
                print("voce e crianca")
            elif idade >= 18 and idade <=60: (18 <= idade <= 60)
                print("voce e adulto")
            else:
                print("voce nao e adulto")

    - Operadores de repetição
        - for
            for i in range(0, 10, 2): aqui estamo indicando inicio, final, e de quantos em quantos é a contagem, range cria uma lista
                print(i)
            else: serve para executar um código ao final da lista
                print("finalizado")

        - while
            teste = 0
            while teste <= 10:
                print("codigo sendo executado")
                teste += 1
            else:
                print("finalizado")
    
    - Funções
        - def (seguido do nome)():
            def calcular_idade():
                idade = 20
                if idade < 18:
                    print("voce e crianca")
                elif idade >= 18 and idade <=60: (18 <= idade <= 60)
                    print("voce e adulto")
                else:
                    print("voce nao e adulto")

            calcular_idade()

        - def, usando paramêtros
            def calcular_idade(idade):
                if idade < 18:
                    return "voce e crianca"
                elif idade >= 18 and idade <=60: (18 <= idade <= 60)
                    return "voce e adulto"
                else:
                    return "voce nao e adulto"

            print(calcular_idade(18))
            calcular_idade(25)
            calcular_idade(idade=30)
    
    - Orientado a objeto
        - classe possui atributos e métodos ou caracteristicas e ações
        - é uma representação do mundo real
        - objeto é a projeção dessa classe 
            - eu tenho um bixo que chama Fred que é da classe gato, seu atributo é pelos claros e olhos azuis, e seus métodos são miar e comer
        
        - Visibilidade e Encapsulamento
            - Visibilidade
                - todo atributo privado antes do seu nome deverá ter dois underline (__qtde_bola),
                    so podde ser acessado ou modificado dentro da própria classe

                - todo atributo protected antes do seu nome deverá ter um underline (_qtde_bola),
                    podem ser chamado, acessado e modificado dentro da própria classe e também dentro das classe que herdam a classe onde o atributo foi declarado, pórem não pode ser acessado via objeto                

            - Encapsulamento(setters e propertys)
                - adicionamos o @ para indicar a property
                - adicionamos o @setters para indicar-mos os setter

        - Interface
            - Similar ao typeScript
        
        - Composição
            - Criar objetos dentro de outros objetos
            - Criar uma instancia no qual é dependente de outra instância dono
            