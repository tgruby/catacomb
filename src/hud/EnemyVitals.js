import Grid from '../ui/Grid.js'
import Progress from '../ui/Progress.js'

export default class EnemyVitals extends Grid {
  constructor() {
    super({ id: 'EnemyVitals', width: 26, height: 9, border: true })
    this.add({ x: 2, y: 0, string: ' Enemy ', force: true })
    this.add({ x: 2, y: 3, grid: new Progress({ label: 'Health', stateKey: 'enemy.health' }) })
  }
}
