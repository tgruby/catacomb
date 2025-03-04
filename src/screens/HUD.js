import FPS from './hud/FPS.js'
import Hero from '../game/Hero.js'
import Alert from '../ui/Alert.js'
import Menus from '../modals/Menus.js'
import state from '../game/SharedState.js'
import Screen from '../ui/Screen.js'
import MapView from './hud/MapView.js'
import Messages from './hud/Messages.js'
import GameStats from './hud/GameStats.js'
import HeroVitals from './hud/HeroVitals.js'
import GameEngine from '../game/GameEngine.js'
import CompanionVitals from './hud/CompanionVitals.js'
import FirstPersonView from './hud/FirstPersonView.js'
import FadeIn from '../animations/FadeIn.js'
import EnemyVitals from './hud/EnemyVitals.js'

export default class HUD extends Screen {
  constructor() {
    super({ id: 'HUD', width: 80, height: 40, border: false })

    // create the main game objects
    // this.time = new Time()
    this.hero = new Hero()
    state.set({ key: 'hero', value: this.hero })
    this.movement = new GameEngine(this.hero)
    state.set({ key: 'movement', value: this.movement })

    // add the main game ui components
    this.add({ grid: new GameStats(), x: 0, y: 0 })
    this.add({ grid: new HeroVitals(), x: 0, y: 5 })
    this.add({ grid: new CompanionVitals(), x: 0, y: 25 })
    this.add({ grid: new FirstPersonView(), x: 26, y: 5 })
    this.add({ grid: new MapView(), x: 54, y: 5 })
    this.add({ grid: new EnemyVitals(), x: 54, y: 25 })
    this.add({ grid: new Messages(), x: 0, y: 33 })
    this.add({ string: '[Esc] for Help', x: 'left', y: 38 })
    this.add({ grid: new FPS(), x: 'right', y: 38 })

    this.add({
      x: 0,
      y: 0,
      grid: new FadeIn({
        id: 'FadeIn',
        width: 80,
        height: 40,
        frameSpeed: 32,
        autoPlay: true
      })
    })
  }

  showHelp() {}

  keyPressed(e) {
    if (this.getComponent('MenusModal')) {
      this.getComponent('MenusModal').keyPressed(e)
      return
    }

    if (e.key === 'w' || e.key === 'ArrowUp') {
      this.movement.moveForward()
    } else if (e.key === 's' || e.key === 'ArrowDown') {
      // movement.moveBackward()
      // canvas.innerHTML = hud.draw()
    } else if (e.key === 'a' || e.key === 'ArrowLeft') {
      this.movement.turnLeft()
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
      this.movement.turnRight()
    } else if (e.key === 'Enter') {
      this.movement.moveDown()
    } else if (e.key === 'f') {
      this.movement.meelee()
    } else if (e.key === 'e') {
      this.hero.pickUp()
    } else if (e.key === 'Escape') {
      this.add({ grid: new Menus(), x: 'center', y: 2 })
    } else if (e.key === 'p') {
      this.add({ grid: new Alert({ message: 'Hi there!' }), x: 'center', y: 'center' })
    } else {
      console.log('key', e.key)
    }
  }
}
