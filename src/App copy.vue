<script>
import Dice from './components/Dice.vue'
import PlayerDash from './components/PlayerDash copy.vue';

export default {
  name: 'App',
  data() {
    return {
      // If the current player is player 1
      p1Current: true,
      // Points of the current round
      roundPoints: 0,
    }
  },
  components: {
    Dice,
    PlayerDash,
  },
  methods: {
    
    roll() {
      // This should update the currentPoints in the correct player
      this.$refs.dice.rollDice()
    },
    
    hold() {
      // Calls the method in players to add the current points to player
      // total
      this.$refs.player1.addTotal()
      this.$refs.player2.addTotal()
      // Doesn't works if I use this.$refs.player.addTotal() for both of
      // the players and managing the current player in the component
      this.$refs.dice.endRound()
      this.changePlayer()
    },
    
    changePlayer() {
      // Changes player and set the round points to 0
      this.roundPartial(0)
      this.p1Current = !this.p1Current
    },
    
    roundPartial(partial) {
      // Send message to PlayerDash with the current round points
      this.roundPoints = partial
    },
    
    restartGame() {
      this.$refs.player.reset()
      this.p1Current = true
    },
  
  }
}
</script>

<template>
  <div class="main-container">
    <PlayerDash 
      :pNumber="1"
      :p1Plays="p1Current"
      :roundPoints="roundPoints"
      ref="player1"
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
        <Dice @partial="roundPartial" @lose="changePlayer" ref="dice"/>
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
      :p1Plays="p1Current"
      :roundPoints="roundPoints"
      ref="player2"
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
