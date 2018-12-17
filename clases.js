class Pagina{
	constructor(nombreAplWeb,codigo,nomApeDes,tema){
        this.nombreAplWeb = nombreAplWeb;
        this.codigo = codigo;
        this.nomApeDes = nomApeDes;
        this.tema = tema;
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
    


	mostrarHTML(nodoHTML){
		let cuerpo = document.createElement('div');
        cuerpo.className = 'appWeb';
        
		let nombreAplWeb = document.createElement('h1');
		nombreAplWeb.innerHTML = this.nombreAplWeb; 
		let codigo = document.createElement('a');
        codigo.innerHTML = this.codigo;
        let nomApeDes = document.createElement('i');
        nomApeDes.innerHTML = this.nomApeDes;
		
		let descripcion = document.createElement('p');
        descripcion.innerHTML = this.descripcion;
        
		cuerpo.append(nombreAplWeb);
        cuerpo.append(codigo);
        cuerpo.append(nomApeDes);
		nodoHTML.appendChild(cuerpo);
	}
}
