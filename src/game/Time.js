import state from './SharedState.js'

export default class Time {
  constructor() {
    this.time = new Date(1974, 10, 23, 9, 0, 0)
    this.intervalId = null
    state.set({ key: 'game.time', value: this.time })
  }

  start() {
    this.intervalId = setInterval(() => {
      this.time.setMinutes(this.time.getMinutes() + 1)
      state.set({ key: 'game.time', value: this.time })
    }, 2000)
  }

  stop() {
    clearInterval(this.intervalId)
  }
}
