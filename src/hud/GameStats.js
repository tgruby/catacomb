import Grid from '../ui/Grid.js'
import state from '../game/SharedState.js'
import { getHeroLevelTitle } from '../game/Hero.js'

export default class GameStats extends Grid {
  constructor() {
    super({ id: 'GameStats', width: 80, height: 7, fill: ' ', border: true })
    this.add({
      x: 'center',
      y: 0,
      string: ' ' + state.get('hero.first.name') + ' ' + state.get('hero.last.name') + ' ',
      force: true
    })

    this.updateRank(state.get('hero.level'))
    this.updateXP(state.get('hero.xp'))
    this.updateCatacombsLevel(state.get('catacombs.level'))

    state.subscribe({
      key: 'hero.level',
      callback: this.updateRank.bind(this)
    })
    state.subscribe({
      key: 'hero.xp',
      callback: this.updateXP.bind(this)
    })
    state.subscribe({
      key: 'catacombs.level',
      callback: this.updateCatacombsLevel.bind(this)
    })
  }

  updateRank(level) {
    this.add({
      x: 'left',
      y: 2,
      string: `Rank: ${getHeroLevelTitle(level)}`
    })
    state.set({ key: 'request.screen.draw', value: true })
  }

  updateXP(xp) {
    const in50Parts = Math.round((xp.current / xp.nextLevel) * 50)
    const xpBar = 'XP: ' + ''.repeat(in50Parts) + ' '.repeat(50 - in50Parts)
    this.add({ x: 'left', y: 4, string: xpBar })
  }

  updateCatacombsLevel(level) {
    const objective = state.get('catacombs.level.objective')
    if (!objective) return
    this.add({ x: 'right', y: 2, string: `Catacomb Level: ${level}` })
    this.add({ x: 'right', y: 4, string: `Objective: ${objective}` })
    state.set({ key: 'request.screen.draw', value: true })
  }
}
