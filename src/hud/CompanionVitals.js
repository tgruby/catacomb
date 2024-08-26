import Grid from '../ui/Grid.js'
import Progress from '../ui/Progress.js'

export default class CompanionVitals extends Grid {
  constructor() {
    super({ id: 'CompanionVitals', width: 26, height: 7, border: true })
    this.add({ x: 2, y: 0, string: ' Companion ', force: true })
    this.add({ x: 2, y: 2, grid: new Progress({ label: 'Health', stateKey: 'companion.health' }) })
  }
}
