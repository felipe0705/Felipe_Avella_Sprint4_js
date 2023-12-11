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

////////////// card \\\\\\\\\\\\\\\\\\\\\\\
 let urlString = window.location.href
 let urlArmada = new URL(urlString)
 let parametro = new URLSearchParams(urlArmada.search)
 let id = parametro.get('id')

 let data2 = data.events.filter((evento) => evento._id == id)

 document.getElementById('imagen').src = data2[0].image
 document.getElementById('titulo').innerHTML = data2[0].name
 document.getElementById('descripcion').innerHTML = data2[0].description
 document.getElementById('date').innerHTML = data2[0].date
 document.getElementById('category').innerHTML = data2[0].category
 document.getElementById('place').innerHTML = data2[0].place
 document.getElementById('capacity').innerHTML = data2[0].capacity
 document.getElementById('assistance').innerHTML = data2[0].assistance
 document.getElementById('price').innerHTML = data2[0].price
})