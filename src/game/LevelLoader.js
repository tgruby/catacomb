import state from './SharedState.js'
import objectLoader from './GameObjectLoader.js'
import { xyHash } from './Util.js'

class LevelLoader {
  static ACTIVE_LEVELS_FILE = 'mods/levels/active-levels.json'
  constructor() {
    this.initialized = false
    this.levels = []
    this.levelIndex = -1
    this.currentLevel = null
  }

  async initialize() {
    if (!this.initialized) {
      const response = await fetch(LevelLoader.ACTIVE_LEVELS_FILE)
      const levelsJson = await response.json()
      for (let i = 0; i < levelsJson.levels.length; i++) {
        const levelAsString = await fetch(`mods/levels/${levelsJson.levels[i]}.json`)
        const levelJson = await levelAsString.json()
        this.levels.push(levelJson)
      }
      console.log(`Levels Loaded: ${this.levels.length}`)
      this.initialized = true
    }
  }

  async loadNextLevel() {
    this.levelIndex++
    // TODO: check for end of game
    await this._loadLevel()
  }

  async _loadLevel() {
    await objectLoader.initialize()
    this.currentLevel = this.levels[this.levelIndex]
    const objectKeyMappings = this.currentLevel.objectKeyMappings
    const objectPositions = this.currentLevel.objectPositions
    let position = state.get('hero.position')
    if (!position) {
      position = { x: 0, y: 0, direction: 'east' }
    }
    let gameObjects = {}
    for (let y = 0; y < objectPositions.length; y++) {
      for (let x = 0; x < objectPositions[y].length; x++) {
        const key = objectPositions[y][x]
        if (key) {
          const objectMeta = objectKeyMappings[key]
          if (objectMeta) {
            let gameObj = await objectLoader.getInstanceOf(objectMeta.object)
            if (objectMeta.object === 'game-message' && objectMeta.text) {
              gameObj.data.perspective.here.message = objectMeta.text
            }
            if (objectMeta.object === 'ladder-up' || objectMeta.object === 'hole-in-ceiling') {
              position.x = x
              position.y = y
            }
            gameObjects[xyHash({ x, y })] = gameObj
          }
        }
      }
    }

    state.set({ key: 'catacombs.level.id', value: this.levelIndex })
    state.set({ key: 'catacombs.level.title', value: this.currentLevel.title })
    state.set({ key: 'catacombs.level.objective', value: this.currentLevel.objective })
    state.set({ key: 'catacombs.map', value: this.currentLevel.map })
    state.set({ key: 'catacombs.objects', value: gameObjects })
    state.set({ key: 'hero.position', value: position })
  }
}

const levels = new LevelLoader()
export default levels

