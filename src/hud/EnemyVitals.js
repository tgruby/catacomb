import Grid from '../core/Grid.js'
import memory from '../core/Memory.js'

export default class EnemyVitals extends Grid {
  constructor() {
    super({ id: 'EnemyVitals', width: 26, height: 8, border: true })
    this.add({ x: 2, y: 0, string: ' Enemy ', force: true })
    memory.subscribe({
      key: 'enemy.health',
      callback: this.updateHealth.bind(this)
    })
  }

  updateHealth(health) {
    if (health.current <= 0 && health.max > 0) {
      this.add({ x: 2, y: 3, string: '      ' })
      this.add({ x: 'center', y: 5, string: '       *DEAD*       ' })
    } else if (health.max < 0) {
      this.add({ x: 2, y: 3, string: '      ' })
      this.add({ x: 'center', y: 5, string: '                    ' })
    } else {
      const percentage = Math.round((health.current / health.max) * 100)
      const heartCount = Math.round(percentage / 5)
      const blankCount = 20 - heartCount
      this.add({ x: 2, y: 2, string: 'Health' })
      this.add({ x: 3, y: 3, string: '⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽' })
      this.add({
        x: 2,
        y: 4,
        string: '⎹' + '█'.repeat(heartCount) + ' '.repeat(blankCount) + '⎸'
      })
      this.add({ x: 2, y: 5, string: '⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺' })
    }
  }
}
