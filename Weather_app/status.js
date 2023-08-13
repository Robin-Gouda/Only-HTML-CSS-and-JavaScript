window.addEventListener("online", function () {
  console.clear();
  console.log("I am connected to the internet");
});

window.addEventListener("offline", function () {
  console.clear();
  console.log("Disconnected...so sad!!!");
});

const internetStatus = document.getElementById("internetStatus");
window.addEventListener("load", function (event) {
  detectInternet();
});
window.addEventListener("online", function (event) {
  detectInternet();
});
window.addEventListener("offline", function (event) {
  detectInternet();
});
function detectInternet() {
  if (navigator.onLine) {
    internetStatus.textContent = "You are online";
    internetStatus.style.backgroundColor = "#7cfc00";
  } else {
    internetStatus.textContent = "No Internet Connection";
    internetStatus.style.backgroundColor = "red";
  }
}
