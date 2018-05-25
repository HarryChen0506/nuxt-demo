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
  editCounter (context, value) {
    setTimeout(() => {
      context.commit('setCounter', value)
    }, 1000)
  }
}