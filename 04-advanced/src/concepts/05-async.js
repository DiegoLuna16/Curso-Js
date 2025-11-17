import { heroes } from "../data/heroes";

export const asyncComponent = (element) => {

    console.log('asyncComponent');

    const renderHero = (value) => {
        element.innerHTML = value
    }

    const id1 = '5d86371fd55e2e2a30fe1ccs4'
    findHero(id1)
        .then(renderHero)
        .catch(err => renderHero(err))
}

const findHero = async(id) => {
    const hero =  heroes.find(hero => hero.id === id);

    if(!hero) {
        throw `hero with id ${id} not found!`
    }

    return hero.name;

    }