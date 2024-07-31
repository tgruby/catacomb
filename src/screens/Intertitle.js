import Screen from "../core/Screen.js"
import memory from "../core/Memory.js"

export default class Intertitle extends Screen {
  constructor(props) {
    const { font, lines, lineHeight } = props
    super({ id: "Intertitle", width: 60, height: 50, border: false })
    this.intertitleSequence(font, lines, lineHeight)
  }

  keyPressed() {
    // Ignore all key presses
  }

  intertitleSequence(font, lines, lineHeight = 8) {
    setTimeout(() => {
      new Audio("sounds/gong.mp3").play()
    }, 750)
    setTimeout(() => {
      let vSpace = this.height / 2 - (lines.length * lineHeight) / 2
      for (let i = 0; i < lines.length; i++) {
        this.add({ x: "center", y: vSpace, fig: { text: lines[i], font } })
        vSpace += lineHeight
      }
      memory.set({ key: "request.screen.draw", value: true })
    }, 1000)
    setTimeout(() => {
      memory.set({ key: "game.state", value: "in-game" })
    }, 6000)
  }
}
