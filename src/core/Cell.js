import highlight from './Highlight.js'

export default class Cell {
  constructor(props) {
    if (!props || typeof props !== 'object') {
      throw new Error('Invalid props provided')
    }
    const { value, color, highlight } = props
    if (typeof value !== 'string') {
      throw new Error('Invalid value provided')
    }
    if (color && typeof color !== 'string') {
      throw new Error('Invalid color provided')
    }
    if (highlight && typeof highlight !== 'boolean') {
      throw new Error('Invalid highlight provided')
    }
    this.value = value
    this.color = color || '#2cd03a'
    this.highlight = highlight || false
  }

  draw() {
    if (typeof this.value !== 'string') {
      throw new Error('Invalid cell value')
    }
    let output = this.value
    if (this.value === '@') return null
    if (this.highlight) output = highlight(output)
    if (this.color) output = `<span style="color: ${this.color}">${output}</span>`
    return output
  }
}
