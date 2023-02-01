<script>
  export default {
    data() {
      return {
        elDice: "",
        dice: ""
      }
    },
    mounted() {
      this.elDice = this.$refs.dice
      console.log(this.elDice)
    },
    methods: {
      rollDice() {
        console.log(this.elDice)
        this.dice   = Math.floor((Math.random() * 6) + 1);
    
        console.log(this.dice);

        for (let i = 1; i <= 6; i++) {
          this.elDice.classList.remove('show-' + i);
          if (this.dice === i) {
            this.elDice.classList.add('show-' + i);
          }
        }

        // setTimeout(this.rollDice, 1000);
      }
    }
  }
</script>

<template>
  <div class="game">
    <div class="container-dice" @click="rollDice">
      <div id='dice' class="dice" ref="dice">
        <div id="dice-one-side-one" class='side one'>
          <div class="dot one-1"></div>
        </div>
        <div id="dice-one-side-two" class='side two'>
          <div class="dot two-1"></div>
          <div class="dot two-2"></div>
        </div>
        <div id="dice-one-side-three" class='side three'>
          <div class="dot three-1"></div>
          <div class="dot three-2"></div>
          <div class="dot three-3"></div>
        </div>
        <div id="dice-one-side-four" class='side four'>
          <div class="dot four-1"></div>
          <div class="dot four-2"></div>
          <div class="dot four-3"></div>
          <div class="dot four-4"></div>
        </div>
        <div id="dice-one-side-five" class='side five'>
          <div class="dot five-1"></div>
          <div class="dot five-2"></div>
          <div class="dot five-3"></div>
          <div class="dot five-4"></div>
          <div class="dot five-5"></div>
        </div>
        <div id="dice-one-side-six" class='side six'>
          <div class="dot six-1"></div>
          <div class="dot six-2"></div>
          <div class="dot six-3"></div>
          <div class="dot six-4"></div>
          <div class="dot six-5"></div>
          <div class="dot six-6"></div>
        </div>
      </div>
    </div>
  </div> 
</template>

<style>
.game {
  position: relative;
}
.container-dice {
  display: inline-block;
  background-color: #f4d35e;
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  
}

.dice {
  display: block;
  width: 150px;
  height: 150px;
  transform-style: preserve-3d;
  transition: transform 1s; }

.dot {
  position: absolute;
  width: 20px;
  height: 20px;
  margin: -10px 5px 5px -10px;
  border-radius: 20px;
  background-color: #ef233c;
  box-shadow: inset 2px 2px #d90429;}

.side {
  position: absolute;
  background-color: #ffF;
  border-radius:5px;
  width: 150px;
  height: 150px;
  border: 1px solid #e5e5e5;
  text-align: center;
  line-height: 2em;
}

.side:nth-child(1) {
  transform: translateZ(3.1em); }

.side:nth-child(6) {
  transform: rotateY(90deg) translateZ(3.1em); }

.side:nth-child(3) {
  transform: rotateY(-90deg) translateZ(3.1em); }

.side:nth-child(4) {
  transform: rotateX(90deg) translateZ(3.1em); }

.side:nth-child(5) {
  transform: rotateX(-90deg) translateZ(3.1em); }

.side:nth-child(2) {
  transform: rotateY(-180deg) translateZ(3.1em); }

.two-1, .three-1, .four-1, .five-1, .six-1 {
  top: 20%;
  left: 20%; }

.four-3, .five-3, .six-4 {
  top: 20%;
  left: 80%; }

.one-1, .three-2, .five-5 {
  top: 50%;
  left: 50%; }

.four-2, .five-2, .six-3 {
  top: 80%;
  left: 20%; }

.two-2, .three-3, .four-4, .five-4, .six-6 {
  top: 80%;
  left: 80%; }

.six-2 {
  top: 50%;
  left: 20%; }

.six-5 {
  top: 50%;
  left: 80%; 
}
</style>