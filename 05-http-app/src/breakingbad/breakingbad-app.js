const fetchCharacter = async () => {
  const value = getRandom1to12();
  const res = await fetch(
    "https://www.breakingbadapi.com/api/characters/" + value
  );

  const data = await res.json()
  return data;
};

/**
 *
 * @param {HTMLElement} element
 */
export const BreakingBadApp = async(element) => {
  document.querySelector("#app-title").innerHTML = "BreakingBad App";
  element.innerHTML = "Loading...";
  const data = await fetchCharacter()
  const characterLabel = document.createElement('blockquote')
  const nicknameLabel = document.createElement('h3')
  const nextCharacterButton = document.createElement('button')
  nextCharacterButton.innerText = 'Next Character'
  
  const renderCharacter = (character) => {
      characterLabel.innerHTML = `Name: ${character.name}`;
      nicknameLabel.innerHTML = `Nickname: ${character.nickname}`
      
      element.replaceChildren(characterLabel,nicknameLabel,nextCharacterButton);
      
    }
    
    renderCharacter(await fetchCharacter())
    
    nextCharacterButton.addEventListener('click', async() => {
        element.innerHTML = "Loading...";
        const character = await fetchCharacter()
        renderCharacter(character)
    })
};

const getRandom1to12 = () => {
  return Math.floor(Math.random() * 12) + 1;
};
