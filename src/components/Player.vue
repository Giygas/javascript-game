<script>
  import CurrentPoints from "./CurrentPoints.vue"

  export default {
    name: "Player",
    data() {
      return {
        // Total player points
        points: 0,
        roundPoints: 0,
      }
    },
    components: {
      CurrentPoints,
    },
    props: {
      pNumber: Number,
      p1Plays: Boolean,
    },
    methods: {
      addTotal() {
        this.points += this.roundPoints
        this.roundPoints = 0
      },
      lose() {
        this.roundPoints = 0
      },
      reset() {
        this.points = 0
        this.roundPoints = 0
      },
      rolled(value) {
        this.roundPoints += value
      }
    },
    computed: {
      dotClass() {
        return {
          p1: this.pNumber === 1 && this.p1Plays,
          p2: this.pNumber === 2 && !this.p1Plays,
        }
      },
    },
  }
</script>

<template>
  <div class="player" :class="{ player2: pNumber == 2 }">
    <h1 class="display-2" :class="dotClass">PLAYER {{ pNumber }}</h1>
    <h1 class="display-1">
      {{ points }}
    </h1>
    <CurrentPoints :current="roundPoints" />
  </div>
</template>

<style lang="scss" scoped>
  .player {
    padding-top: 10rem;
    height: 100%;
    width: 50%;
    display: inline-block;
    position: relative;
    text-align: center;
    &.player2 {
      background-color: #f0f0f0;
      border-radius: 0px 15px 15px 0px;
    }
    .display-1 {
      font-size: 7rem;
      font-weight: 400;
      line-height: normal;
      color: rgb(0, 0, 0);
    }

    .display-2 {
      font-size: 4rem;
      font-weight: 300;
      line-height: normal;
      color: rgb(0, 0, 0);
      margin: 0;

      &.p1::after,
      &.p2::before {
        background-image: url("../assets/redDot.svg");
        vertical-align: middle;
        height: 20px;
        width: 20px;
        font-size: 20px;
        background-size: 20px;
        padding: 0 20px 5px 0;
        content: "";
      }

      &.p1::after {
        margin-right: -20px;
      }
      &.p2::before {
        margin-left: -20px;
      }
    }
    .dot-container {
      position: absolute;
    }

    .red-dot-right {
      height: 20px;
      position: relative;
      margin-bottom: 10px;
      margin-left: 10px;
    }
    .red-dot-left {
      height: 20px;
      position: relative;
      margin-bottom: 10px;
    }
  }
</style>
