
let actual=0;

function mostrarDatos(idElem){
    document.getElementById(actual).style.display="none";
    actual=idElem;
    document.getElementById(idElem).style.display = "block";
}
