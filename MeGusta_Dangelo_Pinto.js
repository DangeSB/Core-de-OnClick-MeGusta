let botones = document.querySelectorAll(".btn-like");

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    let contador = botones[i].parentElement.querySelector(".count");
    contador.innerText = parseInt(contador.innerText) + 1;
  });
}