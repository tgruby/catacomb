import Animation from "../core/Animation.js"

export default class ShimmeringDivider extends Animation {
  static frame0 = ["=-·-=-·-=-·-=-·-=-·-=-·-="]
  static frame1 = ["-·-=-·-=-·-=-·-=-·-=-·-=-"]
  static frame2 = ["·-=-·-=-·-=-·-=-·-=-·-=-·"]
  static frames = [
    ShimmeringDivider.frame0,
    ShimmeringDivider.frame1,
    ShimmeringDivider.frame2
  ]

  constructor() {
    super({
      id: "ShimmeringDivider",
      width: ShimmeringDivider.frame0[0].length,
      height: 1,
      loop: 100,
      frameSpeed: 512,
      frames: ShimmeringDivider.frames,
      backfill: true
    })
  }
}
