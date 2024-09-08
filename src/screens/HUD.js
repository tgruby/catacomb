import FPS from '../hud/FPS.js'
import Hero from '../game/Hero.js'
import Menus from '../modals/Menus.js'
import state from '../game/SharedState.js'
import Screen from '../ui/Screen.js'
import MapView from '../hud/MapView.js'
import Messages from '../hud/Messages.js'
import GameStats from '../hud/GameStats.js'
import HeroVitals from '../hud/HeroVitals.js'
import LevelComplete from '../modals/LevelComplete.js'
import MovementEngine from '../game/MovementEngine.js'
import CompanionVitals from '../hud/CompanionVitals.js'
import FirstPersonView from '../hud/FirstPersonView.js'
import FadeIn from '../animations/FadeIn.js'

export default class HUD extends Screen {
  constructor() {
    super({ id: 'HUD', width: 80, height: 48, border: false })

    // create the main game objects
    // this.time = new Time()
    this.hero = new Hero()
    state.set({ key: 'hero', value: this.hero })
    this.movement = new MovementEngine(this.hero)
    state.set({ key: 'movement', value: this.movement })

    // add the main game ui components
    this.add({ grid: new GameStats(), x: 0, y: 0 })
    this.add({ grid: new HeroVitals(), x: 0, y: 7 })
    this.add({ grid: new CompanionVitals(), x: 0, y: 29 })
    this.add({ grid: new FirstPersonView(), x: 26, y: 7 })
    this.add({ grid: new MapView(), x: 54, y: 7 })
    // this.add({ grid: new EnemyVitals(), x: 54, y: 28 })
    this.add({ grid: new Messages(), x: 0, y: 36 })
    this.add({ grid: new FPS(), x: 'right', y: 43 })

    this.add({
      x: 0,
      y: 0,
      grid: new FadeIn({
        id: 'FadeIn',
        width: 80,
        height: 48,
        frameSpeed: 32,
        autoPlay: true
      })
    })

    //this.time.start()
  }

  showHelp() {}

  keyPressed(e) {
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

    if (this.getGrid('MenusModal')) {
      this.getGrid('MenusModal').keyPressed(e)
      return
    }

    if (e.key === 'w' || e.key === 'ArrowUp') {
      this.movement.moveForward()
      state.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 's' || e.key === 'ArrowDown') {
      // movement.moveBackward()
      // canvas.innerHTML = hud.draw()
    } else if (e.key === 'a' || e.key === 'ArrowLeft') {
      this.movement.turnLeft()
      state.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
      this.movement.turnRight()
      state.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 'Enter') {
      const levelComplete = this.movement.moveDown()
      if (levelComplete) {
        this.add({ grid: new LevelComplete({ parent: this }), x: 0, y: 0 })
        state.set({ key: 'request.screen.draw', value: true })
      }
    } else if (e.key === 'f') {
      this.hero.attack()
      state.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 'e') {
      this.hero.pickUp()
      state.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 'q') {
      this.add({ grid: new Menus({ parent: this }), x: 'center', y: 2 })
      state.set({ key: 'request.screen.draw', value: true })
    } else {
      console.log('key', e.key)
    }
  }
}
