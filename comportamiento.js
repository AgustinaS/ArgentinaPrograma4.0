function mostrarDatosPersonales(){
    if (document.getElementById(self).style.display=="block") {
        document.getElementById(self).style.display="none"
    }
    document.getElementById("cuerpo").style.display = "block";
}