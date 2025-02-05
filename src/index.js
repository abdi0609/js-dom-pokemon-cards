
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

// Hent HTML-elementene
const cardsContainer = document.querySelector('.cards');

// Funksjon for å lage et kort
function createCard(pokemon) {
  // Lag et nytt kort fra HTML-strukturen
  const card = document.createElement('li');
  card.classList.add('card');
  
  // Sett inn Pokémon-navn
  const title = document.createElement('h2');
  title.classList.add('card--title');
  title.textContent = pokemon.name;
  card.appendChild(title);
  
  // Sett inn Pokémon bilde
  const image = document.createElement('img');
  image.classList.add('card--img');
  image.src = pokemon.sprites.front_default;
  image.width = 256;
  card.appendChild(image);
  
  // Sett inn Pokémon stats
  const statsList = document.createElement('ul');
  statsList.classList.add('card--text');
  
  pokemon.stats.forEach(stat => {
    const statItem = document.createElement('li');
    statItem.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
    statsList.appendChild(statItem);
  });
  
  card.appendChild(statsList);
  
  // Legg til kortet i containeren
  cardsContainer.appendChild(card);
}

// Opprett kort for hver Pokémon i dataene
data.forEach(pokemon => createCard(pokemon));