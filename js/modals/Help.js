import memory from '../core/Memory.js'
import Modal from '../core/Modal.js'

const content = `

  Main Screen             Inventory Screen    
┌─────┬────────────────┐  ┌───────┬──────────────┐
⏐ Key ⏐ Action         ⏐  ⏐ Key   ⏐ Action       ⏐
├─────┼────────────────┤  ├───────┼──────────────┤
⏐  W  ⏐ Walk Forward   ⏐  ⏐   W   ⏐ Select Above ⏐
├─────┼────────────────┤  ├───────┼──────────────┤
⏐  A  ⏐ Turn Left      ⏐  ⏐   S   ⏐ Select Below ⏐
├─────┼────────────────┤  ├───────┼──────────────┤
⏐  D  ⏐ Turn Right     ⏐  ⏐   D   ⏐ Turn Right   ⏐
├─────┼────────────────┤  ├───────┼──────────────┤
⏐  E  ⏐ Pickup Item    ⏐  ⏐ Space ⏐ Select Item  ⏐
├─────┼────────────────┤  └───────┴──────────────┘
⏐  F  ⏐ Fight          ⏐                          
├─────┼────────────────┤                          
⏐  I  ⏐ Open Inventory ⏐                          
├─────┼────────────────┤                          
⏐  J  ⏐ Open Journal   ⏐                          
├─────┼────────────────┤                          
⏐ Esc ⏐ Help Menu      ⏐                          
└─────┴────────────────┘                          
`

export default class Help extends Modal {
  constructor (props) {
    super({ id: 'HelpMenu', width: 64, height: 35, border: true, parent: props.parent })
    this.add({ x: 'center', y: 2, string: '--=≡≣ Help Menu ≣≡=--' })
    this.add({ x: 'center', y: 4, block: content.split('\n') })

  }

  keyPressed (e) {
    if (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ') {
      this.close()
      memory.set({ key: 'request.screen.draw', value: true })
    }
  }

}
