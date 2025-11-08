class Persona {
  static _conteo = 0;

    static get conteo() {
        return Persona._conteo;
    }

    static mensaje() {
        console.log('Hola a todos soy un metodo estatico');
    }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida;
  }

  get getComidaFavorita() {
    return this.comida;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre}`);
  }
}


class Heroe extends Persona{
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        super(nombre,codigo,frase);
        this.clan = 'Avengers'
    }

    quienSoy () {
        super.quienSoy()
    }
}


const spiderman = new Heroe("Peter", "Spiderman", "Soy un heroe");
console.log(spiderman);
