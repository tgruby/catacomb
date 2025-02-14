import Grid from '../../ui/Grid.js'
import state from '../../game/SharedState.js'

export default class GameStats extends Grid {
  constructor() {
    super({ id: 'GameStats', width: 80, height: 7, fill: ' ', border: true })
    this.add({ x: 'center', y: 0, string: ` Objective `, force: true })
    this.updateObjective(state.get('catacombs.level.objective'))

    state.subscribe({
      key: 'catacombs.level.objective',
      callback: this.updateObjective.bind(this)
    })
  }

  updateObjective(objective) {
    this.add({ x: 'center', y: 3, string: `${objective}` })
    state.set({ key: 'request.screen.draw', value: true })
  }
}
