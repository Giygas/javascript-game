<script>
// import CurrentPoints from './components/CurrentPoints.vue'
import Dice from './components/Dice.vue'
import PlayerDash from './components/PlayerDash copy.vue';

export default {
  name: 'App',
  data() {
    return {
      // If the current player is player 1
      p1Current: true,
      // Points of the current round
      roundPoints: 120
    }
  },
  components: {
    Dice,
    PlayerDash,
  },
  methods: {
    addPoints(currentPoints) {
      // Add points to the current player and change player
      if (this.p1Current) {
        this.p1Points += currentPoints 
        this.points1 = 0
      } else {
        this.p2Points += currentPoints
        this.points2 = 0
      }
      this.p1Current = !this.p1Current
    },
    
    roll() {
      this.$refs.dice.rollDice()
    },
    
    hold() {
      this.$refs.dice.addTotal()
    },
    
    roundPartial(partial) {
      // #TODO refactor CurrentPoints into PlayerDash
      if (this.p1Current) {
        this.points1 = partial
      } else {
        this.points2 = partial
      }
    },
    
    restartGame() {
      this.p1Points = 0,
      this.p2Points = 0,
      this.p1Current = true,
      this.points1 = 0,
      this.points2 = 0
    },
  
  }
}
</script>

<template>
  <div class="main-container">
    <PlayerDash 
      :pNumber="1"
      :points="10"
      :p1Plays="p1Current"
    />
    <div class="options-container">
      
      <div class="newGame">
        <h2>
          <span id="newGame" class="button" @click="restartGame">
            <img src="./assets/plusIcon.svg" alt="Plus"/>NEW GAME
          </span>
        </h2>
      </div>
        
      <div id="dice">
        <Dice @finished="addPoints" @partial="roundPartial" ref="dice"/>
      </div>
      
      <div class="roll">
        <h2 class="spacer button">
          <span id="roll" class="button" @click="roll">
            <img src="./assets/refreshIcon.svg" alt="Plus"/>ROLL
          </span>
        </h2>
      </div>
      
      <div class="hold">
        <h2>
          <span id="hold" class="button" @click="hold">
            <img src="./assets/arrowDown.svg" alt="Plus"/>HOLD
          </span>
        </h2>
      </div>
    </div>
    
    
    <PlayerDash 
      :pNumber="2"
      :points="roundPoints"
      :p1Plays="p1Current"
    />
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  background-color: #ffffff;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  position: absolute;
  
  span {
    display: flex;
    align-items: baseline;
    
    &.button {
      cursor: pointer;
      padding: 2rem 0rem;
    }
  }
    
  .options-container {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    height:100%;
    min-width: 200px;
    width:fit-content;
    z-index:1;
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
    margin-top: 2rem;
    justify-content: center;
    display: flex;
  }
  
  .roll {
    padding-top: 25rem;
    justify-content: center;
    display: flex;
  }
  
  .hold {
    justify-content: center;
    display: flex;
  }
}

</style>
