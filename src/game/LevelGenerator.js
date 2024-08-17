import memory from '../core/Memory.js'
import objectLoader from './GameObjectLoader.js'
import levelLoader from './LevelLoader.js'

export default class LevelGenerator {
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
    this.level = -1
    this.objective = undefined
    this.x = 0
    this.y = 0
    this.direction = 'south'
    this.map = undefined
    this.gameObjects = {}
    this.startNewLevel()

    memory.subscribe({
      key: 'catacombs.next.level',
      callback: this.startNewLevel.bind(this)
    })
  }

  async startNewLevel() {
    await levelLoader.initialize()
    await objectLoader.initialize()
    this.level++
    const levelGuide = levelLoader.get(this.level)
    this.map = this.createMaze(levelGuide.mapWidth, levelGuide.mapHeight)
    this.gameObjects = {}
    this.addExit(levelGuide.mapWidth, levelGuide.mapHeight)
    this.addTombs(levelGuide.mapWidth, levelGuide.mapHeight)
    for (let i = 0; i < levelGuide.objects.length; i++) {
      const gameObject = levelGuide.objects[i]
      this.addItem(gameObject.id, gameObject.count, levelGuide.mapWidth, levelGuide.mapHeight)
    }

    const position = {
      x: this.x,
      y: this.y,
      direction: this.direction
    }

    memory.set({ key: 'catacombs.map', value: this.map })
    memory.set({ key: 'catacombs.objects', value: this.gameObjects })
    memory.set({
      key: 'catacombs.level.objective',
      value: levelGuide.objective
    })
    memory.set({ key: 'catacombs.level', value: this.level })
    memory.set({ key: 'hero.position', value: position })
    const hero = memory.get('hero')
    hero.addJournalEntry(levelGuide.journalEntry)
  }

  addExit(mazeWidth, mazeHeight) {
    this.y = this.yOffset(0)
    this.x = this.xOffset(0)
    this.direction = 'south'
    const upperLeft = locationHash(this.y, this.x)
    const lowerRight = locationHash(this.yOffset(mazeHeight - 1), this.xOffset(mazeWidth - 1))
    if (this.level % 2 === 0) {
      const up =
        this.level === 0 ? objectLoader.getInstanceOf('hole-in-ceiling') : objectLoader.getInstanceOf('ladder-up')
      this.gameObjects[upperLeft] = up
      this.gameObjects[lowerRight] = objectLoader.getInstanceOf('ladder-down')
    } else {
      this.y = this.yOffset(mazeHeight - 1)
      this.x = this.xOffset(mazeWidth - 1)
      this.direction = 'north'
      this.gameObjects[upperLeft] = objectLoader.getInstanceOf('ladder-down')
      this.gameObjects[lowerRight] = objectLoader.getInstanceOf('ladder-up')
    }
  }

  // Tombs are marked with a 'o'.
  // Doors are placed at all dead ends with openings to the north and south.
  addTombs(mazeWidth, mazeHeight) {
    for (let y = 0; y < mazeHeight; y++) {
      const yPos = this.yOffset(y)
      for (let x = 0; x < mazeWidth; x++) {
        const xPos = this.xOffset(x)
        this.replaceSpacesWithDoors(xPos, yPos)
      }
    }
  }

  // identify dead ends to the north or south.
  // If there is a dead end to the north or south, then specify the x and y position of the opening.
  replaceSpacesWithDoors(xPos, yPos) {
    if (this.map[yPos][xPos] != ' ') return
    if (this.gameObjects[locationHash(yPos, xPos)]) return
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
        this.gameObjects[locationHash(yPos + 1, xPos)] = objectLoader.getInstanceOf('door')
        this.gameObjects[locationHash(yPos, xPos)] = objectLoader.getInstanceOf('sarcophagus')
      } else if (!wallDirections.includes('north') && wallDirections.includes('south')) {
        this.map[yPos - 1] = this.replaceAt(this.map[yPos - 1], xPos - 1, '-')
        this.map[yPos - 1] = this.replaceAt(this.map[yPos - 1], xPos, 'o')
        this.map[yPos - 1] = this.replaceAt(this.map[yPos - 1], xPos + 1, '-')
        this.gameObjects[locationHash(yPos - 1, xPos)] = objectLoader.getInstanceOf('door')
        this.gameObjects[locationHash(yPos, xPos)] = objectLoader.getInstanceOf('sarcophagus')
      }
    }
  }

  addItem(itemName, count, mazeWidth, mazeHeight, offByOne = false) {
    for (let i = 0; i < count; i++) {
      const posX = Math.floor(Math.random() * mazeWidth)
      const posY = Math.floor(Math.random() * mazeHeight)
      const x = this.xOffset(posX)
      let y = this.yOffset(posY)
      if (offByOne) y--
      if (this.map[y][x] === ' ' && !this.gameObjects[locationHash(y, x)]) {
        this.gameObjects[locationHash(y, x)] = objectLoader.getInstanceOf(itemName)
      } else {
        i-- // try again
      }
    }
  }

  xOffset(x) {
    return x * 4 + 2
  }

  yOffset(y) {
    return y * 2 + 1
  }

  replaceAt(string, index, replacement) {
    return string.substr(0, index) + replacement + string.substr(index + replacement.length)
  }

  createMaze(width, height) {
    // Establish variables and starting grid
    const totalCells = height * width
    const unvisited = [] // cells that are unvisited.
    const maze = []
    for (let y = 0; y < height; y++) {
      unvisited[y] = []
      maze[y * 2] = ''
      maze[y * 2 + 1] = ''
      for (let x = 0; x < width; x++) {
        maze[y * 2] += '+---'
        maze[y * 2 + 1] += '|   '
        unvisited[y][x] = true
      }
      maze[y * 2] += '+'
      maze[y * 2 + 1] += '|'
    }
    maze[height * 2] = ''
    for (let x = 0; x < width; x++) {
      maze[height * 2] += '+---'
    }
    maze[height * 2] += '+'

    // Set a random position to start from
    let current = [Math.floor(Math.random() * height), Math.floor(Math.random() * width)]
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
          possibleNeighbors[i][0] < height &&
          possibleNeighbors[i][1] > -1 &&
          possibleNeighbors[i][1] < width &&
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

export function locationHash(y, x) {
  return 'y' + y + ',x' + x
}
