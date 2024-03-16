import getData from "../utils/getData";

// Home page template with list of characters
const homePage = async () => {

  const characters = await getData();

  const view = `
    <div class="characters">
      ${characters.items.map(character => `
        <article class="character-item">
          <a href="#/${character.id}">
            <img src="${character.image}" alt="${character.name}"/>
            <h2>${character.name}</h2>
          </a>
        </article>
      `).join('')}
    </div>
  `
  return view
}

export default homePage;