import Grid from '../../ui/Grid.js'
import ProgressBar from '../../ui/ProgressBar.js'

export default class HeroVitals extends Grid {
  constructor() {
    super({ id: 'HeroVitals', width: 26, height: 20, fill: ' ', border: true })
    this.add({ x: 2, y: 0, string: ` Vitals `, force: true })
    this.add({ x: 2, y: 3, grid: new ProgressBar({ label: 'Health', stateKey: 'hero.health' }) })
    this.add({ x: 2, y: 8, grid: new ProgressBar({ label: 'Stamina', stateKey: 'hero.stamina' }) })
    this.add({ x: 2, y: 13, grid: new ProgressBar({ label: 'Focus', stateKey: 'hero.magic' }) })
  }
}
