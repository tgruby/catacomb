import Animation from '../core/Animation.js'

export default class FireCracker extends Animation {
  static frame0 = [
    '@@@@@@@',
    '@@@@@@@',
    '@@@@@@@',
    '@@@o@@@',
    '@@@@@@@',
    '@@@@@@@',
    '@@@@@@@'
  ]

  static frame1 = [
    '@@@@@@@',
    '@@@@@@@',
    '@@@@@@@',
    '@@@*@@@',
    '@@@@@@@',
    '@@@@@@@',
    '@@@@@@@'
  ]

  static frame2 = [
    '@@@@@@@',
    '@@@@@@@',
    '@@╲|╱@@',
    '@@-@-@@',
    '@@╱|╲@@',
    '@@@@@@@',
    '@@@@@@@'
  ]

  static frame3 = [
    '@@@@@@@',
    '@╲@|@╱@',
    '@@@@@@@',
    '@-@@@-@',
    '@@@@@@@',
    '@╱@|@╲@',
    '@@@@@@@'
  ]

  static frame4 = [
    "'@@@@@'",
    '@@@@@@@',
    '@@@@@@@',
    '.@@@@@.',
    '@@@@@@@',
    '@@@@@@@',
    "'@@@@@'"
  ]

  static frame5 = [
    '.@@@@@.',
    '@@@@@@@',
    '@@@@@@@',
    '@@@@@@@',
    "'@@@@@'",
    '@@@@@@@',
    '.@@@@@.'
  ]

  static frame6 = [
    '@@@@@@@',
    "'@@@@@'",
    '@@@@@@@',
    '@@@@@@@',
    '.@@@@@.',
    '@@@@@@@',
    '@@@@@@@'
  ]

  static frame7 = [
    '@@@@@@@',
    '@@@@@@@',
    '@@@@@@@',
    '@@@@@@@',
    '@@@@@@@',
    '@@@@@@@',
    '@@@@@@@'
  ]

  // create different colors for each frame
  static frames = [
    FireCracker.frame0,
    FireCracker.frame1,
    FireCracker.frame2,
    FireCracker.frame3,
    FireCracker.frame4,
    FireCracker.frame5,
    FireCracker.frame6,
    FireCracker.frame7
  ]

  static colors = [
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#FF00FF',
    '#00FFFF',
    '#FFFFFF'
  ]

  constructor (props = {}) {
    const { colors, parent } = props
    // generate random id
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    let color
    if (colors) color = colors[Math.floor(Math.random() * colors.length)]

    super({
      id: 'FireCracker-' + id,
      width: FireCracker.frame0[0].length,
      height: FireCracker.frame0.length,
      loop: 0,
      frameSpeed: 128,
      frames: FireCracker.frames,
      color,
      sound: 'sounds/firework.mp3',
      backfill: true,
      parent
    })
  }
}
