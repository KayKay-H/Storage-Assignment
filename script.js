const usernameInput = document.getElementById("username");
const saveButton = document.getElementById("Save button");
const clearButton = document.getElementById("Clear button");
const displayName = document.getElementById("display-name");

window.onload = function () {
  const savedName = localStorage.getItem("name");
  if (savedName) {
    displayName.textContent = "Hello, " + username;
  }
};

saveButton.onclick = function() {
    let name = usernameInput.value;
    if (name) {
      localStorage.setItem("name", name);
      displayName.textContent = "Hello, " + name;
    }
};

clearButton.onclick = function() {
  localStorage.removeItem("name");
  displayName.textContent = "";
  usernameInput.value = "";
};

