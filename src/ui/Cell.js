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
    if (this.highlight || this.color) output = this._style(output)
    return output
  }

  _style(text) {
    if (!this.color) this.color = '#2cd03a'
    const backgroundColor = this.highlight ? this.color : '#000000'
    const color = this.highlight ? '#000000' : this.color
    return `<span style="color: ${color}; background-color: ${backgroundColor};">${text}</span>`
  }
}
