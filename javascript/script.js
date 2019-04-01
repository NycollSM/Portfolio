(function (){
//github activity
  let container = document.getElementById('github'); 
  let divInfo;
  function fetchJson() {  
    fetch('https://api.github.com/users/nycollsm/events/public')
        .then (response => response.json())
          .then(data => {
            let items = data.slice(0,12);
            for (const repositories of items){
              divInfo = document.createElement('div');
              divInfo.setAttribute('class', 'git--items');
              const repoName = document.createElement('p');
              repoName.innerText = 'Repository' + ' ' + repositories.repo.name;
              const url = document.createElement('a');
              url.setAttribute('href', repositories.repo.url.html_url);
              url.innerText = 'url';
              const date = document.createElement('p');
              date.innerText = repositories.created_at;
              divInfo.appendChild(repoName);
              // const commit = repositories.payload.commits[0].message;
              // console.log(commit);
              divInfo.appendChild(date);
             // div.appendChild(divInfo);
              divInfo.appendChild(url);
              container.appendChild(divInfo);
            }
        })
        .catch (function() {
          console.log("error");
          const errorTxt = document.createElement('p');
          errorTxt.innerText = "This section is not workin but you can see my activity in my" + ' ';
          const link = document.createElement('a');
          link.innerText = 'Repository';
          link.setAttribute('href', 'https://github.com/NycollSM');
          errorTxt.appendChild(link);
          container.appendChild(errorTxt);
        })
    
} fetchJson();

function commitResponse(){
  fetch('https://api.github.com/users/nycollsm/events/public')
  .then(commit_response => commit_response.json())
  .then(commit_data => {
    let reposCommits = commit_data.slice(0,12);
    //console.log(commits);
    for(const commits_info of reposCommits) {
        const newCommit = commits_info.payload.commits;
        for (const commitInfo in newCommit){
          for (messageCommit in commitInfo){
            console.log(messageCommit.message);
          }
        }
    }
  })

}commitResponse();


}());


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