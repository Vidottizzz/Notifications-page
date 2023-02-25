let redDot = [...document.querySelectorAll(".red-dot")];
let notiDiv = [...document.querySelectorAll(".noti_div")];
let titleNum = document.querySelector("#title-num");
let allRead = document.querySelector("#right-top-text");
let toggleMsg = document.querySelector("#hold_msg");
let notiDiv1 = document.querySelector(".noti_div1");

//fundo branco
let count = 3;
titleNum.innerHTML = count;

function myFunction() {
  if (toggleMsg.style.display === "none") {
    toggleMsg.style.display = "block";
  } else {
    toggleMsg.style.display = "none";
  }
}

notiDiv.map((el) => {
  el.addEventListener("click", () => {
    el.classList.add("background-read");
    el.lastElementChild.firstElementChild.lastElementChild.classList.remove("red-dot");
  
      if (count > -1) {
        count--;
        titleNum.innerHTML = count;
        if (count === 0) titleNum.classList.add("hide");
      }
    
  });

  // Ponto vermelho
  // redDot.map((el) => {
  //   el.addEventListener("click", () => {
  //     el.classList.remove("red-dot");
  //   });
  // });

  redDot.map((ele) => {
    allRead.addEventListener("click", () => {
      ele.classList.remove("red-dot");
      el.classList.add("background-read");
      titleNum.classList.add("hide");
    });
  });
});

// notiDiv.addEventListener("click", retirar_classes);
// notiDiv1.addEventListener("click", retirar_classes1);
// notiDiv2.addEventListener("click", retirar_classes2);
