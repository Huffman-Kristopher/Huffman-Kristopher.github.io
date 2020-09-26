function updateInfo() {
  var update = new Date(document.lastModified);
  document.getElementById("updateText").innerHTML = update;
}