import memory from '../core/Memory.js'
import Modal from '../core/Modal.js'
import { upperLeft, upperRight, lowerLeft, lowerRight } from '../core/CelticBorder.js'
import TabGrid from '../core/TabGrid.js'
import Inventory from './Inventory.js'
import Help from './Help.js'

export default class Menus extends Modal {
  constructor(props) {
    super({
      id: 'MenusModal',
      width: 76,
      height: 39,
      border: true,
      parent: props.parent
    })
    this.tabs = props.tabs || []
    this.selectedTab = props.selectedTab || 0

    this.add({ x: 0, y: 0, block: upperLeft, force: true })
    this.add({ x: 67, y: 0, block: upperRight, force: true })
    this.add({ x: 0, y: 31, block: lowerLeft, force: true })
    this.add({ x: 68, y: 31, block: lowerRight, force: true })

    this.tabsPanel = new TabGrid({
      width: this.width - 12,
      height: this.height - 4,
      parent: this,
      tabs: [
        { name: 'Inventory', grid: new Inventory({ width: 64, height: 34, border: false, parent: this }) },
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
      memory.set({ key: 'request.screen.draw', value: true })
    } else {
      this.tabsPanel.keyPressed(e)
    }
  }
}
