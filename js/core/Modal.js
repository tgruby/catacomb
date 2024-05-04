import Screen from './Screen.js'
import memory from './Memory.js'

export default class Modal extends Screen {
  constructor (props) {
    const { id, width, height, parent } = props
    if (!id) props.id = 'Screen'
    if (!width) props.width = 80
    if (!height) props.height = 42
    if (!parent) throw new Error('Modal must have a parent screen')
    super(props)
    this.parent = parent
  }

  close () {
    console.log('closing modal')
    this.parent.removeGrid(this.id)
    memory.set({ key: 'request.screen.draw', value: true })
  }
}
