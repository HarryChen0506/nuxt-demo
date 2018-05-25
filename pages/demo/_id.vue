<template>
  <section class="id-container">
    <h3>id页面</h3>
    <div>我的Id： {{myId}}</div>
    <div>我的name： {{name}}</div>
    <div>当前数值：{{counter}}</div>
    <button @click="add">增加</button>
    <button @click="sub">减小</button>
    <button @click="edit">异步改值</button>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  asyncData (context) {
    const {id} = context.params
    return {
      myId: id
    } 
  },
  async fetch (context) {
    // console.log('fetch', context)
    let { data } = await axios.get('https://m.tking.cn/showapi/pub/site/1001/topMarketingShows?siteCityOID=3101&time=1527228379921&src=m_web')
    console.log('fetch', data)
    context.store.commit('demo/setCounter', 10)
  },
  data () {
    return {
      name: 'hello'
    }
  },
  computed: {
    counter () {
      // console.log('$store', this.$store)
      return this.$store.state.demo.counter
    }
  },
  mounted () {
    // console.log('this', this)
    // this.$store.commit('demo/setCounter', 5)
  },
  methods: {
    add () {
      console.log('增加')
      this.$store.commit('demo/increment',2)
    },
    sub () {
      console.log('减少')
      this.$store.commit('demo/decrement',3)
    },
    edit () {
      console.log('异步')
      this.$store.dispatch('demo/editCounter',100)
    }
  }
}
</script>

<style>
.id-container {
  min-height: 100vh;
  padding: 20px;
  text-align: center;
}
</style>
