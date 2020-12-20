const { response } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ messsage: 'Hello World 2'});
});


app.listen(3333, () => {
  console.log('🚀 back-end started!');
});