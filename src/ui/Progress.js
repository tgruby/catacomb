import Grid from './Grid.js'
import state from '../game/SharedState.js'

export default class Progress extends Grid {
  constructor(props) {
    if (!props) throw new Error('Progress requires a label and a memory item to subscribe to')
    if (!props.label) throw new Error('Progress must have a label')
    if (!props.stateKey) throw new Error('Progress must have a state key to subscribe to')
    if (!props.width) props.width = 22
    if (!props.height) props.height = 4
    if (!props.border) props.border = false
    super(props)
    this.add({ x: 0, y: 0, string: props.label })
    this.add({ x: 1, y: 1, string: '⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽' })
    this.add({ x: 1, y: 3, string: '⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺' })
    this.update(state.get(props.stateKey))

    state.subscribe({
      key: props.stateKey,
      callback: this.update.bind(this)
    })
  }

  _calcBar(current, max) {
    let bar = Math.round((current / max) * 20)
    if (bar < 0) bar = 0
    return '⎹' + '█'.repeat(bar) + ' '.repeat(20 - bar) + '⎸'
  }

  update(data) {
    this.add({
      x: 0,
      y: 2,
      string: this._calcBar(data.current, data.max)
    })
  }
}
