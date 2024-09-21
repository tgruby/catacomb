import state from './SharedState.js'
import AudioPlayer from '../ui/AudioPlayer.js'
import objectLoader from './GameObjectLoader.js'

export default class Hero {
  constructor() {
    state.set({ key: 'hero.health', value: { current: 3, max: 16 } })
    state.set({ key: 'hero.stamina', value: { current: 8, max: 16 } })
    state.set({ key: 'hero.strength', value: { current: 16, max: 16 } })
    state.set({ key: 'hero.magic', value: { current: 0, max: 8 } })
    state.set({ key: 'companion.health', value: { current: 0, max: 8 } })
    state.set({ key: 'hero.armor', value: 0 })
    state.set({ key: 'hero.equipped.weapon', value: null })
    const inventory = []
    inventory.push(objectLoader.getInstanceOf('map'))
    state.set({ key: 'hero.inventory', value: inventory })
    const skills = []
    skills.push(objectLoader.getInstanceOf('bone-knife'))
    skills.push(objectLoader.getInstanceOf('bandage'))
    skills.push(objectLoader.getInstanceOf('cordage'))
    skills.push(objectLoader.getInstanceOf('twine'))
    state.set({ key: 'hero.skills', value: skills })
    state.set({ key: 'hero.xp', value: { current: 0, nextLevel: 24 } })
    state.set({ key: 'hero.level', value: 1 })
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

  attack() {
    const weapon = state.get('hero.equipped.weapon')
    let damage = 0
    if (!weapon) {
      state.set({ key: 'message.center', value: 'you must equip a weapon before you can attack!' })
      new Audio('sounds/nope.mp3').play()
      return
    } else {
      const staminaCost = weapon.getAttack().stamina
      const strengthCost = weapon.getAttack().strength
      if (state.get('hero.stamina').current < staminaCost) {
        state.set({ key: 'message.center', value: `you must rest first!` })
        new Audio('sounds/out-of-breath.mp3').play()
      } else {
        state.set({ key: 'hero.lastActive', value: new Date() })
        let stamina = state.get('hero.stamina')
        stamina.current -= staminaCost
        state.set({ key: 'hero.stamina', value: stamina })
        let strength = state.get('hero.strength')
        // add strength bonus to attack damage
        damage += weapon.getAttack().damage
        damage += strength.current / 4
        strength.current -= strengthCost
        if (strength.current < 0) strength.current = 0
        state.set({ key: 'hero.strength', value: strength })
        const movementEngine = state.get('movement')
        const position = state.get('hero.position')
        const target = movementEngine._getGameObjectAt(position)
        // if an item or creature is 'here', do damage to it.
        if (target) {
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
    let xp = state.get('hero.xp')
    xp.current += 1
    state.set({ key: 'hero.xp', value: xp })
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
    const stamina = state.get('hero.stamina')
    stamina.current--
    state.set({ key: 'hero.stamina', value: stamina })
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

const HeroLevelTitles = [
  { name: 'Noob' },
  { name: 'Novice Explorer' },
  { name: 'Apprentice Historian' },
  { name: 'Skilled Surveyor' },
  { name: 'Artifact Collector' },
  { name: 'Field Researcher' },
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

function calculateXPForLevel(level, baseXP = 32, expFactor = 1.5) {
  return Math.floor(baseXP * Math.pow(level, expFactor))
}

// Iterate through the array and update the xp value based on the level index
HeroLevelTitles.forEach((hero, index) => {
  hero.xp = calculateXPForLevel(index)
})

function getHeroLevelTitle(level) {
  return HeroLevelTitles[level].name
}

export { getHeroLevelTitle }
