import '@picocss/pico/scss/pico.scss'
import './style.scss'

import plusIcon from './icons/plusIcon.svg'
import refreshIcon from './icons/refreshIcon.svg'
import arrowDown from './icons/arrowDown.svg'

document.querySelector('#app').innerHTML = `
  <div class="options">
    <h2>
      <span id="newGame" class="button">
        <img src=${plusIcon} alt="Plus"/>NEW GAME
      </span>
    </h2>
    
    <div class="dice"></div>
    
    <h2 class="spacer">
      <span id="roll" class="button">
        <img src=${refreshIcon} alt="Plus"/>ROLL
      </span>
    </h2>
    
    <h2>
      <span id="hold" class="button">
        <img src=${arrowDown} alt="Plus"/>HOLD
      </span>
    </h2>
  </div>
  
  <div class="player p1">
    
  </div>
  <div class="player p2">
    
  </div>
`

setupCounter(document.querySelector('#counter'))
