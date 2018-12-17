'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pagina = function () {
    function Pagina(nombreAplWeb, codigo, nomApeDes, tema, lenguaje) {
        _classCallCheck(this, Pagina);

        this.nombreAplWeb = nombreAplWeb;
        this.codigo = codigo;
        this.nomApeDes = nomApeDes;
        this.tema = tema;
        this.lenguaje = lenguaje;
    }

    _createClass(Pagina, [{
        key: 'mostrarHTML',
        value: function mostrarHTML(nHTML) {
            var cuerpo = document.createElement('div');
            cuerpo.className = 'appWeb';
            cuerpo.style.border = 'solid';

            var nombreAplWeb = document.createElement('h1');
            nombreAplWeb.innerHTML = this.nombreAplWeb;
            var codigo = document.createElement('a');
            codigo.innerHTML = this.codigo;
            codigo.className = "negrita";
            var nomApeDes = document.createElement('i');
            nomApeDes.innerHTML = this.nomApeDes;
            var tema = document.createElement('p');
            tema.innerHTML = this.tema;
            tema.className = "azul";
            var lenguaje = document.createElement('p');
            lenguaje.innerHTML = this.lenguaje;
            lenguaje.className = "naranja";

            cuerpo.append(nombreAplWeb);
            cuerpo.append(codigo);
            cuerpo.append(nomApeDes);
            cuerpo.append(tema);
            cuerpo.append(lenguaje);
            nHTML.appendChild(cuerpo);
        }
    }, {
        key: 'nombreAplWeb',
        get: function get() {
            return this._nombreAplWeb;
        },
        set: function set(nombreAplWeb) {
            this._nombreAplWeb = nombreAplWeb;
        }
    }, {
        key: 'codigo',
        get: function get() {
            return this._codigo;
        },
        set: function set(codigo) {
            this._codigo = codigo;
        }
    }, {
        key: 'nomApeDes',
        get: function get() {
            return this._nomApeDes;
        },
        set: function set(nomApeDes) {
            this._nomApeDes = nomApeDes;
        }
    }, {
        key: 'tema',
        get: function get() {
            return this._tema;
        },
        set: function set(tema) {
            this._tema = tema;
        }
    }, {
        key: 'lenguaje',
        get: function get() {
            return this._lenguaje;
        },
        set: function set(lenguaje) {
            this._lenguaje = lenguaje;
        }
    }]);

    return Pagina;
}();

var pag1 = new Pagina(" Pax Romana ", " #F0F0F0 ", " Adrian Solano Fernadez ", " VideoGumes ", "PeAchePe");
var divWapo = document.getElementById("kurwa");
pag1.mostrarHTML(divWapo);

var pag2 = new Pagina(" Memeverso ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag2.mostrarHTML(divWapo);

var pag3 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag3.mostrarHTML(divWapo);

var pag4 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag4.mostrarHTML(divWapo);

var pag5 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag5.mostrarHTML(divWapo);

var pag6 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag6.mostrarHTML(divWapo);

var pag7 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag7.mostrarHTML(divWapo);

var pag8 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag8.mostrarHTML(divWapo);

var pag9 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag9.mostrarHTML(divWapo);

var pag10 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag10.mostrarHTML(divWapo);