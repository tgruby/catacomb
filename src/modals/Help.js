import memory from "../core/Memory.js"
import Modal from "../core/Modal.js"

const content = `

  Main Screen             Inventory/Crafting        Journal                
┌─────┬────────────────┐ ┌────────┬──────────────┐ ┌───────┬──────────────┐
⏐ Key ⏐ Action         ⏐ ⏐ Key    ⏐ Action       ⏐ ⏐ Key   ⏐ Action       ⏐
├─────┼────────────────┤ ├────────┼──────────────┤ ├───────┼──────────────┤
⏐  W  ⏐ Walk Forward   ⏐ ⏐   W    ⏐ Select Above ⏐ ⏐  A    ⏐ Page Back    ⏐
├─────┼────────────────┤ ├────────┼──────────────┤ ├───────┼──────────────┤
⏐  A  ⏐ Turn Left      ⏐ ⏐   S    ⏐ Select Below ⏐ ⏐  D    ⏐ Page Forward ⏐
├─────┼────────────────┤ ├────────┼──────────────┤ └───────┴──────────────┘
⏐  D  ⏐ Turn Right     ⏐ ⏐   D    ⏐ Turn Right   ⏐                         
├─────┼────────────────┤ ├────────┼──────────────┤                         
⏐  E  ⏐ Pickup Item    ⏐ ⏐ Return ⏐ Select Item  ⏐                         
├─────┼────────────────┤ └────────┴──────────────┘                         
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
  constructor(props) {
    super({
      id: "HelpMenu",
      width: 78,
      height: 28,
      border: true,
      parent: props.parent
    })
    this.add({ x: "center", y: 2, string: "--=≡≣ Help Menu ≣≡=--" })
    this.add({ x: "center", y: 4, block: content.split("\n") })
  }

  keyPressed(e) {
    if (e.key === "Enter" || e.key === "Escape" || e.key === " ") {
      this.close()
      memory.set({ key: "request.screen.draw", value: true })
    }
  }
}
