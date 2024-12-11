import Grid from '../ui/Grid.js'

const content = `
                    Key Bindings                        
                 __________________                     
                                                     
                                                     
                                                     
      Move Forward / Up                              
                                                     
              |                                      
              |  Interact                            
╭─────╮       |                                      
│ Esc │       |     |                                
╰─────╯       ↓     ↓     Fight                      
   ↑  ╭───╮ ╭───╮ ╭───╮                              
   |  │ Q │ │ W │ │ E │     |                        
   |  ╰───╯ ╰───╯ ╰───╯     ↓                        
   |    ╭───╮ ╭───╮ ╭───╮ ╭───╮         ╭──────────╮ 
        │ A │ │ S │ │ D │ │ F │  o o o  │ Return ⏎ │ 
 Menus  ╰───╯ ╰───╯ ╰───╯ ╰───╯         ╰──────────╯ 
          ↑     ↑     ↑                       ↑      
          |     |     |                       |      
                |                                    
         Left   |   Right                   Select   
                |                                    
                                                     
              Down                                   `

export default class Help extends Grid {
  constructor(props) {
    super(props)
    this.add({ x: 'center', y: 0, block: content.split('\n') })
  }

  keyPressed(e) {
    console.log('Help Panel: keyPressed:', e.key)
  }
}
