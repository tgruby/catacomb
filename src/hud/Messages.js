import Grid from '../ui/Grid.js'
import state from '../game/SharedState.js'

export default class Messages extends Grid {
  constructor() {
    super({ id: 'MessagesPanel', width: 80, height: 7, border: true })
    this.add({
      x: 'center',
      y: 0,
      string: ' Messages ',
      force: true
    })
    state.subscribe({
      key: 'message.center',
      callback: this._showNewMessage.bind(this)
    })
  }

  _showNewMessage(message) {
    this.clear()
    const messageBlock = this._wrapText(message, 80)
    const y = 4 - messageBlock.length
    this.add({ x: 'center', y, block: messageBlock })
  }

  _wrapText(text, width) {
    const words = text.split(' ')
    const lines = []
    let line = ''
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      if (line.length + word.length + 1 < width) {
        line += `${word} `
      } else {
        lines.push(line)
        line = `${word} `
      }
    }
    lines.push(line)
    return lines
  }
}
