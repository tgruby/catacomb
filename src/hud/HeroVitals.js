import Grid from '../core/Grid.js'
import memory from '../core/Memory.js'

export default class HeroVitals extends Grid {
  constructor() {
    super({ id: 'HeroVitals', width: 26, height: 22, fill: ' ', border: true })
    this.add({ x: 2, y: 0, string: ' Vitals ', force: true })
    this.add({ x: 2, y: 2, string: 'Health' })
    this.add({ x: 3, y: 3, string: '⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽' })
    this.add({ x: 3, y: 5, string: '⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺' })
    this.updateHealth(memory.get('hero.health'))
    this.add({ x: 2, y: 7, string: 'Stamina' })
    this.add({ x: 3, y: 8, string: '⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽' })
    this.add({ x: 3, y: 10, string: '⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺' })
    this.updateStamina(memory.get('hero.stamina'))
    this.add({ x: 2, y: 12, string: 'Magic' })
    this.add({ x: 3, y: 13, string: '⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽' })
    this.add({ x: 3, y: 15, string: '⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺' })
    this.updateMagic(memory.get('hero.magic'))
    this.add({ x: 2, y: 17, string: 'Hunger' })
    this.add({ x: 3, y: 18, string: '⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽' })
    this.add({ x: 3, y: 20, string: '⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺' })
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
      key: 'hero.magic',
      callback: this.updateMagic.bind(this)
    })
    memory.subscribe({
      key: 'hero.hunger',
      callback: this.updateHunger.bind(this)
    })
  }

  _calcBar(current, max) {
    let bar = Math.round((current / max) * 20)
    if (bar < 0) bar = 0
    return '⎹' + '█'.repeat(bar) + ' '.repeat(20 - bar) + '⎸'
  }    

  updateHealth(health) {
    this.add({
      x: 'left',
      y: 4,
      string: this._calcBar(health.current, health.max)
    })
  }

  updateStamina(stamina) {
    this.add({
      x: 'left',
      y: 9,
      string: this._calcBar(stamina.current, stamina.max)
    })
  }

  updateHunger(hunger) {
    this.add({
      x: 'left',
      y: 19,
      string: this._calcBar(hunger.current, hunger.max)
    })
  }

  updateMagic(magic) {
    this.add({
      x: 'left',
      y: 14,
      string: this._calcBar(magic.current, magic.max)
    })
  }
}
