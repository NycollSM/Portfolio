(function (){
// github activity
  let container = document.getElementById('wrapper--Act'); 
  let divInfo;
  function fetchJson() {  
    fetch('https://api.github.com/users/nycollsm/events/public')
        .then(response => response.json())
          .then(data => {
            let items = data.slice(0, 4);
            for (const repository of items){
              console.log(repository.repo.url);
              const urlRepo = repository.repo.url;
              const str1 = urlRepo.substring(0, 8)
              const str2 = urlRepo.substring(12, 23)
              const str3 = urlRepo.substring(29, urlRepo.length)
              const finalStr = str1 + str2 + str3;
              console.log('here', finalStr)
              const divInfo = document.createElement('div');
              divInfo.setAttribute('class', 'git--items');
              const repoName = document.createElement('p');
              repoName.innerText = 'Repository' + ' ' + repository.repo.name;
              const url = document.createElement('a');
              url.setAttribute('href', finalStr);
              url.innerText = 'Go to repo';
              const date = document.createElement('p');
              date.innerText = repository.created_at;
              divInfo.appendChild(repoName);
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


 function hiddenHeader (){
   var top = 0;
   const header = document.getElementById('headername');
   function animationScroll (){
    const headerName = document.getElementById('name');
     let sTop = window.pageXOffset || document.documentElement.scrollTop;
     if (sTop > top){
       header.style.top="-210px";
       headerName.style.opacity = '0';
        headerName.style.transition = '1s';
     } else{
       header.style.top="0";
       headerName.style.opacity = '1';
       headerName.style.transition = '3.5s';
     }
     top = sTop;
   }
   window.addEventListener('scroll', animationScroll);
 } hiddenHeader();

}());
