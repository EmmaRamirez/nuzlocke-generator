import * as uuid from 'uuid/v4';

function saveData (data) {
  localStorage.setItem('data', JSON.stringify(data));
}

function loadData() {
  return JSON.parse(localStorage.getItem('data'));
}

function renderCurrentPokemon(pokemon) {
  let entries = '';
  for (var i = 0; i < pokemon.length; i++) {
    var poke = pokemon[i];
    entries += `
      <div class='current-entries'>
        <div class='pokemon-entry'>
          <i class='fa fa-bars entry-sort-icon'></i>
          <img src='http://serebii.net/pokedex-sm/icon/${poke.num}.png'>
          <div class='entry-nickname'>${poke.nickname}</div> <div class='entry-species'>${poke.species}</div> <div class='entry-level'>lv. ${poke.level}</div>
          <i class='fa fa-trash entry-delete-icon'></i>
      </div>
    `;
  }
  return entries;
}

function editPokemonHandler(pokemon, target) {

}


function addNewPokemonHandler(elt:HTMLElement, target:HTMLElement) {
  elt.addEventListener('click', () => {
    target.innerHTML = `
      <div class='add-new-entry'>
            <div class='add-new-entry-label'>New Pokémon</div>
            <div class='add-new-entry-inner'>
            <label>
              <span class='context'>Species</span>
              <select>
                <option>Bulbasaur</option>
              </select>
            </label>

            <label>
              <span class='context'>Nickname</span>
              <input type='text' size='12'>
            </label>

            <label>
              <span class='context'>Status</span>
              <select>
                <option>Team</option>
                <option>Boxed</option>
                <option>Dead</option>
                <option>Don't Show</option>
              </select>
            </label>

            <label>
              <span class='context'>Level</span>
              <input type='number' step='1' min='1' value='5' size='3' style='text-align: right; width:64px'>
            </label>

            <label>
              <span class='context'>Gender</span>
              <select>
                <option>Genderless</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </label>

            <label>
              <span class='context'>Met</span>
              <input type='text' placeholder='location'>
              <input type='text' placeholder='level' style='width:64px'>
            </label>

            <label>
              <span class='context'>Nature</span>
              <input type='text'>
            </label>
            
            <label>
              <span class='context'>Ability</span>
              <input type='text'>
            </label>

            <label>
              <span class='context'>Moves</span>
              <span class='entry-move'>
                <span class='context'>Move 1</span>
                <input type='text' size='16'>
              </span>
              <span class='entry-move'>
                <span class='context'>Move 2</span>
                <input type='text' size='16'>
              </span>
              <span class='entry-move'>
                <span class='context'>Move 3</span>
                <input type='text' size='16'>
              </span>
              <span class='entry-move'>
                <span class='context'>Move 4</span>
                <input type='text'size='16'>
              </span>
            </label>

            <label>
              <span class='context'>Cause of Death</span>
              <input type='text'>
            </label>

            <div class='other-options-expander'><i class='fa fa-plus'></i> Other Options</div>
            <div class='other-options'>
              <label>
                <div class='context'>Forme</div>
                <input type='text'>
              </label>
              <label>
                <div class='context'>Item</div>
                <select>
                  <option>None</option>
                  <option>Miracle Seed</option>
                </select>
              </label>
              <label>
                <div class='context'>Custom Image</div>
                <input type='text'>
              </label>
              <label>
                <div class='context'>Custom Sprite</div>
                <input type='text'>
              </label>
              <label>
                <div class='context'>Custom Types</div>
                <select>
                  <option>Grass</option>
                </select>
                <select>
                  <option>Poison</option>
                </select>
              </label>
              <label>
                <input type='checkbox'> Shiny
              </label>
              <label>
                <input type='checkbox'> Champion
              </label>

            </div>

              


            
            <br>

            <button onclick='confirmNewPokemon' class='confirm-btn'>Confirm</button>

            </div>

          </div>
    `;
  });
}

function confirmNewPokemon() {
  alert('it does a thing');
}

function qs(element) {
  return document.querySelector(element);
}


document.addEventListener('readystatechange', () => {
  let data:any = {
    pokemon: [
      {
        _id: uuid(),
        species: 'Bulbasaur',
        nickname: 'Bruteroot',
        level: 5,
        num: '001',
      }
    ]
  };

  if (localStorage.getItem('data') != null) {
    data = loadData();
  }

  addNewPokemonHandler(qs('.add-new-pokemon'), qs('.new-pokemon-space'));
  
  qs('.current-pokemon-space').innerHTML = renderCurrentPokemon(data.pokemon);

});