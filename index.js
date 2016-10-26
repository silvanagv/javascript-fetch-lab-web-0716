function getIssues() {

  fetch('/javascript-fetch-lab\/issues', {
    method: 'get'

  }).then(res => console.log(res));
}

function showIssues(json) {
}

function createIssue() {
  const token = 'YOUR_TOKEN_HERE';
  const postData = {
    body: 'test body'
  };

  fetch('/javascript-fetch-lab\/issues', {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  const token = 'YOUR_TOKEN_HERE';


  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab', {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => console.log(res));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
