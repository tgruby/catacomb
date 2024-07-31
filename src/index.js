import mods from "./core/Mods.js"
import HUD from "./screens/HUD.js"
import memory from "./core/Memory.js"
import GameSetup from "./screens/GameSetup.js"
import Intertitle from "./screens/Intertitle.js"
import TitleSequence from "./screens/TitleSequence.js"

mods.initialize()
const canvas = document.getElementById("canvas")
canvas.style.fontFamily = "PrintChar21"
let screen = null
let lastDraw = new Date().getTime()

memory.subscribe({
  key: "game.state",
  callback: (state) => {
    if (state === "title-sequence") {
      screen = new TitleSequence()
      canvas.innerHTML = screen.draw()
    } else if (state === "setup-game") {
      screen = new GameSetup()
      canvas.innerHTML = screen.draw()
    } else if (state === "wake-up") {
      screen = new Intertitle({
        font: "Bloody",
        lines: ["Day", "One"],
        lineHeight: 12
      })
      canvas.innerHTML = screen.draw()
    } else if (state === "in-game") {
      screen = new HUD()
      canvas.innerHTML = screen.draw()
    } else if (state === "post-game") {
      // TBD
    }
  }
})

// now bind keys to movement
document.addEventListener("keyup", (e) => {
  screen.keyPressed(e)
})

// register to listen for updates
memory.subscribe({
  key: "request.screen.draw",
  callback: (draw) => {
    if (draw) canvas.innerHTML = screen.draw()
    // throttle the draw to only every 10ms
    let now = new Date().getTime()
    if (draw && lastDraw > now + 10) {
      canvas.innerHTML = screen.draw()
      lastDraw = now
    }
  }
})

memory.set({ key: "game.state", value: "title-sequence" })
