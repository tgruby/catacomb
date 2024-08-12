import { locationHash } from './LevelGenerator.js'
import memory from '../core/Memory.js'
import objectsLoader from './GameObjectLoader.js'

export default class MovementEngine {
  constructor(hero) {
    this.hero = hero
    memory.subscribe({
      key: 'hero.position',
      callback: this.setPointOfView.bind(this)
    })
  }
  // layers to pov mapping:

  // 'layer_1_door': this.near_left_door,
  // 'layer_2_door': this.middle_left_door,
  // 'layer_3_door': this.far_left_door,
  // 'layer_4_door': this.near_center_door,
  // 'layer_5_door': this.middle_center_door,
  // 'layer_6_door': this.far_center_door,
  // 'layer_7_door': this.far_right_door,
  // 'layer_8_door': this.middle_right_door,
  // 'layer_9_door': this.near_right_door,

  // 3x3 view offsets for each direction
  // format: [layer, y, x]
  NorthView = [
    ['layer_3_', -2, -2],
    ['layer_6_', -3, 0],
    ['layer_7_', -2, 2],
    ['layer_2_', -1, -2],
    ['layer_5_', -2, 0],
    ['layer_8_', -1, 2],
    ['layer_1_', 0, -2],
    ['layer_4_', -1, 0],
    ['layer_9_', 0, 2] // near_right
  ]

  SouthView = [
    ['layer_3_', 2, 2],
    ['layer_6_', 3, 0],
    ['layer_7_', 2, -2],
    ['layer_2_', 1, 2],
    ['layer_5_', 2, 0],
    ['layer_8_', 1, -2],
    ['layer_1_', 0, 2],
    ['layer_4_', 1, 0],
    ['layer_9_', 0, -2]
  ]

  // --- start here ---

  EastView = [
    ['layer_3_', -1, 4],
    ['layer_6_', 0, 6],
    ['layer_7_', 1, 4],
    ['layer_2_', -1, 2],
    ['layer_5_', 0, 4],
    ['layer_8_', 1, 2],
    ['layer_1_', -1, 0],
    ['layer_4_', 0, 2],
    ['layer_9_', 1, 0]
  ]

  WestView = [
    ['layer_3_', 1, -4],
    ['layer_6_', 0, -6],
    ['layer_7_', -1, -4],
    ['layer_2_', 1, -2],
    ['layer_5_', 0, -4],
    ['layer_8_', -1, -2],
    ['layer_1_', 1, 0],
    ['layer_4_', 0, -2],
    ['layer_9_', -1, 0]
  ]

  moveDown() {
    const position = memory.get('hero.position')
    const current = this.getGameObjectAt(position)
    // first check to see if we are engaged in combat with a creature
    if (current !== undefined) {
      if (current.getType() === 'ladder-down') {
        // we can move the hero to the next level
        memory.set({ key: 'catacombs.next.level', value: true })
        this.hero.moved()
        new Audio('sounds/level-complete.mp3').play()
        return true
      }
    }
    return false
  }

  moveForward() {
    const position = memory.get('hero.position')

    // now check to see if we are too tired to move
    const stamina = memory.get('hero.stamina')
    if (stamina.value < 1) {
      const hero = memory.get({ key: 'hero.name' })
      memory.set({
        key: 'message.center',
        value: `${hero} is too tired to move!`
      })
      return
    }

    // get next catacomb feature or entity at the next location.
    let newX = position.x
    let newY = position.y
    if (position.direction === 'north') newY = newY - 1
    if (position.direction === 'south') newY = newY + 1
    if (position.direction === 'east') newX = newX + 2
    if (position.direction === 'west') newX = newX - 2
    const next = this.getGameObjectAt({ y: newY, x: newX })

    // if there is an obstruction, don't move the hero.
    if (next !== undefined && next.obstructsMovement()) {
      const obstruction = next.getName()
      memory.set({
        key: 'message.center',
        value: `${obstruction} blocks your path!`
      })
      return
    }

    // we can move the hero...
    position.x = newX
    position.y = newY
    memory.set({ key: 'hero.position', value: position })
    this.hero.moved()
    new Audio('sounds/footstep.mp3').play()
  }

  turnLeft() {
    const position = memory.get('hero.position')
    if (position.direction === 'north') position.direction = 'west'
    else if (position.direction === 'west') position.direction = 'south'
    else if (position.direction === 'south') position.direction = 'east'
    else if (position.direction === 'east') position.direction = 'north'
    memory.set({ key: 'hero.position', value: position })
  }

  turnRight() {
    const position = memory.get('hero.position')
    if (position.direction === 'north') position.direction = 'east'
    else if (position.direction === 'east') position.direction = 'south'
    else if (position.direction === 'south') position.direction = 'west'
    else if (position.direction === 'west') position.direction = 'north'
    memory.set({ key: 'hero.position', value: position })
  }

