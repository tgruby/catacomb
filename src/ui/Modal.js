import Screen from './Screen.js'
import state from '../game/SharedState.js'

export default class Modal extends Screen {
  constructor(props) {
    if (!props.parent) throw new Error('Modal must have a parent screen')
    super(props)
    this.parent = props.parent
  }

  close() {
    console.log('closing modal: ', this)
    this.parent.removeGrid(this.id)
    state.set({ key: 'request.screen.draw', value: true })
  }
}
