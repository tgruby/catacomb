import AnimationPlayer from '../ui/AnimationPlayer.js'

export default class TimeOfDay extends AnimationPlayer {
  static frame0 = [
    '.=≡=.', 
    '=≡≡≡=', 
    '≡≡≡≡≡', 
    '=≡≡≡=', 
    'ˋ=≡=ˊ']
    static frame1 = [
      '  |  ', 
      '\\.-./', 
      '-⎸ ⎹-', 
      '/ˋ-ˊ\\',
    '  |  ',]
  static frames = [TimeOfDay.frame1]

  constructor() {
    super({
      id: 'TimeOfDay',
      width: TimeOfDay.frame1[0].length,
      height: TimeOfDay.frame1.length,
      loop: 100,
      frameSpeed: 5000,
      frames: TimeOfDay.frames,
      backfill: true,
      autoPlay: true
    })
  }
}
