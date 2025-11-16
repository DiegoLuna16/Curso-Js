import { heroes } from "../data/heroes";

export const callbacksComponent = (element) => {
  console.log("callbacksComponent");

  const id = "5d86371fd55e2e2a30fe1ccb";
  const id2 = "5d86371f97c29d020f1e1f6d";

  findHero(id, (error, hero1) => {
    // element.innerHTML = hero?.name || 'No hay heroe';
    if (error) {
      element.innerHTML = error;
      return;
    }
    findHero(id2, (error, hero2) => {
      if (error) {
        element.innerHTML = error;
        return;
      }
      element.innerHTML = `${hero1.name} / ${hero2.name}`
    });
  });
};

const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) {
    callback(`Hero with id ${id} not found!`);
    return; //undefined
  }

  callback(null, hero);
};
