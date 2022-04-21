const menu_icon = document.getElementById("menu_icon");
const movil_menu = document.getElementById("movil_menu");
const close_circle = document.getElementById("close_circle");



menu_icon.addEventListener("click", ()=> {
    movil_menu.style.display = "block";
})

close_circle.addEventListener("click", ()=> {
    movil_menu.style.display = "none";
})




