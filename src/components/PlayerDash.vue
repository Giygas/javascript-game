<script>
export default {
  props: {
    pNumber: Number,
    points: Number,
    p1Plays: Boolean
  }
}
</script>

<template>
  <div v-if="this.pNumber===1" class="player">
    <h1 class="display-2">
      PLAYER {{ pNumber }} 
      <span v-if="p1Plays" class="dot-container">
        <img src="../assets/redDot.svg" alt="red dot" class="red-dot-right"/>
      </span>
    </h1>
    <h1 class="display-1">
      {{ points }}
    </h1>
  </div>
  <div v-else class="player">
    <h1 class="display-2">
      <span v-if="!p1Plays" class="dot-container">
        <img src="../assets/redDot.svg" alt="red dot" class="red-dot-left"/>
      </span>
         PLAYER {{ pNumber }}
    </h1>
    <h1 class="display-1">
      {{ points  }}
    </h1>
  </div>
</template>

<style scoped>
  .player {
    margin-top: 2rem;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .display-1 {
    font-size: 7rem;
    font-weight: 300;
    line-height: normal;
    color: rgb(0, 0, 0);
  }
  
  .display-2 {
    font-size: 4rem;
    font-weight: 500;
    line-height: normal;
    color: rgb(0, 0, 0);
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