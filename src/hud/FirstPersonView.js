import Grid from '../core/Grid.js'
import memory from '../core/Memory.js'
import Animation from '../core/Animation.js'
import CatacombsBackground from '../animations/CatacombsBackground.js'

const verticalPositions = {
  far: { ceiling: 12, floor: 14 },
  mid: { ceiling: 11, floor: 15 },
  near: { ceiling: 9, floor: 18 },
  here: { ceiling: 5, floor: 25 }
}

const darkness = [
  [
    '.    .', 
    '  .  .', 
    '.  .  ', 
    ' .  . ', 
    '.  .  ', 
    ' .  . ', 
    '  .   ', 
    '.    .'
  ]
]

const hereGameObject = {
  id: 'HereViewableEntity',
  width: 26,
  height: 25,
  fill: '@',
  zIndex: 4,
  autoPlay: true
}

const nearbyGameObject = {
  id: 'NearViewableEntity',
  width: 26,
  height: 25,
  fill: '@',
  zIndex: 3,
  autoPlay: true
}

const midRangeGameObject = {
  id: 'MidViewableEntity',
  width: 26,
  height: 25,
  fill: '@',
  zIndex: 2,
  autoPlay: true
}

const farAwayGameObject = {
  id: 'FarViewableEntity',
  width: 26,
  height: 25,
  fill: '@',
  zIndex: 1,
  autoPlay: true
}

export default class FirstPersonView extends Grid {
  constructor() {
    super({
      id: 'FirstPersonView',
      width: 28,
      height: 29,
      fill: ' ',
      border: true
    })
    this.add({ x: 2, y: 0, string: ' View ', force: true })

    memory.subscribe({
      key: 'hero.viewpoint',
      callback: this.updateViewpoint.bind(this)
    })
  }

  updateViewpoint(viewpoint) {
    this.clear()
    viewpoint.background.sort()

    // build background image
    let blockX = 1
    for (let i = 0; i < viewpoint.background.length; i++) {
      const block = CatacombsBackground.sprites[viewpoint.background[i]]
      this.add({ x: blockX, y: 1, block })
      blockX += block[0].length
    }

    // add foreground images
    this.removeGrid('FarViewableEntity')
    this.removeGrid('MidViewableEntity')
    this.removeGrid('NearViewableEntity')
    this.removeGrid('HereViewableEntity')
    if (viewpoint.here) {
      const animationProps = { ...hereGameObject, ...viewpoint.here }
      const hereAnimation = new Animation(animationProps)
      let y = 0
      if (viewpoint.here.position) {
        const frameHeight = viewpoint.here.frames[0].length
        const yPosition = verticalPositions.here[viewpoint.here.position]
        y = yPosition - frameHeight + 1
      } else {
        console.log('no position specified: ', viewpoint.here)
      }
      this.add({ x: 1, y, grid: hereAnimation })
    }
    const inventory = memory.get('hero.inventory')
    const torch = inventory.find((item) => item.getType() === 'torch')
    if (viewpoint.nearby) {
      const animationProps = { ...nearbyGameObject, ...viewpoint.nearby }
      const nearAnimation = new Animation(animationProps)
      const frameHeight = viewpoint.nearby.frames[0].length
      const yPosition = verticalPositions.near[viewpoint.nearby.position]
      const y = yPosition - frameHeight + 1
      this.add({ x: 1, y, grid: nearAnimation })
    }

    if (!torch) {
      const midRangeAnimation = new Animation({
        id: 'MidViewableEntity',
        width: 26,
        height: 27,
        fill: '@',
        zIndex: 2,
        frames: darkness,
        autoPlay: true
      })
      const frameHeight = darkness[0].length
      const yPosition = verticalPositions.mid.floor + 1
      const y = yPosition - frameHeight + 1
      this.add({ x: 1, y, grid: midRangeAnimation })
    } else if (viewpoint.midRange) {
      const animationProps = { ...midRangeGameObject, ...viewpoint.midRange }
      const midRangeAnimation = new Animation(animationProps)
      const frameHeight = viewpoint.midRange.frames[0].length
      const yPosition = verticalPositions.mid[viewpoint.midRange.position]
      const y = yPosition - frameHeight + 1
      this.add({ x: 1, y, grid: midRangeAnimation })
    } else if (viewpoint.farAway) {
      const animationProps = { ...farAwayGameObject, ...viewpoint.farAway }
      const farAwayAnimation = new Animation(animationProps)
      const frameHeight = viewpoint.farAway.frames[0].length
      const yPosition = verticalPositions.far[viewpoint.farAway.position]
      const y = yPosition - frameHeight + 1
      this.add({ x: 1, y, grid: farAwayAnimation })
    }
  }
}
