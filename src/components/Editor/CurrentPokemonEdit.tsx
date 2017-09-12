import * as React from 'react';
import { speciesToNumber, getSpriteIcon } from '../../utils';
import { CurrentPokemonInput } from './CurrentPokemonInput';


export const CurrentPokemonEdit = () => (
  <div className='current-pokemon'>
    <span>
      <img className='current-pokemon-image' alt='Current Pokemon being edited' src={getSpriteIcon('Arceus')} />
      <label className='status-wrapper'>
        <span>Status</span>
        <select>
          <option selected>Team</option>
          <option>Boxed</option>
          <option>Dead</option>
        </select>
      </label>
    </span>

    <CurrentPokemonInput
      labelName='Species'
      inputName='species'
      value={'Arceus'}
      placeholder='Missing No.'
      type='text'
    />
    <span className='current-pokemon-input-wrapper current-pokemon-nickname'>
      <label>Nickname</label>
      <input type='text' value='Mr. Sparkles' />
    </span>
    <span className='current-pokemon-input-wrapper'>
      <label>Level</label>
      <input type='text' value='100' />
    </span>
    <span className='current-pokemon-input-wrapper'>
      <label>Met Location</label>
      <input type='text' value='Spear Pillar' />
    </span>
    <span className='current-pokemon-input-wrapper'>
      <label>Met Level</label>
      <input type='text' value='80' />
    </span>
    <span className='current-pokemon-input-wrapper'>
      <label>Gender</label>
      <div className='pt-select'>
          <select>
            <option>Male</option>
            <option>Female</option>
            <option>Neutral</option>
          </select>
        </div>
    </span>
    <span className='current-pokemon-input-wrapper'>
      <label>Nature</label>
      <input type='text' value='Sassy' />
    </span>
    <span className='current-pokemon-input-wrapper'>
      <label>Ability</label>
      <input type='text' value='Multitype' />
    </span>
    <span className='current-pokemon-input-wrapper'>
      <label>Moves</label>
      <input type='text' value='Recover, Roar of Time, Spatial Rend, Shadow Force' />
    </span>
    <br/>
    <button className='pt-button pt-fill pt-intent-primary current-pokemon-more'>More <span className='pt-icon-symbol-triangle-down' /></button>
    <br/>
    <span className='current-pokemon-input-wrapper'>
      <label>Forme</label>
      <input type='text' value='Normal Plate' />
    </span>
    <span className='current-pokemon-input-wrapper'>
      <label>Shiny</label>
      <input type='checkbox' />
    </span>
    <span className='current-pokemon-input-wrapper'>
      <label>Champion</label>
      <input type='checkbox' />
    </span>
    <span className='current-pokemon-input-wrapper'>
      <label>Types</label>
      <div className='types-wrapper'>
        <div className='pt-select'>
          <select>
            <option>Normal</option>
          </select>
        </div>
        <div className='pt-select'>
          <select>
            <option>-------</option>
          </select>
        </div>
      </div>
    </span>
  </div>
);