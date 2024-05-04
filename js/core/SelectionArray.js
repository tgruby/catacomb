import Grid from './Grid.js'
import memory from './Memory.js'

export default class SelectionArray extends Grid {
  // Example:
  //          Item 1
  // .-----------------------.
  // |        Item 2         |
  // |                       |<-- viewable area
  // |    === Item 3 ===     |
  // '-----------------------'
  //          Item 4

  constructor (props) {
    super(props)

    // items are expected to be in the format of {id: id, value: value, ... }
    // common use is {id: 'item.id', value: 'item.name'}, the value will be displayed.
    // but you can have as many properties as you want on the object.
    const { items, itemInFocus } = props

    this.items = items || []
    this.itemInFocus = itemInFocus || 0

    this.build()
  }

  updateItems (items) {
    this.items = items
    this.itemInFocus = 0
    this.build()
    memory.set({ key: 'request.screen.draw', value: true })
  }

  build () {
    // clear out the existing components
    this.clear()
    const availableSlots = Math.round(this.height / 2) - 2 // each item requires 2 lines
    let visibleItems = []
    if (this.items.length <= availableSlots) {
      visibleItems = this.items
    } else {
      if (this.itemInFocus < availableSlots) {
        visibleItems = this.items.slice(0, availableSlots)
      } else {
        // if the selected item is not within the first available slots, then show the selected item at the bottom of slots.
        visibleItems = this.items.slice(this.itemInFocus - availableSlots + 1, this.itemInFocus + 1)
      }
    }

    visibleItems.forEach((item, index) => {
      const focusItem = this.items[this.itemInFocus]
      const highlight = (item === focusItem)
      let repeat = this.width - item.value.length - 4
      if (repeat < 0) repeat = 0
      const string = item.value + ' '.repeat(repeat)
      this.add({ x: 'right', y: 2 + index * 2, string, highlight })
    })
    memory.set({ key: 'request.screen.draw', value: true })
  }

  up () {
    if (this.itemInFocus > 0) {
      this.itemInFocus--
      this.build()
    }
    return this.items[this.itemInFocus]
  }

  down () {
    if (this.itemInFocus < this.items.length - 1) {
      this.itemInFocus++
      this.build()
    }
    return this.items[this.itemInFocus]
  }

  selectItem () {
    return this.items[this.itemInFocus]
  }
}
