<script>
import CurrentPoints from './components/CurrentPoints.vue'
import Dice from './components/Dice.vue'
import PlayerDash from './components/PlayerDash.vue';

export default {
  name: 'App',
  data() {
    return {
      p1Points: 0,
      p2Points: 0,
      p1Current: true,
    }
  },
  components: {
    CurrentPoints,
    Dice,
    PlayerDash,
  },
  methods: {
    addPoints(currentPoints) {
      // Add points to the current player and change player
      if (this.p1Current) {
        this.p1Points += currentPoints 
      } else {
        this.p2Points += currentPoints
      }
      
      this.p1Current = !this.p1Current
      console.log("p1: " + this.p1Points)
      console.log("p2: " + this.p2Points)
    }
  },
}
</script>

<template>
  <div class="main-container">
        <div class="grid newGame">
            <h2>
              <span id="newGame" class="button">
                <img src="./assets/plusIcon.svg" alt="Plus"/>NEW GAME
              </span>
            </h2>
        </div>
        
        <div class="grid dice-container">
          <div id="player1">
            <PlayerDash :pNumber="1"/>
          </div>
          <div id="dice">
            <Dice @finished="addPoints"/>
          </div>
          <div id="player2">
            <PlayerDash :pNumber="2"/>
          </div>
        </div>
        
        <div class="grid">
          <CurrentPoints/>
          <div class="buttonWrapper">
            <h2 class="spacer button">
              <span id="roll" class="button">
                <img src="./assets/refreshIcon.svg" alt="Plus"/>ROLL
              </span>
            </h2>
            <h2>
              <span id="hold" class="button">
                <img src="./assets/arrowDown.svg" alt="Plus"/>HOLD
              </span>
            </h2>
          </div>
          <CurrentPoints/>
        </div>
      </div>
</template>

<style lang="scss" scoped>
.main-container {
  background-color: #ffffff;
  position: absolute;
  padding: 2rem 6rem;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 15px;


  span {
    display: flex;
    align-items: baseline;
    
    &.button {
      cursor: pointer;
      padding: 2rem 0rem;
    }
  }
  
  img {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  
  }
  
  h2{
    font-weight: 300;
    color: black;
    margin: 0;
  }
  
  .newGame {
    justify-content: center;
    display: flex;
  }
  
  .dice-container {
    height: 45vh;
    display: grid;
    grid-template-rows: 1fr;
    padding-bottom: 5rem;
    
    div {
      justify-self: center;
      align-self: center;
    }
    
  }
  
  .buttonWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
}

.main-container::after {
  background: #f7f7f7 ;
  content: '';
  z-index: -1;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  display: block;
  position: absolute;
  border-radius: 15px;
}

</style>
