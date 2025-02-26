//enlazar un objeto javascript con el html 
let miTexto= document.getElementById("text1")
let miBoton= document.getElementById("boton1")
let resultado = document.getElementById("resultado");

//manejador de eventos funcion que se ejecuta cuando ocurre un evento en un elemento html, eñ evento es del paretesis
//funcion anonima 
//cuando haga click cambie de color y texto cambie a gracias
miBoton.addEventListener("click",function(){
    miBoton.style.backgroundColor="purple"
    // Obtener el valor del cuadro de texto
    //
    let textoIngresado = miTexto.value.trim(); // Eliminamos espacios extra

    // Contar la cantidad de letras
    let numeroLetras = textoIngresado.length;

    // Mostrar el resultado en el párrafo debajo del cuadro de texto
    resultado.textContent = `Número de letras: ${numeroLetras}`;

    // Crear un objeto para contar las ocurrencias de cada letra
    let conteoLetras = {};
    for (let letra of textoIngresado) {
        if (conteoLetras[letra]) {
            conteoLetras[letra]++;
        } else {
            conteoLetras[letra] = 1;
        }
    }

    // Crear el contenido a mostrar
    for (let letra of textoIngresado) {
        let linea = document.createElement("p");
        linea.textContent = `${letra} → ${conteoLetras[letra]}`;
        resultado.appendChild(linea);
    }

})
//cuando se haga click se debe tomar el texto del cuadro de texto y en una división mostrar cuantas letras tiene el texto y un abecedario con # y letra