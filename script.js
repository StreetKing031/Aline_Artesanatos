var radio = document.querySelector(".manual-btn");
var cont = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  proximaImg();
}, 5000);
/* 5000 são 5 segundos para a imagem passar para a próxima */

function proximaImg() {
  cont++;
  if (cont > 3) {
    cont = 1;
  }
  document.getElementById("radio" + cont).checked = true;
};
/* sempre que o contador passar de 3,voltar a ser um */

/* animação menu suspenso */
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen 
  ? "fa-solid fa-xmark"
  : "fa-solid fa-bars";
};
/* DARK/ LIGHT  MODE */

const changeThemeBtn = document.querySelector("#change-theme")

changeThemeBtn.addEventListener("change", function (){
    document.body.classList.toggle("dark");
});