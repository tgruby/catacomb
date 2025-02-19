import mods from './game/GameObjectLoader.js'
import levelLoader from './game/LevelLoader.js'
import HUD from './screens/HUD.js'
import state from './game/SharedState.js'
import LevelStart from './screens/LevelStart.js'
import LevelComplete from './screens/LevelComplete.js'
import TitleSequence from './screens/TitleSequence.js'

mods.initialize()
levelLoader.initialize()
const canvas = document.getElementById('canvas')
canvas.style.fontFamily = 'PrintChar21'
let screen = null

class FPSCounter {
  constructor() {
    this.times = []
    this.lastFrameTime = performance.now()
  }

  update(frameTime) {
    this.times.push(frameTime)

    // Keep only last 100 frames
    if (this.times.length > 100) this.times.shift()

    const avgFrameTime = this.times.reduce((a, b) => a + b, 0) / this.times.length
    const fps = 1000 / avgFrameTime

    state.set({ key: 'fps', value: { fps: fps, frameTime: frameTime } })
  }
}

const fpsCounter = new FPSCounter()

state.subscribe({
  key: 'game.state',
  callback: async (state) => {
    if (state === 'title-sequence') {
      screen = new TitleSequence()
      canvas.innerHTML = screen.draw()
    } else if (state === 'load-next-level') {
      await levelLoader.loadNextLevel()
      screen = new LevelStart({
        title: levelLoader.currentLevel.title,
        sound: levelLoader.currentLevel.titleSound,
        font: levelLoader.currentLevel.titleFont,
        author: levelLoader.currentLevel.author,
        lineHeight: 12
      })
      canvas.innerHTML = screen.draw()
    } else if (state === 'in-game') {
      screen = new HUD()
      canvas.innerHTML = screen.draw()
    } else if (state === 'level-complete') {
      screen = new LevelComplete()
      canvas.innerHTML = screen.draw()
    } else if (state === 'post-game') {
      // TBD
    }
  }
})

// now bind keys to movement
document.addEventListener('keyup', (e) => {
  screen.keyPressed(e)
  state.set({ key: 'request.screen.draw', value: true })
})

// Register to listen for update requests
state.subscribe({
  key: 'request.screen.draw',
  callback: (draw) => {
    if (draw) {
      const start = performance.now() // Start timing

      canvas.innerHTML = screen.draw() // Perform the draw operation

      const end = performance.now() // End timing
      const frameTime = end - start // Compute frame time

      fpsCounter.update(frameTime) // Pass frame time to FPS counter
    }
  }
})

state.set({ key: 'game.state', value: 'title-sequence' })
