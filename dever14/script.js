ejercicio1()
function mostrarDivisores() {
    var numero = document.getElementById("numero").value;
    numero = parseInt(numero);
    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }
    var divisores = "Divisores de " + numero + ": ";
    for (var i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores += i + " ";
        }
    }
    document.getElementById("resultado").innerHTML = divisores;
}
ejercicio2()
function verificarNumeroPerfecto() {
    var numero = document.getElementById("numero").value;

    // Convertir el valor a un número entero
    numero = parseInt(numero);

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingresa un número entero positivo.");
        return;
    }

    var sumaDivisores = 0;
    for (var i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    var mensajeResultado = document.getElementById("resultado");
    if (sumaDivisores === numero) {
        mensajeResultado.innerHTML = numero + " es un número perfecto.";
    } else {
        mensajeResultado.innerHTML = numero + " no es un número perfecto.";
    }
}

ejercicio3()
function verificarNumeroPrimo() {
    var numero = document.getElementById("numero").value;

    // Convertir el valor a un número entero
    numero = parseInt(numero);

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingresa un número entero positivo.");
        return;
    }

    var mensajeResultado = document.getElementById("resultado");
    if (esNumeroPrimo(numero)) {
        mensajeResultado.innerHTML = numero + " es un número primo.";
    } else {
        mensajeResultado.innerHTML = numero + " no es un número primo.";
    }
}

ejercicio4()
function esNumeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function verificarPrimosGemelos() {
    var numero = document.getElementById("numero").value;

    // Convertir el valor a un número entero
    numero = parseInt(numero);

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, ingresa un número entero positivo.");
        return;
    }

    var mensajeResultado = document.getElementById("resultado");
    if (esNumeroPrimo(numero) && esNumeroPrimo(numero + 2)) {
        mensajeResultado.innerHTML = numero + " y " + (numero + 2) + " son números primos gemelos.";
    } else {
        mensajeResultado.innerHTML = "No se encontraron números primos gemelos a partir de " + numero + ".";
    }
}