const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
  res.send('Olá Mundo!');
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

app.get('/destinos', (req, res) => {
  const destinos = [
    'Foz do Iguaçu',
    'Fortaleza',
    'Rio de Janeiro',
    'Fernando de Noronha',
    'Buenos Aires',
    'Recife',
    'Porto Seguro',
    'Asunción',
  ];
  res.json(destinos);
});

app.get('/destinos', (req, res) => {
  console.log('Requisição GET recebida em /destinos');
});
