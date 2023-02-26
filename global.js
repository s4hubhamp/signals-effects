// tracks currently running createEffects
const context = []
export default context

export function getCurrentObserver() {
  return context[context.length - 1]
}
