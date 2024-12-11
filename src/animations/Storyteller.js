import AnimationPlayer from '../ui/AnimationPlayer.js'

export default class StoryTeller extends AnimationPlayer {
  constructor(props = {}) {
    const { width, height, story } = props

    props.border = false
    props.frames = frames
    props.backfill = true

    super(props)
  }
}
