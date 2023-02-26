import context from './global.js'

function createEffect(fn) {
  const wrapper = () => {
    context.push(wrapper)
    try {
      fn()
    } finally {
      context.pop()
    }
  }
  wrapper()
}

export default createEffect
