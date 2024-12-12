let friendsTotal = 0;

const renderFriendList = () => {
  let friendRequestHTML = '';

  if (friends.length > 0) {
    friendRequestHTML = '<p class="friend-request-dropdown-header">Friend Requests</p>';
  }

  friends.forEach(friend => {
    const {profile, name, mutual} = friend;
    
    let mutualHTML = '';
    if (mutual) {
      mutualHTML = `        
        <p class="friend-request-dropdown-mutual">
          ${mutual} mutual friends
        </p>
      `;
    }

    const html = `
        <div class="friend-request-dropdown-profile">
          <img class="friend-request-dropdown-icon" src=${profile}>
          <div class="friend-request-dropdown-user">
            <p class="friend-request-dropdown-username">
            ${name}
            </p>
            ${mutualHTML}
          </div>
          <button class="friend-request-dropdown-delete-button">
            Delete
            </button>
          <button class="friend-request-dropdown-confirm-button">
            Confirm
          </button>
        </div>
      `;

    friendRequestHTML += html;
  });  

  document.querySelector('.friend-request-dropdown')
    .innerHTML = friendRequestHTML; 

  document.querySelectorAll('.friend-request-dropdown-delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        friends.splice(index, 1);
        renderFriendList();
      })
    });

  document.querySelectorAll('.friend-request-dropdown-confirm-button')
    .forEach((confirmButton, index) => {
      confirmButton.addEventListener('click', () => {
        friends.splice(index, 1);
        renderFriendList();

        friendsTotal++;
      })
    });

  console.log(friendsTotal);
}

renderFriendList();

let friendRequestOnClick = false;

const friendRequest = document.querySelector('.friend-request-container'); 
  
friendRequest.addEventListener('click', () => {
  console.log('supernova');

  if (!friendRequestOnClick) {
    friendRequest.innerHTML += '<img class="friend-request-onclick" src="images/icon/circle.png">';

    renderFriendList();

    friendRequestOnClick = true;
  }
  else {
    friendRequest.innerHTML = `
      <img class="friend-request-icon" src="images/icon/friend.png">
    
      <div class="friend-request-dropdown"></div>
    `;

    friendRequestOnClick = false;
  }
  });

/*problem : 
  friend request dropdown is considered as a friend request container
*/
