// switch between login and register boxes


function displayLogin() {
  var x = document.getElementById("register-box");
  var y = document.getElementById("login-box");
  x.style.display = "none";
  y.style.display = "inline-block";
}

function displayRegister() {
  var x = document.getElementById("register-box");
  var y = document.getElementById("login-box");
  y.style.display = "none";
  x.style.display = "inline-block";
}

// ========== onclick login button ===================

const loginClicked = document.getElementById("login-clicked");
loginClicked.addEventListener("click", function(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  if (username.length == 0 || password.length == 0) {
    alert("username or password not entered");
  } else {
    var j = 0;
    var usernameExists = false;
    while (localStorage.key(j)) {
      if (username == localStorage.key(j)) {
        usernameExists = true;
        if (localStorage.getItem(username) === password) {
          sessionStorage.setItem("username",username);
          alert("logged in successfully and you are now entering quiz");
          location.assign('questions/q1.html');
          break;
        } else {
          alert("incorrect password");
          break;
        }
      }
      j++;
    }
    if (!usernameExists) {
      alert("username does not exist try to register");
    }
  }
});

// ============= on click register button--------------

const registerClicked = document.getElementById("register-clicked");
registerClicked.addEventListener("click", function () {
  let newUsername = document.getElementById("rusername").value;
  let newPassword = document.getElementById("rpassword").value;
  if (
    (newUsername.length != 0 && newPassword.length != 0)
  ) {
    var i = 0;
    var usernameExists = false;
    while (localStorage.key(i)) {
      if (localStorage.key(i) == newUsername) {
        usernameExists = true;
        alert("username already exists try to login");
        break;
      }
      i++;
    }
    if (!usernameExists) {
      localStorage.setItem(newUsername, newPassword);
      sessionStorage.setItem("username",newUsername);
      alert("account created successfully and you are now entering quiz");
      location.assign('questions/q1.html');
    }
  }else{
    alert("please enter all credentials");
  }
});
