import { pintarTarjetas, pintarCheckbox, filtrarCheckbox, filtrarPalabra, } from "./modulos/funciones.js";

let urlsprint = "https://mindhub-xj03.onrender.com/api/amazing"
fetch(urlsprint)
.then(response => response.json())
.then(data =>  {

////////////// navbar \\\\\\\\\\\\\\\\\\\\\\\

let nav = document.getElementById('navbar')


let navbarBrand = document.createElement("a");
navbarBrand.className = "navbar-brand navbar-expand-sm bg-light-subtle object-fit-none border rounded";
navbarBrand.href = "index.html";

let brandImage = document.createElement("img");
brandImage.src = "amazing_brand.png";
brandImage.className = "logo";
brandImage.alt = "logo";

navbarBrand.appendChild(brandImage);

let navbarButton = document.createElement("button");
navbarButton.className = "navbar-toggler";
navbarButton.type = "button";
navbarButton.setAttribute("data-bs-toggle", "collapse");
navbarButton.setAttribute("data-bs-target", "#navbarNav");
navbarButton.setAttribute("aria-controls", "navbarNav");
navbarButton.setAttribute("aria-expanded", "false");
navbarButton.setAttribute("aria-label", "Toggle navigation");

let navbarIcon = document.createElement("span");
navbarIcon.className = "navbar-toggler-icon";

navbarButton.appendChild(navbarIcon);

let navbarCollapse = document.createElement("div");
navbarCollapse.className = "collapse navbar-collapse";
navbarCollapse.id = "navbarNav";

var navbarList = document.createElement("ul");
navbarList.className = "navbar-nav ms-auto";

let navItems = [
    { text: "Home", href: "index.html" },
    { text: "Upcoming Events", href: "upcomingEvents.html" },
    { text: "Past Events", href: "PastEvents.html" },
    { text: "Contact", href: "Contact.html" },
    { text: "Stats", href: "Stats.html" }
];

navItems.forEach(function (item) {
    var navItem = document.createElement("li");
    navItem.className = "nav-item fs-5 border me-2 border-danger-subtle rounded-4";

    var navLink = document.createElement("a");
    navLink.className = "nav-link active";
    navLink.setAttribute("aria-current", "page");
    navLink.href = item.href;
    navLink.textContent = item.text;

    navItem.appendChild(navLink);
    navbarList.appendChild(navItem);
});

navbarCollapse.appendChild(navbarList);

nav.appendChild(navbarBrand)

nav.appendChild(navbarButton)

nav.appendChild(navbarCollapse)

///////////////////  baner \\\\\\\\\\\\\\\\\\\\

let banner = document.getElementById("banner");
banner.className = " carousel-inner";

let images = ['optional_banner_3.jpg', 'optional_banner_2.jpg', 'optional_banner_1.jpg'];

for (let i = 0; i < images.length; i++) {

    let bannerItem = document.createElement('div');
    bannerItem.className = i === 0 ? 'carousel-item active' : 'carousel-item';

    let img = document.createElement('img');
    img.className = 'imagencarusel1 w-100';
    img.src = images[i];
    img.alt = '...';

    var caption = document.createElement('div');
    caption.className = 'carousel-caption w-75 d-flex justify-content-end ';

    var h2 = document.createElement('h2');
    h2.className = 'TituloHome', 'text-end';
    h2.textContent = 'HOME';

    caption.appendChild(h2);
    bannerItem.appendChild(img);
    bannerItem.appendChild(caption);
    banner.appendChild(bannerItem);
}

///////////////////  checkbox-boton search   \\\\\\\\\\\\\\\\\\\\

let check = document.getElementById("checkbox")

let arrayCategory = Array.from(new Set(data.events.map(event => event.category)))

pintarCheckbox(arrayCategory, check)

check.addEventListener("change", e => {
    let checked = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(checkbox => checkbox.value.toLowerCase())
    let nuevoArreglo = filtrarCheckbox(data.events, checked)
    pintarTarjetas(nuevoArreglo, carrusel)
})

////buscador\\\\\

let buscador = document.getElementById("input")
buscador.addEventListener("keyup",nuv => {
    let nuevoBuscador= filtrarPalabra(data.events, nuv.target.value)
    pintarTarjetas(nuevoBuscador, carrusel )
})

///////////////////  tarjetas   \\\\\\\\\\\\\\\\\\\\

let carrusel = document.getElementById("carousel-Principal")


pintarTarjetas(data.events, carrusel)

})