// Level Ideas:
// const objectives = [
//   'Stop the bleeding.',
//   'Find the map of the current level.',
//   'Gather enough food to survive the next two levels.',
//   'Discover a hidden room.',
//   'Solve a puzzle to unlock a secret weapon cache.',
//   'Defeat a mini-boss to acquire a key to the next level.',
//   'Rescue a trapped animal companion.',
//   'Restore a broken piece of ancient machinery.',
//   'Navigate through a maze without a map.',
//   'Collect three pieces of ancient lore.',
//   'Survive a level without using any weapons.',
//   'Repair your armor using materials found in the level.',
//   'Discover and decipher an ancient inscription.',
//   'Light all the torches in a level to reveal a hidden passage.',
//   'Collect water from a sacred well to restore stamina.',
//   'Find and activate an ancient altar.',
//   'Escape from a trap within a limited time.',
//   'Use a companion to retrieve an unreachable item.',
//   'Solve a riddle posed by a statue.',
//   'Clear a path blocked by rubble.',
//   'Defeat a group of enemies using only magic.',
//   'Gather ingredients to craft a healing potion.',
//   'Find the pieces of a broken key.',
//   'Assemble the key and unlock the door to the next level.',
//   'Survive a level without replenishing your health.',
//   'Use stealth to bypass a group of patrolling enemies.',
//   'Find a way to light up a completely dark level.',
//   "Collect all the lore pieces to learn about the catacomb's history.",
//   'Acquire a rare weapon guarded by a powerful enemy.',
//   'Navigate a level filled with dangerous traps.',
//   'Solve a complex mechanical puzzle to open a secret chamber.',
//   'Defeat an enemy using a weapon found in the same level.',
//   'Restore a piece of ancient artwork.',
//   'Find a secret passage by following a hidden clue.',
//   'Gather rare materials to craft a powerful artifact.',
//   'Survive an ambush.',
//   'Complete a level without activating any traps.',
//   'Decode an ancient language with clues scattered throughout the level.',
//   'Use an animal companion to scare away enemies.',
//   'Reveal a hidden story by placing artifacts in their rightful places.',
//   'Defeat a ghost haunting a level.',
//   'Find a way to cross a deadly chasm.',
//   'Survive a level with decreasing health due to a curse.',
//   'Break a curse affecting a level.',
//   'Collect all pieces of an ancient manuscript.',
//   'Solve a puzzle to purify tainted water.',
//   'Use a mystical item to reveal hidden enemies.',
//   'Find and repair a broken bridge.',
//   "Gather intelligence on Tahara's minions.",
//   'Decode a message left by a previous explorer.',
//   'Find a lost companion in a labyrinth.',
//   'Defeat a shadow creature using light.',
//   'Survive a level with limited visibility due to fog.',
//   'Escape a collapsing section of the catacomb.',
//   'Uncover the burial site of a fallen hero.',
//   'Pay tribute to the hero to gain their weapon.',
//   'Solve a time-based puzzle to escape a room.',
//   'Find a way to bypass a magical barrier.',
//   'Use a companion to unlock a door.',
//   'Gather all the components to craft a mystical key.',
//   'Craft the mystical key and open the gateway to a hidden area.',
//   'Defeat an ancient guardian to retrieve a powerful artifact.',
//   'Use the artifact to cleanse a corrupted area.',
//   'Find a hidden sanctuary and rest without being disturbed.',
//   'Collect rare herbs to cure a poison affecting the player.',
//   'Translate an ancient prophecy.',
//   'Align statues to reveal a hidden passageway.',
//   'Use environmental hazards to defeat enemies.',
//   'Survive a level filled with aggressive fauna.',
//   'Discover a way to breathe underwater to explore a flooded section.',
//   'Retrieve an ancient emblem from a sunken area.',
//   'Convince a group of neutral creatures to allow passage.',
//   'Complete a level in complete silence to avoid awakening an enemy.',
//   'Find and collect all parts of an ancient armor set.',
//   'Assemble the ancient armor set for significant protection.',
//   'Use a companion to solve a puzzle that requires teamwork.',
//   'Craft a unique weapon with materials found across several levels.',
//   'Discover a shortcut that skips a level but is risky.',
//   'Solve a musical puzzle to calm a beast.',
//   'Redirect light to reveal the path forward.',
//   'Survive a trial that tests all player abilities.',
//   'Escort a non-combatant through a dangerous area.',
//   'Find and use a one-time use item that grants invincibility.',
//   'Collect the lore that explains the origin of the companions.',
//   'Repair a mechanism to stop a deadly environmental hazard.',
//   'Survive a level where the map constantly changes.',
//   'Gather the components to create a teleportation device.',
//   'Teleport past an otherwise impassable obstacle.',
//   'Defeat an enemy using only items found in that level.',
//   'Survive a duel against a rival explorer.',
//   'Find a way to temporarily gain the ability to see through walls.',
//   'Solve a puzzle that requires manipulating time.',
//   'Conserve resources to survive a level with scarce supplies.',
//   'Find a hidden garden and gather its mystical fruits.',
//   'Use the fruits to gain temporary enhancements.',
//   'Unravel the mystery of a vanished civilization.',
//   'Survive a level where gravity is inconsistent.',
//   'Gather the testimonies of spirits to learn a crucial secret.',
//   'Overcome a trial of courage, wisdom, and strength.',
//   'Use a mystical item to control elements for puzzle-solving.',
//   'Find a way to merge two animal companions into a more powerful ally.',
//   'Discover a lost city hidden within the catacombs.',
//   'Find and activate ancient machinery to power up the lost city.',
//   'Use the resources of the lost city to prepare for the final battle.',
//   'Navigate a level that mimics the surface world.',
//   'Gather the blessings of ancient deities for the final battle.',
//   'Decode the ultimate prophecy regarding Tahara.',
//   'Use a mystical mirror to reveal the true path.',
//   "Find and use a series of ancient totems to weaken Tahara's power.",
//   'Collect the essences of fallen enemies to forge a legendary weapon.',
//   'Find a way to resurrect a fallen hero to aid in the battle.',
//   "Use the hero's knowledge to find Tahara's weakness.",
//   'Gather allies by proving your worth through trials.',
//   "Solve the final puzzle that reveals the entrance to Tahara's lair.",
//   'Prepare for the final battle by collecting ancient artifacts.',
//   'Rally your companions and allies for the final descent.',
//   'Navigate a level with dynamically changing environments.',
//   "Decipher Tahara's plans by collecting scattered notes.",
//   'Find and use an ancient artifact that grants understanding of all languages.',
//   "Collect the elemental stones to forge a shield against Tahara's magic.",
//   "Use a magical beacon to light the path to Tahara's chamber.",
//   "Solve a puzzle to disarm traps guarding Tahara's lair.",
//   'Gather the tears of the moon to enchant your weapon.',
//   'Survive the hall of echoes, where your worst fears are manifested.',
//   'Find the ancient scrolls that contain the incantations to bind Tahara.',
//   'Use the scrolls to weaken Tahara during the final battle.',
//   "Collect the three keys guarded by Tahara's lieutenants.",
//   "Use the keys to unlock the gate to Tahara's sanctum.",
//   'Defeat Tahara, sealing away the ancient evil forever.'
// ]
