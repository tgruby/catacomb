export default class Cell {
  constructor (props) {
    const { value, color, highlight } = props
    this.value = value
    this.color = color || '#2cd03a'
    this.highlight = highlight || false
  }

  _highlight (text) {
    let output = ''
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i)
      // add 0x100000 to the code point of the to highlight it
      const hex = char.codePointAt(0) + 0x100000
      // Convert hex back to a char
      // Calculate the surrogate pair for code points above U+FFFF
      const highSurrogate = Math.floor((hex - 0x10000) / 0x400) + 0xD800
      const lowSurrogate = ((hex - 0x10000) % 0x400) + 0xDC00
      output += String.fromCharCode(highSurrogate) + String.fromCharCode(lowSurrogate)
    }
    return output
  }

  draw () {
    let output = this.value
    if (this.value === '@') return null
    if (this.highlight) output = this._highlight(output)

    // Use a monospace font and center the content
    const style = `display: inline-block; width: 14px; height: 16px; overflow: hidden; text-align: center; vertical-align: middle; color: ${this.color};`;
    output = `<span style="${style}">${output}</span>`;
    return output
  }
}
