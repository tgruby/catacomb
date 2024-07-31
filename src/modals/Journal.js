import memory from "../core/Memory.js"
import Modal from "../core/Modal.js"

const dogEaredCorner = [
  "       ⏐⏐",
  "       ⏐⏐",
  "      ⏐⏐⏐",
  "      ⏐⏐⏐",
  "     ╭⎯⎯╯",
  "     ⏐  ╱",
  "   ⎯⎯⏐ ╱ ",
  "⎯⎯⎯⎯⎯⏐╱  ",
  "⎯⎯⎯⎯⎯╯@@@"
]

const celticUpperLeftBorder = [
  "╭⎯╮╭⎯⎯⎯⎯⎯",
  "⏐╭⎯⎯⎯⎯",
  "╰⎯⏐╯",
  "╭⏐╯",
  "⏐⏐",
  "⏐⏐",
  "⏐",
  "⏐"
]

const celticUpperRightBorder = [
  "⎯⎯⎯⎯⎯╮╭⎯╮",
  "  ⎯⎯⎯⎯⎯╮⏐",
  "     ╰⏐⎯╯",
  "      ╰⏐╮",
  "       ⏐⏐",
  "       ⏐⏐",
  "        ⏐",
  "        ⏐"
]

const celticLowerLeftBorder = [
  "⏐",
  "⏐",
  "⏐⏐",
  "⏐⏐",
  "╰⏐╮",
  "╭⎯⏐╮",
  "⏐╰⎯⎯⎯⎯⎯",
  "╰⎯╯╰⎯⎯⎯⎯⎯"
]

// Border Ideas
// `¯\`·.¸¸.·´¯\`·.¸¸.·´¯ border ideas ¯\`·.¸¸.·´¯\`·.¸¸.·´¯`
// `-=≡≣ ${stuff} ≣≡=-` })

export default class Jornal extends Modal {
  constructor(props) {
    super({
      id: "JournalModal",
      width: 40,
      height: 39,
      border: true,
      parent: props.parent
    })
    this.add({ x: "center", y: 2, string: "Journal" })
    this.add({ x: "center", y: 36, string: "- 1 -" })
    this.add({ x: 1, y: 1, block: celticUpperLeftBorder })
    this.add({ x: 30, y: 1, block: celticUpperRightBorder })
    this.add({ x: 1, y: 30, block: celticLowerLeftBorder })
    this.add({ x: 31, y: 30, block: dogEaredCorner, force: true })
    this.update()
  }

  keyPressed(e) {
    if (e.key === "a" || e.key === "ArrowLeft") {
      // page left
    } else if (e.key === "d" || e.key === "ArrowRight") {
      // page right
    } else if (e.key === "j" || e.key === "Escape") {
      this.close()
      memory.set({ key: "request.screen.draw", value: true })
    } else {
      console.log("Journal keyPressed:", e.key)
    }
  }

  update() {
    const entries = memory.get("hero.journal")
    let previousEntry = null
    let y = 6
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i]
      if (!previousEntry) {
        this.add({ x: 6, y, string: `${this._getFormattedDate(entry.date)}` })
        this.add({ x: 6, y: y + 1, string: "⎻".repeat(28) })
        y = y + 2
      } else {
        // get dates from the previous and current entries
        // if they match, do not display the date.  Otherwise, display the date
        if (previousEntry.date !== entry.date) {
          this.add({ x: 6, y: y + 1, string: `${entry.date}` })
          this.add({ x: 6, y: y + 2, string: "⎻".repeat(28) })
          y = y + 3
        }
      }
      const block = this._wrapText(`${entry.text}`, 32)
      this.add({ x: 6, y, string: "◊" })
      this.add({ x: 7, y, block })
      y += block.length + 1
      previousEntry = entry
    }
  }

  // format the date as MMMM DD (e.g. November 25th)
  _getFormattedDate(time) {
    const day = time.getDate()
    const month = time.getMonth() + 1
    const monthName = this._getMonthName(month)
    // add the ordinal suffix to the day
    const lastDigit = day % 10
    let suffix = "th"
    if (lastDigit === 1) suffix = "st"
    if (lastDigit === 2) suffix = "nd"
    if (lastDigit === 3) suffix = "rd"
    return `${monthName} ${day}${suffix}`
  }

  _getMonthName(month) {
    switch (month) {
      case 1:
        return "January"
      case 2:
        return "February"
      case 3:
        return "March"
      case 4:
        return "April"
      case 5:
        return "May"
      case 6:
        return "June"
      case 7:
        return "July"
      case 8:
        return "August"
      case 9:
        return "September"
      case 10:
        return "October"
      case 11:
        return "November"
      case 12:
        return "December"
    }
  }

  _wrapText(text, width) {
    const words = text.split(" ")
    const lines = []
    let line = ""
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      if (line.length + word.length + 1 < width) {
        line += `${word} `
      } else {
        lines.push(line)
        line = `${word} `
      }
    }
    lines.push(line)
    return lines
  }
}
