function highlight(text) {
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
    output += String.fromCharCode(highSurrogate) + String.fromCharCode(lowSurrogate)
  }
  return output
}

export default highlight
