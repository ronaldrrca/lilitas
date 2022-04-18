const menu_icon = document.getElementById("menu_icon");
const movil_menu = document.getElementById("movil_menu");
const close_circle = document.getElementById("close_circle");
const movil_menu_productos = document.getElementById("movil_menu_productos");
const movil_subMenu = document.getElementById("movil_subMenu");


menu_icon.addEventListener("click", ()=> {
    movil_menu.style.display = "block";
})

close_circle.addEventListener("click", ()=> {
    movil_menu.style.display = "none";
})

movil_menu_productos.addEventListener("click", ()=> {
    movil_subMenu.style.display = "block"
})



