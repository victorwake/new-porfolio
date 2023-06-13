
/*Menu hamburguesa*/

let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");


menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
};


/*NavBar activo*/ 

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };
    });

/* */
let header = document.querySelector("header");

header.classList.toggle("sticky", window.scrollY > 100);

/* remueve*/
menuIcon.classList.remove("bx-x");
navBar.classList.remove("active");

};

// scroll reveal, sirve para que los elementos con animacion aparezcan cuando se hace scroll
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading ', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .porfolio-box, contacto form', { origin: 'botton' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// typed js sirve para que el texto se escriba solo
var typed = new Typed('.multiple-texto', {
    strings: ["Frontend developer", "and", "backend developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    });



// Función para cambiar el tema
function toggleTheme() {
    var body = document.querySelector("body");
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
    saveTheme();
}

// Función para guardar el tema actual en localstorage
function saveTheme() {
    var body = document.querySelector("body");
    if (body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light-theme");
    } else {
    localStorage.setItem("theme", "dark-theme");
    }
}

// Función para cargar el tema guardado en localstorage
function loadTheme() {
    var theme = localStorage.getItem("theme");
    var body = document.querySelector("body");
    if (theme === "light-theme") {
        body.classList.add("light-theme");
    } else {
        body.classList.add("dark-theme");
    }
}

// // Cargar el tema al cargar la página
// window.addEventListener("DOMContentLoaded", function() {
//     loadTheme();

// // Manejar el evento de hacer clic en el botón del modo de luz
// var lightModeButton = document.querySelector(".light-mode-button");
// lightModeButton.addEventListener("click", function(event) {
//   event.preventDefault();
//   toggleTheme();
// });
// });


var cambiarTextoBtn = document.getElementById("cambiarTextoBtn");
var acercaDe = document.getElementById("acerca");
var servis = document.getElementById("servis");
var porf = document.getElementById("porf");
var contact = document.getElementById("contact");
var inicio = document.getElementById("inicio");

cambiarTextoBtn.addEventListener("click", function() {
    if (acercaDe.innerText === "About me") {
        acercaDe.innerText = "Acerca de mi";
        servis.innerText = "Trabajos";
        porf.innerText = "Proyectos";
        contact.innerText = "Contacto";
        inicio.innerText = "Inicio";
    } else {
        inicio.innerText = "Home";
        acercaDe.innerText = "About me";
        servis.innerText = "Skills";
        porf.innerText = "Projects";
        contact.innerText = "Contact";
    }
});



var boton = document.getElementById("cambiarTextoBtn");
var img = document.getElementById("cambiarTextoBtn");

boton.addEventListener("click", function() {
    if (img.getAttribute("src") === "./img/uk-rec.png") {
        img.setAttribute("src", "./img/arg-rec.png");
    } else {
        img.setAttribute("src", "./img/uk-rec.png");
    }
});




var botonModo = document.getElementById("cambiarModoBtn");
var imgModo = document.getElementById("cambiarModoBtn");

botonModo.addEventListener("click", function() {
    if (imgModo.getAttribute("src") === "./img/sun.png") {
        imgModo.setAttribute("src", "./img/moon.png");
    } else {
        imgModo.setAttribute("src", "./img/sun.png");
    }
});