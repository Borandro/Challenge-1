function encriptar(){

    var frase = document.getElementById("EntradaTexto").value.toLowerCase();
    //para que todo lo ingresado quede en minúsculas


    //letra i = toma en cuenta las letras mayúsculas y minúsculas
    //letra m = toma en cuenta todas las lineas
    //letra g = toma en cuenta toda la frase de una linea
    var EntradaTexto = frase.replace(/e/img, "enter");
    var EntradaTexto = EntradaTexto.replace(/o/img, "ober");
    var EntradaTexto = EntradaTexto.replace(/i/img, "imes");
    var EntradaTexto = EntradaTexto.replace(/a/img, "ai");
    var EntradaTexto = EntradaTexto.replace(/u/img, "ufat");


    document.getElementById("void").style.display = "none";
    document.getElementById("resultado").style.display = "show";
    document.getElementById("resultado").style.display = "inherit";
    document.getElementById("SalidaTexto").innerHTML = EntradaTexto;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";   
    
    
}

function desencriptar(){

    var frase = document.getElementById("EntradaTexto").value.toLowerCase();
    //para que todo lo ingresado quede en minúsculas


    //letra i = toma en cuenta las letras mayúsculas y minúsculas
    //letra m = toma en cuenta todas las lineas
    //letra g = toma en cuenta toda la frase de una linea

    var EntradaTexto = frase.replace(/enter/img, "e");
    var EntradaTexto = EntradaTexto.replace(/ober/img, "o");
    var EntradaTexto = EntradaTexto.replace(/imes/img, "i");
    var EntradaTexto = EntradaTexto.replace(/ai/img, "a");
    var EntradaTexto = EntradaTexto.replace(/ufat/img, "u");

    document.getElementById("void").style.display = "none";
    document.getElementById("SalidaTexto").innerHTML = EntradaTexto;
    document.getElementById("resultado").style.display = "show";
    document.getElementById("resultado").style.display = "inherit";
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
    

}


function copiar(){
    var contenido = document.querySelector("#SalidaTexto");
    contenido.select();
    document.execCommand("copy");

}



