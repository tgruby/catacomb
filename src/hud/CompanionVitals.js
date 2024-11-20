import Grid from '../ui/Grid.js'
import Progress from '../ui/Progress.js'

export default class CompanionVitals extends Grid {
  constructor() {
    super({ id: 'CompanionVitals', width: 26, height: 9, border: true })
    this.add({ x: 2, y: 0, string: ' Companion ', force: true })
    this.add({ x: 2, y: 3, grid: new Progress({ label: 'Health', stateKey: 'companion.health' }) })
  }
}
