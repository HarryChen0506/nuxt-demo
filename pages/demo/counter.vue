<template>
  <section class="counter-wrap">
    <h3>计数器</h3>
    <div>当前数字： {{$store.state.demo.counter}}</div>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-alert
      title="成功提示的文案"
      type="success">
    </el-alert>
    <div>{{demo}}</div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      radio: 1,
      demo: '一段文字'
    }
  }
}
</script>

<style>
.counter-wrap {
  min-height: 100vh;
  padding: 30px;
}
</style>
