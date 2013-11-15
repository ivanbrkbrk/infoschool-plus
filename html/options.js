// Saves options to localStorage.
function save_options() {
  localStorage["login"] = document.getElementById("login").value;
  localStorage["password"] = document.getElementById("password").value;

  var status = document.getElementById("stato");
  status.innerHTML = "Salvati.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var login = localStorage["login"];
  var password = localStorage["password"];
  if (!login) {
    return;
  }
  document.getElementById("login").value = login;
  document.getElementById("password").value = password;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#salva').addEventListener('click', save_options);
