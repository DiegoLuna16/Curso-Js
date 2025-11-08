class Persona {

    nombre = '';
    codigo = '';
    frase = '';
    
    constructor(nombre,codigo,frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}`);
    }
}

const diego = new Persona('Diego', 'Luna', 'Helloo');
console.log(diego);
diego.quienSoy()