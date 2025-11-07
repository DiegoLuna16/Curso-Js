// 2C = Two of Clubs 
// 2D = Two of Diamonds 
// 2h = Two of Hearts 
// 2s = Two of Spades 

let deck = [];
const tipos = ['C','D','H','S']
const especiales = ['A','J','Q','K']

const crearDeck = () => {
    for (let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo)
        }
    }
    for(let tipo of tipos) {
        for( let especial of especiales){
            deck.push(tipo + especial)
        }
    }
    deck = _.shuffle(deck);
    return deck;

}

crearDeck()

// Esta funcion me permite tomar una carta
const pedirCarta = () => {

    if (deck.length === 0 ){
        throw 'No hay cartas en el deck'
    }
    return deck.pop()
}

pedirCarta()

