import state from './SharedState.js'
import AudioPlayer from '../ui/AudioPlayer.js'
import objectLoader from './GameObjectLoader.js'

export default class Hero {
  constructor() {
    state.set({ key: 'hero.health', value: { label: 'Health', current: 3, max: 16 } })
    state.set({ key: 'hero.stamina', value: { label: 'Stamina', current: 8, max: 16 } })
    state.set({ key: 'hero.strength', value: { label: 'Strength', current: 16, max: 16 } })
    state.set({ key: 'hero.magic', value: { label: 'Focus', current: 0, max: 8 } })
    state.set({ key: 'hero.armor', value: 0 })
    state.set({ key: 'hero.equipped.weapon', value: null })
    const inventory = []
    inventory.push(objectLoader.getInstanceOf('map'))
    inventory.push(objectLoader.getInstanceOf('torch'))
    state.set({ key: 'hero.inventory', value: inventory })
    const skills = []
    skills.push(objectLoader.getInstanceOf('twine'))
    skills.push(objectLoader.getInstanceOf('bandage'))
    skills.push(objectLoader.getInstanceOf('torch'))
    skills.push(objectLoader.getInstanceOf('bone-knife'))
    state.set({ key: 'hero.skills', value: skills })
    state.set({ key: 'hero.xp', value: { current: 0, nextLevel: 24 } })
    state.set({ key: 'hero.score', value: 0 })
    state.set({ key: 'hero.abilities', value: [] })
    state.set({ key: 'hero.crafts', value: [] })
    state.set({ key: 'hero.companion', value: null })
    state.set({ key: 'hero.alive', value: true })
    state.set({ key: 'hero.lastActive', value: new Date() })
    state.set({ key: 'hero.journal', value: [] })

    setInterval(() => this._recoverStamina(), 512)
    setInterval(() => this._recoverStrength(), 1400)
  }

  addJournalEntry(text) {
    let entries = state.get('hero.journal')
    if (!entries) entries = []
    entries.push({ date: state.get('game.time'), text })
    state.set({ key: 'hero.journal', value: entries })
  }

  pickUp() {
    const position = state.get('hero.position')
    const movement = state.get('movement')
    const item = movement._getGameObjectAt(position)
    if (!item) return
    if (!item.allowsPickup()) {
      state.set({ key: 'message.center', value: `cannot pick up ${item.getName().toLowerCase()}` })
      new Audio('sounds/nope.mp3').play()
      return
    }
    if (this.getInventoryItemsByType(item.getType()).length >= 10) {
      state.set({ key: 'message.center', value: `inventory is full` })
      return
    }
    state.get('hero.inventory').push(item) // the inventory will not notify the UI of the change
    movement._removeGameObjectAt(position)
    let xp = state.get('hero.xp')
    xp.current += 1
    state.set({ key: 'hero.xp', value: xp })
    new AudioPlayer('sounds/pickup-item.mp3').play()
    state.set({ key: 'message.center', value: `you pick up the ${item.getName().toLowerCase()}` })
    movement._updateObjectNearby()
  }

  getInventoryItemsByType(type) {
    const inventory = state.get('hero.inventory')
    return inventory.filter((item) => item.type === type)
  }

  useItem(itemType) {
    if (typeof itemType !== 'string') {
      console.error('hero.useItem requires a string argument')
      console.error('you passed a ', itemType)
      return
    }
    // remove the item from the inventory
    const inventory = state.get('hero.inventory')
    const index = inventory.findIndex((item) => item.getType() === itemType)
    if (index === -1) {
      new Audio('sounds/nope.mp3').play()
      state.set({ key: 'message.center', value: `item ${itemType} not found in inventory` })
      return
    }
    const item = inventory[index]
    if (item.getUsage() && item.getUsage().type === 'consumable') this._consume(item, index)
    else if (item.getUsage() && item.getUsage().type === 'equippable') this._equip(item)
    else {
      state.set({
        key: 'message.center',
        value: `${item.getName().toLowerCase()} cannot be used directly from inventory`
      })
      new Audio('sounds/nope.mp3').play() // item unusable
    }
  }

