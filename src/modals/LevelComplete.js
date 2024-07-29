import Modal from '../core/Modal.js'
import Confetti from '../animations/Confetti.js'
import FireCracker from '../animations/FireCracker.js'

export default class LevelComplete extends Modal {
  constructor (props) {
    super({ id: 'LevelCompleteModal', width: 80, height: 43, border: true, parent: props.parent })

    this.add({ x: 'center', y: 4, string: ' L E V E L   C O M P L E T E' })
    this.add({ x: 1, y: 1, grid: new Confetti({ id: 'Confetti', width: 78, height: 40, frameSpeed: 64, parent: this }) })
  }

  keyPressed (e) {
    // todo
  }

  firecrackers () {
    // randomly place firecrackers on the screen
    for (let i = 0; i < 40; i++) {
      const delay = Math.floor(Math.random() * 6000)
      setTimeout(() => {
        this.addFireCracker()
      }, delay)
    }
  }

  addFireCracker () {
    const x = Math.floor(Math.random() * 70) + 2
    const y = Math.floor(Math.random() * 32) + 2
    this.add({ x, y, grid: new FireCracker({ colors: false }) })
  }

  wrapText (text, width) {
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
