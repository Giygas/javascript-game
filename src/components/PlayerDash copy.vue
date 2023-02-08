<script>
import CurrentPoints from './CurrentPoints.vue'


export default {
  data() {
    return {
      // Current player points
      p1Current: 0,
      p2Current: 0,
      // Total player points
      p1Points: 0,
      p2Points: 10,
    }
  },
  components: {
    CurrentPoints,
  },
  props: {
    pNumber: Number,
    points: Number,
    p1Plays: Boolean,
  },
  methods: {
    updatePoints() {
      this.p1Points = points
      this.p2Points = points
    }
  },
  watch: {
    points: function() {
      console.log(points);
      this.p1Points = value;
      this.p2Points = value;
    }
  },
}
</script>

<template>
  <div v-if="pNumber===1" class="player">
    <h1 class="display-2" @click="points++">
      PLAYER {{ pNumber }} 
      <span v-if="p1Plays" class="dot-container">
        <img src="../assets/redDot.svg" alt="red dot" class="red-dot-right"/>
      </span>
    </h1>
    <h1 class="display-1">
      {{ p1Points }}
    </h1>
    <CurrentPoints :current="p1Current"/>
  </div>
  <div v-else class="player player2">
    <h1 class="display-2">
      <span v-if="!p1Plays" class="dot-container">
        <img src="../assets/redDot.svg" alt="red dot" class="red-dot-left"/>
      </span>
         PLAYER {{ pNumber }}
    </h1>
    <h1 class="display-1">
      {{ p2Points  }}
    </h1>
    <CurrentPoints :current="p2Current"/>
  </div>
</template>

<style lang='scss' scoped>
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
    margin-right: 900px;
  }
</style>