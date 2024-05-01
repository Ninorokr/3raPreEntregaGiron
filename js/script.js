/* var catalogo = [{id: 1, nombre: "Manzanas", peso: 0.200, precio: 1.00, ruta: "../imagenes/manzana.jpg"}, 
{id: 2, nombre: "Naranjas", peso: 0.180, precio: 0.60}, 
{id: 3, nombre: "Papayas", peso: 2.000, precio: 2.00},
{id: 4, nombre: "Plátanos", peso: 0.150, precio: 0.50},
{id: 5, nombre: "Mangos", peso: 0.350, precio: 1.20},
{id: 6, nombre: "Duraznos", peso: 0.100, precio: 0.30},
{id: 7, nombre: "Fresas", peso: 0.005, precio: 0.05},
{id: 8, nombre: "Palta", peso: 0.450, precio: 1.80}] */

var catalogo = [
    {id: 1, nombre: "Manzana caña", categoria: "fruta", peso: 0.250, precio: 1.80, ruta: "imagenes/manzana.jpg"},
    {id: 2, nombre: "Cebolla roja", categoria: "verdura", peso: 0.200, precio: 0.30, ruta: "../imagenes/cebolla.webp"},
    {id: 3, nombre: "Coliflor", categoria: "verdura", peso: 0.800, precio: 1.00, ruta: "../imagenes/coliflor.webp"},
    {id: 4, nombre: "Limón", categoria: "verdura", peso: 0.080, precio: 0.10, ruta: "../imagenes/limón.webp"},
    {id: 5, nombre: "Palta Hass", categoria: "verdura", peso: 0.200, precio: 2.20, ruta: "../imagenes/palta.jpg"},
    {id: 6, nombre: "Pera", categoria: "fruta", peso: 0.150, precio: 1.30, ruta: "../imagenes/pera.jpg"},
    {id: 7, nombre: "Pitahaya", categoria: "fruta", peso: 0.200, precio: 2.00, ruta: "../imagenes/pitahaya.webp"},
    {id: 8, nombre: "Poro", categoria: "verdura", peso: 0.150, precio: 0.50, ruta: "../imagenes/poro.webp"},
    
]

renderizarCatalogo(catalogo)

function renderizarCatalogo(catalogo) {
    let main = document.getElementById("main")
    for (let i = 0; i < catalogo.length; i++) {
        let {nombre, peso, precio, ruta} = catalogo[i]
        main.innerHTML += `
            <div class=tarjeta>
                <img src=${ruta}>
                <div class=propiedades>
                    <p>${nombre}</p>
                    <p>Peso: ${peso} Kgs.</p>
                    <p>Precio: S/. ${precio}</p>
                </div>
            </div>
        `
    }
}
