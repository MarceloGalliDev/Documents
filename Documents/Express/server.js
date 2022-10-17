const express = require('express');

const app = express();
app.use(express.json());//no caso de body params

//GET
//route params
app.get('/mensage/:id/:user', (request, response) => {
    response.send(`
        Mensagem ID: ${request.params.id},
        Mensagem nome: ${request.params.user},
    `);
})

//query params
app.get('/mensage', (request, response) => {
    const { page, limit } = request.query;

    response.send(`Página: ${page} - Limite: ${limit}`);
})

//POST
//route params
app.post('/mensage/:id/:user', (request, response) => {
    response.send(`
        Mensagem ID: ${request.params.id},
        Mensagem nome: ${request.params.user},
    `);
})

//query params
app.post('/mensage', (request, response) => {
    const { page, limit } = request.query;

    response.send(`Página: ${page} - Limite: ${limit}`);
})

//body params
app.post('/', (request, response) => {
    const { name, email, password } = request.body;

    response.send(`
        Usuário: ${name},
        E-Mail: ${email},
        Senha: ${password},
    `);

    response.json({
        name,
        email,
        password,
    })
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

