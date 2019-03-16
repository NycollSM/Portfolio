(function (){
//github activity
  const div = document.getElementById('github');
  const divInfo = document.createElement('div');
  function fetchJson() {  
    fetch('https://api.github.com/users/nycollsm/events/public')
        .then (response => response.json())
        .then(data => {
          let items = data.slice(0,12);
          console.log(data);
          for (const repositories of items){
            divInfo.setAttribute('class', 'git--items');
            const repoName = document.createElement('p');
            repoName.innerText = 'Repository' + ' ' + repositories.repo.name;
            //const commit = document.createElement('p');
            //commit.innerText = 'Commit:' + ' ' +repositories.payload.commits[0].message;
            const url = document.createElement('a');
            url.setAttribute('href', repositories.repo.url);
            url.innerText = 'url';
            console.log(repositories.repo.url);
            const date = document.createElement('p');
            date.innerText = repositories.created_at;
            divInfo.appendChild(repoName);
            // divInfo.appendChild(commit);
            divInfo.appendChild(date);
            div.appendChild(divInfo);
            divInfo.appendChild(url);
            div.appendChild(divInfo);
            
      
            } 
          }
        })
    
} fetchJson();

function commitResponse(){
  fetch('https://api.github.com/users/nycollsm/events/public')
  .then(commit_response => commit_response.json())
  .then(commit_data => {
    let commits = commit_data.slice(0,12);
    console.log(commits);
    for(const commits_info in commits.payload) {
        console.log(commits_info);
  })

}commitResponse();

//form validation 
/**
 * 
  function FormValidation() {
  //\s?\D?
  const emailExpression = /"[a-z]+[@]+[a-z]"/gm;
  const nameExpression = /"[a-z]+"/gm;
  const test = document.getElementsByTagName('input');
  function prueba (){
    if (test[0] == nameExpression ){
      alert('jxbsbsj'); //test[1] == emailExpression
    }else{
      alert('asdfghjkljhgfdsasdfghj');
    }
    
  }
  const button = document.getElementById('send-form');
  button.addEventListener('click', prueba);
}FormValidation();
*/
}());