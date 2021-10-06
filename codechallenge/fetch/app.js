async function getUsers() {
    // Code here
    const response = await fetch('https://randomuser.me/api/?results=2')
        .then(resp => resp.json())
        .then(data => data.results)
    return response
}

getUsers()
console.log(typeof getUsers())
async function renderUsers() {
    // Code here
    let dataUsers = await getUsers()
    let html = ''
    Array.from(dataUsers).forEach(user => {
        let htmlRender =
        `<div class="user">
            <img src = "${user.picture.medium}">
            <h2>${user.name.first} ${user.name.last}</h2>
            <div class="email">
                <a href="email:${user.email}">${user.email}</a>
            </div>
        </div>`;
        html += htmlRender;
    })
    
    let container = document.querySelector('.container');
    container.innerHTML = html;
}
  
renderUsers();