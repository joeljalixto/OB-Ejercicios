
let nombre = "Joel"
let apellido = "Jalixto"

let objeto = {
    nombre: "Joel",
    apellido: "Jalixto"
}

localStorage.setItem("objeto",JSON.stringify(objeto))
sessionStorage.setItem("objeto",JSON.stringify(objeto))
document.cookie = `objeto=${JSON.stringify(objeto)}; expires=+ new Date(2022,10,15,14,20,40)`



