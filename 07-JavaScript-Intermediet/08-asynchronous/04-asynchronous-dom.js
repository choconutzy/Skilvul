const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");


const GitHubAPI = async() => {
  try{
    let resp = await fetch('https://api.github.com/users')
    const data = await resp.json()
    return data
  } catch(err){
    console.log(err)
  }
} 
// GitHubAPI().then(resp => console.log(resp))
const getGitHubUser = async (username) => {
  try{
    if(username===""){
      return null
    } 
    else{
      const users = await GitHubAPI()
      const user = await users.find(el => el.login===username)
      if(user===undefined){
        return 'not found'
      } else{
        return user
      }
    }
  } catch(err){
    return err
  }
  
}
elFormUsername.onsubmit = async (e) => {
  e.preventDefault();
  const username = elFormUsername.firstElementChild.value;
  let getUser = await getGitHubUser(username)
  elCard.classList.remove("d-none")
  if(getUser ===`not found` || getUser===null){
    elCard.textContent = "Not Found"
  }else{
    elCardImg.setAttribute("src", getUser.avatar_url)
    elCardTitle.innerHTML = getUser.login
  }
  
};
