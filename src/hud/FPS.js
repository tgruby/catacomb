import Grid from '../ui/Grid.js'
import state from '../game/SharedState.js'

export default class FPS extends Grid {
  constructor() {
    super({ id: 'FPS', width: 25, height: 1, border: false })
    state.subscribe({
      key: 'fps.update',
      callback: this.updateFPS.bind(this)
    })
  }

  updateFPS(fpsUpdate) {
    this.clear()
    let adjusted = fpsUpdate.lastUpdate / 1000
    adjusted = fpsUpdate.fps / adjusted
    this.add({
      x: 'right',
      y: 0,
      string:
        'FPS: ' +
        adjusted.toFixed(2).padStart(4, '0') +
        ' (' +
        fpsUpdate.fps.toString().padStart(3, '0') +
        '/' +
        fpsUpdate.lastUpdate +
        'ms)'
    })
  }
}
