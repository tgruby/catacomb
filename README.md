# Catacomb

![alt text](/catacomb-title.png "Title Screen")

[Play the Game](https://tgruby.github.io/catacomb/) 

```
 Status: Currently Out-of-Order...
```

An ASCII "work of art" :).  I enjoy games, and growing up in the 80's I spent probably hundreds of hours playing _Michael Cranford's_ **The Bard's Tale** on the Apple ][ computer.  Recently, I had the idea of working on a throwback game: looking for opportunities to make it feel old, but incorporate newer patterns and ideas in more current games.  I played with a few different ideas and decided to lean into an ASCII only UI, mainly green-screen, roll-playing game.  It seems to strik the right balance to feeling like an older game while allowing to leverage more modern sound and music, which I believes help be more engaging.

## Backstory

Catacomb is a single player dungeon crawler game. Set in the mid-70s, an anthropologist, searching for the lost tomb of Tahara, finds it by falling into a sink hole. Badly bleeding and unable to leave the way they came, they must search the catacombs for the tomb and an exit, armed with only lore of Tahara and survival skills. Along the way, creatures and traps will block our anthropologist, the mystery surrounding Tahara will unfold, and magic and evil will test our anthropologist to his or her limits.

## Game Play

Catacomb is not like a traditional text-based game in the fact that you cannot type words or phrases to move around.  Instead each keypress is an action.  Based upon the screen you are at different keys bind to different actions.  Below is a set of tables to describe these bindings.  Currently there is no way to change the bindings.

### Main Game Window

![alt text](/game-play.png "Game Screen")

| Action | Key Binding
| --- | :---:
| Move Forward | `W`
| Turn Left | `A`
| Turn Right | `D`
| Pick Up Item | `E`
| Open Inventory | `I`
| Meelee Attack | `F`
| Credits Window | `C`

### Inventory (Backpack) Window

![alt text](/inventory.png "Inventory Screen")

| Action | Key Binding
| --- | :---:
| Move Focus to Item Above | `W`
| Move Focus to Item Below | `S`
| Use Item (if item is usable) | `Enter`
| Equip Item (if item is equipable) | `Enter`
| Craft Item (if you have enough supplies to craft) | `Enter`
| Close Inventory | `I`
| Close Inventory | `Esc`


### Journal Window

![alt text](/journal.png "Journal Screen")

| Action | Key Binding
| --- | :---:
| Turn to Next Page | `D`
| Turn to Previous Page | `A`
| Close Journal | `J`
| Close Journal | `Esc`

## Development Status

![alt text](/out-of-order.png "Status")

> Currently the first level is "playable", but otherwise locks up when finishing it.
