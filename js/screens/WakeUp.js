import Screen from '../core/Screen.js'
import memory from '../core/Memory.js'

export default class WakeUp extends Screen {

  constructor () {
    super({ id: 'WakeUp', width: 60, height: 50, border: false })
    this.wakeUpSequence()
  }

  keyPressed (e) {
    console.log('WakeUp keyPressed:', e.key)
  }

  wakeUpSequence () {
    setTimeout(() => {
        new Audio('sounds/gong.mp3').play()
        this.add({ x: 'center', y: 15, fig: { text: 'Day', font: 'Bloody' } })
        this.add({ x: 'center', y: 26, fig: { text: 'One', font: 'Bloody' } })
        memory.set({ key: 'request.screen.draw', value: true })
    }, 500)
    setTimeout(() => {
        new Audio('sounds/wake-up.mp3').play()
    }, 3000)
    setTimeout(() => {
        memory.set({ key: 'game.state', value: 'in-game' })
    }, 6000)
  }
}
