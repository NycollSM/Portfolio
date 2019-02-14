const div = document.getElementById('activityGithub');

function fetchJson() {
    fetch('https://api.github.com/users/NycollSM/events/public')
      .then(res => res.json())
      .then(data => {
      console.log(data);
      for (const repositories of data){  
        const repoName = document.createElement("p");
        repoName.innerText = repositories.repo.name;
        console.log(repositories.repo.name);
        const commit = document.createElement('p');
        commit.innerText = repositories.payload.commits[0].message;
        console.log(repositories.payload.commits[0].message);
        const url = document.createElement('a');
        url.setAttribute('href', repositories.repo.url);
        url.innerText = 'url';
        console.log(repositories.repo.url);
        const date = document.createElement('p');
        date.innerText = repositories.created_at;
        console.log(repositories.created_at); 
        div.appendChild(repoName);
        div.appendChild(commit);
        div.appendChild(url);
        div.appendChild(date);
      } 
    });
} fetchJson();