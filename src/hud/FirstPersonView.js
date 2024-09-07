import Grid from '../ui/Grid.js'
import state from '../game/SharedState.js'
import AnimationPlayer from '../ui/AnimationPlayer.js'
import ScreenBrightness from '../game/ScreenBrightness.js'
import CatacombsBackground from '../animations/CatacombsBackground.js'

const verticalPositions = {
  far: { ceiling: 12, floor: 14 },
  mid: { ceiling: 11, floor: 15 },
  near: { ceiling: 9, floor: 18 },
  here: { ceiling: 6, floor: 25 },
  action: { ceiling: 2, floor: 27 }
}

const midDarkness = [['.    .', '  .  .', '.  .  ', ' .  . ', '.  .  ', ' .  . ', '  .   ', '.    .']]
const farDarkness = [['. ', ' .', '. ']]

const heroAnimationProps = {
  id: 'HeroAnimation',
  width: 26,
  height: 25,
  fill: '@',
  zIndex: 5,
  autoPlay: true
}

const hereProps = {
  id: 'HereViewableEntity',
  width: 26,
  height: 25,
  fill: '@',
  zIndex: 4,
  autoPlay: true
}

const nearbyProps = {
  id: 'NearViewableEntity',
  width: 26,
  height: 25,
  fill: '@',
  zIndex: 3,
  autoPlay: true
}

const midRangeProps = {
  id: 'MidViewableEntity',
  width: 26,
  height: 25,
  fill: '@',
  zIndex: 2,
  autoPlay: true
}

const farAwayProps = {
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

    state.subscribe({
      key: 'hero.viewpoint',
      callback: this.updateViewpoint.bind(this)
    })
    state.subscribe({
      key: 'hero.action',
      callback: this.showHeroAnimation.bind(this)
    })

    if (state.exists('hero.viewpoint')) {
      this.updateViewpoint(state.get('hero.viewpoint'))
    }
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
      const animationProps = { ...hereProps, ...viewpoint.here }
      const hereAnimation = new AnimationPlayer(animationProps)
      let y = 0
      if (viewpoint.here.position) {
        const frameHeight = viewpoint.here.frames[0].length
        const yPosition = verticalPositions.here[viewpoint.here.position]
        y = yPosition - frameHeight + 1
      }
      this.add({ x: 1, y, grid: hereAnimation })
    }
    const inventory = state.get('hero.inventory')
    const torch = inventory.find((item) => item.getType() === 'torch')
    if (viewpoint.nearby) {
      const animationProps = { ...nearbyProps, ...viewpoint.nearby }
      const nearAnimation = new AnimationPlayer(animationProps)
      const frameHeight = viewpoint.nearby.frames[0].length
      const yPosition = verticalPositions.near[viewpoint.nearby.position]
      const y = yPosition - frameHeight + 1
      this.add({ x: 1, y, grid: nearAnimation })
    }

    if (!torch) {
      const midRangeAnimation = new AnimationPlayer({
        id: 'MidViewableEntity',
        width: 26,
        height: 27,
        fill: '@',
        zIndex: 2,
        frames: midDarkness,
        color: ScreenBrightness.Dark,
        autoPlay: true
      })
      const frameHeight = midDarkness[0].length
      const yPosition = verticalPositions.mid.floor + 1
      const y = yPosition - frameHeight + 1
      this.add({ x: 1, y, grid: midRangeAnimation })
    } else if (viewpoint.midRange) {
      const animationProps = { ...midRangeProps, ...viewpoint.midRange }
      const midRangeAnimation = new AnimationPlayer(animationProps)
      const frameHeight = viewpoint.midRange.frames[0].length
      const yPosition = verticalPositions.mid[viewpoint.midRange.position]
      const y = yPosition - frameHeight + 1
      this.add({ x: 1, y, grid: midRangeAnimation })
    } else if (viewpoint.farAway) {
      const animationProps = { ...farAwayProps, ...viewpoint.farAway }
      const farAwayAnimation = new AnimationPlayer(animationProps)
      const frameHeight = viewpoint.farAway.frames[0].length
      const yPosition = verticalPositions.far[viewpoint.farAway.position]
      const y = yPosition - frameHeight + 1
      this.add({ x: 1, y, grid: farAwayAnimation })
    } else {
      const farAwayAnimation = new AnimationPlayer({
        id: 'FarViewableEntity',
        width: 26,
        height: 27,
        fill: '@',
        zIndex: 1,
        frames: farDarkness,
        color: ScreenBrightness.Dark,
        autoPlay: true
      })
      const frameHeight = farDarkness[0].length
      const yPosition = verticalPositions.far.floor
      const y = yPosition - frameHeight + 1
      this.add({ x: 1, y, grid: farAwayAnimation })
    }
  }

  showHeroAnimation(heroAction) {
    this.removeGrid('HeroAnimation')
    const animationProps = { ...heroAnimationProps, ...heroAction }
    const action = new AnimationPlayer(animationProps)
    const frameHeight = animationProps.frames[0].length
    const yPosition = verticalPositions.action[animationProps.position]
    const y = yPosition - frameHeight + 1
    this.add({ x: 1, y, grid: action })
  }
}
