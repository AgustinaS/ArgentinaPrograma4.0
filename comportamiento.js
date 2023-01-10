let datoAMostrar=["/datosPersonales.html"]
let idElem=0;
function mostrarDatos(idElem){
    devolverTipo (idElem);
    document.getElementById(idElem).style.display = "block";
}

function devolverTipo(elem){
    return datoAMostrar[elem];
}