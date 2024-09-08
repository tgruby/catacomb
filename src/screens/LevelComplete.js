import Screen from '../ui/Screen.js'
import state from '../game/SharedState.js'

export default class LevelComplete extends Screen {
  continue = `
      ╭─────────╮               
Press │ Enter ⏎ │ to continue...
      ╰─────────╯               
`

  horizontalBar = `
╭────────────────────────────────────────────────────────────────────────╮
╰────────────────────────────────────────────────────────────────────────╯
  `

  constructor() {
    super({ id: 'LevelComplete', width: 80, height: 50, border: false })
    this.add({ x: 'center', y: 4, fig: { text: 'Level Completed!', font: 'Small', horizontalLayout: 'default' } })
    this.add({ x: 'center', y: 9, block: this.horizontalBar.split('\n') })
    state.set({ key: 'request.screen.draw', value: true })
    this.scoreReviewSequence()
  }

  keyPressed(e) {
    if (e.key === 'Enter') {
      state.set({ key: 'game.state', value: 'load-next-level' })
    }
  }

  scoreReviewSequence() {
    setTimeout(() => {
      // this.add({ x: 4, y: 16, fig: { text: `Artifacts: 0`, font: 'Pagga' } })
      this.add({ x: 'center', y: 16, string: `A r t i f a c t s   F o u n d :   0` })
      state.set({ key: 'request.screen.draw', value: true })
    }, 1500)
    setTimeout(() => {
      this.add({ x: 'center', y: 20, string: `E n e m y s   D e f e a t e d :   0` })
      state.set({ key: 'request.screen.draw', value: true })
    }, 3000)
    setTimeout(() => {
      this.add({ x: 'center', y: 24, string: `E x p e r i e n c e   E a r n e d :   0` })
      state.set({ key: 'request.screen.draw', value: true })
    }, 4500)
    setTimeout(() => {
      this.add({ x: 'center', y: 36, block: this.continue.split('\n') })
      state.set({ key: 'request.screen.draw', value: true })
    }, 6000)
  }
}
