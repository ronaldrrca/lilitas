//Creando los eventos click de las imágenes pequeñas para renderizarlas como imagen principal
const small_image = document.querySelectorAll(".small_image") 
const big_image = document.getElementById("big_image")

small_image.forEach(element => {
    element.addEventListener("click", ()=> {
        big_image.setAttribute("src", element.getAttribute("src"))
        big_image.setAttribute("alt", element.getAttribute("alt"))
        let id = element.getAttribute("id")
        document.getElementById(id).style.boxShadow = "5px 10px 8px #888888"
});
        
    
    console.log(element.getAttribute("id"))
});


    


