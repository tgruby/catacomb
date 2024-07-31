import memory from "../core/Memory.js"

export default class Time {
  constructor() {
    this.time = new Date(1974, 10, 23, 9, 0, 0)
    this.intervalId = null
    memory.set({ key: "game.time", value: this.time })
  }

  start() {
    this.intervalId = setInterval(() => {
      this.time.setMinutes(this.time.getMinutes() + 1)
      memory.set({ key: "game.time", value: this.time })
    }, 2000)
  }

  stop() {
    clearInterval(this.intervalId)
  }
}
