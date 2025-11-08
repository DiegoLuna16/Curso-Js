class Persona {
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  set setComidaFavorita (comida) {
    this.comida = comida
  }

  get getComidaFavorita() {
    return this.comida
  }


  quienSoy() {
    console.log(`Soy ${this.nombre}`);
  }
}

const diego = new Persona("Diego", "Luna", "Helloo");
console.log(diego);
diego.quienSoy();
diego.setComidaFavorita = 'Bolas de Arroz'
console.log(diego.getComidaFavorita);

