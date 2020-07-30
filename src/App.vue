<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  /*https://www.onlinewebfonts.com/download/4a24899e94d8236f671c1090cd9e068c*/
  /*https://www.onlinewebfonts.com/download/1cbc0faa49cc60bfadb363d1a10c4c38*/
  @import url(//db.onlinewebfonts.com/c/4a24899e94d8236f671c1090cd9e068c?family=Canela);
  @import url(//db.onlinewebfonts.com/c/1cbc0faa49cc60bfadb363d1a10c4c38?family=BurberryStyreneBCyrWeb+BD);

  .h2-like {
    text-align: center;
    padding-top: 49px;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: #231F10;
  }

  .h4-like {
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #231F10 
  }

  .font-canela {
    font-family: Canela;
  }

  .font-styreneb {
    font-family: BurberryStyreneBCyrWeb BD;
  }

  hr {
    /*display: block;*/
    /*clear: both;*/
    /*font-size: 60px;*/
    height: 0;
    padding: 0;
    border: 0;
    text-align: center;
    line-height: 1;
    overflow: visible;
  }
  hr:after {
    /*display: inline*/
    /*content: "/";*/
    /*font-size: 56px;*/
    /*height: 0;      */
    display: inline; 
    content: url( 'assets/hr_logo.png' );
    /*letter-spacing: 1em;*/
    /* Controls the position of the logo */
    left: 50%;
    position: absolute;
    transform: translateY(-50%) translateX(-50%);
    /*padding: 20px;*/
    /*background: #fff;*/

  }



/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }*/
</style>
