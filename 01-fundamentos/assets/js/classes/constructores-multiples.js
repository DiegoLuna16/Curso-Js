class Persona {

    static porObjeto( {nombre,apellido,pais} ){
        return new Persona(nombre,apellido,pais)
    }

    constructor(nombre,apellido,pais){ 
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    getInfo(){
        console.log(`info: ${this.nombre},${this.apellido},${this.pais}`);
    }
}

const persona1 = new Persona('Diego','Luna','Mexico')

persona1.getInfo()

const luis = {
    nombre: 'Luis',
    apellido: 'Hernandez',
    pais: 'Mexico'
}
const persona2 = Persona.porObjeto(luis)
persona2.getInfo()

