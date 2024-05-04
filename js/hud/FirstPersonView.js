import Grid from '../core/Grid.js'
import memory from '../core/Memory.js'
import Animation from '../core/Animation.js'
import CatacombsBackground from '../animations/CatacombsBackground.js'

const verticalPositions = {
  far: { overhead: 12, floor: 14 },
  mid: { overhead: 11, floor: 15 },
  near: { overhead: 9, floor: 18 },
  here: { overhead: 5, floor: 25 }
}

const darkness = [
  [
    '      ',
    '      ',
    '      ',
    '      ',
    '      ',
    '      '
  ]
]

export default class FirstPersonView extends Grid {
  constructor () {
    super({ id: 'FirstPersonView', width: 28, height: 29, fill: ' ', border: true })
    this.add({ x: 2, y: 0, string: ' View ', force: true })
    this.updateViewpoint(memory.get('hero.viewpoint'))

    memory.subscribe({ key: 'hero.viewpoint', callback: this.updateViewpoint.bind(this) })
  }

  updateViewpoint (viewpoint) {
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
      const hereAnimation = new Animation({
        id: 'HereViewableEntity',
        width: 26,
        height: 25,
        fill: '@',
        zIndex: 4,
        frames: viewpoint.here.frames
      })
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
    const torch = inventory.find(item => item.id === 'item.torch')
    if (viewpoint.near) {
      const nearAnimation = new Animation({
        id: 'NearViewableEntity',
        width: 26,
        height: 25,
        fill: '@',
        zIndex: 3,
        frames: viewpoint.near.frames
      })
      const frameHeight = viewpoint.near.frames[0].length
      const yPosition = verticalPositions.near[viewpoint.near.position]
      const y = yPosition - frameHeight + 1
      this.add({ x: 1, y, grid: nearAnimation })
    }

    if (!torch) {
      const midAnimation = new Animation({
        id: 'MidViewableEntity',
        width: 26,
        height: 25,
        fill: '@',
        zIndex: 2,
        frames: darkness
      })
      const frameHeight = darkness[0].length
      const yPosition = verticalPositions.mid.floor
      const y = yPosition - frameHeight + 1
      this.add({ x: 1, y, grid: midAnimation })
    } else if (viewpoint.mid) {
      const midAnimation = new Animation({
        id: 'MidViewableEntity',
        width: 26,
        height: 25,
        fill: '@',
        zIndex: 2,
        frames: viewpoint.mid.frames
      })
      const frameHeight = viewpoint.mid.frames[0].length
      const yPosition = verticalPositions.mid[viewpoint.mid.position]
      const y = yPosition - frameHeight + 1
      this.add({ x: 1, y, grid: midAnimation })
    } else if (viewpoint.far) {
      const farAnimation = new Animation({
        id: 'FarViewableEntity',
        width: 26,
        height: 25,
        fill: '@',
        zIndex: 1,
        frames: viewpoint.far.frames
      })
      const frameHeight = viewpoint.far.frames[0].length
      const yPosition = verticalPositions.far[viewpoint.far.position]
      const y = yPosition - frameHeight + 1
      this.add({ x: 1, y, grid: farAnimation })
    }
  }
}
