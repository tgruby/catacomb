import AnimationPlayer from '../ui/AnimationPlayer.js'

export default class CatacombTitleAnimation extends AnimationPlayer {
  static frame0 = `
    .#####  .####.  ####### .######. .####### .######. ##########. #######.
    ###### .######. ####### ######## ######## ######## ########### ########
    ║#║    ##║  ###   ##║   ##║  ### ║##      ##║  ### ##║ ##║ ##║ ##║  ###
    ║#║    ║#!  #║#   ║#║   ║#║  #║# ║#║      ║#║  #║# ║#║ ║#║ ║#║ ║#   #║#
    ║#║    #║#║#║#║   #║║   #║#║#║#║ ║#║      #║#  ║#║ #║║ '║# #║# #║#║#║# 
    ║║║    ║║║#║║║║   ║║║   ║║║#║║║║ ║║║      ║#║  ║║║ ║#║   ' ║#║ ║║║#║║║║
    !║║    ║║!  ║║║   ║║!   ║║!  ║║║ !║║      ║║!  ║║║ ║║!     ║║! ║║!  ║║║
    !║!.   !║!  ║!║   !║!   !║!  ║!║ !║!      !║!  ║!║ !║!     !║! !║!  ║!║
    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,
     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! 
                                                                           
            |                                                              
                                                                           
                       |                                                   
                                \\./                                     
    ───────────────────────────────────────────────────────────────────────
    `

  static frame1 = `
    .#####  .####.  ####### .######. .####### .######. ##########. #######.
    ###### .######. ####### ######## ######## ######## ########### ########
    ║#║    ##║  ###   ##║   ##║  ### ║##      ##║  ### ##║ ##║ ##║ ##║  ###
    ║#║    ║#!  #║#   ║#║   ║#║  #║# ║#║      ║#║  #║# ║#║ ║#║ ║#║ ║#   #║#
    ║#║    #║#║#║#║   #║║   #║#║#║#║ ║#║      #║#  ║#║ #║║ '║# #║# #║#║#║# 
    ║║║    ║║║#║║║║   ║║║   ║║║#║║║║ ║║║      ║#║  ║║║ ║#║   ' ║#║ ║║║#║║║║
    !║║    ║║!  ║║║   ║║!   ║║!  ║║║ !║║      ║║!  ║║║ ║║!     ║║! ║║!  ║║║
    !║!.   !║!  ║!║   !║!   !║!  ║!║ !║!      !║!  ║!║ !║!     !║! !║!  ║!║
    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,
     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! 
                                                        |                  
                                                                           
            |                                                              
                                                                           
                       |                                                   
    ───────────────────────────────────────────────────────────────────────
    `

  static frame2 = `
    .#####  .####.  ####### .######. .####### .######. ##########. #######.
    ###### .######. ####### ######## ######## ######## ########### ########
    ║#║    ##║  ###   ##║   ##║  ### ║##      ##║  ### ##║ ##║ ##║ ##║  ###
    ║#║    ║#!  #║#   ║#║   ║#║  #║# ║#║      ║#║  #║# ║#║ ║#║ ║#║ ║#   #║#
    ║#║    #║#║#║#║   #║║   #║#║#║#║ ║#║      #║#  ║#║ #║║ '║# #║# #║#║#║# 
    ║║║    ║║║#║║║║   ║║║   ║║║#║║║║ ║║║      ║#║  ║║║ ║#║   ' ║#║ ║║║#║║║║
    !║║    ║║!  ║║║   ║║!   ║║!  ║║║ !║║      ║║!  ║║║ ║║!     ║║! ║║!  ║║║
    !║!.   !║!  ║!║   !║!   !║!  ║!║ !║!      !║!  ║!║ !║!     !║! !║!  ║!║
    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,
     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! 
                                                                                                                                    
                                                        |                  
                                                                           
            |                                                              
                     \\./                                                 
    ───────────────────────────────────────────────────────────────────────
    `

  static frame3 = `
    .#####  .####.  ####### .######. .####### .######. ##########. #######.
    ###### .######. ####### ######## ######## ######## ########### ########
    ║#║    ##║  ###   ##║   ##║  ### ║##      ##║  ### ##║ ##║ ##║ ##║  ###
    ║#║    ║#!  #║#   ║#║   ║#║  #║# ║#║      ║#║  #║# ║#║ ║#║ ║#║ ║#   #║#
    ║#║    #║#║#║#║   #║║   #║#║#║#║ ║#║      #║#  ║#║ #║║ '║# #║# #║#║#║# 
    ║║║    ║║║#║║║║   ║║║   ║║║#║║║║ ║║║      ║#║  ║║║ ║#║   ' ║#║ ║║║#║║║║
    !║║    ║║!  ║║║   ║║!   ║║!  ║║║ !║║      ║║!  ║║║ ║║!     ║║! ║║!  ║║║
    !║!.   !║!  ║!║   !║!   !║!  ║!║ !║!      !║!  ║!║ !║!     !║! !║!  ║!║
    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,
     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! 
                                   |                                       
                                                                           
                                                        |                  
                                                                           
         \\./                                                            
    ───────────────────────────────────────────────────────────────────────
    `

