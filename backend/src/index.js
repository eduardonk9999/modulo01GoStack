const { response } = require('express');
const express = require('express');

const app = express();
app.use(express.json());




app.get('/projects', (request, response) => {
  const { title } = request.query;

  console.log(title);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.post('/projects', (request, response) => {
  const body = request.body;
  console.log(body);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ])
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  console.log(id);

  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ])
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 1',
  ])
});


app.listen(3333, () => {
  console.log('🚀 back-end started!');
});