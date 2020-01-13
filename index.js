const express = require('express');

const tools = require('./service/api-tools');
const { statFileDeploy } = require('./service/createFile');

const app = express();

const url = 'https://jsonplaceholder.typicode.com/todos/1';
//const url = 'https://jsonplaceholder.typicode.com/todos';

/*fs.stat('data.json', (err, stat) => {
  if(err == null) {
    console.log('file exists');
  } else if (err.code === 'ENOENT') {
    console.log('err : ',err);
    console.log('file does not exist')
  } else {
    console.log('some other error : ',err.code);
  }
});*/

//console.log('tools firstName: ',tools.firstName);
//console.log('tools msgDeploy: ',tools.msgDeploy('queso !!!'));

app.get('*', (req, res) => {
  res.send('Probando Express');

  tools.getSpotlight(url)
    .then((json) => console.log(json))
    .catch((e) => console.log(e));

  statFileDeploy('./newfile_2.txt')
    .then((res) => console.log(res))
    .catch((e) => console.log(e));

});

app.listen('5000', () => {
  console.log('http://localhost:5000/')
});