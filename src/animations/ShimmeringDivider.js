import AnimationPlayer from '../ui/AnimationPlayer.js'

export default class ShimmeringDivider extends AnimationPlayer {
  static frame0 = ['=-·-']
  static frame1 = ['-·-=']
  static frame2 = ['·-=-']
  static frames = [ShimmeringDivider.frame0, ShimmeringDivider.frame1, ShimmeringDivider.frame2]

  constructor() {
    super({
      id: 'ShimmeringDivider',
      width: ShimmeringDivider.frame0[0].length,
      height: 1,
      loop: 100,
      frameSpeed: 128,
      frames: ShimmeringDivider.frames,
      backfill: true
    })
  }
}
