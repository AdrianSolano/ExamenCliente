class Pagina {
    constructor(nombreAplWeb, codigo, nomApeDes, tema, lenguaje) {
        this.nombreAplWeb = nombreAplWeb;
        this.codigo = codigo;
        this.nomApeDes = nomApeDes;
        this.tema = tema;
        this.lenguaje = lenguaje;
    }

    get nombreAplWeb() {
        return this._nombreAplWeb;
    }

    set nombreAplWeb(nombreAplWeb) {
        this._nombreAplWeb = nombreAplWeb;
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(codigo) {
        this._codigo = codigo;
    }

    get nomApeDes() {
        return this._nomApeDes;
    }

    set nomApeDes(nomApeDes) {
        this._nomApeDes = nomApeDes;
    }

    get tema() {
        return this._tema;
    }

    set tema(tema) {
        this._tema = tema;
    }

    get lenguaje() {
        return this._lenguaje;
    }

    set lenguaje(lenguaje) {
        this._lenguaje = lenguaje;
    }

    mostrarHTML(nHTML) {
        let cuerpo = document.createElement('div');
        cuerpo.className = 'appWeb';
        cuerpo.style.border = 'solid';

        let nombreAplWeb = document.createElement('h1');
        nombreAplWeb.innerHTML = this.nombreAplWeb;
        let codigo = document.createElement('a');
        codigo.innerHTML = this.codigo;
        codigo.className="negrita";
        let nomApeDes = document.createElement('i');
        nomApeDes.innerHTML = this.nomApeDes;
        let tema = document.createElement('p');
        tema.innerHTML = this.tema;
        tema.className="azul";
        let lenguaje = document.createElement('p');
        lenguaje.innerHTML = this.lenguaje;
        lenguaje.className="naranja";

        cuerpo.append(nombreAplWeb);
        cuerpo.append(codigo);
        cuerpo.append(nomApeDes);
        cuerpo.append(tema);
        cuerpo.append(lenguaje);
        nHTML.appendChild(cuerpo);
    }


}


let pag1 = new Pagina(" Pax Romana ", " #F0F0F0 ", " Adrian Solano Fernadez ", " VideoGumes ", "PeAchePe");
let divWapo = document.getElementById("kurwa");
pag1.mostrarHTML(divWapo);

let pag2 = new Pagina(" Memeverso ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag2.mostrarHTML(divWapo);

let pag3 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag3.mostrarHTML(divWapo);

let pag4 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag4.mostrarHTML(divWapo);

let pag5 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag5.mostrarHTML(divWapo);

let pag6 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag6.mostrarHTML(divWapo);

let pag7 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag7.mostrarHTML(divWapo);

let pag8 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag8.mostrarHTML(divWapo);

let pag9 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag9.mostrarHTML(divWapo);

let pag10 = new Pagina(" relleno ", " #F1F0F0 ", " Alcampo Mercadona Carrefour ", " Deportes ", "Jeve");

pag10.mostrarHTML(divWapo);