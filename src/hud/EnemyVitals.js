import Grid from '../ui/Grid.js'
import Progress from '../ui/Progress.js'

export default class EnemyVitals extends Grid {
  constructor() {
    super({ id: 'EnemyVitals', width: 26, height: 7, border: true })
    this.add({ x: 2, y: 0, string: ' Enemy Vitals ', force: true })
    this.add({ x: 2, y: 2, grid: new Progress({ label: 'Health', stateKey: 'enemy.health' }) })
  }
}
