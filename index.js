const bar = document.querySelector(".bar");
const navbarbaricon = document.querySelector(".navbar-baricon");

bar.addEventListener("click", function () {
  navbarbaricon.style.width = "300px";
});
const navbarbariconcursor = document.querySelector(".navbar-baricon-cursor");

navbarbariconcursor.addEventListener("click", function () {
  navbarbaricon.style.width = "0px";
});
const navbarbariconteam = document.querySelector(".navbar-baricon-team");
const navbarbariconm = document.querySelector(".navbar-baricon-");
// console.log("salam");
// console.log(navbarbariconm);
navbarbariconm.addEventListener("click", function () {
  navbarbariconteam.classList.toggle("cursor-baricon");
});