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

  getNameArticle() {
    let nameArticle = 'a'
    if (
      this.data.name.startsWith('a') ||
      this.data.name.startsWith('e') ||
      this.data.name.startsWith('i') ||
      this.data.name.startsWith('o') ||
      this.data.name.startsWith('u')
    ) {
      nameArticle = 'an'
    }
    return nameArticle
  }

  getName() {
    return this.data?.name || '???'
  }

  getNameWithArticle() {
    return `${this.getNameArticle().toLowerCase()} ${this.getName().toLowerCase()}`
  }

  getDescription() {
    return this.data?.description || '???'
  }

  getImage() {
    if (this.data?.image) return this.data.image
    else if (this.data?.animations?.here) return this.data.animations.here.frames[0]
    return this.data?.image || undefined
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

  getUsage() {
    return this.data?.usage || undefined
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
