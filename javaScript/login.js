function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "nahida" && password === "123456") {
    var href = "index.html";
    window.location = href;
  }
}
