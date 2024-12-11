import Grid from '../../ui/Grid.js'
import ProgressBar from '../../ui/ProgressBar.js'

export default class EnemyVitals extends Grid {
  constructor() {
    super({ id: 'EnemyVitals', width: 26, height: 9, border: true })
    this.add({ x: 2, y: 0, string: ' Nearby ', force: true })
    this.add({ x: 2, y: 3, grid: new ProgressBar({ stateKey: 'object.nearby' }) })
  }
}
