import Animation from '../ui/Animation.js'

export class NoticeMeRight extends Animation {
  static frame0 = ['  ←']
  static frame1 = [' ← ']
  static frame2 = ['←  ']
  static frames = [NoticeMeRight.frame0, NoticeMeRight.frame1, NoticeMeRight.frame2]

  constructor() {
    super({
      id: 'NoticeMeAnimation',
      width: NoticeMeRight.frame0[0].length,
      height: 1,
      loop: 64,
      frameSpeed: 256,
      frames: NoticeMeRight.frames,
      backfill: true
    })
  }
}

export class NoticeMeLeft extends Animation {
  static frame0 = ['→  ']
  static frame1 = [' → ']
  static frame2 = ['  →']
  static frames = [NoticeMeLeft.frame0, NoticeMeLeft.frame1, NoticeMeLeft.frame2]

  constructor() {
    super({
      id: 'NoticeMeAnimation',
      width: NoticeMeLeft.frame0[0].length,
      height: 1,
      loop: 64,
      frameSpeed: 256,
      frames: NoticeMeLeft.frames,
      backfill: true
    })
  }
}
