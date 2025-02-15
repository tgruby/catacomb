import { xyHash } from './Util.js'
import state from './SharedState.js'
import objectsLoader from './GameObjectLoader.js'

export default class GameEngine {
  constructor(hero) {
    state.set({ key: 'object.nearby', value: undefined })
    this.initialized = false
    this.hero = hero
    state.subscribe({
      key: 'hero.position',
      callback: this._setPointOfView.bind(this)
    })
    if (state.exists('hero.position')) this._setPointOfView(state.get('hero.position'))
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

  async moveForward() {
    const position = state.get('hero.position')

    // now check to see if we are too tired to move
    const stamina = state.get('hero.stamina')
    if (stamina.current < 1) {
      state.set({ key: 'message.center', value: `you must rest first!` })
      return
    }

    // get next catacomb feature or entity at the next location.
    let newX = position.x
    let newY = position.y
    if (position.direction === 'north') newY = newY - 1
    if (position.direction === 'south') newY = newY + 1
    if (position.direction === 'east') newX = newX + 2
    if (position.direction === 'west') newX = newX - 2
    const next = this._getGameObjectAt({ y: newY, x: newX })

    // if there is an obstruction, don't move the hero.
    if (next !== undefined && next.obstructsMovement()) {
      if (next.obstructSound()) new Audio(next.obstructSound()).play()
      if (next.obstructMessage()) state.set({ key: 'message.center', value: next.obstructMessage() })
      return
    }

    // we can move the hero...
    position.x = newX
    position.y = newY
    state.set({ key: 'message.center', value: '' })
    state.set({ key: 'hero.position', value: position })
    this.hero.moved()
    new Audio('sounds/footstep.mp3').play()
    this._updateObjectNearby()
  }

  async turnLeft() {
    const position = state.get('hero.position')
    if (position.direction === 'north') position.direction = 'west'
    else if (position.direction === 'west') position.direction = 'south'
    else if (position.direction === 'south') position.direction = 'east'
    else if (position.direction === 'east') position.direction = 'north'
    state.set({ key: 'hero.position', value: position })
    this._updateObjectNearby()
  }

  async turnRight() {
    const position = state.get('hero.position')
    if (position.direction === 'north') position.direction = 'east'
    else if (position.direction === 'east') position.direction = 'south'
    else if (position.direction === 'south') position.direction = 'west'
    else if (position.direction === 'west') position.direction = 'north'
    state.set({ key: 'hero.position', value: position })
    this._updateObjectNearby()
  }

  async moveDown() {
    const position = state.get('hero.position')
    const current = this._getGameObjectAt(position)
    if (current !== undefined) {
      if (current.getType() === 'ladder-down') {
        this.hero.moved()
        state.set({ key: 'game.state', value: 'level-complete' })
        return true
      }
    }
    return false
  }

  meelee() {
    const weapon = state.get('hero.equipped.weapon')
    let damage = 0
    if (!weapon) {
      state.set({ key: 'message.center', value: 'you must equip a weapon before you can attack!' })
      new Audio('sounds/nope.mp3').play()
      return
    } else {
      const staminaCost = weapon.getAttack().stamina
      if (state.get('hero.stamina').current < staminaCost) {
        state.set({ key: 'message.center', value: `you must rest first!` })
        new Audio('sounds/out-of-breath.mp3').play()
      } else {
        state.set({ key: 'hero.lastActive', value: new Date() })
        let stamina = state.get('hero.stamina')
        stamina.current -= staminaCost
        state.set({ key: 'hero.stamina', value: stamina })
        // add strength bonus to attack damage
        damage += weapon.getAttack().damage
        const position = state.get('hero.position')
        const target = this._getGameObjectAt(position)
        // if an item or creature is 'here', do damage to it.
        if (target) {
          target.setHealth(target.getHealth() - damage)
          console.log(`${target.getName()} at ${target.getHealth()} health.`)
          if (target.getHealth() <= 0) {
            this._removeGameObjectAt(position)
            if (target.getDestroyedSound()) {
              new Audio(target.getDestroyedSound()).play()
            } else {
              new Audio('sounds/break.mp3').play()
            }
          }
        }
        // this is a hack to solve locked doors nearby.
        // if a locked door is nearby, also do damage to it
        let nearbyX = position.x
        let nearbyY = position.y
        if (position.direction === 'north') nearbyY = nearbyY - 1
        if (position.direction === 'south') nearbyY = nearbyY + 1
        if (position.direction === 'east') nearbyX = nearbyX + 2
        if (position.direction === 'west') nearbyX = nearbyX - 2
        const nearby = this._getGameObjectAt({ y: nearbyY, x: nearbyX })
        if (nearby && nearby.getType('door-locked')) {
          nearby.setHealth(nearby.getHealth() - damage)
          console.log(`${nearby.getName()} at ${nearby.getHealth()} health.`)
          if (nearby.getHealth() <= 0) {
            this._removeGameObjectAt(nearby)
            if (nearby.getDestroyedSound()) {
              new Audio(nearby.getDestroyedSound()).play()
            } else {
              new Audio('sounds/break.mp3').play()
            }
            this._addGameObjectAt({ x: nearbyX, y: nearbyY, type: 'doorway' })
          }
        }
        state.set({ key: 'hero.action', value: weapon.getAttack() })
        state.set({ key: 'message.center', value: `you attack with ${weapon.getName().toLowerCase()}` })
        this._updateObjectNearby()
      }
    }
  }

  _setPointOfView(position) {
    let background = []
    let offsets = this.NorthView

    if (position.direction === 'south') offsets = this.SouthView
    if (position.direction === 'east') offsets = this.EastView
    if (position.direction === 'west') offsets = this.WestView

    for (let i = 0; i < offsets.length; i++) {
      const backgroundFeature = this._getBackgroundFeatureAt(position.y + offsets[i][1], position.x + offsets[i][2])
      if (backgroundFeature) background.push(offsets[i][0] + backgroundFeature)
    }
    background = background.sort()

    // remove center hallways
    background = background.filter((element) => !element.startsWith('layer_4_hall'))
    background = background.filter((element) => !element.startsWith('layer_5_hall'))

    // if we have a layer_4, we cannot have a layer_3, layer_5, layer_6, layer_7
    if (background.some((element) => element.startsWith('layer_4_'))) {
      background = background.filter((element) => !element.startsWith('layer_2_'))
      background = background.filter((element) => !element.startsWith('layer_3_'))
      background = background.filter((element) => !element.startsWith('layer_5_'))
      background = background.filter((element) => !element.startsWith('layer_6_'))
      background = background.filter((element) => !element.startsWith('layer_7_'))
      background = background.filter((element) => !element.startsWith('layer_8_'))
    } else if (background.some((element) => element.startsWith('layer_5_'))) {
      background = background.filter((element) => !element.startsWith('layer_3_'))
      background = background.filter((element) => !element.startsWith('layer_6_'))
      background = background.filter((element) => !element.startsWith('layer_7_'))
    }

    const response = { background }

    // Now look for objects in the viewable area and add them to the response
    const near = this._getLayer(offsets, 'layer_4_')
    const middle = this._getLayer(offsets, 'layer_5_')
    const far = this._getLayer(offsets, 'layer_6_')
    const hereEntity = this._getGameObjectAt({ y: position.y, x: position.x })
    const nearEntity = this._getGameObjectAt({
      y: position.y + near[1],
      x: position.x + near[2]
    })
    const midEntity = this._getGameObjectAt({
      y: position.y + middle[1],
      x: position.x + middle[2]
    })
    const farEntity = this._getGameObjectAt({
      y: position.y + far[1],
      x: position.x + far[2]
    })
    if (hereEntity) {
      response.here = hereEntity.getPerspective('here')
    }
    if (nearEntity) response.nearby = nearEntity.getPerspective('nearby')
    if (midEntity) response.midRange = midEntity.getPerspective('midRange')
    if (farEntity) response.farAway = farEntity.getPerspective('farAway')

    state.set({ key: 'hero.viewpoint', value: response })
  }

  _getLayer(offsets, name) {
    for (let i = 0; i < offsets.length; i++) {
      if (offsets[i][0] === name) return offsets[i]
    }
    return undefined
  }

  _getGameObjectAt(props) {
    const { y, x } = props
    const map = state.get('catacombs.map')
    const entities = state.get('catacombs.objects')
    if (y < 0 || y >= map.length) return undefined
    if (x < 0 || x >= map[y].length) return undefined

    if (xyHash({ y, x }) in entities) return entities[xyHash({ y, x })]
    const symbol = map[y][x]
    if (symbol === ' ') return undefined
    if (this._isWall(symbol)) return objectsLoader.getInstanceOf('wall')
  }

  _removeGameObjectAt(props) {
    const { y, x } = props
    const entities = state.get('catacombs.objects')
    if (xyHash({ y, x }) in entities) delete entities[xyHash({ y, x })]
    state.set({ key: 'catacombs.objects', value: entities })
    this._setPointOfView(state.get('hero.position'))
  }

  _addGameObjectAt(props) {
    const { y, x, type } = props
    const object = objectsLoader.getInstanceOf(type)
    const entities = state.get('catacombs.objects')
    entities[xyHash({ y, x })] = object
    state.set({ key: 'catacombs.objects', value: entities })
    this._setPointOfView(state.get('hero.position'))
  }

  _getBackgroundFeatureAt(y, x) {
    const map = state.get('catacombs.map')
    if (y < 0 || y >= map.length) return undefined
    if (x < 0 || x >= map[y].length) return undefined

    const symbol = map[y][x]
    if (this._isWall(symbol)) return 'wall'
    if (symbol === 'o') return 'door'
    if (symbol === ' ') return 'hall'
    else return 'hall'
  }

  _isWall(symbol) {
    return ['|', '+', '-'].includes(symbol)
  }

  _updateObjectNearby() {
    let object = undefined
    const position = state.get('hero.position')

    // if a locked door is nearby, return it first
    let nearbyX = position.x
    let nearbyY = position.y
    if (position.direction === 'north') nearbyY = nearbyY - 1
    if (position.direction === 'south') nearbyY = nearbyY + 1
    if (position.direction === 'east') nearbyX = nearbyX + 2
    if (position.direction === 'west') nearbyX = nearbyX - 2
    let nearby = this._getGameObjectAt({ y: nearbyY, x: nearbyX })
    if (nearby && nearby.getType() === 'door-locked' && nearby.getHealthObservable()) {
      object = {
        label: nearby.getName(),
        current: nearby.getHealth(),
        max: nearby.getMaxHealth()
      }
      state.set({ key: 'object.nearby', value: object })
    } else {
      // else look for something in the same space as the hero
      nearby = this._getGameObjectAt(position)
      if (nearby !== undefined && nearby.getHealthObservable()) {
        object = {
          label: nearby.getName(),
          current: nearby.getHealth(),
          max: nearby.getMaxHealth()
        }
        state.set({ key: 'object.nearby', value: object })
      } else {
        state.set({ key: 'object.nearby', value: undefined })
      }
    }
  }
}
