ejercicio5()
function concatenarCadenas() {
    var cadena1 = document.getElementById("cadena1").value;
    var cadena2 = document.getElementById("cadena2").value;

    var resultado = cadena1 + cadena2;

    document.getElementById("resultado").innerHTML = "Cadenas concatenadas: " + resultado;
}

ejercicio6()
function buscarSubcadena() {
    var cadenaPrincipal = document.getElementById("cadenaPrincipal").value;
    var subcadena = document.getElementById("subcadena").value;

    var resultado = cadenaPrincipal.includes(subcadena);

    if (resultado) {
        document.getElementById("resultado").innerHTML = "'" + subcadena + "' se encuentra en la cadena principal.";
    } else {
        document.getElementById("resultado").innerHTML = "'" + subcadena + "' no se encuentra en la cadena principal.";
    }
}

ejercicio7()
function insertarSubcadena() {
    var cadenaPrincipal = document.getElementById("cadenaPrincipal").value;
    var subcadena = document.getElementById("subcadena").value;
    var posicion = parseInt(document.getElementById("posicion").value);

    if (posicion < 0 || posicion > cadenaPrincipal.length) {
        document.getElementById("resultado").innerHTML = "Posición inválida";
        return;
    }

    var parteInicial = cadenaPrincipal.substring(0, posicion);
    var parteFinal = cadenaPrincipal.substring(posicion);

    var resultado = parteInicial + subcadena + parteFinal;
    document.getElementById("resultado").innerHTML = "Cadena resultante: " + resultado;
}

ejercicio8()
function eliminarSubcadena() {
    var cadenaPrincipal = document.getElementById("cadenaPrincipal").value;
    var subcadenaAEliminar = document.getElementById("subcadenaAEliminar").value;

    var resultado = cadenaPrincipal.replace(subcadenaAEliminar, '');
    document.getElementById("resultado").innerHTML = "Cadena resultante: " + resultado;
}
ejercicio9()
function convertirArregloACadena() {
    var elementos = document.getElementById("elementos").value.split(",");
    var cadenaResultado = elementos.join(" ");

    document.getElementById("resultado").innerHTML = "Arreglo convertido a cadena: " + cadenaResultado;
}

ejercicio10()
function encontrarMayor() {
    var inputValores = document.getElementById("valores").value;
    var arreglo = inputValores.split(",").map(Number);

    if (arreglo.length === 0 || inputValores.trim() === "") {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa al menos un número.";
        return;
    }

    var mayor = arreglo[0];
    for (var i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }

    document.getElementById("resultado").innerHTML = "El número más grande es: " + mayor;
}

