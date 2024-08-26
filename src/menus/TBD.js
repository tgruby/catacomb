import Grid from '../ui/Grid.js'

export default class TBD extends Grid {
  constructor(name) {
    super({
      width: 60,
      height: 30,
      border: true
    })
    this.add({ x: 'center', y: 'center', string: `${name} coming soon!` })
  }

  keyPressed(e) {
    console.log('TBD keyPressed:', e.key)
  }
}
