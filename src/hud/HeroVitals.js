import Grid from '../core/Grid.js'
import memory from '../core/Memory.js'

export default class HeroVitals extends Grid {
  constructor() {
    super({ id: 'HeroVitals', width: 26, height: 21, fill: ' ', border: true })
    this.add({ x: 2, y: 0, string: ' Vitals ', force: true })
    this.add({ x: 2, y: 2, string: 'Health' })
    this.add({ x: 2, y: 3, string: '┌────────────────────┐' })
    this.add({ x: 2, y: 5, string: '└────────────────────┘' })
    this.updateHealth(memory.get('hero.health'))
    this.add({ x: 2, y: 8, string: 'Stamina' })
    this.add({ x: 2, y: 9, string: '┌────────────────────┐' })
    this.add({ x: 2, y: 11, string: '└────────────────────┘' })
    this.updateStamina(memory.get('hero.stamina'))
    this.add({ x: 2, y: 14, string: 'Hunger' })
    this.add({ x: 2, y: 15, string: '┌────────────────────┐' })
    this.add({ x: 2, y: 17, string: '└────────────────────┘' })
    this.updateHunger(memory.get('hero.hunger'))

    memory.subscribe({
      key: 'hero.health',
      callback: this.updateHealth.bind(this)
    })
    memory.subscribe({
      key: 'hero.stamina',
      callback: this.updateStamina.bind(this)
    })
    memory.subscribe({
      key: 'hero.hunger',
      callback: this.updateHunger.bind(this)
    })
  }

  updateHealth(health) {
    const bar = Math.round((health.current / health.max) * 20)
    if (bar <= 0) {
      this.add({ x: 'left', y: 4, string: '│' + ' '.repeat(20) + '│' })
    } else {
      this.add({
        x: 'left',
        y: 4,
        string: '│' + '█'.repeat(bar) + ' '.repeat(20 - bar) + '│'
      })
    }
  }

  updateStamina(stamina) {
    const bar = Math.round((stamina.current / stamina.max) * 20)
    if (bar <= 0) {
      this.add({ x: 'left', y: 10, string: '│' + ' '.repeat(20) + '│' })
    } else {
      this.add({
        x: 'left',
        y: 10,
        string: '│' + '█'.repeat(bar) + ' '.repeat(20 - bar) + '│'
      })
    }
  }

  updateHunger(hunger) {
    const bar = Math.round((hunger.current / hunger.max) * 20)
    if (bar <= 0) {
      this.add({ x: 'left', y: 16, string: '│' + ' '.repeat(20) + '│' })
    } else {
      this.add({
        x: 'left',
        y: 16,
        string: '│' + '█'.repeat(bar) + ' '.repeat(20 - bar) + '│'
      })
    }
  }
}
