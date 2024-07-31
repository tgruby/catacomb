import Grid from "../core/Grid.js"
import memory from "../core/Memory.js"

export default class CompanionVitals extends Grid {
  constructor() {
    super({ id: "CompanionVitals", width: 26, height: 8, border: true })
    this.add({ x: 2, y: 0, string: " Companion ", force: true })
    memory.subscribe({
      key: "companion.health",
      callback: this.updateHealth.bind(this)
    })
    this.updateHealth({ current: 40, max: 100, modifier: "Healthy" })
  }

  updateHealth(health) {
    if (health.current <= 0 && health.max > 0) {
      this.add({ x: "center", y: 3, string: "       -- DEAD --        " })
      this.add({ x: 2, y: 5, string: "      " })
    } else if (health.max < 0) {
      this.add({ x: 2, y: 3, string: "      " })
      this.add({ x: "center", y: 5, string: "                    " })
    } else {
      const percentage = Math.round((health.current / health.max) * 100)
      const heartCount = Math.round(percentage / 5)
      const blankCount = 20 - heartCount
      this.add({ x: 2, y: 2, string: "Health" })
      this.add({ x: 2, y: 3, string: "⎺⎺⎺⎺⎺⎺" })
      this.add({
        x: 4,
        y: 4,
        string: "♡".repeat(heartCount) + " ".repeat(blankCount)
      })
    }
  }
}
