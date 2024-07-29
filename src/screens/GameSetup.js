import Screen from '../core/Screen.js'
import memory from '../core/Memory.js'
import SelectionArray from '../core/SelectionArray.js'

export default class GameSetup extends Screen {
  firstNames = [
    'Zoey', 'Bob', 'Nikki', 'Abby', 'Lilly', 'Mary Rose', 'Jasper', 'Finn', 'Ella',
    'Eloise', 'Skye', 'Luna', 'Orion', 'Maeve', 'Kai', 'Aria', 'Theo', 'Ella',
    'Gemma', 'Lucas', 'Ivy', 'Caleb', 'Hazel', 'Ethan', 'Scarlett', 'Milo', 'Ella',
    'Aurora', 'Leo', 'Violet', 'Julian', 'Olive', 'Nathan', 'Willow', 'Oscar', 'Ella',
    'Layla', 'Jude', 'Sophia', 'Felix', 'Emma', 'Asher', 'Isabella', 'Rowan', 'Ella',
    'Ava', 'Silas', 'Mia', 'Wyatt', 'Emily', 'Sawyer', 'Amelia', 'Grayson', 'Ella',
    'Charlotte', 'Declan', 'Harper', 'Ezra', 'Ella', 'Liam', 'Grace', 'Mason', 'Ella', 'Mara',
    'Chloe', 'Logan', 'Zara', 'Alexander', 'Molly', 'Henry', 'Jade', 'Sebastian', 'Ella', 'Mara',
    'Lila', 'Oliver', 'Ruby', 'Samuel', 'Alice', 'Benjamin', 'Lola', 'Noah', 'Ella', 'Mara',
    'Penny', 'Jacob', 'Rosie', 'Michael', 'Eliza', 'James', 'Tessa', 'Elijah', 'Ella', 'Mara',
    'Nora', 'Daniel', 'Isla', 'Joseph', 'Lucy', 'William', 'Sadie', 'Matthew', 'Ella', 'Mara',
    'Giselle', 'Jack', 'Fiona', 'David', 'Stella', 'Luke', 'Bella', 'Isaac', 'Ella', 'Mara',
    'Daisy', 'Ryan', 'Eve', 'Mara'
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
    this.add({ x: 'center', y: 2, string: 'Select your protagonist to begin their journey:' })
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
