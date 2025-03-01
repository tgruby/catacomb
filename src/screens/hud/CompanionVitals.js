import Component from '../../ui/Component.js'
import ProgressBar from '../../ui/ProgressBar.js'

export default class CompanionVitals extends Component {
  constructor() {
    super({ id: 'CompanionVitals', width: 26, height: 8, border: true })
    this.add({ x: 2, y: 0, string: ' In Use ', force: true })
    this.add({ x: 2, y: 3, grid: new ProgressBar({ label: 'Health', stateKey: 'companion.health' }) })
  }
}
