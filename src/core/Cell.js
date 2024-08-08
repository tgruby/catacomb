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

  _highlight(text) {
    if (typeof text !== 'string') {
      throw new Error('Invalid text provided for highlighting')
    }
    let output = ''
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i)
      // add 0x100000 to the code point of the char to highlight it
      const hex = char.codePointAt(0) + 0x100000
      // Calculate the surrogate pair for code points above U+FFFF
      const highSurrogate = Math.floor((hex - 0x10000) / 0x400) + 0xd800
      const lowSurrogate = ((hex - 0x10000) % 0x400) + 0xdc00
      output +=
        String.fromCharCode(highSurrogate) + String.fromCharCode(lowSurrogate)
    }
    return output
  }

  draw() {
    if (typeof this.value !== 'string') {
      throw new Error('Invalid cell value')
    }
    let output = this.value
    if (this.value === '@') return null
    if (this.highlight) output = this._highlight(output)
    if (this.color)
      output = `<span style="color: ${this.color}">${output}</span>`
    return output
  }
}
