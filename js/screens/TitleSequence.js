import Grid from '../core/Grid.js'
import Screen from '../core/Screen.js'
import memory from '../core/Memory.js'
import AudioPlayer from '../core/AudioPlayer.js'
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
  constructor () {
    figlet.defaults({ fontPath: "figlet/fonts" });
    super({ id: 'TitleSequence', width: 80, height: 50, border: false })
    this.add({ x: 'center', y: 18, block: this.startTitleSequence.split('\n') })
    this.audio = new AudioPlayer('sounds/fenras-theme-trailer-music-intro-music-by-oliver-weckauf.mp3')
    figlet.preloadFonts(['Standard', 'Crawford2', 'Slant', 'Star Wars', 'Soft'], this.ready)
    this.ranTitleSequency = false
  }

  ready () {
  }

  keyPressed (e) {
    if (e.key === 'Enter') {
      if (!this.ranTitleSequency) {
        this.titleSequence()
        this.ranTitleSequency = true
      } else {
        this.audio.fadeOut(2000)
        memory.set({ key: 'game.state', value: 'setup-game' })
      }
    }
  }

  titleSequence () {
    this.clear()
    this.audio.play()
    this.showAsciiArcade()
    setTimeout(() => {
      this.removeGrid('AsciiArcade')
      this.showInAssociationWith()
    }, 5000)
    setTimeout(() => {
      this.removeGrid('InAssociationWith')
      this.showGrubyStudios()
    }, 9000)
    setTimeout(() => {
      this.removeGrid('GrubStudios')
      this.add({ x: 1, y: 12, grid: new CatacombTitleAnimation() })
    }, 17000)
    setTimeout(() => {
      this.add({ x: 'center', y: 32, string: 'T H E   T O M B   O F   T A H A R A' })
      memory.set({ key: 'request.screen.draw', value: true })
    }, 19000)
    setTimeout(() => {
      this.add({ x: 'center', y: 36, block: this.startGame.split('\n') })
      memory.set({ key: 'request.screen.draw', value: true })
    }, 22000)
  }

  showGrubyStudios () {
    const grid = new Grid({ id: 'GrubStudios', width: 76, height: 28, border: false })
    grid.add({ x: 'center', y: 1, block: this.figFont('Gruby') })
    grid.add({ x: 'center', y: 9, block: this.figFont('Studios') })
    this.add({ x: 2, y: 6, grid })
    memory.set({ key: 'request.screen.draw', value: true })
  }

  showInAssociationWith () {
    const grid = new Grid({ id: 'InAssociationWith', width: 76, height: 28, border: false })
    grid.add({ x: 'center', y: 1, block: this.figFont('In', 'Standard') })
    grid.add({ x: 'center', y: 9, block: this.figFont('Association', 'Standard') })
    grid.add({ x: 'center', y: 17, block: this.figFont('With', 'Standard') })
    this.add({ x: 2, y: 6, grid })
    memory.set({ key: 'request.screen.draw', value: true })
  }

  showAsciiArcade () {
    const grid = new Grid({ id: 'AsciiArcade', width: 76, height: 28, border: false })
    grid.add({ x: 'center', y: 1, block: this.figFont('Ascii') })
    grid.add({ x: 'center', y: 9, block: this.figFont('Arcade') })
    grid.add({ x: 'center', y: 19, block: this.figFont('presents...', 'Slant') })
    this.add({ x: 2, y: 10, grid })
    memory.set({ key: 'request.screen.draw', value: true })
  }

  // TODO: eventually move this to grid
  figFont (text, font = 'Crawford2') {
    return figlet.textSync(text, {
      font,
      horizontalLayout: 'full',
      verticalLayout: 'default',
      whitespaceBreak: true
    }).split('\n')
  }
}
