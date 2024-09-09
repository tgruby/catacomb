import Grid from '../ui/Grid.js'
import Progress from '../ui/Progress.js'
import state from '../game/SharedState.js'

export default class HeroVitals extends Grid {
  constructor() {
    super({ id: 'HeroVitals', width: 26, height: 22, fill: ' ', border: true })
    const name = state.get('hero.first.name')
    this.add({ x: 2, y: 0, string: ` ${name}'s Vitals `, force: true })
    this.add({ x: 2, y: 2, grid: new Progress({ label: 'Health', stateKey: 'hero.health' }) })
    this.add({ x: 2, y: 7, grid: new Progress({ label: 'Stamina', stateKey: 'hero.stamina' }) })
    this.add({ x: 2, y: 12, grid: new Progress({ label: 'Strength', stateKey: 'hero.strength' }) })
    this.add({ x: 2, y: 17, grid: new Progress({ label: 'Aura', stateKey: 'hero.magic' }) })
  }
}
