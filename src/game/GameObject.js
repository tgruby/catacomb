import guid from './Guid.js'

export default class GameObject {
  constructor(type, data) {
    this.data = data
    this.data.id = guid()
    this.data.type = type
    if (this.data.health !== undefined) this.data.maxhealth = this.data.health
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
    else if (this.data?.perspective?.here) return this.data.perspective.here.frames[0]
    return this.data?.image || undefined
  }

  obstructsMovement() {
    return this.data?.obstructsMovement ?? false
  }

  obstructSound() {
    return this.data?.obstructSound ?? undefined
  }

  obstructMessage() {
    return this.data?.obstructMessage || undefined
  }

  allowsPickup() {
    return this.data?.allowsPickup ?? false
  }

  getHealth() {
    if (this.data.health === undefined) this.data.health = 1
    return this.data.health
  }

  getHealthObservable() {
    if (this.data.healthObservable === undefined) return false
    return this.data.healthObservable
  }

  getMaxHealth() {
    return this.data.maxhealth
  }

  setHealth(health) {
    this.data.health = health
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

  getAttack() {
    return this.data.attack
  }

  getPerspective(name) {
    if (this.data.perspective && name in this.data.perspective) {
      return this.data.perspective[name]
    }
    return undefined
  }

  getDestroyedSound() {
    return this.data.destroyedSound
  }
}
