/// Nomor 3
// mengambil profile seorang user yang telah terdaftar pada platform GitHub
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
      const user = await users.find(el=> el.login===username)
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
const printGitHubUser = async () => {
  const mojombo = await getGitHubUser("mojombo");
  const orange = await getGitHubUser("");
  const rudiTabuti = await getGitHubUser("rudi.tabuti");

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
}

printGitHubUser();


