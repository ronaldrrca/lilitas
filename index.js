const main_images_container = document.getElementById("main_images_container");
const image_element = document.createElement("img");
let active_image = "assets/images/main-img-1-1300x871p.webp";
const selection_circle_1 = document.getElementById("selection_circle_1");
const selection_circle_2 = document.getElementById("selection_circle_2");
const selection_circle_3 = document.getElementById("selection_circle_3");
const empty_circle = "assets/icons/empty_circle.svg";
const filled_circle = "assets/icons/filled_circle.svg";
const arrow_icon_left = document.getElementById("arrow_icon_left");
const arrow_icon_right = document.getElementById("arrow_icon_right");
image_element.setAttribute("src", "assets/images/main-img-1-1300x871p.webp");
image_element.setAttribute("alt", "mujer modelando ropa en la calle");
image_element.className += "main_image";
main_images_container.appendChild(image_element) 


const  main_images = [
            {
                src: "assets/images/main-img-1-1300x871p.webp",
                alt: "mujer modelando ropa en la calle"
            },
            {
                src: "assets/images/main-img-2-1300x780p.webp",
                alt: "mujer modelando ropa frente a una pared"
            },
            {
                src: "assets/images/main-img-3-1300x975p.webp",
                alt: "mujeres modelando ropa"
            }
        ]
      
/*Cambiando automáticamente la imagen principal del inicio */
setInterval(function(){
       switch (active_image) {
           case "assets/images/main-img-1-1300x871p.webp":
                image_element.setAttribute("src", main_images[1].src)
                image_element.setAttribute("alt", main_images[1].alt)
                selection_circle_1.setAttribute("src", empty_circle)
                selection_circle_2.setAttribute("src", filled_circle)
                selection_circle_3.setAttribute("src", empty_circle)
                active_image = "assets/images/main-img-2-1300x780p.webp"
               break;
            case "assets/images/main-img-2-1300x780p.webp":
                image_element.setAttribute("src", main_images[2].src)
                image_element.setAttribute("alt", main_images[2].alt)
                selection_circle_1.setAttribute("src", empty_circle)
                selection_circle_2.setAttribute("src", empty_circle)
                selection_circle_3.setAttribute("src", filled_circle)
                active_image = "assets/images/main-img-3-1300x975p.webp"
               break;
            case "assets/images/main-img-3-1300x975p.webp":
                image_element.setAttribute("src", main_images[0].src)
                image_element.setAttribute("alt", main_images[0].alt)
                selection_circle_1.setAttribute("src", filled_circle)
                selection_circle_2.setAttribute("src", empty_circle)
                selection_circle_3.setAttribute("src", empty_circle)
                active_image = "assets/images/main-img-1-1300x871p.webp"
               break;
        }
}, 6000)


/*Agregando eventos clic para cambiar la imagen principal del inicio manualmente */
arrow_icon_right.addEventListener("click", function () {
    switch (active_image) {
        case "assets/images/main-img-1-1300x871p.webp":
             image_element.setAttribute("src", main_images[1].src)
             image_element.setAttribute("alt", main_images[1].alt)
             selection_circle_1.setAttribute("src", empty_circle)
             selection_circle_2.setAttribute("src", filled_circle)
             selection_circle_3.setAttribute("src", empty_circle)
             active_image = "assets/images/main-img-2-1300x780p.webp"
            break;
         case "assets/images/main-img-2-1300x780p.webp":
             image_element.setAttribute("src", main_images[2].src)
             image_element.setAttribute("alt", main_images[2].alt)
             selection_circle_1.setAttribute("src", empty_circle)
             selection_circle_2.setAttribute("src", empty_circle)
             selection_circle_3.setAttribute("src", filled_circle)
             active_image = "assets/images/main-img-3-1300x975p.webp"
            break;
         case "assets/images/main-img-3-1300x975p.webp":
             image_element.setAttribute("src", main_images[0].src)
             image_element.setAttribute("alt", main_images[0].alt)
             selection_circle_1.setAttribute("src", filled_circle)
             selection_circle_2.setAttribute("src", empty_circle)
             selection_circle_3.setAttribute("src", empty_circle)
             active_image = "assets/images/main-img-1-1300x871p.webp"
            break;
     }
})

arrow_icon_left.addEventListener("click", function () {
    switch (active_image) {
        case "assets/images/main-img-3-1300x975p.webp":
            image_element.setAttribute("src", main_images[1].src)
            image_element.setAttribute("alt", main_images[1].alt)
            selection_circle_1.setAttribute("src", empty_circle)
            selection_circle_2.setAttribute("src", filled_circle)
            selection_circle_3.setAttribute("src", empty_circle)
            active_image = "assets/images/main-img-2-1300x780p.webp"
            break;
                 
         case "assets/images/main-img-2-1300x780p.webp":
            image_element.setAttribute("src", main_images[0].src)
            image_element.setAttribute("alt", main_images[0].alt)
            selection_circle_1.setAttribute("src", filled_circle)
            selection_circle_2.setAttribute("src", empty_circle)
            selection_circle_3.setAttribute("src", empty_circle)
            active_image = "assets/images/main-img-1-1300x871p.webp"
            break;

        case "assets/images/main-img-1-1300x871p.webp":
            image_element.setAttribute("src", main_images[2].src)
            image_element.setAttribute("alt", main_images[2].alt)
            selection_circle_1.setAttribute("src", empty_circle)
            selection_circle_2.setAttribute("src", empty_circle)
            selection_circle_3.setAttribute("src", filled_circle)
            active_image = "assets/images/main-img-3-1300x975p.webp"
            break;
     }
})


