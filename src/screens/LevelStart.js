import Screen from '../ui/Screen.js'
import state from '../game/SharedState.js'

export default class LevelStart extends Screen {
  constructor(props) {
    const { title, sound, font, lineHeight } = props
    super({ id: 'Intertitle', width: 60, height: 50, border: false })
    this.intertitleSequence(title, sound, font, lineHeight)
  }

  keyPressed() {
    // Ignore all key presses
  }

  intertitleSequence(title, sound, font, lineHeight = 8) {
    setTimeout(() => {
      if (sound) new Audio(sound).play()
      else new Audio('sounds/gong.mp3').play()
    }, 750)
    setTimeout(() => {
      if (!font) font = 'Bloody'
      let vSpace = this.height / 2 - (title.length * lineHeight) / 2
      for (let i = 0; i < title.length; i++) {
        this.add({ x: 'center', y: vSpace, fig: { text: title[i], font } })
        vSpace += lineHeight
      }
      state.set({ key: 'request.screen.draw', value: true })
    }, 1000)
    setTimeout(() => {
      state.set({ key: 'game.state', value: 'in-game' })
    }, 6000)
  }
}
