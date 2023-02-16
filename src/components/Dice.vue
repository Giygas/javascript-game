<script>
  export default {
    name: "Dice",
    data() {
      return {
        diceNum: 1,
      }
    },
    emits: {
      rollValue: null,
    },
    methods: {
      setRandomDiceData() {
        // Get a random number between 1 and 6
        this.diceNum = Math.floor(Math.random() * 6) + 1
      },

      rollDice() {
        //Create a mini animation when rolling dice
        let count = 0
        const timer = setInterval(() => {
          this.setRandomDiceData()
          if (count >= 6) {
            clearInterval(timer)
            // Emit the roll value to parent
            this.$emit("rollValue", this.diceNum)
          }
          count += 1
        }, 150)
      },
      resetDice() {
        this.diceNum = 1
      },
    },
    computed: {
      getDice() {
        // Sets the class with the current number for the dice
        // everytime the dice status changes
        return `dice dice-${this.diceNum}`
      },
    },
    watch: {
      diceNum() {
        console.log("Dice rolled!" + this.diceNum)
      },
      roundPoints() {
        console.log("Round points " + this.roundPoints)
      },
    },
  }
</script>

<template>
  <div class="container-dice">
    <div class="dice-wrapper">
      <div :class="getDice"></div>
    </div>
  </div>
</template>

<style scoped>
  .container-dice {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
  }

  .dice {
    min-height: 1em;
    padding-left: 1em;
    background-size: 1em;
    background-repeat: no-repeat;
    font-size: 150px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .dice-1 {
    background-image: url("../assets/dice-icons/dice-1.svg");
  }
  .dice-2 {
    background-image: url("../assets/dice-icons/dice-2.svg");
  }
  .dice-3 {
    background-image: url("../assets/dice-icons/dice-3.svg");
  }
  .dice-4 {
    background-image: url("../assets/dice-icons/dice-4.svg");
  }
  .dice-5 {
    background-image: url("../assets/dice-icons/dice-5.svg");
  }
  .dice-6 {
    background-image: url("../assets/dice-icons/dice-6.svg");
  }
</style>
