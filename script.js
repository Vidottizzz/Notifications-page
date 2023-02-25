// notiDiv.addEventListener("click", myFunc() {
//   // redDot.classList.add("hide");
//  alert('Deu certo');
// });

let redDot = [...document.querySelectorAll(".red-dot")];
let notiDiv = [...document.querySelectorAll(".noti_div")];
let titleNum = document.querySelector("#tile-num");
let allRead = document.querySelector("#right-top-text");

//fundo branco

notiDiv.map((el) => {
  el.addEventListener("click", () => {
    el.classList.add("background-read");
  });

  // Ponto vermelho
  redDot.map((elee) => {
    elee.addEventListener("click", () => {
      elee.classList.add("hide");
    });
  });

  // All
  redDot.map((ele) => {
    allRead.addEventListener("click", () => {
      ele.classList.add("hide");
      el.classList.add("background-read");
    });
  });

});

// notiDiv.addEventListener("click", retirar_classes);
// notiDiv1.addEventListener("click", retirar_classes1);
// notiDiv2.addEventListener("click", retirar_classes2);
