import Grid from '../ui/Grid.js'
import state from '../game/SharedState.js'
import SelectionList from '../ui/SelectionList.js'

export default class Crafting extends Grid {
  constructor(props) {
    super(props)

    const summaryOfSkills = this.getSkillSummary()
    const skillsList = new SelectionList({
      id: 'CraftingSkillsList',
      width: 32,
      height: 30,
      border: true,
      items: summaryOfSkills
    })
    skillsList.add({ x: 'left', y: 0, string: ' Known Crafting Skills ', force: true })
    this.add({ x: 1, y: 0, grid: skillsList })

    const itemImagePanel = new Grid({
      id: 'SelectedItemImage',
      width: 30,
      height: 14,
      border: true
    })
    itemImagePanel.add({ x: 'left', y: 0, string: ' Image ', force: true })
    this.add({ x: 'right', y: 0, grid: itemImagePanel })

    const itemDescriptionPanel = new Grid({
      id: 'SelectedItemDescription',
      width: 30,
      height: 16,
      border: true
    })
    itemDescriptionPanel.add({
      x: 'left',
      y: 0,
      string: ' Description ',
      force: true
    })
    this.add({ x: 'right', y: 14, grid: itemDescriptionPanel })

    // set the initial item image and description
    this.setImageAndDescription(summaryOfSkills[0])
  }

  // Return a list of items in the inventory with a count by id
  getSkillSummary() {
    const summarizedItems = []
    const skills = state.get('hero.skills')
    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i]
      let description = skill.getDescription() + ' \n \n            ─── \n \n Crafting Requirements: \n '
      for (let j = 0; j < skill.getCraftingRequirements().length; j++) {
        const requirement = skill.getCraftingRequirements()[j]
        // show if we have enough of the item
        const inventory = state.get('hero.inventory')
        const inventoryItems = inventory.map((item) => item.getType())
        const count = inventoryItems.filter((item) => item === requirement.id).length
        if (count < requirement.quantity) {
          description += ' \n x'
        } else {
          description += ' \n √'
        }
        description += ` ${requirement.quantity} ${requirement.id}`
      }
      summarizedItems.push({
        id: skill.getType(),
        value: '   ' + skill.getName(),
        name: skill.getName(),
        image: skill.getImage(),
        description,
        object: skill
      })
    }
    return summarizedItems
  }

  haveEnoughToCraft(item) {
    const requirements = item.getCraftingRequirements()
    const inventory = state.get('hero.inventory')
    const inventoryItems = inventory.map((item) => item.getType())
    const missingItems = []
    requirements.forEach((requirement) => {
      const count = inventoryItems.filter((item) => item === requirement.id).length
      if (count < requirement.quantity) missingItems.push(requirement.id)
    })
    if (missingItems.length > 0) {
      return false
    }
    return true
  }

  keyPressed(e) {
    if (e.key === 'w' || e.key === 'ArrowUp') {
      const selected = this.getGrid('CraftingSkillsList').up()
      this.setImageAndDescription(selected)
    } else if (e.key === 's' || e.key === 'ArrowDown') {
      const selected = this.getGrid('CraftingSkillsList').down()
      this.setImageAndDescription(selected)
    } else if (e.key === 'Enter') {
      console.log('Crafting keyPressed: Enter')
      const selected = this.getGrid('CraftingSkillsList').selectItem()
      const hero = state.get('hero')
      hero.craftItem(selected.id)
      state.set({ key: 'request.screen.draw', value: true })
    } else {
      console.log('Crafting keyPressed:', e.key)
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
    state.set({ key: 'request.screen.draw', value: true })
  }

  wrapText(text, width) {
    const words = text.split(' ')
    const lines = []
    let line = ''
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      if (word === '\n') {
        lines.push(line)
        line = ''
      } else if (line.length + word.length + 1 < width) {
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
