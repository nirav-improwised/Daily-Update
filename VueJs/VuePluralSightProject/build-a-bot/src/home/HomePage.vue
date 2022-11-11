<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<template>
    <div class="home">
      <div>
        <img src="../assets/robot-home.png" class="robot" aria-hidden="true" alt="">
      </div>
      <div class="get-started">
        <a href="">Get started </a> building your first robot!
      </div>
    </div>
</template>

<style scoped>
.home{
  text-align: center;
}
.robot{
  height: 300px;
}
</style>
