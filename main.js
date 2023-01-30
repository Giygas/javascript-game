import '@picocss/pico/scss/pico.scss'
import './style.scss'
// import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="player p1">
    asdf
  </div>
  <div class="player p2">
    asdf
  </div>
`

setupCounter(document.querySelector('#counter'))
