(function (){
//github activity
function fetchJson() {
    const div = document.getElementById('github');
    fetch('https://api.github.com/users/nycollsm/events/public')
        .then (response => response.json())
        .then(data => {
          const items = data.slice(0,12);
          console.log(data);
          for (const repositories of items){
            const divInfo = document.createElement('div');
            divInfo.setAttribute('class', 'git--items');
            const repoName = document.createElement('p');
            repoName.innerText = 'Repository' + ' ' + repositories.repo.name;
           // const commit = document.createElement('p');
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
            for(commit in repositories.payload) {
              // /console.log(commit);
              for ( e of commit){
                commit.innerText = e;
                console.log(commit.commits);
              }
      
            } 
          }
        })
    
} fetchJson();

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