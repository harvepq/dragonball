import getHash from "../utils/getHash"
import getData from "../utils/getData"

const characterPage = async () => {
  const id = await getHash();
  const character = await getData(id)
  console.log(character)

  const view = `
    <div class="caracter-inner">
      <article class="character-card">
        <img src="${character.image}"/>
        <h2>${character.name}</h2>
      </article>
      <article class="character-details">
        <h3>Ki: ${character.ki}</h3>
        <h3>MaxKi: ${character.maxKi}</h3>
        <h3>Race: ${character.race}</h3>
        <h3>Gender: ${character.gender}</h3>
        <h3>Description: ${character.description}</h3>
        <h3>Afiliacion: ${character.affiliation}</h3>
        <h3>
          <a href="#">
          Planeta de origen: ${character.originPlanet.name}
          </a>
        </h3>
        ${character.transformations.length === 0 ? '' : `
          <h3>Transformaciones</h3>
          ${character.transformations.map(transformation => `
            <div>
              <img src="${transformation.image}" />
              <h2>${transformation.name}</h2>
              <h2>${transformation.ki}</h2>
            </div>
          `).join('')}
        `}
      </article>
    </div>
  `
  return view
}

export default characterPage