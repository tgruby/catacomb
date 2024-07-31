class Mods {
  TYPES = {
    Feature: "feature",
    Item: "item",
    Creature: "creature",
    Weapon: "weapon",
    Clothing: "clothing",
    Food: "food"
  }

  entities = {
    "feature.wall": undefined,
    "feature.door": undefined,
    "feature.down": undefined,
    "feature.up": undefined,
    "feature.entrance": undefined,
    "feature.campfire": undefined,
    "container.sarcophagus": undefined,
    "container.carcass": undefined,
    "food.mushroom": undefined,
    "item.grass": undefined,
    "item.bone": undefined,
    "item.vines": undefined,
    "item.stick": undefined,
    "item.torch": undefined,
    "item.journal": undefined,
    "item.map": undefined,
    "item.watch": undefined,
    "weapon.bone.knife": undefined
  }

  constructor() {
    this.loaded = new Map()
    this.toLoad = Object.keys(this.entities).length
  }

  async initialize() {
    const promises = Object.keys(this.entities).map((id) => this.#fetchMod(id))
    await Promise.all(promises)
    console.log(`Mods loaded: ${this.loaded.size}`)
  }

  async #fetchMod(id) {
    const response = await fetch("mods/" + id + ".json")
    const data = await response.json()
    this.entities[id] = data
    this.loaded.set(id, data)
  }

  // Get a copy of a mod object.
  // Return synchronously since all mods are preloaded.
  get(id) {
    const mod = this.loaded.get(id)
    if (!mod) {
      throw new Error(`Mod with id ${id} not found.`)
    }
    // Return a deep copy of the mod
    return JSON.parse(JSON.stringify(mod))
  }
}

const mods = new Mods()

export default mods
