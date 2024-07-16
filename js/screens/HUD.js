import memory from '../core/Memory.js'
import Screen from '../core/Screen.js'
import MapView from '../hud/MapView.js'
import GameStats from '../hud/GameStats.js'
import HeroVitals from '../hud/HeroVitals.js'
import EnemyVitals from '../hud/EnemyVitals.js'
import RecentJournalEntry from '../hud/RecentJournalEntry.js'
import CompanionVitals from '../hud/CompanionVitals.js'
import FirstPersonView from '../hud/FirstPersonView.js'
import Hero from '../game/Hero.js'
import Catacombs from '../game/Catacombs.js'
import MovementEngine from '../game/MovementEngine.js'
import Time from '../game/Time.js'
import Inventory from '../modals/Inventory.js'
import LevelComplete from '../modals/LevelComplete.js'
import FadeIn from '../animations/FadeIn.js'
import Journal from '../modals/Journal.js'
import HelpMenu from '../modals/Help.js'

export default class HUD extends Screen {
  constructor () {
    super({ id: 'HUD', width: 80, height: 50, border: false })

    // create the main game objects
    this.time = new Time()
    this.hero = new Hero()
    memory.set({ key: 'hero', value: this.hero })
    this.catacombs = new Catacombs()
    memory.set({ key: 'catacombs', value: this.catacombs })
    this.movement = new MovementEngine(this.hero)
    memory.set({ key: 'movement', value: this.movement })

    // add the main game ui components
    this.add({ grid: new GameStats(), x: 0, y: 0 })
    this.add({ grid: new HeroVitals(), x: 0, y: 7 })
    this.add({ grid: new CompanionVitals(), x: 0, y: 28 })
    this.add({ grid: new FirstPersonView(), x: 26, y: 7 })
    this.add({ grid: new MapView(), x: 54, y: 7 })
    this.add({ grid: new EnemyVitals(), x: 54, y: 28 })
    this.add({ grid: new RecentJournalEntry(), x: 0, y: 36 })

    this.add({ x: 0, y: 0, grid: new FadeIn({ id: 'FadeIn', width: 80, height: 50, frameSpeed: 32 }) })

    this.time.start()
  }

  showHelp () {
  }

  keyPressed (e) {
    if (this.getGrid('InventoryModal')) {
      this.getGrid('InventoryModal').keyPressed(e)
      return
    }

    if (this.getGrid('JournalModal')) {
      this.getGrid('JournalModal').keyPressed(e)
      return
    }

    if (this.getGrid('HelpMenu')) {
      this.getGrid('HelpMenu').keyPressed(e)
      return
    }

    if (e.key === 'w' || e.key === 'ArrowUp') {
      this.movement.moveForward()
      memory.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 's' || e.key === 'ArrowDown') {
      // movement.moveBackward()
      // canvas.innerHTML = hud.draw()
    } else if (e.key === 'a' || e.key === 'ArrowLeft') {
      this.movement.turnLeft()
      memory.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
      this.movement.turnRight()
      memory.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 'Enter') {
      const levelComplete = this.movement.moveDown()
      if (levelComplete) {
        this.add({ grid: new LevelComplete({ parent: this }), x: 0, y: 0 })
        memory.set({ key: 'request.screen.draw', value: true })
      }
    } else if (e.key === 'Escape') {
      this.add({ grid: new HelpMenu({ parent: this }), x: 'center', y: 5 })
      memory.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 'f') {
      this.hero.attack()
      memory.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 'e') {
      this.hero.pickUp()
      memory.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 'j') {
      this.add({ grid: new Journal({ parent: this }), x: 'center', y: 2 })
      memory.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 'i') {
      this.add({ id: 'InventoryModal', grid: new Inventory({ parent: this }), x: 'center', y: 3 })
      memory.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 'm') {
      // open full map
    } else {
      console.log('key', e.key)
    }
  }
}
