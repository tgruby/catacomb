import GameObject from './GameObject.js'

class GameObjectLoader {
  static ACTIVE_OBJECTS_FILE = 'mods/objects/_active.json'
  constructor() {
    this.initialized = false
    this.gameObjects = new Map()
  }

  async initialize() {
    if (!this.initialized) {
      const response = await fetch(GameObjectLoader.ACTIVE_OBJECTS_FILE)
      const objectsJson = await response.json()
      for (let i = 0; i < objectsJson.objects.length; i++) {
        const objectName = objectsJson.objects[i]
        const objectAsString = await fetch(`mods/objects/${objectName}.json`)
        const objectJson = await objectAsString.json()
        this.gameObjects.set(objectName, objectJson)
      }
      console.log(`Game Objects loaded: ${this.gameObjects.size}`)
      this.initialized = true
    }
  }

  getInstanceOf(type) {
    if (!this.gameObjects.has(type)) {
      throw new Error(`Game Object ${type} not found.`)
    }
    // make a deep copy
    const data = JSON.parse(JSON.stringify(this.gameObjects.get(type)))
    // return an item object
    return new GameObject(type, data)
  }
}

const items = new GameObjectLoader()
export default items
