import Grid from "../core/Grid.js"
import memory from "../core/Memory.js"
import { getHeroLevelTitle } from "../game/Hero.js"

export default class GameStats extends Grid {
  constructor() {
    super({ id: "GameStats", width: 80, height: 7, fill: " ", border: true })
    this.add({
      x: "center",
      y: 0,
      string:
        " " +
        memory.get("hero.first.name") +
        " " +
        memory.get("hero.last.name") +
        " ",
      force: true
    })
    this.updateHeroLevel(memory.get("hero.level"))
    this.updateXP(memory.get("hero.xp"))
    this.updateTime(memory.get("game.time"))
    this.updateCatacombsLevel(memory.get("catacombs.level"))

    memory.subscribe({ key: "game.time", callback: this.updateTime.bind(this) })
    memory.subscribe({
      key: "hero.level",
      callback: this.updateHeroLevel.bind(this)
    })
    memory.subscribe({
      key: "catacombs.level",
      callback: this.updateCatacombsLevel.bind(this)
    })
    memory.subscribe({ key: "hero.xp", callback: this.updateXP.bind(this) })
  }

  updateHeroLevel(level) {
    this.add({
      x: "left",
      y: 2,
      string: `Level ${level} (${getHeroLevelTitle(level)})`
    })
    memory.set({ key: "request.screen.draw", value: true })
  }

  updateCatacombsLevel() {
    const objective = memory.get("catacombs.level.objective")
    this.add({ x: "right", y: 4, string: `Objective: ${objective}` })
    memory.set({ key: "request.screen.draw", value: true })
  }

  updateXP(xp) {
    const in50Parts = Math.round((xp.current / xp.nextLevel) * 50)
    const xpBar = "XP: " + "".repeat(in50Parts) + " ".repeat(50 - in50Parts)
    this.add({ x: "left", y: 4, string: xpBar })
  }

  updateTime(time) {
    const inventory = memory.get("hero.inventory")
    const watch = inventory.find((item) => item.id === "item.watch")
    if (!watch) return
    // Create an Intl.DateTimeFormat instance for formatting the date part
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    })

    // Use the formatter to format the date and time
    const formattedDate = dateFormatter.format(time)
    this.add({ x: "right", y: 2, string: formattedDate })

    // if midnight, play a 'night is here' sound
    // if (time.hour === 0 && time.minute === 0) {
    //   const bell = new Audio('sounds/the-bell-tolls.mp3')
    //   bell.play()
    // }
    memory.set({ key: "request.screen.draw", value: true })
  }
}
