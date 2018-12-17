"use strict";

var inputNombreA = document.getElementById("nombreA");
var inputCategoriaWeb = document.getElementById("categoriaWeb");
var inputLenguaje = document.getElementById("lenguaje");
var inputHoras = document.getElementById("horas");
var inputNombreApellidoDes = document.getElementById("nombreApellidoDes");
var inputDni = document.getElementById("dni");
var inputCodigo = document.getElementById("codigo");
var inputCondiciones = document.getElementById("condiciones");
var form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", function (event) {
    inputNombreA.addEventListener("keydown", function (event) {
        comprobarInput(event, comprobarNombreA);
    });

    inputCategoriaWeb.addEventListener("change", function (event) {
        validarCampo(event.target, comprobarCategoria);
    });

    inputLenguaje.addEventListener("blur", function (event) {
        comprobarInput(event, comprobarLenguaje);
    });

    inputHoras.addEventListener("change", function (event) {
        validarCampo(event.target, comprobarHoras);
    });

    inputNombreApellidoDes.addEventListener("change", function (event) {
        validarCampo(event.target, comprobarNombreApellidoDes);
    });

    inputDni.addEventListener("change", function (event) {
        validarCampo(event.target, comprobarDni);
    });
    inputCodigo.addEventListener("change", function (event) {
        validarCampo(event.target, comprobarCodigo);
    });
    inputCondiciones.addEventListener("click", function (event) {
        comprobarInput(event, target, comprobarCondiciones);
    });

    form.addEventListener("submit", function (event) {
        comprobarFormulario(event);
    });
});

var tiempo = null;

function comprobarInput(event, funcionComprobar) {
    clearTimeout(tiempo);
    tiempo = setTimeout(function () {
        validarCampo(event.target, funcionComprobar);
    }, 1001);
};

function comprobarNombreA() {
    var error = [];
    var expresion = /^[A-Z]+$/g;
    if (!expresion.test(inputNombreA.value)) {
        error.push("El nombre no cumple con los requisitos");
    }
    return error;
}
function comprobarLenguaje() {
    var error = [];
    var expresion = /^[a-zA-Z0-9#]+$/g;
    if (!expresion.test(inputLenguaje.value)) {
        error.push("El lenguaje no cumple con los requisitos");
    }
    return error;
}

function comprobarHoras() {
    var error = [];
    var expresion = /^([1-9]{1}[0-9]{0,8})+$/ig;
    if (expresion.test(inputHoras.value)) {
        var valor = parseInt(inputHoras.value);
        if (valor > 100) {
            error.push("No puede ser inferior a 200, ni superior a 100");
        }
    } else {
        error.push("solo enteros");
    }
    return error;
}

function comprobarNombreApellidoDes() {
    var error = [];
    var expresion = /^[A-z]+[ ]+[A-z]+[ ]+[A-z]+$/g;
    if (!expresion.test(inputNombreApellidoDes.value)) {
        error.push("El nombre y apellido no cumple con los requisitos");
    }
    return error;
}

function comprobarCategoria() {
    var error = [];
    if (inputCategoriaWeb.value === "") {
        error.push("Seleccione una categoria");
    }
    return error;
}

function comprobarDni() {
    var error = [];
    var expresion = /[0-9]{7,8}\-?[A-z]{1}\b/g;
    if (!expresion.test(inputDni.value)) {
        error.push("DNI invalido Estilo de DNI valido=12345678-Z");
    }
    return error;
}
function comprobarCodigo() {
    var error = [];
    var expresion = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;
    if (!expresion.test(inputCodigo.value)) {
        error.push("Introduca esto #F0F0F0");
    }
    return error;
}

function comprobarCondiciones() {
    var error = [];
    if (!inputCondiciones.checked) {
        error.push("Acepte los terminos de condicion");
    }
    return error;
}

function validarCampo(input, funcionValidacion) {
    var correcto = false;
    var errores = funcionValidacion();
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

function marcarInputErroneo(input, errores) {
    input.classList.remove("valido");
    input.classList.add("invalido");
    var padre = input.parentNode;

    var divErrores = document.createElement("div");
    divErrores.classList.add("error");
    padre.appendChild(divErrores);

    errores.forEach(function (error) {
        var divError = document.createElement("div");
        divError.innerHTML = error;
        divErrores.appendChild(divError);
    });
}

function marcarInputCorrecto(input) {
    input.classList.remove("invalido");
    input.classList.add("valido");
}

function comprobarFormulario(event) {
    event.preventDefault();
    var error = [];
    error.push(validarCampo(inputNombreA, comprobarNombreA));
    error.push(validarCampo(inputNombreApellidoDes, comprobarNombreApellidoDes));
    error.push(validarCampo(inputCategoriaWeb, comprobarCategoria));
    error.push(validarCampo(inputLenguaje, comprobarLenguaje));
    error.push(validarCampo(inputHoras, comprobarHoras));
    error.push(validarCampo(inputCondiciones, comprobarCondiciones));
    error.push(validarCampo(inputDni, comprobarDni));
    error.push(validarCampo(inputCodigo, comprobarCodigo));

    if (error.some(function (x) {
        return !x;
    })) {
        alert("Fallo en su formulario");
    } else {
        var _form = document.getElementById("form");
        _form.submit();
    }
}