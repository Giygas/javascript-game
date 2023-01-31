<script>

</script>

<template>
  <div class="main-container">
        <div class="grid newGame">
            <h2>
              <span id="newGame" class="button">
                <img src="./assets/plusIcon.svg" alt="Plus"/>NEW GAME
              </span>
            </h2>
        </div>
        
        <div class="grid dice-container">
          <div id="player1">1</div>
          <div id>
            2
          </div>
          <div id="player2">3</div>
        </div>
        
        <div class="grid">
          <div class="currentPoints">
            Current Points
          </div>
          <div class="buttonWrapper">
            <h2 class="spacer button">
              <span id="roll" class="button">
                <img src="./assets/refreshIcon.svg" alt="Plus"/>ROLL
              </span>
            </h2>
            <h2>
              <span id="hold" class="button">
                <img src="./assets/arrowDown.svg" alt="Plus"/>HOLD
              </span>
            </h2>
          </div>
          <div class="currentPoints">
            Current points
          </div>
        </div>
      </div>
      
      <div class="player p1"></div>
      <div class="player p2"></div>
</template>

<style lang="scss" scoped>
.main-container {
  background-color: #ffffff;
  position: absolute;
  padding-top: 3rem;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 15px;


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
    height: 50vh;
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
  
  .currentPoints {
    display: flex;
    align-self: center;
    justify-content: center;
  }
}

.main-container::after {
  background: #f7f7f7 ;
  content: '';
  z-index: -1;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  display: block;
  position: absolute;
  border-radius: 15px;
}
</style>
