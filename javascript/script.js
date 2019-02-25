//github activity
function fetchJson() {
    const div = document.getElementById('activityGithub');
    fetch('https://api.github.com/users/NycollSM/events/public')
      .then(res => res.json())
      .then(data => {
      //console.log(data);
      for ( const repositories of data){
        const divInfo = document.createElement('div');
        divInfo.setAttribute('class', 'git_info');
        const repoName = document.createElement("p");
        repoName.innerText = 'Repository:' + ' ' + repositories.repo.name;
        const commit = document.createElement('p');
        commit.innerText = 'Commit:' + ' ' +repositories.payload.commits[0].message;
        const url = document.createElement('a');
        url.setAttribute('href', repositories.repo.url);
        url.innerText = 'url';
      // console.log(repositories.repo.url);
        const date = document.createElement('p');
        date.innerText = repositories.created_at;
        divInfo.appendChild(repoName);
        divInfo.appendChild(commit);
        divInfo.appendChild(date);
        div.appendChild(divInfo);
        divInfo.appendChild(url);
      } 
    });
} fetchJson();

//form validation 

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
