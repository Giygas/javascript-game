import '@picocss/pico/scss/pico.scss'
import './style.scss'

import plusIcon from './plusIcon.svg'

document.querySelector('#app').innerHTML = `
  <div class="game">
    <h2>
      <span id="newGame">
        <img src=${plusIcon} alt="Plus"/>NEW GAME
      </span>
    </h2>
  </div>
  
  <div class="player p1">
    
  </div>
  <div class="player p2">
    
  </div>
`

setupCounter(document.querySelector('#counter'))
