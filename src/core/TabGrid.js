import Modal from './Modal.js'
import memory from './Memory.js'

export default class TabGrid extends Modal {
  constructor(props) {
    props.id = 'TabGrid'
    super(props)
    this.tabs = props.tabs || []
    this.selectedTab = props.selectedTab || 0
    this.activeGrid = this.tabs[this.selectedTab].grid
    this._build()
  }

  _build() {
    this.clear()
    let tabLine1 = '╭'
    let tabLine2 = '⏐'
    let tabLine3 = '╰'

    let highlight = false
    for (let i = 0; i < this.tabs.length; i++) {
      const name = this.tabs[i].name
      tabLine1 += '⎯' + '⎯'.repeat(name.length) + '⎯┬'
      let tabLabel = ' ' + name + ' '
      if (i === this.selectedTab) {
        highlight = { x: tabLine2.length, y: 1, length: tabLabel.length }
      }
      tabLine2 += tabLabel + '⏐'
      tabLine3 += '⎯' + '⎯'.repeat(name.length) + '⎯┴'
    }
    tabLine1 = tabLine1.slice(0, -1) + '╮'
    tabLine2 = tabLine2.slice(0, -1) + '⏐'
    tabLine3 = tabLine3.slice(0, -1) + '╯'

    const tabBlock = [tabLine1, tabLine2, tabLine3]
    this.add({ x: 'center', y: 0, block: tabBlock, highlight })

    this.add({ x: 'center', y: 4, grid: this.activeGrid })
    memory.set({ key: 'request.screen.draw', value: true })
  }

  keyPressed(e) {
    if (e.key === 'a' || e.key === 'ArrowLeft') {
      if (this.selectedTab > 0) {
        this.selectedTab--
        this.activeGrid = this.tabs[this.selectedTab].grid
        this._build()
      }
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
      if (this.selectedTab < this.tabs.length - 1) {
        this.selectedTab++
        this.activeGrid = this.tabs[this.selectedTab].grid
        this._build()
      }
    } else {
      console.log('Tabs keyPressed:', e.key)
      this.activeGrid.keyPressed(e)
    }
  }
}
