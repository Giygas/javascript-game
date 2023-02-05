<script>
export default {
  props: {
    pNumber: Number,
    points: Number
  }
}
</script>

<template>
  <div v-if="this.pNumber===1" class="player">
    <h1 class="display-2">
      PLAYER {{ pNumber }} <img src="../assets/redDot.svg" alt="red dot" class="red-dot"/>
    </h1>
    <h1 class="display-1">
      {{ points }}
    </h1>
  </div>
  <div v-else class="player">
    <h1 class="display-2">
      <img src="../assets/redDot.svg" alt="red dot" class="red-dot"/> PLAYER {{ pNumber }}
    </h1>
    <h1 class="display-1">
      {{ points  }}
    </h1>
  </div>
</template>

<style scoped>
  .player {
    margin-top: 3rem;
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
  
  .red-dot {
    height: 20px;
    margin-bottom: 6px;
  }
</style>