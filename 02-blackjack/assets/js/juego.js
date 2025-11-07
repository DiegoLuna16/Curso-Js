// 2C = Two of Clubs
// 2D = Two of Diamonds
// 2h = Two of Hearts
// 2s = Two of Spades

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias HTML
const btnPedir = document.querySelector("#btnPedir");
const puntosHTML = document.querySelectorAll("small");

const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tipos) {
    for (let especial of especiales) {
      deck.push(tipo + especial);
    }
  }
  deck = _.shuffle(deck);
  return deck;
};

// Esta funcion me permite tomar una carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  return deck.pop();
};

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

crearDeck();

// Eventos

btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  puntosJugador += valorCarta(carta);
  puntosHTML[0].innerHTML = `<strong>${puntosJugador}</strong>`
});
