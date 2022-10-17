class AppError {
    message;
    statusCode;

    constructor(message, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;

//constructor é carregado automaticamente quando uma classe é instanciada
//this = estou pegando o parametro recebido pelo constructor e repassando para o contexto global