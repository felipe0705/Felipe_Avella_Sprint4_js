

export function pintarTarjetas(arregloEventos, divp) { 

    divp.innerHTML = ""
    if (arregloEventos.length == 0) {

        divp.innerHTML = `<h2 class="text-center bg-dark p-3 border border-white text-white w-50 ms-auto me-auto " > "No events found,  try again! </h2> 
          `;
      }
    for (let i = 0; i < arregloEventos.length; i += 4) {
        let carruselItem

        if (i < 4) {
            carruselItem = document.createElement("div")
            carruselItem.classList.add("carousel-item", "active" )

        } else {
            carruselItem = document.createElement("div")
            carruselItem.classList.add("carousel-item" )
        }



        let carruselItem2 = document.createElement("div")
        carruselItem2.classList.add("cards2","row","p-4","justify-content-center" )


        for (let j = i; j < i + 4; j++) {
            if (arregloEventos[j] != undefined) {
                let card = document.createElement("section-header")
                card.classList.add("carta","border","border-white", "col-9", "col-md-3","mb-3","p-3")
                card.innerHTML = `
            <div class="card-img " >
            <img src="${arregloEventos[j].image}" class="imagen w-100"  alt="...">
            </div>             
        <div class="titulo card-body bg-secondary ">
        <h4 class=" card-title text-center mt-1 text-white">${arregloEventos[j].name} </h4>
        </div>
        <div class="cuerpo  card-body bg-dark">            
            <p class="card-text text-center text-white">${arregloEventos[j].description}</p>
        </div>
        <div class="d-flex justify-content-between  p-2 bg-secondary">
            <a href="details.html?id=${arregloEventos[j]._id}" class="btn btn-dark">Details</a>
            <p class="card-text btn btn-dark text-white">${arregloEventos[j].price}</p>
        </div> <br>`
        
                carruselItem2.appendChild(card)
            }
        }
        carruselItem.appendChild(carruselItem2)


        divp.appendChild(carruselItem)
    }
}

export function pintarCheckbox(arregloCategory, divc) {
    for (let j = 0; j < arregloCategory.length; j++) {
        if (arregloCategory[j] != undefined) {
            let div = document.createElement("div")
            div.classList.add( "text-white")
            div.innerHTML = `
            <input class="form-check-input" type="checkbox" value="${arregloCategory[j]}" id="${arregloCategory[j]}">
            <label class="form-check-label me-3" for="${arregloCategory[j]}">${arregloCategory[j]}</label>`

            divc.appendChild(div)
        }

    }
}

export function filtrarCheckbox(arreglo, arreglochecked) {
    let arregloFinal = arreglo.filter(event => arreglochecked.includes(event.category.toLowerCase()))
    if (arregloFinal.length == 0) {
        arregloFinal = arreglo         
      }
    return arregloFinal
}

export function filtrarPalabra(arregloEvento, palabraClave) {

    let arregloNuevo = arregloEvento.filter(evento => evento.name.toLowerCase().includes(palabraClave.toLowerCase()) || evento.description.toLowerCase().includes(palabraClave.toLowerCase()))
    return arregloNuevo
}

