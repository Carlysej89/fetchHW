let fetch = require('node-fetch');
let userName = process.argv[2];
let promise = fetch(
  'https://api.github.com/users/' + userName,
  {
    method: 'GET',
    headers: {
      Authorization: 'token ' + process.argv[3],
    }

  }
);


promise.then( function handleResponse(responseObj) {
    console.log(responseObj.status);
    if (responseObj.status > 199 && responseObj.status < 300) {

      responseObj.json().then( function printData(userData) {
        console.log( userData.name,  userData.location);
      });
    } else {
      console.log('There was a problem', responseObj.status);
    }

});

//this is for repos
let promise2 = fetch(
  'https://api.github.com/users/' + userName + '/repos',
  {
    method: 'GET',
    headers: {
      Authorization: 'token ' + process.argv[3],
    }
  }
);


promise2.then( function handleResponse(responseObj) {
    console.log(responseObj.status);

    if(responseObj.status > 199 && responseObj.status < 300) {
//this is for the star count
      responseObj.json().then( function printData(repos){
        repos.forEach(function printRepo(repo) {
        //  console.log(repo.stargazers_count);
        if(each.stargazers_count > mostStars){
          mostStars =each.stargazers_count;
          repo = each.name;
          owner = each.login;
        }
        console.log('repo with most stars', mostStars, 'repo:', repo, 'owner:', owner);
        });
      });
    }
    let contributorPromise = fetch(
           'https://api.github.com/repos/' +  '/contributors',
           {
             method: 'GET',
             headers: {
               Authorization: 'token ' + process.argv[3]
             }
           }
         );

         contributorPromise.then(function handleResponse(response) {
           if (response.status > 199 && response.status < 300) {
             response.json().then(function printContributorData(contributorData) {
               console.log(contributorData);
             });
           } else {
             console.log('There was a problem', response.status);
           }
         });
});
