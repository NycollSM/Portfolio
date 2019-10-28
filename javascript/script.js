(function (){
//github activity
  let container = document.getElementById('wrapper--Act'); 
  let divInfo;
  function fetchJson() {  
    fetch('https://api.github.com/users/nycollsm/events/public')
        .then (response => response.json())
          .then(data => {
            let items = data.slice(0, 4);
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


  function hearderAnimation (){
    const headerContainer = document.getElementById('headername');
    const headerName = document.getElementById('name');
    window.addEventListener("scroll", function (event) {
      var scroll = this.pageYOffset ;
      if (scroll !== 0){
        headerName.style.opacity = '0';
        headerName.style.transition = '1s';
      } else {
        headerName.style.opacity = '1';
        headerName.style.transition = '1s';
        console.log(scroll);
      }
    });
  }  
 document.addEventListener('scroll', hearderAnimation);
  
    



}());
