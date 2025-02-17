import Component from '../ui/Component.js'
import state from '../game/SharedState.js'

export default class Map extends Component {
  constructor() {
    super({ width: 60, height: 30, fill: '·', border: true })
    this.map = this.prettyMap(state.get('catacombs.map'))
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

  prettyMap(map) {
    const copy = [...map]
    for (let y = 0; y < copy.length; y++) {
      for (let x = 0; x < copy[y].length; x++) {
        if (copy[y][x] === '-') copy[y] = copy[y].substring(0, x) + '⎯' + copy[y].substring(x + 1)
        if (copy[y][x] === '|') copy[y] = copy[y].substring(0, x) + '⏐' + copy[y].substring(x + 1)
        if (copy[y][x] === '+') {
          let north = y > 0 && copy[y - 1][x] !== ' '
          let south = y < copy.length - 1 && copy[y + 1][x] !== ' '
          let west = x > 0 && copy[y][x - 1] !== ' '
          let east = x < copy[y].length - 1 && copy[y][x + 1] !== ' '
          if (north && south && west && east) copy[y] = copy[y].substring(0, x) + '┼' + copy[y].substring(x + 1)
          else if (north && south && west) copy[y] = copy[y].substring(0, x) + '┤' + copy[y].substring(x + 1)
          else if (north && south && east) copy[y] = copy[y].substring(0, x) + '├' + copy[y].substring(x + 1)
          else if (north && east && west) copy[y] = copy[y].substring(0, x) + '┴' + copy[y].substring(x + 1)
          else if (south && east && west) copy[y] = copy[y].substring(0, x) + '┬' + copy[y].substring(x + 1)
          else if (north && south) copy[y] = copy[y].substring(0, x) + '│' + copy[y].substring(x + 1)
          else if (west && east) copy[y] = copy[y].substring(0, x) + '─' + copy[y].substring(x + 1)
          else if (north && east) copy[y] = copy[y].substring(0, x) + '╰' + copy[y].substring(x + 1)
          else if (north && west) copy[y] = copy[y].substring(0, x) + '╯' + copy[y].substring(x + 1)
          else if (south && east) copy[y] = copy[y].substring(0, x) + '╭' + copy[y].substring(x + 1)
          else if (south && west) copy[y] = copy[y].substring(0, x) + '╮' + copy[y].substring(x + 1)
          else if (east) copy[y] = copy[y].substring(0, x) + '╶' + copy[y].substring(x + 1)
          else if (west) copy[y] = copy[y].substring(0, x) + '╴' + copy[y].substring(x + 1)
          else if (north) copy[y] = copy[y].substring(0, x) + '╵' + copy[y].substring(x + 1)
          else if (south) copy[y] = copy[y].substring(0, x) + '╷' + copy[y].substring(x + 1)
        }
      }
    }
    return copy
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
