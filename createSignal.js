import { getCurrentObserver } from './global.js'

function createSignal(state = null) {
  const subscribers = new Set()

  function getState() {
    const current = getCurrentObserver()
    if (current) subscribers.add(current)
    return state
  }

  function setState(newState) {
    const current = getCurrentObserver()
    if (current) throw new Error('Cannot update state in effect')
    state = newState
    subscribers.forEach(sub => sub())
  }

  return [getState, setState]
}

export default createSignal
