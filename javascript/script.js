const div = document.getElementById('activityGithub');

function fetchJson() {
    fetch('https://api.github.com/users/NycollSM/events/public')
      .then(res => res.json())
      .then(data => {
      console.log(data);
      
      for (const repositories of data){ 
        const divInfo = document.createElement('div');
        divInfo.setAttribute('class', 'git_info');
        const repoName = document.createElement("p");
        repoName.innerText = 'Repository:' + ' ' + repositories.repo.name;
        const commit = document.createElement('p');
        commit.innerText = 'Commit:' + ' ' +repositories.payload.commits[0].message;
        const url = document.createElement('a');
        url.setAttribute('href', repositories.repo.url);
        url.innerText = 'url';
        console.log(repositories.repo.url);
        const date = document.createElement('p');
        date.innerText = repositories.created_at;
        divInfo.appendChild(repoName);
        divInfo.appendChild(commit);
        divInfo.appendChild(date);
        divInfo.appendChild(url);
        div.appendChild(divInfo);
      } 
    });
} fetchJson();