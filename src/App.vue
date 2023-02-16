<script>
  import Dice from "./components/Dice.vue"
  import Player from "./components/Player.vue"

  export default {
    name: "App",
    data() {
      return {
        // If the current player is player 1
        p1Current: true,
        // Points of the current round for each player, so I don't need to
        // do the logic inside the component
        rollP1: 0,
        rollP2: 0,
        // For setting a timeout for clicking the roll button
        disabledRoll: false,
      }
    },
    components: {
      Dice,
      Player,
    },
    methods: {
      roll() {
        // Rolls the dice and sets a timeout for prevent spamming the roll button
        if (!this.disabledRoll) {
          this.disabledRoll = true
          this.$refs.dice.rollDice()
          setTimeout(
            function () {
              this.disabledRoll = false
            }.bind(this),
            1500
          )
        }
      },

      hold() {
        // Adds the current poins in player to his total
        this.$refs.player1.addTotal()
        this.$refs.player2.addTotal()
        // Tried to pass the ref to the player component as this.$refs.player.addTotal()
        // and manage the player that will receive the points in the method
        // but apparently it's not possible to pass the same ref to both
        // elements, only the last component was working and the other one wasn't
        // So I just pass the addTotal to both players and manage the logic inside the method
        this.$refs.dice.resetDice()
        this.changePlayer()
      },

      changePlayer() {
        // Changes player and set the round points to 0
        this.rollP1 = 0
        this.rollP2 = 0
        this.p1Current = !this.p1Current
      },

      diceRolled(rollValue) {
        if (rollValue === 1) {
          this.changePlayer()
        } else {
          // Pass the roll value to the current player
          this.p1Current ? (this.rollP1 = rollValue) : (this.rollP2 = rollValue)
        }
      },

      restartGame() {
        // Reset both players and set the current player to Player 1
        this.$refs.player1.reset()
        this.$refs.player2.reset()
        this.p1Current = true
      },
    },
    watch: {
      rollP1() {
        console.log("p1Current is " + this.rollP1)
      },
    },
  }
</script>

<template>
  <div class="main-container">
    <Player :pNumber="1" :p1Plays="p1Current" :rolled="rollP1" ref="player1" />
    <div class="options-container">
      <div class="newGame">
        <h2>
          <span id="newGame" class="button" @click="restartGame">
            <img src="./assets/plusIcon.svg" alt="Plus" />NEW GAME
          </span>
        </h2>
      </div>

      <div id="dice">
        <Dice @rollValue="diceRolled" ref="dice" />
      </div>

      <div class="roll">
        <h2 class="spacer button">
          <span id="roll" class="button" :disabled="disabledRoll" @click="roll">
            <img src="./assets/refreshIcon.svg" alt="Plus" />ROLL
          </span>
        </h2>
      </div>

      <div class="hold">
        <h2>
          <span id="hold" class="button" @click="hold">
            <img src="./assets/arrowDown.svg" alt="Plus" />HOLD
          </span>
        </h2>
      </div>
    </div>

    <Player :pNumber="2" :p1Plays="p1Current" :rolled="rollP2" ref="player2" />
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
      height: 100%;
      min-width: 200px;
      width: fit-content;
      z-index: 1;
    }

    img {
      height: 20px;
      width: 20px;
      margin-right: 10px;
    }

    h2 {
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
