function getIssues() {
  fetch('https://api.github.com/repos/jquery/jquery/commits')
  .then(resp => resp.json())
  .then(json => console.log(json));
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  console.log(`<a href="${json.html_url}"> </a>`)
   $('#results').append(link)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  
  
 
 const token = '81c96bf385beafd7530f3b3cca18fd3c30e4fc57';
 
  fetch('https://api.github.com/user/repos', {
    headers: {
      
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