  craftItem(itemType) {
    if (typeof itemType !== 'string') {
      console.error('hero.craftItem requires a string argument')
      console.error('you passed a ', itemType)
      return
    }

    // determine if we have enough items to craft the item
    const item = objectLoader.getInstanceOf(itemType)
    // "craftingRequirements": [
    //   { "id": "stick", "quantity": 1 },
    //   { "id": "cloth", "quantity": 1 }
    // ],
    const requirements = item.getCraftingRequirements()
    const inventory = state.get('hero.inventory')
    const inventoryItems = inventory.map((item) => item.getType())
    const missingItems = []
    requirements.forEach((requirement) => {
      const count = inventoryItems.filter((item) => item === requirement.id).length
      if (count < requirement.quantity) missingItems.push(requirement.id)
    })
    if (missingItems.length > 0) {
      state.set({ key: 'message.center', value: `missing items: ${missingItems.join(', ')}` })
      new Audio('sounds/nope.mp3').play()
      return
    }
    // remove the items from the inventory
    requirements.forEach((requirement) => {
      for (let i = 0; i < requirement.quantity; i++) {
        const index = inventory.findIndex((item) => item.getType() === requirement.id)
        inventory.splice(index, 1)
      }
    })
    state.set({ key: 'hero.inventory', value: inventory })
    // add the crafted item to the inventory
    inventory.push(item)
    // play a sound
    new Audio('sounds/ripping-cloth.mp3').play()
  }

  canCraft(itemType) {
    if (typeof itemType !== 'string') {
      console.error('hero.craftItem requires a string argument')
      console.error('you passed a ', itemType)
      return false
    }

    // determine if we have enough items to craft the item
    const item = objectLoader.getInstanceOf(itemType)
    console.log('item', item)
    // "craftingRequirements": [
    //   { "id": "stick", "quantity": 1 },
    //   { "id": "cloth", "quantity": 1 }
    // ],
    const requirements = item.getCraftingRequirements()
    const inventory = state.get('hero.inventory')
    const inventoryItems = inventory.map((item) => item.getType())
    const missingItems = []
    requirements.forEach((requirement) => {
      const count = inventoryItems.filter((item) => item === requirement.id).length
      if (count < requirement.quantity) missingItems.push(requirement.id)
    })
    if (missingItems.length > 0) {
      return false
    }
    return true
  }

  _consume(item, index) {
    const usage = item.getUsage()

    const strength = state.get('hero.strength')
    strength.current += usage.strength
    if (strength.current > strength.max) strength.current = strength.max
    state.set({ key: 'hero.strength', value: strength })

    const stamina = state.get('hero.stamina')
    stamina.current += usage.stamina
    if (stamina.current > stamina.max) stamina.current = stamina.max
    state.set({ key: 'hero.stamina', value: stamina })

    const health = state.get('hero.health')
    health.current += usage.health
    if (health.current > health.max) health.current = health.max
    state.set({ key: 'hero.health', value: health })

    if (usage.sound) new AudioPlayer(usage.sound).play()

    let inventory = state.get('hero.inventory')
    inventory.splice(index, 1)[0]
    state.set({ key: 'hero.inventory', value: inventory })
  }

  _equip(item) {
    if (item.getUsage().slot === 'weapon') {
      state.set({ key: 'hero.equipped.weapon', value: item })
      new AudioPlayer('sounds/item-equip.mp3').play()
    }
  }

  moved() {
    state.set({ key: 'hero.lastActive', value: new Date() })
    // disable stamina move cost for now...
    // const stamina = state.get('hero.stamina')
    // stamina.current--
    // state.set({ key: 'hero.stamina', value: stamina })
  }

  // method for stamina recovery
  _recoverStamina() {
    const stamina = state.get('hero.stamina')
    if (stamina.current < stamina.max) {
      const active = state.get('hero.lastActive')
      const now = new Date()
      if (now.getTime() - active.getTime() > 2000) {
        stamina.current += 1
        state.set({ key: 'hero.stamina', value: stamina })
        state.set({ key: 'request.screen.draw', value: true })
      }
    }
  }

  // method for strength recovery
  _recoverStrength() {
    const strength = state.get('hero.strength')
    if (strength.current < strength.max) {
      const active = state.get('hero.lastActive')
      const now = new Date()
      if (now.getTime() - active.getTime() > 2000) {
        strength.current += 1
        state.set({ key: 'hero.strength', value: strength })
        state.set({ key: 'request.screen.draw', value: true })
      }
    }
  }
}
