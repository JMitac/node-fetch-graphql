const fs = require('fs');
const fetch = require('node-fetch');
const { promisify } = require('util');

const { firstName } = require('./api-tools');
const readFileAsync = promisify(fs.readFile);
const statFileAsync = promisify(fs.stat);

const fileExist = (filePath) => {
  console.log('filePath : ',filePath);
  console.log('import api tools : ',firstName);
};

const getAll = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  if (res.status !== 200)
    //lanza un error
    throw Error('url incorrect !!');

  return json;
};

const readFileDeploy = async (file) => {
  const res = await readFileAsync('./data.json');
  console.log(res)
};

/*const statFileDeploy = (file) => {
  statFileAsync(file)
    .then((stats) => {
      console.log('***** stats : ',stats);
      console.log('==== isDirectory : ',stats.isDirectory())
      console.log('==== isFile : ',stats.isFile())
    })
    .catch((e) => console.log('error : ',e) );
};*/

const statFileDeploy = async (file) => {
  try {
    const stat = await statFileAsync(file);
    return {
      'file' : stat.isFile(),
      'directory' : stat.isDirectory()
    }
  }catch (e) {
    return false
  }
};


exports.fileExist = fileExist;
exports.getAll = getAll;
exports.readFileDeploy = readFileDeploy;
exports.statFileDeploy = statFileDeploy;