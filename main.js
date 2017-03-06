let fetch = require('node-fetch');

let promise = fetch(
  'https://api.github.com/users/carlysej89',
  {
    method: 'GET',
    headers: {
      Authorization: 'token ' + process.argv[2],
    },
    body: '...'
  }
);
