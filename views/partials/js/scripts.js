//HIGHLIGHTS
let highlights = document.getElementsByClassName("highlight");
let info = document.getElementsByClassName("info");
//change highlight info color to yellow when mouseover
for (let i = 0; highlights.length > i; i++) {
    highlights[i].addEventListener("mouseover", function () {
        info[i].style.color = "white";
        //        info[i].style.background = "linear-gradient(to bottom, transparent, black)";
        //info[i].style.backgroundColor = "rgba(181, 229, 70, 0.75)";
    });
    highlights[i].addEventListener("mouseleave", function () {
        info[i].style.color = "white";

        //        info[i].style.background = "linear-gradient(to bottom, transparent, white)";
        //        info[i].style.backgroundColor =   "rgba(0, 0, 0, 75%)";
    });
}

// Selecciona los enlaces internos en tu página
const links = document.querySelectorAll('a[href^="#"]');

// Agrega un evento de clic a cada enlace
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Obtiene el objetivo del enlace (el elemento al que se desplazará suavemente)
        const target = document.querySelector(link.getAttribute("href"));

        // Desplázate suavemente hasta el objetivo utilizando el método scrollIntoView
        target.scrollIntoView({
            behavior: "smooth",
        });
    });
});
