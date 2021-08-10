const nav = document.querySelector("nav ul");
const menuToggle = document.querySelector(".menu-toggle input");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const body = document.querySelector(".body");
// body.style.backgroundColor = "red";

// const merah = document.querySelector(".merah");
// const hijau = document.querySelector(".hijau");
// const kuning = document.querySelector(".kuning");
// const abuAbu = document.querySelector(".abu-abu");

// merah.addEventListener("click", function () {
//   const body = document.querySelector(".body");
//   body.style.transition = "1s";
//   body.style.backgroundColor = "red";
// });

// kuning.addEventListener("click", function () {
//   const body = document.querySelector(".body");
//   body.style.backgroundColor = "yellow";
// });

// hijau.addEventListener("click", function () {
//   const body = document.querySelector(".body");
//   body.style.backgroundColor = "green";
// });

// abuAbu.addEventListener("click", function () {
//   const body = document.querySelector(".body");
//   body.style.backgroundColor = "grey";
// });

const warna = document.querySelectorAll(".pilihan-warna div");

warna.forEach(function (war) {
  war.addEventListener("click", function () {
    // const pilwar = "red";
    const pilwarn = war.getAttribute("value");
    body.style.transition = "1s";
    body.style.backgroundColor = pilwarn;
  });
});
