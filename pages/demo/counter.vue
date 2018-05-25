<template>
  <section class="container">
    <h3>计数器</h3>
    <div>当前数字： {{$store.state.demo.counter}}</div>
  </section>
</template>

<script>

export default {
  
}
</script>

<style>
.container {
  min-height: 100vh;
  padding: 30px;
}
</style>
