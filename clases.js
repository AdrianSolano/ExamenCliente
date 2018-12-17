class Pagina{
	constructor(nombreAplWeb,codigo,nomApeDes,tema,lenguaje){
        this.nombreAplWeb = nombreAplWeb;
        this.codigo = codigo;
        this.nomApeDes = nomApeDes;
        this.tema = tema;
        this.lenguaje = lenguaje;
	}
	
	get nombreAplWeb(){
		return this._nombreAplWeb;
	}

	set nombreAplWeb(nombreAplWeb){
		this._nombreAplWeb = nombreAplWeb;
    }

    get codigo(){
		return this._codigo;
	}

	set codigo(codigo){
		this._codigo = codigo;
    }

    get nomApeDes(){
		return this._nomApeDes;
	}

	set nomApeDes(nomApeDes){
		this._nomApeDes = nomApeDes;
    }

    get tema(){
		return this._tema;
	}

	set tema(tema){
		this._tema = tema;
    }

    get lenguaje(){
		return this._lenguaje;
	}

	set lenguaje(lenguaje){
		this._lenguaje = lenguaje;
    }
    


	mostrarHTML(nHTML){
		let cuerpo = document.createElement('div');
        cuerpo.className = 'appWeb';
        
		let nombreAplWeb = document.createElement('h1');
		nombreAplWeb.innerHTML = this.nombreAplWeb; 
		let codigo = document.createElement('a');
        codigo.innerHTML = this.codigo;
        let nomApeDes = document.createElement('i');
        nomApeDes.innerHTML = this.nomApeDes;
		let tema = document.createElement('p');
        tema.innerHTML = this.tema;
        tema.className("azul");
        let lenguaje = document.createElement('p');
        lenguaje.innerHTML = this.lenguaje;
        lenguaje.className("naranja")
        
		cuerpo.append(nombreAplWeb);
        cuerpo.append(codigo);
        cuerpo.append(nomApeDes);
        cuerpo.append(tema);
		nHTML.appendChild(cuerpo);
	}
}
