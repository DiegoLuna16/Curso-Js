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

const diego = new Persona("Diego", "Luna", "Helloo");
console.log(diego);
diego.quienSoy();
diego.setComidaFavorita = "Bolas de Arroz";
console.log(diego.getComidaFavorita);
console.log(Persona._conteo);
