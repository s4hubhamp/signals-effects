import createSignal from './createSignal.js'
import createEffect from './createEffect.js'

const h1 = document.getElementById('h1')
const btn = document.getElementById('btn')

const [count, setCount] = createSignal(0)
setInterval(() => {
  setCount(count() + 1)
}, 1000)

createEffect(() => {
  btn.textContent = count()
})

const [random, setRandom] = createSignal(generateRandomString())
setInterval(() => {
  setRandom(generateRandomString())
}, 1500)

createEffect(() => {
  h1.textContent = `Count: ${count()}, random string: ${random()}`
})

function generateRandomString(length = 5) {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}