  static frame4 = `
    .#####  .####.  ####### .######. .####### .######. ##########. #######.
    ###### .######. ####### ######## ######## ######## ########### ########
    ║#║    ##║  ###   ##║   ##║  ### ║##      ##║  ### ##║ ##║ ##║ ##║  ###
    ║#║    ║#!  #║#   ║#║   ║#║  #║# ║#║      ║#║  #║# ║#║ ║#║ ║#║ ║#   #║#
    ║#║    #║#║#║#║   #║║   #║#║#║#║ ║#║      #║#  ║#║ #║║ '║# #║# #║#║#║# 
    ║║║    ║║║#║║║║   ║║║   ║║║#║║║║ ║║║      ║#║  ║║║ ║#║   ' ║#║ ║║║#║║║║
    !║║    ║║!  ║║║   ║║!   ║║!  ║║║ !║║      ║║!  ║║║ ║║!     ║║! ║║!  ║║║
    !║!.   !║!  ║!║   !║!   !║!  ║!║ !║!      !║!  ║!║ !║!     !║! !║!  ║!║
    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,
     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! 
                                                                           
                                   |                                       
                                                                           
                                                        |                  
                                                                           
    ───────────────────────────────────────────────────────────────────────
  `

  static frame5 = `
    .#####  .####.  ####### .######. .####### .######. ##########. #######.
    ###### .######. ####### ######## ######## ######## ########### ########
    ║#║    ##║  ###   ##║   ##║  ### ║##      ##║  ### ##║ ##║ ##║ ##║  ###
    ║#║    ║#!  #║#   ║#║   ║#║  #║# ║#║      ║#║  #║# ║#║ ║#║ ║#║ ║#   #║#
    ║#║    #║#║#║#║   #║║   #║#║#║#║ ║#║      #║#  ║#║ #║║ '║# #║# #║#║#║# 
    ║║║    ║║║#║║║║   ║║║   ║║║#║║║║ ║║║      ║#║  ║║║ ║#║   ' ║#║ ║║║#║║║║
    !║║    ║║!  ║║║   ║║!   ║║!  ║║║ !║║      ║║!  ║║║ ║║!     ║║! ║║!  ║║║
    !║!.   !║!  ║!║   !║!   !║!  ║!║ !║!      !║!  ║!║ !║!     !║! !║!  ║!║
    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,
     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! 
                       |                                                   
                                                                           
                                   |                                       
                                                                           
                                                        |                  
    ───────────────────────────────────────────────────────────────────────
  `

  static frame6 = `
    .#####  .####.  ####### .######. .####### .######. ##########. #######.
    ###### .######. ####### ######## ######## ######## ########### ########
    ║#║    ##║  ###   ##║   ##║  ### ║##      ##║  ### ##║ ##║ ##║ ##║  ###
    ║#║    ║#!  #║#   ║#║   ║#║  #║# ║#║      ║#║  #║# ║#║ ║#║ ║#║ ║#   #║#
    ║#║    #║#║#║#║   #║║   #║#║#║#║ ║#║      #║#  ║#║ #║║ '║# #║# #║#║#║# 
    ║║║    ║║║#║║║║   ║║║   ║║║#║║║║ ║║║      ║#║  ║║║ ║#║   ' ║#║ ║║║#║║║║
    !║║    ║║!  ║║║   ║║!   ║║!  ║║║ !║║      ║║!  ║║║ ║║!     ║║! ║║!  ║║║
    !║!.   !║!  ║!║   !║!   !║!  ║!║ !║!      !║!  ║!║ !║!     !║! !║!  ║!║
    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,
     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! 
                                                                           
                       |                                                   
                                                                           
                                   |                                       
                                                     \\./                
    ───────────────────────────────────────────────────────────────────────
  `
  static frame7 = `
    .#####  .####.  ####### .######. .####### .######. ##########. #######.
    ###### .######. ####### ######## ######## ######## ########### ########
    ║#║    ##║  ###   ##║   ##║  ### ║##      ##║  ### ##║ ##║ ##║ ##║  ###
    ║#║    ║#!  #║#   ║#║   ║#║  #║# ║#║      ║#║  #║# ║#║ ║#║ ║#║ ║#   #║#
    ║#║    #║#║#║#║   #║║   #║#║#║#║ ║#║      #║#  ║#║ #║║ '║# #║# #║#║#║# 
    ║║║    ║║║#║║║║   ║║║   ║║║#║║║║ ║║║      ║#║  ║║║ ║#║   ' ║#║ ║║║#║║║║
    !║║    ║║!  ║║║   ║║!   ║║!  ║║║ !║║      ║║!  ║║║ ║║!     ║║! ║║!  ║║║
    !║!.   !║!  ║!║   !║!   !║!  ║!║ !║!      !║!  ║!║ !║!     !║! !║!  ║!║
    '!!!!! !!   !!!   '!!   !!'  !!! '!!!!!!! !!!!!!!, !!!     !!' '!! !!!,
     !!'!'  !   !'!    !     !   !':  !!'!!'! '!'!'!'  '!'     !'  !!'!'!! 
            |                                                              
                                                                           
                       |                                                   
                                                                           
                                   |                                       
    ───────────────────────────────────────────────────────────────────────
  `

  static frames = [
    CatacombTitleAnimation.frame0.split('\n'),
    CatacombTitleAnimation.frame1.split('\n'),
    CatacombTitleAnimation.frame2.split('\n'),
    CatacombTitleAnimation.frame3.split('\n'),
    CatacombTitleAnimation.frame4.split('\n'),
    CatacombTitleAnimation.frame5.split('\n'),
    CatacombTitleAnimation.frame6.split('\n'),
    CatacombTitleAnimation.frame7.split('\n')
  ]

  constructor() {
    const props = {
      id: 'CatacombTitleAnimation',
      width: 78,
      height: 20,
      loop: 100,
      frameSpeed: 164,
      frames: CatacombTitleAnimation.frames,
      backfill: true,
      autoPlay: true
    }
    super(props)
  }
}
