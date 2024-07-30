import Screen from '../core/Screen.js'
import memory from '../core/Memory.js'
import SelectionArray from '../core/SelectionArray.js'

export default class GameSetup extends Screen {
  firstNames = [
    'Zoey', 'Nikki', 'Abby', 'Lilly', 'Mary Rose', 'Ella', 'Eloise', 'Skye', 'Luna',
    'Maeve', 'Aria', 'Gemma', 'Ivy', 'Hazel', 'Scarlett', 'Aurora', 'Violet', 'Olive',
    'Willow', 'Layla', 'Sophia', 'Emma', 'Isabella', 'Ava', 'Mia', 'Emily', 'Amelia',
    'Charlotte', 'Harper', 'Grace', 'Mara', 'Chloe', 'Zara', 'Molly', 'Jade', 'Lila',
    'Ruby', 'Alice', 'Lola', 'Penny', 'Rosie', 'Eliza', 'Tessa', 'Nora', 'Isla', 'Lucy',
    'Sadie', 'Giselle', 'Fiona', 'Stella', 'Bella', 'Daisy', 'Eve'
]


  lastNames = [
    'Fireheart', 'Swordspear', 'Thunderforge', 'Stormbringer', 'Shadowbane',
    'Windstrider', 'Moonshadow', 'Starfall', 'Sunblade', 'Nightbloom',
    'Frostveil', 'Flamefury', 'Ravenwing', 'Dragonheart', 'Wolfswift',
    'Ironhand', 'Stonefist', 'Lightbringer', 'Darkwater', 'Silvervein',
    'Goldleaf', 'Skywalker', 'Earthbound', 'Seastorm', 'Rivermist',
    'Forestglade', 'Mountainash', 'Cloudseeker', 'Oceanwhisper', 'Lakefrost',
    'Dawnfire', 'Duskbane', 'Lightshadow', 'Darkshine', 'Crystalgaze',
    'Gemstone', 'Steelclaw', 'Bronzebeard', 'Coppervein', 'Silkwind',
    'Velvetnight', 'Graniteheart', 'Emeraldsky', 'Rubyeye', 'Sapphiremind',
    'Opalmoon', 'Topazsun', 'Amethyststar', 'Jadeearth', 'Pearlwater',
    'Obsidianice', 'Quartzsand', 'Diamondspace', 'Onyxdream', 'Turquoisepain',
    'Coraljoy', 'Ivorysorrow', 'Ambersmile', 'Garnetfrown', 'Jasperscream',
    'Lapislazulilaugh', 'Malachitesigh', 'Moonstoneyawn', 'Sunstonestare', 'Bloodstoneblink',
    'Fireopalwhisper', 'Wateragateshout', 'Airmarblewhistle', 'Earthquartzhum', 'Etherpearlgroan',
    'Flamezirconmurmur', 'Frosttopazwhimper', 'Thunderamethystry', 'Stormsapphireplead', 'Shadowjaderage'
  ]

  constructor () {
    super({ id: 'GameSetup', width: 60, height: 50, border: false })

    const names = []
    for (let i = 0; i < 8; i++) names.push(this.generateName())
    this.add({ x: 'center', y: 4, grid: new SelectionArray({ id: 'SelectName', width: 60, height: 19, border: true, items: names }) })
    this.add({ x: 'center', y: 2, string: 'Select your protagonist to begin her journey:' })
    this.add({ x: 'center', y: 24, string: 'Press [Space Bar] to find more options' })
  }

  keyPressed (e) {
    if (e.key === 'w' || e.key === 'ArrowUp') {
      this.getGrid('SelectName').up()
    } else if (e.key === 's' || e.key === 'ArrowDown') {
      this.getGrid('SelectName').down()
    } else if (e.key === ' ') {
      const selectName = this.getGrid('SelectName')
      const names = []
      for (let i = 0; i < 8; i++) names.push(this.generateName())
      selectName.updateItems(names)
    } else if (e.key === 'Enter') {
      const selection = this.getGrid('SelectName').selectItem()
      console.log('Selected:', selection)
      memory.set({ key: 'hero.first.name', value: selection.first })
      memory.set({ key: 'hero.last.name', value: selection.last })
      memory.set({ key: 'game.state', value: 'wake-up' })
    } else {
      console.log('GameSetup keyPressed:', e.key)
    }
  }

  generateName () {
    const firstName = this.firstNames[Math.floor(Math.random() * this.firstNames.length)]
    const lastName = this.lastNames[Math.floor(Math.random() * this.lastNames.length)]
    const fullName = `${firstName} ${lastName}`
    return { id: fullName, value: fullName, first: firstName, last: lastName }
  }
}
