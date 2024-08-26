import mods from './game/GameObjectLoader.js'
import HUD from './screens/HUD.js'
import state from './game/SharedState.js'
import GameSetup from './screens/GameSetup.js'
import Intertitle from './screens/Intertitle.js'
import TitleSequence from './screens/TitleSequence.js'

mods.initialize()
const canvas = document.getElementById('canvas')
canvas.style.fontFamily = 'PrintChar21'
let screen = null

const fpsCounter = {
  fps: 0,
  lastFPSUpdate: new Date().getTime(),
  update() {
    this.fps++
    const now = new Date().getTime()
    const timeSinceLastUpdate = now - this.lastFPSUpdate
    if (timeSinceLastUpdate > 1000) {
      state.set({ key: 'fps.update', value: { fps: this.fps, lastUpdate: timeSinceLastUpdate } })
      this.fps = 0
      this.lastFPSUpdate = now
    }
  }
}

state.subscribe({
  key: 'game.state',
  callback: (state) => {
    if (state === 'title-sequence') {
      screen = new TitleSequence()
      canvas.innerHTML = screen.draw()
    } else if (state === 'setup-game') {
      screen = new GameSetup()
      canvas.innerHTML = screen.draw()
    } else if (state === 'wake-up') {
      screen = new Intertitle({
        font: 'Bloody',
        lines: ['Day', 'One'],
        lineHeight: 12
      })
      canvas.innerHTML = screen.draw()
    } else if (state === 'in-game') {
      screen = new HUD()
      canvas.innerHTML = screen.draw()
    } else if (state === 'post-game') {
      // TBD
    }
  }
})

// now bind keys to movement
document.addEventListener('keyup', (e) => {
  screen.keyPressed(e)
})

// register to listen for updates
state.subscribe({
  key: 'request.screen.draw',
  callback: (draw) => {
    if (draw) canvas.innerHTML = screen.draw()
    fpsCounter.update()
  }
})

state.set({ key: 'game.state', value: 'title-sequence' })
