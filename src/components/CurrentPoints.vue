<script>
  export default {
    props: ['current'],
  }
</script>

<template>
  <div class="currentPoints">
    <h4>CURRENT</h4>
    <h3>{{ current }}</h3>
  </div>
</template>

<style lang="scss" scoped>

.currentPoints {
    background-color: #ae3636;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 150px;
    margin: auto;
    margin-top: 10rem;
    
    h3 {
      font-weight: 400;
      font-size: 2.5rem;
      color: bisque;
      margin: 0.5rem;
    }
    
    h4 {
      color: black;
      font-size: 1.3rem;
      font-weight: 400;
      margin: 0.5rem;
    }
  }
</style>