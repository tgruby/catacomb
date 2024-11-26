# Catacomb

![alt text](/images/logo.png 'Logo')

[Play the Game](https://tgruby.github.io/catacomb/)

> [Game Development Status](#development-status)

An ASCII "work of art" :). I enjoy games, and growing up in the 80's I spent probably hundreds of hours playing [**Wizardry I**](<https://en.wikipedia.org/wiki/Wizardry:_Proving_Grounds_of_the_Mad_Overlord>) and [**The Bard's Tale**](<https://en.wikipedia.org/wiki/The_Bard%27s_Tale_(1985_video_game)>) on the Apple ][ computer. Recently, I had the idea of working on a throwback game: looking for opportunities to make it feel old, but incorporate newer patterns and ideas found in current games. I played with a few different ideas and decided to lean into an ASCII only UI (Wizardy cerca 1979), mainly green-screen (like my old Apple), roll-playing game. It seems to strike the right balance to feeling like an older game while allowing to leverage more modern sound and music, which I believes help be more engaging.

## Backstory

Catacomb is a single player dungeon crawler game. A determined soul searching for the lost tomb of Tahara, finds it by falling headlong into the underground. Unable to leave the way she came, she must search the catacombs for the tomb and an exit, armed with only lore of Tahara and survival skills. Along the way, creatures and traps will block our heroine, the mystery surrounding Tahara will unfold, and magic and evil will test her to her limits.

## Game Play

Catacomb is not like a traditional text-based game in the fact that you cannot type words or phrases to move around. Instead each keypress is an action. Based upon the screen/modal you are at different keys bind to different actions. Below is a set of tables to describe these bindings. Currently there is no way to change key bindings.

### Main Game Window

![alt text](/images/game-play.png 'Game Screen')

| Action           | Key Binding |
| ---------------- | :---------: |
| Move Forward     |     `W`     |
| Turn Left        |     `A`     |
| Turn Right       |     `D`     |
| Pick Up Item     |     `E`     |
| Open/Close Menus |     `Q`     |
| Meelee Attack    |     `F`     |

### Menus Window

![alt text](/images/menus.png 'Menus Screen')

| Action                                            | Key Binding  |
| ------------------------------------------------- | :----------: |
| Switch Menu Left                                  |     `A`      |
| Switch Menu Right                                 |     `D`      |
| Move Focus to Item Above                          |     `W`      |
| Move Focus to Item Below                          |     `S`      |
| Use Item (if item is usable)                      |   `Enter`    |
| Equip Item (if item is equipable)                 |   `Enter`    |
| Craft Item (if you have enough supplies to craft) |   `Enter`    |
| Close Inventory                                   | `Q` or `Esc` |

## [Development Status](#development-status)

![alt text](/images/out-of-order.png 'Status')

> Currently you can walk around the first level, pick up items, and eat mushrooms and apply bandages (from the Inventory menu).

## Thanks

Lots of people to thank here, as I build on top of other's work. Please ping me if you feel I missed someone.

- [KreativeKorp](https://www.kreativekorp.com) for their [Apple 2](https://www.kreativekorp.com/software/fonts/apple2/) fonts.
- [Lordol1](https://freesound.org/people/Lordol1/) for the [intro sequence theme music](https://freesound.org/people/Lordol1/sounds/677665/)
- [patorjk and contributors](https://github.com/patorjk/figlet.js?tab=readme-ov-file#contributors) of the [Figlet JS](https://github.com/patorjk/figlet.js) library.
