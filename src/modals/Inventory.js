import Grid from '../core/Grid.js'
import memory from '../core/Memory.js'
import Modal from '../core/Modal.js'
import SelectionArray from '../core/SelectionArray.js'

export default class Inventory extends Modal {
  constructor (props) {
    super({ id: 'InventoryModal', width: 64, height: 35, border: true, parent: props.parent })

    this.add({ x: 'center', y: 2, string: ' Inventory' })

    const items = this.getInventorySummary()
    const inventoryItems = new SelectionArray({ id: 'InventoryItems', width: 32, height: 30, border: true, items })
    inventoryItems.add({ x: 'left', y: 0, string: ' Items ', force: true })
    this.add({ x: 1, y: 4, grid: inventoryItems })

    const itemImage = new Grid({ id: 'ItemImage', width: 30, height: 18, border: true })
    itemImage.add({ x: 'left', y: 0, string: ' Image ', force: true })
    this.add({ x: 'right', y: 4, grid: itemImage })

    const itemDescription = new Grid({ id: 'ItemDescription', width: 30, height: 12, border: true })
    itemDescription.add({ x: 'left', y: 0, string: ' Description ', force: true })
    this.add({ x: 'right', y: 22, grid: itemDescription })

    // set the initial item image and description
    this.setImageAndDescription(items[0])
  }

  // Return a list of items in the inventory with a count by id
  getInventorySummary () {
    const items = []
    const inventory = memory.get('hero.inventory')
    for (let i = 0; i < inventory.length; i++) {
      // item format: { id: id, name: name, type: type, description: description, here: here }
      const item = inventory[i]
      const itemSummary = items.find(summaryItem => summaryItem.id === item.id)
      if (!itemSummary) {
        const image = (item.image) ? item.image : item.here.frames[0]
        items.push({ id: item.id, value: item.name, name: item.name, type: item.type, image, description: item.description, count: 1 })
      } else {
        itemSummary.count++
        itemSummary.value = `${itemSummary.name} (x${itemSummary.count})`
      }
    }
    return items
  }

  keyPressed (e) {
    if (e.key === 'w' || e.key === 'ArrowUp') {
      const selected = this.getGrid('InventoryItems').up()
      this.setImageAndDescription(selected)
    } else if (e.key === 's' || e.key === 'ArrowDown') {
      const selected = this.getGrid('InventoryItems').down()
      this.setImageAndDescription(selected)
    } else if (e.key === 'i' || e.key === 'Escape') {
      this.close()
      memory.set({ key: 'request.screen.draw', value: true })
    } else if (e.key === 'Enter') {
      const inventoryItems = this.getGrid('InventoryItems')
      const selected = inventoryItems.selectItem()
      const hero = memory.get('hero')
      hero.useItem(selected.id)
      inventoryItems.updateItems(this.getInventorySummary())
      this.setImageAndDescription(inventoryItems.selectItem())
    } else {
      console.log('Inventory keyPressed:', e.key)
    }
  }

  setImageAndDescription (item) {
    const imageGrid = this.getGrid('ItemImage')
    imageGrid.clear()
    const descriptionGrid = this.getGrid('ItemDescription')
    descriptionGrid.clear()
    if (!item) return
    // center the image vertically
    const imageYOffset = Math.floor((imageGrid.height - item.image.length) / 2)
    imageGrid.add({ x: 'center', y: imageYOffset, block: item.image })
    descriptionGrid.add({ x: 'left', y: 2, block: this.wrapText(item.description, descriptionGrid.width - 2) })
    memory.set({ key: 'request.screen.draw', value: true })
  }

  wrapText (text, width) {
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
