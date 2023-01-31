import '@picocss/pico/scss/pico.scss'
import './style.scss'

import plusIcon from './icons/plusIcon.svg'
import refreshIcon from './icons/refreshIcon.svg'
import arrowDown from './icons/arrowDown.svg'

document.querySelector('#app').innerHTML = `
  <div class="main-container">
    <div class="grid newGame">
        <h2>
          <span id="newGame" class="button">
            <img src=${plusIcon} alt="Plus"/>NEW GAME
          </span>
        </h2>
    </div>
    
    <div class="grid dice-container">
      <div id="player1">1</div>
      <div id>
        2
      </div>
      <div id="player2">3</div>
    </div>
    
    <div class="grid">
      <div class="currentPoints">
        Current Points
      </div>
      <div class="buttonWrapper">
        <h2 class="spacer button">
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
      <div class="currentPoints">
        Current points
      </div>
    </div>
  </div>
  
  <div class="player p1"></div>
  <div class="player p2"></div>
`

setupCounter(document.querySelector('#counter'))
