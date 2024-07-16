import memory from '../core/Memory.js'
import AudioPlayer from '../core/AudioPlayer.js'
import loader from '../core/Loader.js'

export default class Hero {
  constructor () {
    memory.set({ key: 'hero.stamina', value: { current: 60, max: 100, modifier: 'sprained ankle' } })
    memory.set({ key: 'hero.health', value: { current: 35, max: 100, modifier: 'bleeding' } })
    memory.set({ key: 'hero.hunger', value: { current: 85, max: 100, modifier: null } })
    memory.set({ key: 'hero.armor', value: 0 })
    memory.set({ key: 'hero.equipped.weapon', value: null })
    const inventory = []
    inventory.push(loader.get('item.watch'))
    inventory.push(loader.get('item.journal'))
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
    setInterval(() => this.recoverStamina(), 500)
  }

  addJournalEntry (text) {
    let entries = memory.get('hero.journal')
    if (!entries) entries = []
    entries.push({ date: memory.get('game.time'), text })
    memory.set({ key: 'hero.journal', value: entries })
  }

  attack () {
    memory.set({ key: 'hero.lastMoved', value: new Date() })
    console.log('attack')
  }

  pickUp () {
    const position = memory.get('hero.position')
    const movement = memory.get('movement')
    const item = movement.getFeatureAt(position)
    if (!item) return
    if (!item.allowsPickup) return
    if (this.getInventoryItemsByType(item.type).length >= 10) {
      console.log('Inventory is full')
      return
    }
    memory.get('hero.inventory').push(item) // the inventory will not notify the UI of the change
    movement.removeFeatureAt(position)
    new AudioPlayer('sounds/pickup-item.mp3').play()
  }

  getInventoryItemsByType (type) {
    const inventory = memory.get('hero.inventory')
    return inventory.filter(item => item.type === type)
  }

  useItem (itemId) {
    // remove the item from the inventory
    const inventory = memory.get('hero.inventory')
    const index = inventory.findIndex(item => item.id === itemId)
    if (index === -1) {
      new Audio('sounds/nope.mp3').play()
      console.log('item not found in inventory')
      return
    }
    const item = inventory[index]
    if (item.type === 'food') this._eat(item)
    else new Audio('sounds/nope.mp3').play() // item unusable
  }

  _eat (item) {
    console.log('eating', item)
    const hunger = memory.get('hero.hunger')
    hunger.current += item.hungerImpact
    if (hunger.current > hunger.max) hunger.current = hunger.max
    memory.set({ key: 'hero.hunger', value: hunger })

    const health = memory.get('hero.health')
    health.current += item.healthImpact
    if (health.current > health.max) health.current = health.max
    memory.set({ key: 'hero.health', value: health })
    new AudioPlayer('sounds/eating.mp3').play()
    inventory.splice(index, 1)[0]
    memory.set({ key: 'hero.inventory', value: inventory })
    console.log('removed item from inventory', item)
  }

  moved () {
    memory.set({ key: 'hero.lastMoved', value: new Date() })
    const stamina = memory.get('hero.stamina')
    stamina.current--
    memory.set({ key: 'hero.stamina', value: stamina })
  }

  // method for stamina recovery
  recoverStamina () {
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

function getHeroLevelTitle (level) {
  for (let i = 0; i < HeroLevelTitles.length; i++) {
    if (level >= HeroLevelTitles[i].levelRange[0] && level <= HeroLevelTitles[i].levelRange[1]) return HeroLevelTitles[i].name
  }
  return 'Eternal Explorer'
}

export { getHeroLevelTitle }
