import Animation from "../core/Animation.js"

export default class Rain extends Animation {
  constructor(props = {}) {
    const { id, width, height, frameSpeed, parent } = props

    const frames = []
    frames.push(buildFrame({ width, height, frameIndex: 0 }))
    for (let i = 1; i < height * 2.5; i++) {
      frames.push(
        buildFrame({ prevFrame: frames[i - 1], width, height, frameIndex: i })
      )
    }

    super({
      id,
      width,
      height,
      frameSpeed,
      frames,
      backfill: true,
      parent
    })
  }
}

function buildFrame(props) {
  const { prevFrame, width, height, frameIndex } = props
  const frame = []
  if (!prevFrame) {
    // if this is the first frame, randomly decide if each cell is filled or not.
    frame.push(
      Array(width)
        .fill()
        .map(() => {
          return Math.random() > 0.9 ? "|" : "@"
        })
    )
    for (let i = 1; i < height; i++) {
      frame.push(
        Array(width)
          .fill()
          .map(() => "@")
      )
    }
  } else {
    // if this is not the first or last frame:
    let firstRow = ""
    for (let i = 0; i < width; i++) {
      const prevCell = prevFrame[0][i]
      if (prevCell === "|") {
        firstRow += "@"
      } else {
        let isFilled = Math.random() > 0.9
        if (frameIndex > height) isFilled = false
        firstRow += isFilled ? "|" : "@"
      }
    }
    frame.push(firstRow.split(""))
    for (let i = 1; i < height - 1; i++) {
      frame.push(prevFrame[i - 1])
    }
    // for the last row
    let lastRow = ""
    for (let i = 0; i < width; i++) {
      const prevCell = prevFrame[height - 2][i]
      if (prevCell === "|") {
        lastRow += ""
      } else {
        lastRow += "@"
      }
    }
    frame.push(lastRow.split(""))
  }
  return frame
}
