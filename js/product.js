//Creando los eventos click de las imágenes pequeñas para renderizarlas como imagen principal
const small_image = document.querySelectorAll(".small_image") 
const big_image = document.getElementById("big_image")
const product_arrow_icon_left = document.getElementById("product_arrow_icon_left")
let active_index = 0;
const idArray = []
const srcArray = []


small_image.forEach(smallImage => {
    idArray.push(smallImage.getAttribute("id")) 
    srcArray.push(smallImage.getAttribute("src"))
});

small_image.forEach(element => {
    element.addEventListener("click", ()=> {
        
        //Retiramos los bordes de cualquier imagen que haya recibido los bordes por un clic anterior
        idArray.map((elem) => {
            document.getElementById(elem).style.border = "none"
        })

        big_image.setAttribute("src", element.getAttribute("src"))
        element.style.border = "3px solid #333" //Agregamos un borde solo a la imagen en la que hacemos clic
        active_index = srcArray.indexOf(big_image.getAttribute("src"))//Guardamos el indice la imagen activa
        console.log(active_index)
    });
});


//Creando los eventos clic para las flechas de la imagen grande
product_arrow_icon_left.addEventListener("click", ()=> {
    if (active_index != 0) {
        big_image.setAttribute("src", srcArray[active_index - 1])
    }else{
        big_image.setAttribute("src", srcArray[srcArray.length - 1])
    }

    active_index = srcArray.indexOf(big_image.getAttribute("src"))

    idArray.map((elem) => {
        document.getElementById(elem).style.border = "none"
    })

    document.getElementById(idArray[active_index]).style.border = "3px solid #333"
        console.log(active_index)
})

product_arrow_icon_right.addEventListener("click", ()=> {
    if (active_index != srcArray.length - 1) {
        big_image.setAttribute("src", srcArray[active_index + 1])
    }else{
        big_image.setAttribute("src", srcArray[0])
    }

    active_index = srcArray.indexOf(big_image.getAttribute("src"))

    idArray.map((elem) => {
        document.getElementById(elem).style.border = "none"
    })

    document.getElementById(idArray[active_index]).style.border = "3px solid #333"
        console.log(active_index)
})



    

