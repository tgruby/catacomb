function generateRandomDotLine(cols, dotDensity) {
  let line = ''
  for (let i = 0; i < cols; i++) {
    line += Math.random() < dotDensity ? ' . ' : '   '
  }
  return line
}

function generateDotMatrix(rows, cols, dotDensity) {
  let matrix = []
  for (let i = 0; i < rows; i++) {
    matrix.push(generateRandomDotLine(cols / 3, dotDensity)) // Divide by 3 to match your string format
  }
  return matrix
}

// Set up your parameters
const rows = 25
const cols = 30 // Matches the length of the strings in your original example
const dotDensity = 0.5 // Adjust this to change the probability of a dot appearing

// Generate the 2D array with randomized dots
const dotMatrix = generateDotMatrix(rows, cols, dotDensity)

// Print the generated matrix
console.log('[')
dotMatrix.forEach((line) => console.log('    "' + line + '",'))
console.log(']')
