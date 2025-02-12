import state from '../game/SharedState.js'
import Modal from '../ui/Modal.js'
import { upperLeft, upperRight, lowerLeft, lowerRight } from '../ui/CelticBorder.js'
import Tabs from '../ui/Tabs.js'
import Inventory from '../menus/Inventory.js'
import Crafting from '../menus/Crafting.js'
import Help from '../menus/Help.js'

export default class Menus extends Modal {
  constructor(props) {
    super({
      id: 'MenusModal',
      width: 76,
      height: 39,
      border: true,
      parent: props.parent
    })

    this.add({ x: 0, y: 0, block: upperLeft, force: true })
    this.add({ x: 67, y: 0, block: upperRight, force: true })
    this.add({ x: 0, y: 31, block: lowerLeft, force: true })
    this.add({ x: 68, y: 31, block: lowerRight, force: true })

    this.tabsPanel = new Tabs({
      id: 'MenusTabsPanel',
      width: this.width - 12,
      height: this.height - 4,
      parent: this,
      defaultSelectedTab: 2,
      tabs: [
        { name: 'Inventory', grid: new Inventory({ width: 64, height: 34, border: false, parent: this }) },
        { name: 'Crafting', grid: new Crafting({ width: 64, height: 34, border: false, parent: this }) },
        { name: 'Help', grid: new Help({ width: 64, height: 34, border: false, parent: this }) }
      ]
    })

    this.add({
      x: 6,
      y: 2,
      grid: this.tabsPanel,
      force: true
    })
  }

  keyPressed(e) {
    if (e.key === 'Escape' || e.key === 'q') {
      this.close()
      state.set({ key: 'request.screen.draw', value: true })
    } else {
      this.tabsPanel.keyPressed(e)
    }
  }
}