  setPointOfView() {
    const position = memory.get('hero.position')
    let background = []
    let offsets = this.NorthView

    if (position.direction === 'south') offsets = this.SouthView
    if (position.direction === 'east') offsets = this.EastView
    if (position.direction === 'west') offsets = this.WestView

    for (let i = 0; i < offsets.length; i++) {
      const backgroundFeature = this.getBackgroundFeatureAt(
        position.y + offsets[i][1],
        position.x + offsets[i][2]
      )
      if (backgroundFeature) background.push(offsets[i][0] + backgroundFeature)
    }
    background = background.sort()

    // remove center hallways
    background = background.filter(
      (element) => !element.startsWith('layer_4_hall')
    )
    background = background.filter(
      (element) => !element.startsWith('layer_5_hall')
    )

    // if we have a layer_4, we cannot have a layer_3, layer_5, layer_6, layer_7
    if (background.some((element) => element.startsWith('layer_4_'))) {
      background = background.filter(
        (element) => !element.startsWith('layer_2_')
      )
      background = background.filter(
        (element) => !element.startsWith('layer_3_')
      )
      background = background.filter(
        (element) => !element.startsWith('layer_5_')
      )
      background = background.filter(
        (element) => !element.startsWith('layer_6_')
      )
      background = background.filter(
        (element) => !element.startsWith('layer_7_')
      )
      background = background.filter(
        (element) => !element.startsWith('layer_8_')
      )
    } else if (background.some((element) => element.startsWith('layer_5_'))) {
      background = background.filter(
        (element) => !element.startsWith('layer_3_')
      )
      background = background.filter(
        (element) => !element.startsWith('layer_6_')
      )
      background = background.filter(
        (element) => !element.startsWith('layer_7_')
      )
    }

    const response = { background }

    // Now look for objects in the viewable area and add them to the response
    const near = this.getLayer(offsets, 'layer_4_')
    const middle = this.getLayer(offsets, 'layer_5_')
    const far = this.getLayer(offsets, 'layer_6_')
    const hereEntity = this.getGameObjectAt({ y: position.y, x: position.x })
    const nearEntity = this.getGameObjectAt({
      y: position.y + near[1],
      x: position.x + near[2]
    })
    const midEntity = this.getGameObjectAt({
      y: position.y + middle[1],
      x: position.x + middle[2]
    })
    const farEntity = this.getGameObjectAt({
      y: position.y + far[1],
      x: position.x + far[2]
    })
    if (hereEntity) response.here = hereEntity.getAnimation('here')
    if (nearEntity) response.nearby = nearEntity.getAnimation('nearby')
    if (midEntity) response.midRange = midEntity.getAnimation('midRange')
    if (farEntity) response.farAway = farEntity.getAnimation('farAway')

    if (response.hereEntity) {
      let nameArticle = 'a'
      const name = response.hereEntity.getName()
      if (
        name.startsWith('a') ||
        name.startsWith('e') ||
        name.startsWith('i') ||
        name.startsWith('o') ||
        name.startsWith('u')
      ) {
        nameArticle = 'an'
      }
      memory.set({
        key: 'message.center',
        value: `You see ${nameArticle} ${name}`
      })
    }

    memory.set({ key: 'hero.viewpoint', value: response })
  }

  getLayer(offsets, name) {
    for (let i = 0; i < offsets.length; i++) {
      if (offsets[i][0] === name) return offsets[i]
    }
    return undefined
  }

  getGameObjectAt(props) {
    const { y, x } = props
    const map = memory.get('catacombs.map')
    const entities = memory.get('catacombs.objects')
    if (y < 0 || y >= map.length) return undefined
    if (x < 0 || x >= map[y].length) return undefined

    if (locationHash(y, x) in entities) return entities[locationHash(y, x)]
    const symbol = map[y][x]
    if (symbol === ' ') return undefined
    if (symbol === '|' || symbol === '+' || symbol === '-')
      return objectsLoader.getInstanceOf('wall')
  }

  removeFeatureAt(props) {
    const { y, x } = props
    const entities = memory.get('catacombs.objects')
    if (locationHash(y, x) in entities) delete entities[locationHash(y, x)]
    memory.set({ key: 'catacombs.objects', value: entities })
    this.setPointOfView()
  }

  getBackgroundFeatureAt(y, x) {
    const map = memory.get('catacombs.map')
    if (y < 0 || y >= map.length) return undefined
    if (x < 0 || x >= map[y].length) return undefined

    const symbol = map[y][x]
    if (symbol === '|') return 'wall'
    if (symbol === '+') return 'wall'
    if (symbol === '-') return 'wall'
    if (symbol === 'o') return 'door'
    if (symbol === ' ') return 'hall'
    else return 'hall'
  }
}
