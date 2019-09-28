const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/usuarios', (req, resp) => {
  console.log(req.body);
  resp.send('<h2>Parabéns, usuário incluído</h2>');
});

app.get('/usuarios', (req, resp) => {
  console.log(req.query);
  resp.send('<h2>Parabéns, usuário incluído</h2>');
});

app.get('/usuarios/:id', (req, resp) => {
  console.log(req.params.id);
  console.log(req.body)
  resp.send('<h2>Parabéns, usuário alterado</h2>');
});

app.listen(3003);

console.log('Listening 3003 port...')
