function message() {
  document.getElementById("displayMessage").style.display = "block";

  setTimeout(function message() {
    document.getElementById("displayMessage").style.display = "none";
  }, 5000);
}
