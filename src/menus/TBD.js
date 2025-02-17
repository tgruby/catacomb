import Component from '../ui/Component.js'

export default class TBD extends Component {
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
