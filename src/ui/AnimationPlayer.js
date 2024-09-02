import Grid from './Grid.js'
import state from '../game/SharedState.js'

// Class to hold a set of images that make up a moving sprite.  This component can't be changed after
// being created.  If you need to get rid of it, just remove it from the canvas.
export default class AnimationPlayer extends Grid {
  // When creating an animation, it is assumed to be started.
  constructor(props) {
    // generate an id if it doesn't exist
    if (!props.id) props.id = `Animation_${Math.floor(Math.random() * 1000000)}`

    super(props)

    const { frames, loop, frameSpeed, backfill, color, sound, autoPlay, message, parent } = props
    this.color = color || undefined
    this.sound = sound || undefined
    this.message = message || undefined
    this.frames = frames || [] // frames for this animation.
    this.loop = loop || 0 // number of times to loop the animation.
    this.frameSpeed = frameSpeed || 100 // play speed, in milliseconds.
    this.backfill = backfill || false
    this.parent = parent || undefined // if this animation has a parent we will delete it when it finishes it's animation.
    if (autoPlay) this.play()
  }

  async play() {
    if (this.sound) new Audio(this.sound).play()
    if (this.message) state.set({ key: 'message.center', value: this.message })
    while (this.loop > -1) {
      for (let i = 0; i < this.frames.length; i++) {
        const frame = this.frames[i]
        this.add({
          x: 'center',
          y: 0,
          block: frame,
          backfill: this.backfill,
          color: this.color
        })
        state.set({ key: 'request.screen.draw', value: true })
        // Pause the functioning thread
        if (this.frameSpeed > 0) await new Promise((resolve) => setTimeout(resolve, this.frameSpeed))
      }
      this.loop--
    }
  }

  async stop() {
    this.loop = -1
    if (this.parent) this.parent.removeGrid(this.id)
  }
}
