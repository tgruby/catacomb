import Animation from '../core/Animation.js'

export default class Confetti extends Animation {
  constructor (props = {}) {
    const { width, height } = props

    let confettiProbability = 0.16 // Initial dense confetti
    const confettiDecreaseRate = 0.004 // Rate at which confetti density decreases
    const frames = []
    let prevFrame = buildFrame({ width, height, confettiProbability })
    frames.push(prevFrame)
    for (let i = 1; i < height * 2.5; i++) {
      prevFrame = buildFrame({ prevFrame, width, height, confettiProbability })
      frames.push(prevFrame)
      confettiProbability -= confettiDecreaseRate
      if (confettiProbability < 0) confettiProbability = 0
    }

    props.border = false
    props.backfill = true
    props.frames = frames

    super(props)
  }
}

const confettiChars = ['/', '≡', '│', '\\', '-']
function buildFrame (props) {
  const { prevFrame, width, height, confettiProbability } = props
  const frame = []
  // first row of the frame is new each time
  frame.push(Array(width).fill().map(() => {
    return Math.random() < confettiProbability ? confettiChars[Math.floor(Math.random() * confettiChars.length)] : '@'
  }))
  // rest of the rows should be based on the previous frame, sliding the confetti down
  for (let i = 1; i < height; i++) {
    let nextRow = ''
    for (let j = 0; j < width; j++) {
      if (prevFrame) {
        const prevCell = prevFrame[i - 1][j]
        if (confettiChars.includes(prevCell)) {
          const dripIndex = confettiChars.indexOf(prevCell)
          nextRow += confettiChars[(dripIndex + 1) % confettiChars.length]
        } else {
          nextRow += prevCell
        }
      } else {
        nextRow += '@'
      }
    }
    frame.push(nextRow.split(''))
  }
  return frame
}
