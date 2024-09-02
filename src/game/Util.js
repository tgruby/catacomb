/**
 * Generates a hash string from the x and y properties of an object.
 *
 * @param {Object} props - The properties object.
 * @param {number|string} props.x - The x-coordinate value.
 * @param {number|string} props.y - The y-coordinate value.
 * @returns {string} A string in the format 'y<y-value>,x<x-value>'.
 */
export function xyHash(props) {
  const { x, y } = props
  return 'y' + y + ',x' + x
}

/**
 * Calculates the 'real' x offset value for a logical x-coordinate.
 *
 * @param {number} x - The x-coordinate value.
 * @returns {number} The x offset, calculated as (x * 4 + 2).
 */
export function xOffset(x) {
  return x * 4 + 2
}

/**
 * Calculates the 'real' y offset value for a logical y-coordinate.
 *
 * @param {number} y - The y-coordinate value.
 * @returns {number} The y offset, calculated as (y * 2 + 1).
 */
export function yOffset(y) {
  return y * 2 + 1
}
