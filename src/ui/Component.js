import Cell from './Cell.js'
// import standard from "figlet/importable-fonts/Standard.js";
// figlet.parseFont("Standard", standard);

// eslint-disable-next-line no-undef
figlet.defaults({ fontPath: 'figlet/fonts' })

const fonts = ['Bloody', 'Crawford2', 'Elite', 'Graceful', 'Pagga', 'Slant', 'Small', 'Soft', 'Standard', 'Star Wars']
// eslint-disable-next-line no-undef
figlet.preloadFonts(fonts, function (err) {
  if (err) {
    console.log('Figlet load fonts error:', err)
  } else {
    console.log(`Figlet fonts loaded: ${fonts.length}`)
  }
})

/*
  Basic 2d array that renders our ascii experience.
  You can add other Components, Blocks, Strings, or Cells to the Component and
  it will render when draw() is called.
*/
export default class Component {
  constructor(props) {
    if (!props || typeof props !== 'object') {
      throw new Error('Invalid props provided, not of type object:', props)
    }
    const { id, width, height, fill, border, zIndex } = props
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers')
    }
    // random unique id
    this.id = id || Math.random().toString(36).substring(7)
    this.width = width || 3
    this.height = height || 3
    this.fill = fill || ' '
    this.border = border || false
    this.zIndex = zIndex || 0
    this.edge = 0 // Border edge
    this.canvas = [] // 2D array of Cells
    this.children = [] // Child components
    this.parent = null // the parent component of this component
    this.updated = true // If the component has been modified

