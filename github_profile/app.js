let APIURL = "https://api.github.com/users/";
let container = document.querySelector("#container");





let getUser = async(username) =>{
    
    let response = await fetch(APIURL + username)
    let data = await response.json();
    
    let card = `
    <div class="card">
    <div class="image">
    <img src="${data.avatar_url}" alt="">
</div>
<div class="user-info">
    <h2>${data.name}</h2>
    <p>${data.bio}</p>

    <ul>
        <li>${data.followers}<strong> &nbsp; Followers</strong></li>
        <li>${data.following}<strong> &nbsp; Following</strong></li>
        <li>${data.public_repos}<strong> &nbsp; Repos</strong></li>
    </ul>

    <div id="repos">
    
    </div>
</div>
</div>
    `
    container.innerHTML = card;
    getRepos(username)
}





let getRepos = async(username) =>{
    let repos = document.querySelector("#repos");
    let response = await fetch(APIURL + username + "/repos");
    let data = await response.json();
    // console.log(data[0]);
    data.forEach(
        (item)=>{
            // console.log(item.html_url)
            let elem = document.createElement("a");
            elem.classList.add("repo");
            elem.href = item.html_url;
            elem.innerText = item.name;
            elem.target = "_blank"
            repos.appendChild(elem);
            
        }
    )


}
  
let formSubmit = () =>{
    let user = document.querySelector("#user");
    if(user.value != ""){
        getUser(user.value);
    }
    return false;
}


/* <a href="#" class="repo" target="_blank">Repo 1</a>
<a href="#" class="repo" target="_blank">Repo 2</a>
<a href="#" class="repo" target="_blank">Repo 3</a> */