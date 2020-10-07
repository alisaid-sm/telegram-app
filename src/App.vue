<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face{
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    src: url('assets/font/Rubik-Regular.ttf')
}
#app {
  font-family: Rubik;
}
.cont-tele {
  height: 100vh;
  width: 100vw;
}
.color-default {
  color: #7E98DF !important;
}
.bgn-default {
  background-color: #F6F6F6;
}
.input-default input{
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  /* color: #fff; */
  /* margin-bottom: 30px; */
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  background: transparent;
}
.button-default {
  height: 60px;
  background: #7E98DF !important;
  border-radius: 70px !important;
  border: none !important;
}
.button-reverse {
  height: 60px;
  background: #FFFFFF !important;
  border: 1px solid #7E98DF !important;
  box-sizing: border-box !important;
  border-radius: 70px !important;
}
</style>
