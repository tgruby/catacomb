import Animation from "../core/Animation.js"

export default class FadeOut extends Animation {
  constructor(props = {}) {
    const { width, height } = props

    const frames = []
    for (let i = 0; i < height + 4; i++)
      frames.unshift(buildFrame({ width, height, size: i + 1 }))

    props.border = false
    props.frames = frames
    props.backfill = true

    super(props)
  }
}

function buildFrame(props) {
  const { width, height, size } = props
  const centerX = Math.floor(width / 2)
  const centerY = Math.floor(height / 2)
  const frame = []
  // rest of the rows should be based on the previous frame, sliding the confetti down
  for (let i = 1; i < height; i++) {
    let nextRow = ""
    for (let j = 0; j < width; j++) {
      const distance = Math.sqrt(
        Math.pow(centerX - j, 2) + Math.pow(centerY - i, 2)
      )
      if (distance < size) {
        nextRow += "@"
      } else {
        nextRow += " "
      }
    }
    frame.push(nextRow.split(""))
  }
  return frame
}
