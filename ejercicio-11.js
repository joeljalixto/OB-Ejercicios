
class Estudiante{
    constructor(name,asignaturas){
        this.name = name
        this.asignaturas = "Javascript,HTML,CSS"
    }
    obtenDatos(){
        return this.name
    }
}

const estudianteNuevo = new Estudiante("joel");
console.log(estudianteNuevo)

const estudianteNuevo2 = new Estudiante("diego")
console.log(typeof estudianteNuevo2)
console.log(estudianteNuevo2);

console.log(estudianteNuevo.obtenDatos())




