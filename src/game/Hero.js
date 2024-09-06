import state from './SharedState.js'
import AudioPlayer from '../ui/AudioPlayer.js'
import objectLoader from './GameObjectLoader.js'

export default class Hero {
  constructor() {
    state.set({ key: 'hero.stamina', value: { current: 60, max: 100 } })
    state.set({ key: 'hero.health', value: { current: 35, max: 100 } })
    state.set({ key: 'hero.hunger', value: { current: 85, max: 100 } })
    state.set({ key: 'hero.magic', value: { current: 0, max: 100 } })
    state.set({ key: 'companion.health', value: { current: 0, max: 100 } })
    state.set({ key: 'hero.armor', value: 0 })
    state.set({ key: 'hero.equipped.weapon', value: null })
    const inventory = []
    inventory.push(objectLoader.getInstanceOf('watch'))
    inventory.push(objectLoader.getInstanceOf('map'))
    inventory.push(objectLoader.getInstanceOf('bone-knife'))
    state.set({ key: 'hero.inventory', value: inventory })
    state.set({ key: 'hero.xp', value: { current: 10, nextLevel: 1000 } })
    state.set({ key: 'hero.level', value: 1 })
    state.set({ key: 'hero.score', value: 0 })
    state.set({ key: 'hero.abilities', value: [] })
    state.set({ key: 'hero.crafts', value: [] })
    state.set({ key: 'hero.companion', value: null })
    state.set({ key: 'hero.alive', value: true })
    state.set({ key: 'hero.lastMoved', value: new Date() })
    state.set({ key: 'hero.journal', value: [] })

    this.recoveryTimeThreshold = 2000 // Initial recovery time threshold in milliseconds
    this.minimumRecoveryThreshold = 200 // Minimum recovery time threshold to prevent too short intervals
    setInterval(() => this._recoverStamina(), 500)
  }

  addJournalEntry(text) {
    let entries = state.get('hero.journal')
    if (!entries) entries = []
    entries.push({ date: state.get('game.time'), text })
    state.set({ key: 'hero.journal', value: entries })
  }

  attack() {
    state.set({ key: 'hero.lastMoved', value: new Date() })
    const weapon = state.get('hero.equipped.weapon')
    if (!weapon) {
      state.set({ key: 'message.center', value: 'equip a weapon first!' })
      new Audio('sounds/nope.mp3').play()
      return
    } else {
      const staminaCost = weapon.getAttack().stamina
      if (state.get('hero.stamina').current < staminaCost) {
        state.set({ key: 'message.center', value: `you are too tired to attack!` })
        new Audio('sounds/out-of-breath.mp3').play()
      } else {
        let stamina = state.get('hero.stamina')
        stamina.current -= staminaCost
        state.set({ key: 'hero.stamina', value: stamina })
        // if an item or creature is 'here', do damage to it.
        const movementEngine = state.get('movement')
        const position = state.get('hero.position')
        const target = movementEngine._getGameObjectAt(position)
        if (target) {
          const damage = weapon.getAttack().damage
          target.setHealth(target.getHealth() - damage)
          if (target.getHealth() <= 0) {
            movementEngine._removeGameObjectAt(position)
            if (target.getDestroyedSound()) {
              new Audio(target.getDestroyedSound()).play()
            } else {
              new Audio('sounds/break.mp3').play()
            }
          }
        }
        state.set({ key: 'hero.action', value: weapon.getAttack() })
        state.set({ key: 'message.center', value: `you attack with ${weapon.getName().toLowerCase()}` })
      }
    }
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
    new AudioPlayer('sounds/pickup-item.mp3').play()
    state.set({ key: 'message.center', value: `you pick up the ${item.getName().toLowerCase()}` })
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
    console.log('item index: ', index)
    const item = inventory[index]
    console.log('using item: ', item)
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

  _consume(item, index) {
    const usage = item.getUsage()

    const hunger = state.get('hero.hunger')
    hunger.current += usage.hunger
    if (hunger.current > hunger.max) hunger.current = hunger.max
    state.set({ key: 'hero.hunger', value: hunger })

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
    state.set({ key: 'hero.lastMoved', value: new Date() })
    const stamina = state.get('hero.stamina')
    stamina.current--
    state.set({ key: 'hero.stamina', value: stamina })
  }

  // method for stamina recovery
  _recoverStamina() {
    const stamina = state.get('hero.stamina')
    if (stamina.current < stamina.max) {
      const lastMoved = state.get('hero.lastMoved')
      const now = new Date()
      if (now.getTime() - lastMoved.getTime() > 2000) {
        stamina.current += 5 // Recover a fixed amount of stamina
        if (stamina.current > stamina.max) {
          stamina.current = stamina.max
        }
        // Reduce the recovery threshold to increase frequency, down to a minimum
        this.recoveryTimeThreshold = Math.max(this.minimumRecoveryThreshold, this.recoveryTimeThreshold - 200)
        state.set({ key: 'hero.stamina', value: stamina })
      } else {
        this.recoveryTimeThreshold = 2000
      }
    } else {
      // Reset the recovery time threshold when stamina is full
      this.recoveryTimeThreshold = 2000
    }
  }
}

const HeroLevelTitles = [
  { name: 'Noob', levelRange: [1, 4] },
  { name: 'Novice Explorer', levelRange: [5, 8] },
  { name: 'Apprentice Historian', levelRange: [9, 12] },
  { name: 'Skilled Surveyor', levelRange: [13, 16] },
  { name: 'Artifact Collector', levelRange: [17, 20] },
  { name: 'Field Researcher', levelRange: [21, 24] },
  { name: 'Culture Scholar', levelRange: [25, 28] },
  { name: 'Relic Hunter', levelRange: [29, 32] },
  { name: 'Time Navigator', levelRange: [33, 36] },
  { name: 'Chronicle Keeper', levelRange: [37, 40] },
  { name: 'Lost Civilization Specialist', levelRange: [41, 44] },
  { name: 'Myth Breaker', levelRange: [45, 48] },
  { name: 'Guardian of Antiquity', levelRange: [49, 52] },
  { name: 'Master of the Past', levelRange: [53, 56] },
  { name: 'Time Weaver', levelRange: [57, 60] },
  { name: 'Legacy Preserver', levelRange: [61, 64] },
  { name: 'Eternal Explorer', levelRange: [65, 68] }
]

function getHeroLevelTitle(level) {
  for (let i = 0; i < HeroLevelTitles.length; i++) {
    if (level >= HeroLevelTitles[i].levelRange[0] && level <= HeroLevelTitles[i].levelRange[1])
      return HeroLevelTitles[i].name
  }
  return 'Eternal Explorer'
}

export { getHeroLevelTitle }
