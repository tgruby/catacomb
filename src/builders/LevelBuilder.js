import fs from 'fs/promises'
import { xyHash } from '../game/Util.js'

class LevelGenerator {
  // Map is a 2D array of chars.
  // example 10x10 grid = [
  //      0123456789012345678
  //    0'+-0-+---+---+---+---+',
  //    1'0 1 2 3 4 5 6 7 8 9 |',
  //    2'+-2-+---+---+---+---+',
  //    3'| 3 |   |           |',
  //    4'+-4-+   +   +   +   +',
  //    5'| 5 |       |   |   |',
  //    6'+-6-+   +---+   +   +',
  //    7'| 7 |   |       |   |',
  //    8'+-8-+   +   +---+   +',
  //    9'| 9 |   |           |',
  //     '+---+---+---+---+---+',
  //     ]
  // is actually a 11x19 2d array
  // conversion: y = y, x = x*2
  // only place items and creatures on odd values of y and x

  constructor() {
    this.fileName = 'level-999.json'
    this.name = 'New Level'
    this.objective = 'Find the exit'
    this.width = 10
    this.height = 10
    this.map = []
    this.objects = {}
  }

  async build() {
    // Define the path to the JSON configuration file
    const file = './LevelBuilder.json'
    console.log(`--- building level ---`)

    try {
      // Use fs.promises to read the JSON file asynchronously
      const data = await fs.readFile(file, 'utf-8')
      const config = JSON.parse(data)

      if (config.name) this.name = config.name
      if (config.objective) this.objective = config.objective
      if (config.mapWidth) this.width = config.mapWidth
      if (config.mapHeight) this.height = config.mapHeight
      if (config.fileName) this.fileName = config.fileName
      if (!config.objects) config.objects = []

      console.log(` - successfully loaded ${file}`)

      this.map = this.createMaze()
      console.log(' - created base map')

      // Add the exit points
      this.addEntranceAndExit()
      console.log(' - added entrance and exit')

      // Add tombs
      this.addTombRooms()
      console.log(' - added tomb rooms')

      // Add game objects randomly to the map
      for (let i = 0; i < config.objects.length; i++) {
        const gameObject = config.objects[i]
        this.addObjects(gameObject.type, gameObject.text, gameObject.count)
      }
      console.log(' - added game objects')
      console.log(this.map)

      // Save the final level configuration to a JSON file
      await this.saveToJson()
      console.log('--- level build complete ---')
    } catch (error) {
      console.error(`Error building level: ${error.message}`)
      console.error(error)
    }
  }

  async saveToJson() {
    const jsonOutput = {
      name: this.name,
      objective: this.objective,
      map: this.map,
      objects: Object.values(this.objects)
    }

    try {
      await fs.writeFile(this.fileName, JSON.stringify(jsonOutput, null, 2), 'utf-8')
      console.log(` - successfully wrote level data to ${this.fileName}`)
    } catch (error) {
      console.error(`Error writing JSON to file: ${error.message}`)
    }
  }

  addEntranceAndExit() {
    let upperLeftObject = 'ladder-up'
    let lowerRightObject = 'ladder-down'
    if (this.level % 2 === 0) {
      if (this.level === 0) upperLeftObject = 'hole-in-ceiling'
    } else {
      upperLeftObject = 'ladder-down'
      lowerRightObject = 'ladder-up'
    }

    const upperLeftxy = xyHash({ x: this.xOffset(0), y: this.yOffset(0) })
    const upperLeft = {
      type: upperLeftObject,
      x: this.xOffset(0),
      y: this.yOffset(0)
    }
    const lowerRightxy = xyHash({ x: this.xOffset(this.width - 1), y: this.yOffset(this.height - 1) })
    const lowerRight = {
      type: lowerRightObject,
      x: this.xOffset(this.width - 1),
      y: this.yOffset(this.height - 1)
    }
    this.objects[upperLeftxy] = upperLeft
    this.objects[lowerRightxy] = lowerRight
  }

  xOffset(x) {
    return x * 4 + 2
  }

  yOffset(y) {
    return y * 2 + 1
  }

  // Tombs are marked with a 'o'.
  // Doors are placed at all dead ends with openings to the north and south.
  addTombRooms() {
    for (let y = 0; y < this.height; y++) {
      const yPos = this.yOffset(y)
      for (let x = 0; x < this.width; x++) {
        const xPos = this.xOffset(x)
        this.replaceSpacesWithDoors(xPos, yPos)
      }
    }
  }

  // identify dead ends to the north or south.
  // If there is a dead end to the north or south, then specify the x and y position of the opening.
  replaceSpacesWithDoors(xPos, yPos) {
    if (this.map[yPos][xPos] != ' ') return
    if (this.objects[xyHash({ y: yPos, x: xPos })]) return
    const wallDirections = []
    if (this.map[yPos][xPos - 2] != ' ' && this.map[yPos][xPos - 2] != 'o') wallDirections.push('west')
    if (this.map[yPos][xPos + 2] != ' ' && this.map[yPos][xPos + 2] != 'o') wallDirections.push('east')
    if (this.map[yPos - 1][xPos] != ' ' && this.map[yPos - 1][xPos] != 'o') wallDirections.push('north')
    if (this.map[yPos + 1][xPos] != ' ' && this.map[yPos + 1][xPos] != 'o') wallDirections.push('south')
    if (wallDirections.length == 3) {
      if (wallDirections.includes('north') && !wallDirections.includes('south')) {
        this.map[yPos + 1] = this.replaceAt(this.map[yPos + 1], xPos - 1, '-')
        this.map[yPos + 1] = this.replaceAt(this.map[yPos + 1], xPos, 'o')
        this.map[yPos + 1] = this.replaceAt(this.map[yPos + 1], xPos + 1, '-')
        this.objects[xyHash({ y: yPos + 1, x: xPos })] = {
          type: 'door',
          x: xPos,
          y: yPos + 1
        }
        this.objects[xyHash({ y: yPos, x: xPos })] = {
          type: 'sarcophagus',
          x: xPos,
          y: yPos
        }
      } else if (!wallDirections.includes('north') && wallDirections.includes('south')) {
        this.map[yPos - 1] = this.replaceAt(this.map[yPos - 1], xPos - 1, '-')
        this.map[yPos - 1] = this.replaceAt(this.map[yPos - 1], xPos, 'o')
        this.map[yPos - 1] = this.replaceAt(this.map[yPos - 1], xPos + 1, '-')
        this.objects[xyHash({ y: yPos - 1, x: xPos })] = {
          type: 'door',
          x: xPos,
          y: yPos - 1
        }
        this.objects[xyHash({ y: yPos, x: xPos })] = {
          type: 'sarcophagus',
          x: xPos,
          y: yPos
        }
      }
    }
  }

