(() => {
  "use strict";

  let deck = [];
  const tipos = ["C", "D", "H", "S"];
  const especiales = ["A", "J", "Q", "K"];

  let puntosJugador = 0,
    puntosComputadora = 0;

  // Referencias HTML
  const btnPedir = document.querySelector("#btnPedir");
  const btnDetener = document.querySelector("#btnDetener");
  const btnIniciar = document.querySelector("#btnIniciar");
  const puntosHTML = document.querySelectorAll("small");
  const cartasJugagorHTML = document.querySelector("#jugador-cartas");
  const cartasComputadoraHTML = document.querySelector("#computadora-cartas");

  const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }
    for (let tipo of tipos) {
      for (let especial of especiales) {
        deck.push(especial + tipo);
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

  const turnoComputadora = (puntosMinimos) => {
    do {
      const carta = pedirCarta();

      puntosComputadora += valorCarta(carta);
      puntosHTML[1].innerHTML = `<strong>${puntosComputadora}</strong>`;

      const cartaHTML = document.createElement("img");
      cartaHTML.classList.add("carta");
      cartaHTML.src = `cartas/${carta}.png`;
      cartasComputadoraHTML.append(cartaHTML);

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie gana ");
      } else if (puntosMinimos > 21) {
        alert("Computadora gana");
      } else if (
        puntosComputadora > puntosMinimos &&
        puntosComputadora < 21 &&
        puntosMinimos < 21
      ) {
        alert("Computadora gana");
      } else if (
        puntosComputadora < puntosMinimos &&
        puntosComputadora < 21 &&
        puntosMinimos < 21
      ) {
        alert("Jugador gana");
      } else if (puntosComputadora > 21) {
        alert("Jugador gana");
      }
    }, 1000);
  };

  crearDeck();
  // Eventos

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerHTML = `<strong>${puntosJugador}</strong>`;

    const cartaHTML = document.createElement("img");
    cartaHTML.classList.add("carta");
    cartaHTML.src = `cartas/${carta}.png`;
    cartasJugagorHTML.append(cartaHTML);

    if (puntosJugador > 21) {
      console.warn("Perdiste");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 0) {
      console.warn("21, genial");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  });

  btnIniciar.addEventListener("click", () => {
    deck = [];
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    cartasComputadoraHTML.innerHTML = "";
    cartasJugagorHTML.innerHTML = "";

    btnPedir.disabled = false;
    btnDetener.disabled = false;
    console.clear();
  });
})();