    this._init()
    if (this.border) this._border()
  }

  /* Adds a component, block, string, or cell to the component */
  add(props) {
    if (!props || typeof props !== 'object') {
      throw new Error('Invalid props provided')
    }
    if (props.grid) {
      this._addComponent(props)
    } else if (props.fig) {
      this._addFig(props)
    } else if (props.block) {
      this._addBlock(props)
    } else if (props.string) {
      this._addString(props)
    } else if (props.cell) {
      this._addCell(props)
    } else {
      throw new Error('add requires a component, fig, block, string, or cell')
    }
    this.updated = true
  }

  /*
    Removes a child component
  */
  removeComponent(id) {
    if (typeof id !== 'string') {
      throw new Error('Invalid id provided')
    }
    const index = this.children.findIndex((g) => g.grid.id === id)
    if (index !== -1) {
      this.children.splice(index, 1)
      this.updated = true
    }
  }

  /*
    Gets a child component from the children
  */
  getComponent(id) {
    if (typeof id !== 'string') {
      throw new Error('Invalid id provided')
    }
    const index = this.children.findIndex((g) => g.grid.id === id)
    if (index === -1) return null
    return this.children[index].grid
  }

  /*
    Clears the grid, ignore the border
  */
  clear() {
    this.children = []
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        this._addCell({ x, y, cell: new Cell({ value: this.fill }) })
      }
    }
    this.updated = true
  }

  _init() {
    const defaultCell = new Cell({ value: this.fill })
    for (let y = 0; y < this.height; y++) {
      const row = []
      for (let x = 0; x < this.width; x++) row.push(defaultCell)
      this.canvas.push(row)
    }
  }

  _border() {
    this._addCell({ x: 0, y: 0, cell: new Cell({ value: '╭' }) })
    this._addCell({ x: this.width - 1, y: 0, cell: new Cell({ value: '╮' }) })
    this._addCell({ x: 0, y: this.height - 1, cell: new Cell({ value: '╰' }) })
    this._addCell({
      x: this.width - 1,
      y: this.height - 1,
      cell: new Cell({ value: '╯' })
    })
    for (let x = 1; x < this.width - 1; x++) {
      this._addCell({ x, y: 0, cell: new Cell({ value: '─' }) })
      this._addCell({ x, y: this.height - 1, cell: new Cell({ value: '─' }) })
    }
    for (let y = 1; y < this.height - 1; y++) {
      this._addCell({ x: 0, y, cell: new Cell({ value: '│' }) })
      this._addCell({ x: this.width - 1, y, cell: new Cell({ value: '│' }) })
    }
    this.edge = 1
  }

  /*
    Adds a Cell to the Grid.
    If the x and y are out of bounds, it will be ignored.
  */
  _addCell(props) {
    const { x, y, cell, force } = props
    if (typeof x !== 'number' || typeof y !== 'number' || !(cell instanceof Cell)) {
      throw new Error('Invalid x, y, or cell provided')
    }
    if (force) {
      // force the cell to be added even if its in the border region
      if (x < 0 || x > this.width - 1 || y < 0 || y > this.height - 1) return
    } else {
      if (x < this.edge || x > this.width - 1 - this.edge || y < this.edge || y > this.height - 1 - this.edge) return
    }
    this.canvas[y][x] = cell
  }

  /*
  Adds a simple string to the Grid. If the x and y are out of bounds, it will be ignored.
  The string will be converted to GridCells using the default color and background.
*/
  _addString(props) {
    let { x, y, string, highlight, color, force, backfill } = props

    if (backfill) {
      for (let i = 0; i < this.width; i++) {
        this._addCell({ x: i, y, cell: new Cell({ value: this.fill }) })
      }
    }

    if (x === 'left') {
      x = 2
    } else if (x === 'center') {
      x = Math.floor((this.width - string.length) / 2)
    } else if (x === 'right') {
      x = this.width - (string.length + 2)
    }

    if (y === 'top') {
      y = 2
    } else if (y === 'center') {
      y = Math.floor((this.height - 1) / 2)
    } else if (y === 'bottom') {
      y = this.height - 2
    }

    const tokens = [...string]

    for (let i = 0; i < tokens.length; i++) {
      let shouldHighlight = false

      if (typeof highlight === 'boolean') {
        shouldHighlight = highlight // Highlight entire string if highlight is true
      } else if (highlight && typeof highlight === 'object') {
        // Highlight specific area if highlight is an object with x and length
        shouldHighlight = i >= highlight.x && i < highlight.x + highlight.length
      }

      this._addCell({
        x: x + i,
        y,
        force,
        cell: new Cell({ value: tokens[i], color, highlight: shouldHighlight })
      })
    }
  }

  /*
  Adds a 2D array of chars to the Grid. If the x and y are out of bounds, it will be ignored.
  The string will be converted to GridCells using the default color and background.
*/
  _addBlock(props) {
    let { x, y, block, color, highlight, force, backfill } = props

    if (!Array.isArray(block)) {
      throw new Error('Invalid block provided:', block)
    }

    if (y === 'center') {
      y = Math.floor((this.height - block.length) / 2) - Math.floor(block.length / 2)
    } else if (y === 'bottom') {
      y = this.height - block.length - 2
    } else if (y === 'top') {
      y = 2
    }

    if (backfill) {
      for (let i = 0; i < this.height; i++) {
        this._addString({ x: 0, y: i, string: '', force, backfill })
      }
    }

    for (let i = 0; i < block.length; i++) {
      let lineHighlight = false

      if (highlight === true) {
        // If highlight is true, highlight all lines
        lineHighlight = true
      } else if (highlight && typeof highlight === 'object' && i === highlight.y) {
        // Specific line highlighting based on highlight object
        lineHighlight = highlight
      }

      // Call _addString for each row in the block
      this._addString({
        x,
        y: y + i,
        string: block[i],
        color,
        highlight: lineHighlight,
        force
      })
    }
  }

  _addFig(props) {
    let { fig } = props
    if (!fig || typeof fig !== 'object' || typeof fig.text !== 'string' || typeof fig.font !== 'string') {
      throw new Error('Invalid fig provided')
    }
    let { text, font, horizontalLayout, verticalLayout, width } = fig
    // eslint-disable-next-line no-undef
    props.block = figlet
      .textSync(text, {
        font: font || 'Crawford2',
        horizontalLayout: horizontalLayout || 'default',
        verticalLayout: verticalLayout || 'default',
        width: width || undefined,
        whitespaceBreak: true
      })
      .split('\n')
    this._addBlock(props)
  }

  _addComponent(props) {
    let { x, y, grid } = props
    if (!(grid instanceof Component)) {
      throw new Error('Invalid grid provided')
    }
    if (x === 'center') {
      x = Math.floor((this.width - grid.width) / 2)
    } else if (x === 'right') {
      x = this.width - grid.width - 1
    } else if (x === 'left') {
      x = 2
    }
    if (y === 'center') {
      y = Math.floor((this.height - grid.height) / 2)
    } else if (y === 'bottom') {
      y = this.height - grid.height - 2
    } else if (y === 'top') {
      y = 2
    }
    this.children.push({ x, y, grid })
    this.children.sort((a, b) => a.grid.zIndex - b.grid.zIndex)
    grid.parent = this
  }

  /*
    Applies children grids to the copy.
    This allows us to calculate the final ascii UI before rendering.
  */
  _flatten() {
    // If no children, skip unnecessary work
    if (this.children.length === 0) return

    // Sort children by zIndex (if they overlap, higher zIndex should appear last)
    this.children.sort((a, b) => a.grid.zIndex - b.grid.zIndex)

    for (const child of this.children) {
      child.grid._flatten() // Recursively flatten child first

      const { x: offsetX, y: offsetY, grid } = child
      const childCanvas = grid.canvas

      // Faster loop without unnecessary conditionals
      for (let y = 0; y < grid.height; y++) {
        const targetY = y + offsetY
        if (targetY < 0 || targetY >= this.height) continue

        for (let x = 0; x < grid.width; x++) {
          const targetX = x + offsetX
          if (targetX < 0 || targetX >= this.width) continue

          const cell = childCanvas[y][x]
          if (cell.draw() !== null) {
            this.canvas[targetY][targetX] = cell // Directly replace parent cell
          }
        }
      }
    }
  }

  /*
    Create Output HTML that can be rendered within a <p/> tag
  */
  draw() {
    this._flatten() // Consolidate children first

    return this.canvas.map((row) => row.map((cell) => cell.draw() || ' ').join('')).join('\n')
  }
}
