

const error = menPersonal => {
    if(10==20){
        return menPersonal
    }
    throw new Error("Este es un mensaje personalizado del error")
    
}
console.log(error(10));

try{
    console.log("esta funcionando");
} catch(e){
    console.log("dejo de funcionar");
}