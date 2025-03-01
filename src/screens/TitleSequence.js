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
    super({ id: 'TitleSequence', width: 80, height: 40, border: false })
    this.add({
      x: 'center',
      y: 16,
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
      this.add({ x: 0, y: 8, grid: new CatacombTitleAnimation() })
    }, 17000)
    setTimeout(() => {
      if (this.stopped) return
      this.add({
        x: 'center',
        y: 28,
        string: 'T H E   T O M B   O F   T A H A R A'
      })
      state.set({ key: 'request.screen.draw', value: true })
    }, 19000)
    setTimeout(() => {
      if (this.stopped) return
      this.add({ x: 'center', y: 31, block: this.startGame.split('\n') })
      state.set({ key: 'request.screen.draw', value: true })
    }, 22000)
  }

  showGrubyStudios() {
    const grid = new Component({
      id: 'GrubStudios',
      width: 80,
      height: 40,
      border: false
    })
    grid.add({ x: 'center', y: 8, fig: { text: 'Gruby', font: 'Crawford2' } })
    grid.add({
      x: 'center',
      y: 16,
      fig: { text: 'Studios', font: 'Crawford2' }
    })
    this.add({ x: 0, y: 0, grid })
    state.set({ key: 'request.screen.draw', value: true })
  }

  showInAssociationWith() {
    const grid = new Component({
      id: 'InAssociationWith',
      width: 80,
      height: 40,
      border: false
    })
    grid.add({ x: 'center', y: 6, fig: { text: 'In', font: 'Standard' } })
    grid.add({
      x: 'center',
      y: 14,
      fig: { text: 'Association', font: 'Standard' }
    })
    grid.add({ x: 'center', y: 22, fig: { text: 'With', font: 'Standard' } })
    this.add({ x: 0, y: 0, grid })
    state.set({ key: 'request.screen.draw', value: true })
  }

  showAsciiArcade() {
    const grid = new Component({
      id: 'AsciiArcade',
      width: 80,
      height: 40,
      border: false
    })
    grid.add({ x: 'center', y: 6, fig: { text: 'Ascii-', font: 'Crawford2' } })
    grid.add({ x: 'center', y: 14, fig: { text: 'Arcade', font: 'Crawford2' } })
    grid.add({
      x: 'center',
      y: 24,
      fig: { text: 'presents...', font: 'Slant' }
    })
    this.add({ x: 0, y: 0, grid })
    state.set({ key: 'request.screen.draw', value: true })
  }
}
