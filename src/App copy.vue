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

</style>
