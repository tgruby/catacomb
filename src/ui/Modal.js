import Screen from './Screen.js'
import state from '../game/SharedState.js'

export default class Modal extends Screen {
  constructor(props) {
    super(props)
  }

  close() {
    console.log('closing modal: ', this)
    this.parent.removeGrid(this.id)
    state.set({ key: 'request.screen.draw', value: true })
  }
}
