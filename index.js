const express = require('express');

const app = express();
const routesUser = require('./routes/routesUser');
const routesLogin = require('./routes/routesLogin');

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', routesUser);

app.use('/login', routesLogin);