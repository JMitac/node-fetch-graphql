const fetch = require('node-fetch');

module.exports = {
  firstName: 'James',
  getSpotlight: async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    if (res.status !== 200)
    //lanza un error
      throw Error('url incorrect !!');

    return json;
  },
  msgDeploy: function (msg) {
    console.log(msg);
  }
};