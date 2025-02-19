import Component from '../../ui/Component.js'
import state from '../../game/SharedState.js'

export default class FPS extends Component {
  constructor() {
    super({ id: 'FPS', width: 30, height: 1, border: false })
    state.subscribe({
      key: 'fps',
      callback: this.updateFPS.bind(this)
    })
  }

  updateFPS(update) {
    this.clear()
    this.add({
      x: 'right',
      y: 0,
      string: `FPS: ${update.fps.toFixed(2)}, LFT: ${update.frameTime.toFixed(2)} ms`
    })
  }
}
