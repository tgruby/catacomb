// Class to download and init features and actions for use.
class Loader {
  TYPES = {
    Feature: 'feature',
    Item: 'item',
    Creature: 'creature',
    Weapon: 'weapon',
    Clothing: 'clothing',
    Food: 'food'
  }

  entities = {
    'feature.wall': undefined,
    'feature.door': undefined,
    'feature.down': undefined,
    'feature.up': undefined,
    'feature.entrance': undefined,
    'feature.campfire': undefined,
    'container.sarcophagus': undefined,
    'container.carcass': undefined,
    'food.mushroom': undefined,
    'item.grass': undefined,
    'item.bone': undefined,
    'item.vines': undefined,
    'item.stick': undefined,
    'item.torch': undefined,
    'item.journal': undefined,
    'item.map': undefined,
    'item.watch': undefined,
    'weapon.bone.knife': undefined
  }

  loaded = 0
  toLoad = Object.keys(this.entities).length
  completionCallback = undefined

  load (completionCallback) {
    this.completionCallback = completionCallback
    for (const [key] of Object.entries(this.entities)) {
      if (!this.entities[key]) {
        this.fetchMod(key)
      }
    }
  }

  fetchMod (id) {
    fetch('js/entities/' + id + '.json')
      .then(response => response.json())
      .then(data => {
        this.entities[id] = data
        this.loaded++
        if (this.loaded === this.toLoad) {
          // All entities are loaded, so we can start the game.
          console.log('All entities loaded.')
          console.log('Loaded: ' + this.loaded + ' of ' + this.toLoad)
          this.completionCallback()
        }
      })
  }

  // Get a copy of the mod object. We return copies so that the original mod objects are not modified.
  get (id) {
    return JSON.parse(JSON.stringify(this.entities[id]))
  }

  getName (id) {
    return this.entities[id].name
  }
};

const loader = new Loader()

export default loader
