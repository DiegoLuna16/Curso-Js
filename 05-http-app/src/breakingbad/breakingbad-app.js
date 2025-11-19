const fetchCharacter = async () => {
  const value = getRandom1to12();
  const res = await fetch(
    "https://www.breakingbadapi.com/api/characters/" + value
  );

  const data = await res.json()
  return data.name;
};

/**
 *
 * @param {HTMLElement} element
 */
export const BreakingBadApp = async(element) => {
  document.querySelector("#app-title").innerHTML = "BreakingBad App";
  element.innerHTML = "Loading...";
  const data = await fetchCharacter()
  console.log(data );

};

const getRandom1to12 = () => {
  return Math.floor(Math.random() * 12) + 1;
};
