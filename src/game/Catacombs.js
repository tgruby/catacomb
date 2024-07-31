import loader from "../core/Mods.js"
import memory from "../core/Memory.js"
import CatacombLevels from "./CatacombLevels.js"

export default class Catacombs {
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
    this.level = 0
    this.objective = undefined
    this.x = 0
    this.y = 0
    this.direction = "south"
    this.height = 3
    this.width = 3
    this.map = undefined
    this.entities = undefined
    this.startNewLevel()

    memory.subscribe({
      key: "catacombs.next.level",
      callback: this.startNewLevel.bind(this)
    })
  }

  startNewLevel() {
    this.level++
    const levelGuide = CatacombLevels[this.level]
    this.objective = levelGuide.objective
    this.height = levelGuide.height
    this.width = levelGuide.width
    this.map = this.createMaze()
    this.entities = {}
    this.addExit()
    this.addTombs()

    for (let i = 0; i < levelGuide.entities.length; i++) {
      const entity = levelGuide.entities[i]
      this.addEntity(entity.id, entity.count)
    }

    const position = {
      x: this.x,
      y: this.y,
      direction: this.direction
    }

    memory.set({ key: "catacombs.map", value: this.map })
    memory.set({ key: "catacombs.entities", value: this.entities })
    memory.set({ key: "catacombs.level", value: this.level })
    memory.set({ key: "catacombs.level.objective", value: this.objective })
    memory.set({ key: "hero.position", value: position })
    const hero = memory.get("hero")
    hero.addJournalEntry(levelGuide.journalEntry)
  }

  addExit() {
    this.y = this.yOffset(0)
    this.x = this.xOffset(0)
    this.direction = "south"
    const upperLeft = locationHash(this.y, this.x)
    const lowerRight = locationHash(
      this.yOffset(this.height - 1),
      this.xOffset(this.width - 1)
    )
    if (this.level % 2 === 1) {
      const up =
        this.level === 1
          ? loader.get("feature.entrance")
          : loader.get("feature.up")
      this.entities[upperLeft] = up
      this.entities[lowerRight] = loader.get("feature.down")
    } else {
      this.y = this.yOffset(this.height - 1)
      this.x = this.xOffset(this.width - 1)
      this.direction = "north"
      this.entities[upperLeft] = loader.get("feature.down")
      this.entities[lowerRight] = loader.get("feature.up")
    }
  }

  // Tombs are marked with a 'o'.
  // Doors are placed at all dead ends with openings to the north and south.
  addTombs() {
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
    if (this.map[yPos][xPos] != " ") return
    if (this.entities[locationHash(yPos, xPos)]) return
    const wallDirections = []
    if (this.map[yPos][xPos - 2] != " " && this.map[yPos][xPos - 2] != "o")
      wallDirections.push("west")
    if (this.map[yPos][xPos + 2] != " " && this.map[yPos][xPos + 2] != "o")
      wallDirections.push("east")
    if (this.map[yPos - 1][xPos] != " " && this.map[yPos - 1][xPos] != "o")
      wallDirections.push("north")
    if (this.map[yPos + 1][xPos] != " " && this.map[yPos + 1][xPos] != "o")
      wallDirections.push("south")
    if (wallDirections.length == 3) {
      if (
        wallDirections.includes("north") &&
        !wallDirections.includes("south")
      ) {
        this.map[yPos + 1] = this.replaceAt(this.map[yPos + 1], xPos - 1, "-")
        this.map[yPos + 1] = this.replaceAt(this.map[yPos + 1], xPos, "o")
        this.map[yPos + 1] = this.replaceAt(this.map[yPos + 1], xPos + 1, "-")
        this.entities[locationHash(yPos + 1, xPos)] = loader.get("feature.door")
        this.entities[locationHash(yPos, xPos)] = loader.get(
          "container.sarcophagus"
        )
      } else if (
        !wallDirections.includes("north") &&
        wallDirections.includes("south")
      ) {
        this.map[yPos - 1] = this.replaceAt(this.map[yPos - 1], xPos - 1, "-")
        this.map[yPos - 1] = this.replaceAt(this.map[yPos - 1], xPos, "o")
        this.map[yPos - 1] = this.replaceAt(this.map[yPos - 1], xPos + 1, "-")
        this.entities[locationHash(yPos - 1, xPos)] = loader.get("feature.door")
        this.entities[locationHash(yPos, xPos)] = loader.get(
          "container.sarcophagus"
        )
      }
    }
  }

  addEntity(itemName, count, offByOne = false) {
    for (let i = 0; i < count; i++) {
      const posX = Math.floor(Math.random() * this.width)
      const posY = Math.floor(Math.random() * this.height)
      const x = this.xOffset(posX)
      let y = this.yOffset(posY)
      if (offByOne) y--
      if (this.map[y][x] === " " && !this.entities[locationHash(y, x)]) {
        this.entities[locationHash(y, x)] = loader.get(itemName)
      } else {
        i--
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
    return (
      string.substr(0, index) +
      replacement +
      string.substr(index + replacement.length)
    )
  }

  createMaze() {
    const height = this.height
    const width = this.width
    // Establish variables and starting grid
    const totalCells = height * width
    const unvisited = [] // cells that are unvisited.
    const maze = []
    for (let y = 0; y < height; y++) {
      unvisited[y] = []
      maze[y * 2] = ""
      maze[y * 2 + 1] = ""
      for (let x = 0; x < width; x++) {
        maze[y * 2] += "+---"
        maze[y * 2 + 1] += "|   "
        unvisited[y][x] = true
      }
      maze[y * 2] += "+"
      maze[y * 2 + 1] += "|"
    }
    maze[height * 2] = ""
    for (let x = 0; x < width; x++) {
      maze[height * 2] += "+---"
    }
    maze[height * 2] += "+"

    // Set a random position to start from
    let current = [
      Math.floor(Math.random() * height),
      Math.floor(Math.random() * width)
    ]
    const path = [current]
    unvisited[current[0]][current[1]] = false
    let visited = 1

    // // Loop through all available cell positions (given walls take up half the cells, we divide the total by two)
    while (visited < totalCells) {
      // Determine neighboring cells (0,1) and pathways to them (2,3)
      const south = [current[0] - 1, current[1], "north"]
      const north = [current[0] + 1, current[1], "south"]
      const east = [current[0], current[1] - 1, "west"]
      const west = [current[0], current[1] + 1, "east"]
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
        if (next[2] == "south") {
          yBorderToRemove = this.yOffset(next[0]) - 1
          xBorderToRemove = this.xOffset(next[1])
          maze[yBorderToRemove] = this.replaceAt(
            maze[yBorderToRemove],
            xBorderToRemove - 1,
            " "
          )
          maze[yBorderToRemove] = this.replaceAt(
            maze[yBorderToRemove],
            xBorderToRemove + 1,
            " "
          )
        } else if (next[2] == "north") {
          yBorderToRemove = this.yOffset(next[0]) + 1
          xBorderToRemove = this.xOffset(next[1])
          maze[yBorderToRemove] = this.replaceAt(
            maze[yBorderToRemove],
            xBorderToRemove - 1,
            " "
          )
          maze[yBorderToRemove] = this.replaceAt(
            maze[yBorderToRemove],
            xBorderToRemove + 1,
            " "
          )
        } else if (next[2] == "east") {
          yBorderToRemove = this.yOffset(next[0])
          xBorderToRemove = this.xOffset(next[1]) - 2
        } else if (next[2] == "west") {
          yBorderToRemove = this.yOffset(next[0])
          xBorderToRemove = this.xOffset(next[1]) + 2
        }

        maze[yBorderToRemove] = this.replaceAt(
          maze[yBorderToRemove],
          xBorderToRemove,
          " "
        )

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
  return "y" + y + ",x" + x
}
