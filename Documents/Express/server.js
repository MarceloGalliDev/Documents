const express = require('express');

const app = express();

app.get('/:id/:user', (request, response) => {
    response.send(`
        Mensagem ID: ${request.params.id},
        Mensagem nome: ${request.params.user},
    `);
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));