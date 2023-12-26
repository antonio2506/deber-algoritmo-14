ejercicio11()
function buscarNumero() {
    var numero = parseInt(document.getElementById("numero").value);
    var miArreglo = [5, 10, 15, 20, 25];

    var resultado = miArreglo.includes(numero);

    if (resultado) {
        document.getElementById("resultado").innerHTML = `El número ${numero} está en el arreglo.`;
    } else {
        document.getElementById("resultado").innerHTML = `El número ${numero} no está en el arreglo.`;
    }
}

ejercicio12()
function insertarElemento() {
    var elemento = parseInt(document.getElementById("elemento").value);
    var posicion = parseInt(document.getElementById("posicion").value);
    var miArreglo = [1, 2, 4, 5]; // Arreglo predefinido

    if (isNaN(elemento) || isNaN(posicion)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número y una posición válida.";
        return;
    }

    miArreglo.splice(posicion, 0, elemento);

    document.getElementById("resultado").innerHTML = "Arreglo modificado: [" + miArreglo.join(", ") + "]";
}

ejercicio13()
function eliminarElemento() {
    var posicion = parseInt(document.getElementById("posicion").value);
    var miArreglo = [1, 2, 3, 4, 5]; // Arreglo predefinido

    if (isNaN(posicion) || posicion < 0 || posicion >= miArreglo.length) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa una posición válida.";
        return;
    }

    miArreglo.splice(posicion, 1);

    document.getElementById("resultado").innerHTML = "Arreglo modificado: [" + miArreglo.join(", ") + "]";
}

ejercicio14()
function convertirArreglo() {
    var cadena = document.getElementById("cadena").value;
    var separador = document.getElementById("separador").value;

    var miArreglo = cadena.split(separador);

    document.getElementById("resultado").innerHTML = "Arreglo resultante: [" + miArreglo.join(", ") + "]";
}

ejercicio15()
function decimalABinario() {
    var numeroDecimal = parseInt(document.getElementById("numeroDecimal").value);
    
    if (isNaN(numeroDecimal)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido.";
        return;
    }

    if (numeroDecimal === 0) {
        document.getElementById("resultado").innerHTML = "El número binario es: 0";
        return;
    }

    var binario = "";
    while (numeroDecimal > 0) {
        var residuo = numeroDecimal % 2;
        binario = residuo + binario;
        numeroDecimal = Math.floor(numeroDecimal / 2);
    }

    document.getElementById("resultado").innerHTML = "El número binario es: " + binario;
}

ejercicio16()
function decimalAOctal() {
    var numeroDecimal = parseInt(document.getElementById("numeroDecimal").value);
    
    if (isNaN(numeroDecimal)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido.";
        return;
    }

    if (numeroDecimal === 0) {
        document.getElementById("resultado").innerHTML = "El número octal es: 0";
        return;
    }

    var octal = "";
    while (numeroDecimal > 0) {
        var residuo = numeroDecimal % 8;
        octal = residuo + octal;
        numeroDecimal = Math.floor(numeroDecimal / 8);
    }

    document.getElementById("resultado").innerHTML = "El número octal es: " + octal;
}
ejercicio17()
function decimalAHexadecimal() {
    var numeroDecimal = parseInt(document.getElementById("numeroDecimal").value);
    
    if (isNaN(numeroDecimal)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido.";
        return;
    }

    if (numeroDecimal === 0) {
        document.getElementById("resultado").innerHTML = "El número hexadecimal es: 0";
        return;
    }

    var hexadecimal = "";
    var digitosHex = "0123456789ABCDEF";
    while (numeroDecimal > 0) {
        var residuo = numeroDecimal % 16;
        hexadecimal = digitosHex[residuo] + hexadecimal;
        numeroDecimal = Math.floor(numeroDecimal / 16);
    }

    document.getElementById("resultado").innerHTML = "El número hexadecimal es: " + hexadecimal;
}

ejercicio18()
function binarioADecimal() {
    var cadenaBinaria = document.getElementById("cadenaBinaria").value;
    
    if (!/^[01]+$/.test(cadenaBinaria)) {
        document.getElementById("resultado").innerHTML = "Ingresa una cadena binaria válida.";
        return;
    }

    var numeroDecimal = parseInt(cadenaBinaria, 2);

    document.getElementById("resultado").innerHTML = "El número decimal es: " + numeroDecimal;
}
ejercicio19()
function binarioAOctal() {
    var cadenaBinaria = document.getElementById("cadenaBinaria").value;
    
    if (!/^[01]+$/.test(cadenaBinaria)) {
        document.getElementById("resultado").innerHTML = "Ingresa una cadena binaria válida.";
        return;
    }

    var numeroDecimal = parseInt(cadenaBinaria, 2);
    var numeroOctal = numeroDecimal.toString(8);

    document.getElementById("resultado").innerHTML = "El número octal es: " + numeroOctal;
}

ejercicio20()
function binarioAHexadecimal() {
    var cadenaBinaria = document.getElementById("cadenaBinaria").value;
    
    if (!/^[01]+$/.test(cadenaBinaria)) {
        document.getElementById("resultado").innerHTML = "Ingresa una cadena binaria válida.";
        return;
    }

    var numeroDecimal = parseInt(cadenaBinaria, 2);
    var numeroHexadecimal = numeroDecimal.toString(16).toUpperCase();

    document.getElementById("resultado").innerHTML = "El número hexadecimal es: " + numeroHexadecimal;
}