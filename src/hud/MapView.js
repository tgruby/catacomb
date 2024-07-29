import Grid from '../core/Grid.js'
import memory from '../core/Memory.js'

export default class MapView extends Grid {
  constructor () {
    super({ id: 'MapView', width: 26, height: 21, fill: '·', border: true })
    this.add({ x: 'left', y: 0, string: ' Map ', force: true })
    this.mapUpdate(memory.get('catacombs.map'))
    this.positionUpdate(memory.get('hero.position'))

    memory.subscribe({ key: 'hero.position', callback: this.positionUpdate.bind(this) })
    memory.subscribe({ key: 'catacombs.map', callback: this.mapUpdate.bind(this) })
  }

  /*
    When a map change occurs, update the MapView to put the hero
    in the center, marking them with a direction arrow.
  */
  positionUpdate (position) {
    const inventory = memory.get('hero.inventory')
    const map = inventory.find(item => item.id === 'item.map')
    if (!map) return
    const { x, y, direction } = position
    if (this.map) {
      const editedMap = [...this.map]
      const marker = this._getDirectionMarker(direction)
      editedMap[y] = editedMap[y].substring(0, x) + marker + editedMap[y].substring(x + 1)
      const viewCenter = { x: Math.round(this.width / 2), y: Math.round(this.height / 2) }
      const heroOffset = { x: viewCenter.x - x, y: viewCenter.y - y }
      this.add({ x: heroOffset.x, y: heroOffset.y, block: editedMap, backfill: true })
    }
  }

  mapUpdate (map) {
    this.map = map
  }

  _getDirectionMarker (direction) {
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
