import Grid from '../ui/Grid.js'
import state from '../game/SharedState.js'

export default class Map extends Grid {
  constructor() {
    super({ width: 60, height: 30, fill: '·', border: true })
    this.map = state.get('catacombs.map')
    this.drawMap(state.get('hero.position'))
  }

  drawMap(position) {
    const inventory = state.get('hero.inventory')
    const map = inventory.find((item) => item.getType() === 'map')
    if (!map) this.add({ x: 'center', y: 'center', string: 'You do not have a map to view.', force: true })
    const { x, y, direction } = position
    if (this.map) {
      const editedMap = [...this.map]
      const marker = this._getDirectionMarker(direction)
      editedMap[y] = editedMap[y].substring(0, x) + marker + editedMap[y].substring(x + 1)
      const viewCenter = {
        x: Math.round(this.width / 2),
        y: Math.round(this.height / 2)
      }
      const heroOffset = { x: viewCenter.x - x, y: viewCenter.y - y }
      this.add({
        x: heroOffset.x,
        y: heroOffset.y,
        block: editedMap,
        backfill: true
      })
    }
  }

  _getDirectionMarker(direction) {
    if (direction === 'north') {
      return '↑'
    } else if (direction === 'south') {
      return '↓'
    }
    if (direction === 'east') {
      return '→'
    }
    if (direction === 'west') {
      return '←'
    }
  }
}
