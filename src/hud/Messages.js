import { NoticeMeLeft, NoticeMeRight } from '../animations/NoticeMe.js'
import Grid from '../core/Grid.js'
import memory from '../core/Memory.js'

export default class Messages extends Grid {
  constructor() {
    super({ id: 'MessagesPanel', width: 80, height: 7, border: true })
    this.add({
      x: 'center',
      y: 0,
      string: ' Messages ',
      force: true
    })
    memory.subscribe({
      key: 'message.center',
      callback: this._showNewMessage.bind(this)
    })
  }

  _showNewMessage(message) {
    const messageBlock = this._wrapText(message, 80)
    const y = 4 - messageBlock.length
    const startNoticeOffset = Math.floor((80 - message.length) / 2) - 4
    const endNoticeOffset = startNoticeOffset + message.length + 5
    const left = new NoticeMeLeft()
    const right = new NoticeMeRight()
    this.add({ x: startNoticeOffset, y, grid: left })
    this.add({ x: 'center', y, block: messageBlock })
    this.add({ x: endNoticeOffset, y, grid: right })
    left.play()
    right.play()
    setTimeout(() => {
      this.clear()
      memory.set({ key: 'request.screen.draw', value: true })
    }, 2000)
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
