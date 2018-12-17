let inputNombreA = document.getElementById("nombreA");
let inputCategoriaWeb = document.getElementById("categoriaWeb");
let inputLenguaje = document.getElementById("lenguaje");
let inputHoras = document.getElementById("horas");
let inputNombreApellidoDes = document.getElementById("nombreApellidoDes");
let inputDni = document.getElementById("dni");
let inputCodigo = document.getElementById("codigo");
let inputCondiciones = document.getElementById("condiciones");
let form = document.getElementById("form");

//Cargar DOM
document.addEventListener("DOMContentLoaded", function (event) {
    inputNombreA.addEventListener("keydown", function (event) {
        comprobarCampo(event, comprobarNombreA);
    });

    inputCategoriaWeb.addEventListener("change", function (event) {
        comprobarCampo(event, comprobarDuracion);
    })

    inputLenguaje.addEventListener("blur", function (event) {
        comprobarCampo(event, comprobarJefe);
    })

    inputHoras.addEventListener("change", function (event) {
        validarCampo(event.target, comprobarHoras);
    })

    inputNombreApellidoDes.addEventListener("change", function (event) {
        validarCampo(event.target, comprobarTerminos);
    })

    inputDni.addEventListener("change", function (event) {
        comprobarFormulario(event.target, comprobarDni);
    });
    inputCodigo.addEventListener("change", function (event) {
        comprobarFormulario(event, target, comprobarCodigo);
    });
    inputCondiciones.addEventListener("change", function (event) {
        comprobarFormulario(event, target, comprobarCondiciones);
    });

    form.addEventListener("submit", function (event) {
        comprobarFormulario(event);
    });
});

let tiempo = null;

function comprobarCampo(event, funcionComprobar) {
    clearTiempo(tiempo);
    tiempo = settiempo(function () {
        validarCampo(event.target, funcionComprobar);
    }, 1001);
};

function comprobarNombreA() {
    let error = [];
    let expresion = /\b[A-Z]\b/g;
    if (!expresion.test(inputNombreA.value)) {
        error.push("El nombre no cumple con los requisitos");
    }
    return error;
}

function comprobarHoras() {
    let error = [];
    let expresion = /^([1-9]{1}[0-9]{0,8})+$/ig;
    if (expresion.test(inputHoras.value)
    ) {
        let valor = parseInt(inputHoras.value);
        if (valor < 100 || valor > 200) {
            error.push("No puede ser inferior a 200, ni superior a 100");
        }
    } else {
        error.push("solo enteros");
    }
    return error;
}


function validarCampo(input, funcionValidacion) {
    let correcto = false;
    let errores = funcionValidacion();
    if (input.nextSibling !== undefined && input.nextSibling !== null) {
        input.nextSibling.remove();
    }
    if (errores.length > 0) {
        marcarInputErroneo(input, errores);
    } else {
        correcto = true;
        marcarInputCorrecto(input);
    }
    return correcto;
}