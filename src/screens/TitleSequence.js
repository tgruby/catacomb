import Component from '../ui/Component.js'
import Screen from '../ui/Screen.js'
import state from '../game/SharedState.js'
import AudioPlayer from '../ui/AudioPlayer.js'
import CatacombTitleAnimation from '../animations/CatacombTitleAnimation.js'

export default class TitleSequence extends Screen {
  startTitleSequence = `
         ╭─────────╮         
   Press │ Enter ⏎ │ to Begin
         ╰─────────╯         
`

  startGame = `
         ╭─────────╮        
   Press │ Enter ⏎ │ to Play
         ╰─────────╯        
`
  constructor() {
    super({ id: 'TitleSequence', width: 80, height: 50, border: false })
    this.add({
      x: 'center',
      y: 18,
      block: this.startTitleSequence.split('\n')
    })
    this.audio = new AudioPlayer('sounds/fenras-theme-trailer-music-intro-music-by-oliver-weckauf.mp3')
    this.ranTitleSequency = false
    this.stopped = false
  }

  ready() {}

  keyPressed(e) {
    if (e.key === 'Enter') {
      if (!this.ranTitleSequency) {
        this.titleSequence()
        this.ranTitleSequency = true
      } else {
        this.audio.fadeOut(2000)
        if (this.getComponent('CatacombTitleAnimation')) {
          this.getComponent('CatacombTitleAnimation').kill()
          this.removeComponent('CatacombTitleAnimation')
        }
        this.stopped = true
        state.set({ key: 'game.state', value: 'load-next-level' })
      }
    }
  }

  titleSequence() {
    this.clear()
    this.audio.play()
    this.showAsciiArcade()
    setTimeout(() => {
      if (this.stopped) return
      this.clear()
      this.showInAssociationWith()
    }, 5000)
    setTimeout(() => {
      if (this.stopped) return
      this.clear()
      this.showGrubyStudios()
    }, 9000)
    setTimeout(() => {
      if (this.stopped) return
      this.clear()
      this.add({ x: 1, y: 12, grid: new CatacombTitleAnimation() })
    }, 17000)
    setTimeout(() => {
      if (this.stopped) return
      this.add({
        x: 'center',
        y: 32,
        string: 'T H E   T O M B   O F   T A H A R A'
      })
      state.set({ key: 'request.screen.draw', value: true })
    }, 19000)
    setTimeout(() => {
      if (this.stopped) return
      this.add({ x: 'center', y: 36, block: this.startGame.split('\n') })
      state.set({ key: 'request.screen.draw', value: true })
    }, 22000)
  }

  showGrubyStudios() {
    const grid = new Component({
      id: 'GrubStudios',
      width: 76,
      height: 28,
      border: false
    })
    grid.add({ x: 'center', y: 1, fig: { text: 'Gruby', font: 'Crawford2' } })
    grid.add({
      x: 'center',
      y: 9,
      fig: { text: 'Studios', font: 'Crawford2' }
    })
    this.add({ x: 2, y: 6, grid })
    state.set({ key: 'request.screen.draw', value: true })
  }

  showInAssociationWith() {
    const grid = new Component({
      id: 'InAssociationWith',
      width: 76,
      height: 28,
      border: false
    })
    grid.add({ x: 'center', y: 1, fig: { text: 'In', font: 'Standard' } })
    grid.add({
      x: 'center',
      y: 9,
      fig: { text: 'Association', font: 'Standard' }
    })
    grid.add({ x: 'center', y: 17, fig: { text: 'With', font: 'Standard' } })
    this.add({ x: 2, y: 6, grid })
    state.set({ key: 'request.screen.draw', value: true })
  }

  showAsciiArcade() {
    const grid = new Component({
      id: 'AsciiArcade',
      width: 76,
      height: 28,
      border: false
    })
    grid.add({ x: 'center', y: 1, fig: { text: 'Ascii-', font: 'Crawford2' } })
    grid.add({ x: 'center', y: 9, fig: { text: 'Arcade', font: 'Crawford2' } })
    grid.add({
      x: 'center',
      y: 19,
      fig: { text: 'presents...', font: 'Slant' }
    })
    this.add({ x: 2, y: 10, grid })
    state.set({ key: 'request.screen.draw', value: true })
  }
}
