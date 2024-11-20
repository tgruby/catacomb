import Grid from '../ui/Grid.js'
import Progress from '../ui/Progress.js'

export default class HeroVitals extends Grid {
  constructor() {
    super({ id: 'HeroVitals', width: 26, height: 20, fill: ' ', border: true })
    this.add({ x: 2, y: 0, string: ` Vitals `, force: true })
    this.add({ x: 2, y: 3, grid: new Progress({ label: 'Health', stateKey: 'hero.health' }) })
    this.add({ x: 2, y: 8, grid: new Progress({ label: 'Stamina', stateKey: 'hero.stamina' }) })
    this.add({ x: 2, y: 13, grid: new Progress({ label: 'Focus', stateKey: 'hero.magic' }) })
  }
}