  addObjects(itemName, text = undefined, count) {
    for (let i = 0; i < count; i++) {
      const posX = Math.floor(Math.random() * this.width)
      const posY = Math.floor(Math.random() * this.height)
      const x = this.xOffset(posX)
      let y = this.yOffset(posY)
      if (this.map[y][x] === ' ' && !this.objects[xyHash({ y, x })]) {
        this.objects[xyHash({ y, x })] = {
          type: itemName,
          x,
          y,
          text
        }
      } else {
        i-- // try again
      }
    }
  }

  replaceAt(string, index, replacement) {
    return string.substr(0, index) + replacement + string.substr(index + replacement.length)
  }

  createMaze() {
    // Establish variables and starting grid
    const totalCells = this.height * this.width
    const unvisited = [] // cells that are unvisited.
    const maze = []
    for (let y = 0; y < this.height; y++) {
      unvisited[y] = []
      maze[y * 2] = ''
      maze[y * 2 + 1] = ''
      for (let x = 0; x < this.width; x++) {
        maze[y * 2] += '+---'
        maze[y * 2 + 1] += '|   '
        unvisited[y][x] = true
      }
      maze[y * 2] += '+'
      maze[y * 2 + 1] += '|'
    }
    maze[this.height * 2] = ''
    for (let x = 0; x < this.width; x++) {
      maze[this.height * 2] += '+---'
    }
    maze[this.height * 2] += '+'

    // Set a random position to start from
    let current = [Math.floor(Math.random() * this.height), Math.floor(Math.random() * this.width)]
    const path = [current]
    unvisited[current[0]][current[1]] = false
    let visited = 1

    // // Loop through all available cell positions (given walls take up half the cells, we divide the total by two)
    while (visited < totalCells) {
      // Determine neighboring cells (0,1) and pathways to them (2,3)
      const south = [current[0] - 1, current[1], 'north']
      const north = [current[0] + 1, current[1], 'south']
      const east = [current[0], current[1] - 1, 'west']
      const west = [current[0], current[1] + 1, 'east']
      const possibleNeighbors = [south, north, east, west]
      const neighbors = []

      // Determine if each neighboring cell is in game grid, and whether it has already been checked
      for (let i = 0; i < possibleNeighbors.length; i++) {
        if (
          possibleNeighbors[i][0] > -1 &&
          possibleNeighbors[i][0] < this.height &&
          possibleNeighbors[i][1] > -1 &&
          possibleNeighbors[i][1] < this.width &&
          unvisited[possibleNeighbors[i][0]][possibleNeighbors[i][1]] == true
        ) {
          neighbors.push(possibleNeighbors[i])
        }
      }

      // If at least one active neighboring cell has been found
      if (neighbors.length > 0) {
        // Choose one of the neighbors at random
        const next = neighbors[Math.floor(Math.random() * neighbors.length)]

        // Remove the wall between the current cell and the chosen neighboring cell in the maze view.
        // split maze
        let xBorderToRemove = 0
        let yBorderToRemove = 0
        if (next[2] == 'south') {
          yBorderToRemove = this.yOffset(next[0]) - 1
          xBorderToRemove = this.xOffset(next[1])
          maze[yBorderToRemove] = this.replaceAt(maze[yBorderToRemove], xBorderToRemove - 1, ' ')
          maze[yBorderToRemove] = this.replaceAt(maze[yBorderToRemove], xBorderToRemove + 1, ' ')
        } else if (next[2] == 'north') {
          yBorderToRemove = this.yOffset(next[0]) + 1
          xBorderToRemove = this.xOffset(next[1])
          maze[yBorderToRemove] = this.replaceAt(maze[yBorderToRemove], xBorderToRemove - 1, ' ')
          maze[yBorderToRemove] = this.replaceAt(maze[yBorderToRemove], xBorderToRemove + 1, ' ')
        } else if (next[2] == 'east') {
          yBorderToRemove = this.yOffset(next[0])
          xBorderToRemove = this.xOffset(next[1]) - 2
        } else if (next[2] == 'west') {
          yBorderToRemove = this.yOffset(next[0])
          xBorderToRemove = this.xOffset(next[1]) + 2
        }

        maze[yBorderToRemove] = this.replaceAt(maze[yBorderToRemove], xBorderToRemove, ' ')

        // Mark the neighbor as visited, and set it as the current cell
        current = next
        unvisited[current[0]][current[1]] = false
        visited++
        path.push(current)
      }
      // Otherwise go back up a step and keep going
      else {
        current = path.pop()
      }
    }
    return maze
  }
}

const builder = new LevelGenerator()
builder.build()