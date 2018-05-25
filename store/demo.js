// store demo 数据

export const state = () => ({
  counter: 0
})

export const mutations =  {
  setCounter (state, value) {
    state.counter = value
  },
  increment (state, step) {
    state.counter += step
  },
  decrement (state, step) {
    state.counter -= step
  }
}

export const actions = {
  editCounter (store, value) {
    console.log('actions context', store)
    setTimeout(() => {
      store.commit('setCounter', value)
    }, 1000)
  }
}