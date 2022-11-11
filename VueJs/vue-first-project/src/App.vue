<template>

    <!-- <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img src="./assets/build-a-bot-logo.png" class="logo" alt="">
            Build-a-bot
          </li>
        </ul>
      </nav>
    </header> -->

    <main>
      <HomePage />
    </main>

</template>

<script>
import HomePage from "./components/HomePage.vue";
export default {
  name:'App',
  components: {
    HomePage,
},
};
</script>

<style>
body{
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
  padding: 0;
} 
#app{
  font-family: Arial, Helvetica, sans-serif;
}
main{
  border: 2px solid red;
  /* margin: 0; */
  margin-top: 0px;
  /* padding: 30px; */
  background-color: rgb(62, 58, 58);
  width: 1024px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
