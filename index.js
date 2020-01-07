const express = require('express');
const fetch = require('node-fetch');
const tools = require('./service/api-tools');

const url = 'https://jsonplaceholder.typicode.com/todos/1';
const promise = fetch(url);
const data = [];

promise
  .then(response => response.json())
  .then(json => data.push(json))
  .catch(err => console.error(err));

/*async function helloWorld(){
  return "hello world - ggwp"
}
let hello = helloWorld()
console.log(hello);*/

console.log('tools firstName: ',tools.firstName);
//console.log('tools msgDeploy: ',tools.msgDeploy('queso !!!'));

const app = express();

app.get('*', (req, res) => {
  res.send('Probando Express');
  console.log('data ==> : ',data);
});

app.listen('5000', () => {
  console.log('http://localhost:5000/')
});