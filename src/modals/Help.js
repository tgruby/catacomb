import Grid from '../ui/Grid.js'

const content = `

  Main Screen             Menu System      
┌─────┬────────────────┐ ┌────────┬──────────────┐
⏐ Key ⏐ Action         ⏐ ⏐ Key    ⏐ Action       ⏐
├─────┼────────────────┤ ├────────┼──────────────┤
⏐  W  ⏐ Walk Forward   ⏐ ⏐   W    ⏐ Select Above ⏐
├─────┼────────────────┤ ├────────┼──────────────┤
⏐  A  ⏐ Turn Left      ⏐ ⏐   S    ⏐ Select Below ⏐
├─────┼────────────────┤ ├────────┼──────────────┤
⏐  D  ⏐ Turn Right     ⏐ ⏐   D    ⏐ Tab Right    ⏐
├─────┼────────────────┤ ├────────┼──────────────┤
⏐  E  ⏐ Pickup Item    ⏐ ⏐   A    ⏐ Tab Left     ⏐
├─────┼────────────────┤ ├────────┼──────────────┤
⏐  E  ⏐ Pickup Item    ⏐ ⏐ Return ⏐ Select       ⏐
├─────┼────────────────┤ └────────┴──────────────┘
⏐  F  ⏐ Fight          ⏐                          
├─────┼────────────────┤                          
⏐  Q  ⏐ Menu System    ⏐                          
├─────┼────────────────┤                          
⏐  J  ⏐ Open Journal   ⏐                         
├─────┼────────────────┤                          
⏐ Esc ⏐ Help Menu      ⏐                          
└─────┴────────────────┘                          
`

export default class Help extends Grid {
  constructor(props) {
    super(props)
    this.add({ x: 'center', y: 0, block: content.split('\n') })
  }

  keyPressed(e) {
    console.log('Help Panel: keyPressed:', e.key)
  }
}
