import Grid from '../../ui/Grid.js'
import state from '../../game/SharedState.js'
// import { upperLeft, upperRight } from '../../ui/CelticBorder.js'

export default class GameStats extends Grid {
  constructor() {
    super({ id: 'GameStats', width: 80, height: 7, fill: ' ', border: true })
    // this.add({ x: 0, y: 0, block: upperLeft, force: true })
    // this.add({ x: 71, y: 0, block: upperRight, force: true })
    const name = state.get('hero.first.name') + ' ' + state.get('hero.last.name')
    this.add({ x: 'center', y: 0, string: `=≡≣ ${name} ≣≡=`, force: true })

    // this.updateScore(state.get('hero.score'))
    // // TODO: change out xp management for level progress bar
    // this.updateArtifactCount(0)
    // this.updateProgress(state.get('hero.xp'))
    // this.updateLevel(state.get('catacombs.level'))
    // this.updateObjective(state.get('catacombs.level.objective'))

    state.subscribe({
      key: 'hero.score',
      callback: this.updateScore.bind(this)
    })
    state.subscribe({
      key: 'hero.xp',
      callback: this.updateProgress.bind(this)
    })
    state.subscribe({
      key: 'catacombs.level',
      callback: this.updateLevel.bind(this)
    })
    state.subscribe({
      key: 'catacombs.level.objective',
      callback: this.updateObjective.bind(this)
    })
  }

  updateScore(score) {
    // TODO: add score count iterator micro-animation here.  so rather than raw update, count up.
    this.add({ x: 'center', y: 3, string: `Score: ${score}` })
    state.set({ key: 'request.screen.draw', value: true })
  }

  updateProgress(xp) {
    const inParts = Math.round((xp.current / xp.nextLevel) * 20)
    const xpBar = 'Level Progress: ' + ''.repeat(inParts) + ' '.repeat(20 - inParts)
    this.add({ x: 'left', y: 4, string: xpBar })
  }

  updateLevel(level) {
    this.add({ x: 'left', y: 2, string: `Level: ${level}` })
    state.set({ key: 'request.screen.draw', value: true })
  }

  updateObjective(objective) {
    this.add({ x: 'right', y: 4, string: `Objective: ${objective}` })
    state.set({ key: 'request.screen.draw', value: true })
  }

  updateArtifactCount(count) {
    this.add({ x: 'right', y: 2, string: `Artifacts: ${count}` })
    state.set({ key: 'request.screen.draw', value: true })
  }
}
