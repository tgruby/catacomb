import guid from '../core/guid.js'

export default class GameObject {
  constructor(type, data) {
    this.data = data
    this.data.id = guid()
    this.data.type = type
  }

  getId() {
    return this.data.id
  }

  getType() {
    return this.data.type
  }

  getName() {
    return this.data?.name || '???'
  }

  getDescription() {
    return this.data?.description || '???'
  }

  obstructsMovement() {
    return this.data?.obstructsMovement ?? false
  }

  allowsPickup() {
    return this.data?.allowsPickup ?? false
  }

  getHealth() {
    return this.data?.health ?? 1
  }

  updateHealth(newValue) {
    this.data.health = newValue
  }

  getCraftingRequirements() {
    return this.data?.craftingRequirements || []
  }

  getUsageType() {
    return this.data?.usageType || 'Consumable'
  }

  getUsageImpact() {
    return this.data?.usageImpact || { stamina: 0, health: 0, hunger: 0 }
  }

  getAttackImpact() {
    return this.data?.attackImpact || { stamina: 0, hunger: 0, enemyHealth: 0 }
  }

  getAnimation(name) {
    if (this.data.animations && name in this.data.animations) {
      return this.data.animations[name]
    }
    return undefined
  }
}
