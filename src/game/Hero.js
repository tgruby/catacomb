import memory from '../core/Memory.js'
import AudioPlayer from '../core/AudioPlayer.js'
import objectLoader from './GameObjectLoader.js'

export default class Hero {
  constructor() {
    memory.set({
      key: 'hero.stamina',
      value: { current: 60, max: 100, modifier: null }
    })
    memory.set({
      key: 'hero.health',
      value: { current: 35, max: 100, modifier: null }
    })
    memory.set({
      key: 'hero.hunger',
      value: { current: 85, max: 100, modifier: null }
    })
    memory.set({
      key: 'hero.magic',
      value: { current: 0, max: 100, modifier: null }
    })
    memory.set({ key: 'hero.armor', value: 0 })
    memory.set({ key: 'hero.equipped.weapon', value: null })
    const inventory = []
    inventory.push(objectLoader.getInstanceOf('watch'))
    inventory.push(objectLoader.getInstanceOf('journal'))
    inventory.push(objectLoader.getInstanceOf('bone-knife'))
    memory.set({ key: 'hero.inventory', value: inventory })
    memory.set({ key: 'hero.xp', value: { current: 10, nextLevel: 1000 } })
    memory.set({ key: 'hero.level', value: 1 })
    memory.set({ key: 'hero.score', value: 0 })
    memory.set({ key: 'hero.abilities', value: [] })
    memory.set({ key: 'hero.crafts', value: [] })
    memory.set({ key: 'hero.companion', value: null })
    memory.set({ key: 'hero.alive', value: true })
    memory.set({ key: 'hero.lastMoved', value: new Date() })
    memory.set({ key: 'hero.journal', value: [] })

    this.recoveryTimeThreshold = 2000 // Initial recovery time threshold in milliseconds
    this.minimumRecoveryThreshold = 200 // Minimum recovery time threshold to prevent too short intervals
    setInterval(() => this._recoverStamina(), 500)
  }

  addJournalEntry(text) {
    let entries = memory.get('hero.journal')
    if (!entries) entries = []
    entries.push({ date: memory.get('game.time'), text })
    memory.set({ key: 'hero.journal', value: entries })
  }

  attack() {
    memory.set({ key: 'hero.lastMoved', value: new Date() })
    const weapon = memory.get('hero.equipped.weapon')
    if (!weapon) {
      memory.set({ key: 'message.center', value: 'equip a weapon first!' })
      new Audio('sounds/nope.mp3').play()
      return
    } else {
      const staminaCost = weapon.getAttack().stamina
      if (memory.get('hero.stamina').current < staminaCost) {
        memory.set({ key: 'message.center', value: `you are too tired to attack!` })
        new Audio('sounds/out-of-breath.mp3').play()
      } else {
        let stamina = memory.get('hero.stamina')
        stamina.current -= staminaCost
        memory.set({ key: 'hero.stamina', value: stamina })
        // if an item or creature is 'here', do damage to it.
        const movementEngine = memory.get('movement')
        const position = memory.get('hero.position')
        const target = movementEngine.getGameObjectAt(position)
        if (target) {
          const damage = weapon.getAttack().damage
          target.setHealth(target.getHealth() - damage)
          if (target.getHealth() <= 0) {
            movementEngine.removeGameObjectAt(position)
            if (target.getDestroyedSound()) {
              new Audio(target.getDestroyedSound()).play()
            } else {
              new Audio('sounds/break.mp3').play()
            }
          }
        }
        memory.set({ key: 'hero.action', value: weapon.getAttack() })
        memory.set({ key: 'message.center', value: `you attack with ${weapon.getName().toLowerCase()}` })
      }
    }
  }

  pickUp() {
    const position = memory.get('hero.position')
    const movement = memory.get('movement')
    const item = movement.getGameObjectAt(position)
    if (!item) return
    if (!item.allowsPickup()) {
      memory.set({ key: 'message.center', value: `cannot pick up ${item.getName().toLowerCase()}` })
      new Audio('sounds/nope.mp3').play()
      return
    }
    if (this.getInventoryItemsByType(item.getType()).length >= 10) {
      memory.set({ key: 'message.center', value: `inventory is full` })
      return
    }
    memory.get('hero.inventory').push(item) // the inventory will not notify the UI of the change
    movement.removeGameObjectAt(position)
    new AudioPlayer('sounds/pickup-item.mp3').play()
    memory.set({ key: 'message.center', value: `you pick up the ${item.getName().toLowerCase()}` })
  }

  getInventoryItemsByType(type) {
    const inventory = memory.get('hero.inventory')
    return inventory.filter((item) => item.type === type)
  }

  useItem(itemType) {
    // remove the item from the inventory
    const inventory = memory.get('hero.inventory')
    const index = inventory.findIndex((item) => item.getType() === itemType)
    if (index === -1) {
      new Audio('sounds/nope.mp3').play()
      memory.set({ key: 'message.center', value: `item ${itemType} not found in inventory` })
      return
    }
    const item = inventory[index]
    if (item.getUsage() && item.getUsage().type === 'consumable') this._consume(item)
    else if (item.getUsage() && item.getUsage().type === 'equippable') this._equip(item)
    else {
      memory.set({
        key: 'message.center',
        value: `${item.getName().toLowerCase()} cannot be used directly from inventory`
      })
      new Audio('sounds/nope.mp3').play() // item unusable
    }
  }

  _consume(item) {
    const usage = item.getUsage()

    const hunger = memory.get('hero.hunger')
    hunger.current += usage.hunger
    if (hunger.current > hunger.max) hunger.current = hunger.max
    memory.set({ key: 'hero.hunger', value: hunger })

    const stamina = memory.get('hero.stamina')
    stamina.current += usage.stamina
    if (stamina.current > stamina.max) stamina.current = stamina.max
    memory.set({ key: 'hero.stamina', value: stamina })

    const health = memory.get('hero.health')
    health.current += usage.health
    if (health.current > health.max) health.current = health.max
    memory.set({ key: 'hero.health', value: health })

    if (usage.sound) new AudioPlayer(usage.sound).play()

    let inventory = memory.get('hero.inventory')
    const index = inventory.findIndex((anItem) => anItem.id === item.id)
    inventory.splice(index, 1)[0]
    memory.set({ key: 'hero.inventory', value: inventory })
  }

  _equip(item) {
    if (item.getUsage().slot === 'weapon') {
      memory.set({ key: 'hero.equipped.weapon', value: item })
      new AudioPlayer('sounds/item-equip.mp3').play()
    }
  }

  moved() {
    memory.set({ key: 'hero.lastMoved', value: new Date() })
    const stamina = memory.get('hero.stamina')
    stamina.current--
    memory.set({ key: 'hero.stamina', value: stamina })
  }

  // method for stamina recovery
  _recoverStamina() {
    const stamina = memory.get('hero.stamina')
    if (stamina.current < stamina.max) {
      const lastMoved = memory.get('hero.lastMoved')
      const now = new Date()
      if (now.getTime() - lastMoved.getTime() > 2000) {
        stamina.current += 5 // Recover a fixed amount of stamina
        if (stamina.current > stamina.max) {
          stamina.current = stamina.max
        }
        // Reduce the recovery threshold to increase frequency, down to a minimum
        this.recoveryTimeThreshold = Math.max(this.minimumRecoveryThreshold, this.recoveryTimeThreshold - 200)
        memory.set({ key: 'hero.stamina', value: stamina })
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
