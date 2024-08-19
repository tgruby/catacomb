import Grid from '../core/Grid.js'
import memory from '../core/Memory.js'
import Modal from '../core/Modal.js'
import SelectionArray from '../core/SelectionArray.js'

export default class Inventory extends Modal {
  constructor(props) {
    super({
      id: 'InventoryModal',
      width: 64,
      height: 35,
      border: true,
      parent: props.parent
    })

    this.add({ x: 'center', y: 2, string: ' Inventory' })

    const summaryOfItems = this.getInventorySummary()
    const inventoryItemList = new SelectionArray({
      id: 'InventoryItemList',
      width: 32,
      height: 30,
      border: true,
      items: summaryOfItems
    })
    inventoryItemList.add({ x: 'left', y: 0, string: ' Items ', force: true })
    this.add({ x: 1, y: 4, grid: inventoryItemList })

    const itemImagePanel = new Grid({
      id: 'SelectedItemImage',
      width: 30,
      height: 18,
      border: true
    })
    itemImagePanel.add({ x: 'left', y: 0, string: ' Image ', force: true })
    this.add({ x: 'right', y: 4, grid: itemImagePanel })

    const itemDescriptionPanel = new Grid({
      id: 'SelectedItemDescription',
      width: 30,
      height: 12,
      border: true
    })
    itemDescriptionPanel.add({
      x: 'left',
      y: 0,
      string: ' Description ',
      force: true
    })
    this.add({ x: 'right', y: 22, grid: itemDescriptionPanel })

    // set the initial item image and description
    this.setImageAndDescription(summaryOfItems[0])
  }

  // Return a list of items in the inventory with a count by id
  getInventorySummary() {
    const summarizedItems = []
    const inventory = memory.get('hero.inventory')
    for (let i = 0; i < inventory.length; i++) {
      const item = inventory[i]
      let equipped = '   '
      const equippedWeapon = memory.get('hero.equipped.weapon')
      if (equippedWeapon && equippedWeapon.getType() === item.getType()) equipped = ' ◆ '
      const summarizedItem = summarizedItems.find((summaryItem) => summaryItem.id === item.getType())
      if (!summarizedItem) {
        summarizedItems.push({
          id: item.getType(),
          value: equipped + item.getName(),
          name: item.getName(),
          image: item.getImage(),
          description: item.getDescription(),
          equipped,
          count: 1
        })
      } else {
        summarizedItem.count++
        summarizedItem.value = `${equipped}${summarizedItem.name} (x${summarizedItem.count})`
      }
    }
    console.log('summarizedItems:', summarizedItems)
    return summarizedItems
  }

  keyPressed(e) {
    if (e.key === 'w' || e.key === 'ArrowUp') {
      const selected = this.getGrid('InventoryItemList').up()
      this.setImageAndDescription(selected)
    } else if (e.key === 's' || e.key === 'ArrowDown') {
      const selected = this.getGrid('InventoryItemList').down()
      this.setImageAndDescription(selected)
    } else if (e.key === 'i' || e.key === 'Escape') {
      this.close()
      memory.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 'Enter') {
      const inventoryItems = this.getGrid('InventoryItemList')
      const selected = inventoryItems.selectItem()
      const hero = memory.get('hero')
      hero.useItem(selected.id)
      inventoryItems.updateItems(this.getInventorySummary())
      this.setImageAndDescription(inventoryItems.selectItem())
    } else {
      console.log('Inventory keyPressed:', e.key)
    }
  }

  setImageAndDescription(summarizedItem) {
    const imageGrid = this.getGrid('SelectedItemImage')
    imageGrid.clear()
    const descriptionGrid = this.getGrid('SelectedItemDescription')
    descriptionGrid.clear()
    if (!summarizedItem) return

    // center the image vertically
    const imageYOffset = Math.floor((imageGrid.height - summarizedItem.image.length) / 2)
    imageGrid.add({ x: 'center', y: imageYOffset, block: summarizedItem.image })
    descriptionGrid.add({
      x: 'left',
      y: 2,
      block: this.wrapText(summarizedItem.description, descriptionGrid.width - 2)
    })
    memory.set({ key: 'request.screen.draw', value: true })
  }

  wrapText(text, width) {
    const words = text.split(' ')
    const lines = []
    let line = ''
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      if (line.length + word.length + 1 < width) {
        line += `${word} `
      } else {
        lines.push(line)
        line = `${word} `
      }
    }
    lines.push(line)
    return lines
  }
}
