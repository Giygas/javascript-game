<script>
  export default {
  name: "App",
  data() {
    return {
      diceNum: 1,
      numberBuffer: []
    };
  },
  methods: {
    setRandomDiceData() {
      this.diceNum = Math.floor(Math.random() * 6) + 1
    },
    setDice() {
      let count = 0
      const timer = setInterval(() => {
        this.setRandomDiceData()
        if (count >= 6) {
          clearInterval(timer)
        }
        count += 1
      }, 150)
    },
    getLastDiceRoll() {
      console.log(this.diceNum)
    }
  },
  computed: {
    getDice() {
      return `dice dice-${this.diceNum}`;
    }
  },
  watch: {
    diceNum() {
      console.log("Dice rolled!");
    }
  }
  }
</script>

<template>
  <div class="game">
    <div class="container-dice">
      <div class="dice-wrapper">
        <div :class="getDice"></div>
      </div>
    </div>
  </div> 
  <button @click="setDice">Roll the dice!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</button>
  <button @click="getLastDiceRoll">Add to the total!!!!!!!!!!!!!</button>
  
</template>

<style>
.game {
  position: relative;
  
}
.container-dice {
  display: inline-block;
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
}

.dice {
  min-height: 1em;
  padding-left: 1em;
  background-size: 1em;
  background-repeat: no-repeat;
  font-size: 150px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.dice-1 {
  background-image: url("../assets/dice-1.svg");
  
}
.dice-2 {
  background-image: url("../assets/dice-2.svg");

}
.dice-3 {
  background-image: url("../assets/dice-3.svg");

}
.dice-4 {
  background-image: url("../assets/dice-4.svg");

}
.dice-5 {
  background-image: url("../assets/dice-5.svg");

}
.dice-6 {
  background-image: url("../assets/dice-6.svg");

}
</style>