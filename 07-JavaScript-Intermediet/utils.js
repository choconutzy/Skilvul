export function loggedInHandler(
    uname,
    elDivUsername,
    elFormUsername,
    elUsername
  ) {
    elDivUsername.classList.remove("d-none");
    elFormUsername.classList.add("d-none");
    elUsername.innerHTML = uname;
  }
  
  export function drawUserCard(
    elListUser,
    githubUsers,
    username,
    profile
  ) {
    // check if username exist in session storage
    // read: check if user logged in already
    if (username !== null) {
      githubUsers.forEach((user) => {
        // element/card creation for each users
        const elCol = document.createElement("div");
        elCol.classList.add("col-xs-12", "col-sm-6", "col-md-4", "col-lg-3");
        const elCard = document.createElement("div");
        elCard.classList.add("card");
        const elCardImg = document.createElement("div");
        elCard.classList.add("card-img-top");
        elCard.setAttribute("src", user.avatar_url);
        const elCardBody = document.createElement("div");
        elCardBody.classList.add("card-body");
        const elCardTitle = document.createElement("div");
        elCardTitle.classList.add("card-title");
        elCardTitle.innerHTML = user.login;
        const elCardButton = document.createElement("button");
  
        // handle button state
        const followings = JSON.parse(profile);
        const alreadyFollow = followings?.find((u) => u.id === user.id);
        if (alreadyFollow !== undefined) {
          elCardButton.classList.add("follow-button", "btn", "btn-success", "w-100");
          elCardButton.setAttribute("type", "button");
          elCardButton.setAttribute("data-id", user.id)
          elCardButton.innerHTML = "Unfollow";
        } else {
          elCardButton.classList.add("follow-button", "btn", "btn-primary", "w-100");
          elCardButton.setAttribute("type", "button");
          elCardButton.setAttribute("data-id", user.id)
          elCardButton.innerHTML = "Follow";
        }
  
        // element attachment
        elCardBody.appendChild(elCardTitle);
        elCardBody.appendChild(elCardButton);
        elCard.appendChild(elCardBody);
        elCard.appendChild(elCardImg);
        elCol.appendChild(elCard);
        elListUser.appendChild(elCol);
      });
    }
  }

export function refreshPage(){
  window.document.querySelector("#form-username").reload();
} 